import { render, screen } from "@testing-library/react";
import AllProviders from "../../AllProviders";
// import { server } from "../../mocks/server";
// import { delay, http } from "msw";
import { db } from "../../mocks/db";

import { faker } from "@faker-js/faker";

import { SummaryViewT } from "@/typing/ParkingLots";
import SummaryViewTable from "@/pages/summaryView/components/SummaryViewTable";
import { primaryKey } from "@mswjs/data";

describe("Summary View Table", () => {
  let summaryViewList: SummaryViewT[] = [];

  beforeAll(() => {
    [1, 2].forEach((_) => {
      const temp: SummaryViewT = {
        id: primaryKey(faker.string.uuid).getPrimaryKeyValue(), // Generates a unique identifier
        name: faker.location.city(), // Generates a random city name
        address: faker.location.streetAddress(), // Generates a random street address
        image: faker.image.url(), // Generates a random image URL
        status: "active", // Generates a random status string
        type: "bad",
      };
      summaryViewList.push(temp);
    });
  });

  afterAll(() => {
    const summeryIds = summaryViewList.map((o) => o.id);
    db.summaryView.deleteMany({
      where: { id: { in: summeryIds } },
    });
  });

  it("should render a table with Summary View Table data", async () => {
    // server.use(
    //   http.get("/graphql", async (req, res, ctx) => {
    //     await delay(); // Simulate network delay
    //     return res(ctx.data({ summaryViewList }));
    //   })
    // );
    render(<SummaryViewTable data={summaryViewList} />, {
      wrapper: AllProviders,
    });

    const elementHeader = await screen.findByRole("heading", {
      name: /summary/i,
    });

    expect(elementHeader).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(3);
  });

  it("should render no result text if summary views are empty", async () => {
    render(<SummaryViewTable data={[]} />, { wrapper: AllProviders });

    const elementHeader = await screen.findByRole("heading", {
      name: /summary/i,
    });
    const noResultText = screen.getByText(/no results/i);

    expect(elementHeader).toBeInTheDocument();
    expect(noResultText).toBeInTheDocument();
  });
});
