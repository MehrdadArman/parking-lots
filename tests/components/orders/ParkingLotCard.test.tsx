import { render, screen, waitFor } from "@testing-library/react";
import { db } from "../../mocks/db";
import userEvent from "@testing-library/user-event";
import AllProviders from "../../AllProviders";
import { ToastContainer } from "react-toastify";
import ParkingLotCard from "../../../src/pages/parkingLots/components/ParkingLotCard";
import { ParkingLotsFragment } from "@/graphql/fragments/parkingLot";
import { FragmentOf } from "gql.tada";

describe("ParkingLotCard", () => {
  let lot: FragmentOf<typeof ParkingLotsFragment>;
  const handleOnSelectLot = vi.fn();

  const renderComponent = () => {
    render(
      <>
        <ParkingLotCard lot={lot} handleOnSelectLot={handleOnSelectLot} />
        <ToastContainer />
      </>,
      { wrapper: AllProviders }
    );
  };

  beforeAll(() => {
    lot = db.parkLots.create(); // Ensure this creates a valid lot
  });

  afterAll(() => {
    db.parkLots.delete({ where: { id: { equals: lot?.id } } });
  });

  it("should render a card with data", async () => {
    renderComponent();

    const elementName = await screen.findByText(lot?.name);
    const elementAddress = screen.getByText(`${lot?.address}`);

    expect(elementName).toBeInTheDocument();
    expect(elementAddress).toBeInTheDocument();
  });

  it("should add bad lot to summary view after click", async () => {
    renderComponent();

    const button = screen.getByText(/bad/i);
    const user = userEvent.setup();

    await user.click(button);

    await waitFor(async () => {
      expect(handleOnSelectLot).toHaveBeenCalled(); // Check if function was called
      expect(handleOnSelectLot).toHaveBeenCalledWith({
        ...lot,
        type: "bad",
      }); // Ensure it's called with "bad"

      const toast = await screen.findByRole("alert");
      console.log(toast);

      expect(toast).toBeInTheDocument();
      expect(toast).toHaveTextContent(/added to bad/i);
    });
  });

  it("should add good lot to summary view after click", async () => {
    renderComponent();

    const button = screen.getByText(/good/i);
    const user = userEvent.setup();

    await user.click(button);

    await waitFor(() => {
      expect(handleOnSelectLot).toHaveBeenCalled(); // Check if function was called
      expect(handleOnSelectLot).toHaveBeenCalledWith({
        ...lot,
        type: "good",
      }); // Ensure it's called with "good"
      expect(screen.getByText(/added to good/i)).toBeInTheDocument(); // Expect the toast to show
    });
  });
});
