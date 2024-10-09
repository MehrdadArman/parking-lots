// ** Components
import { useFetchParkingLots } from "@/hooks/useFetchParkingLots";
import ParkingLotCard from "./components/ParkingLotCard";
import { useSummaryViewLots } from "../summaryView/hooks/useLots";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SummaryViewT } from "@/typing/ParkingLots";

const ParkingLotsPage = () => {
  // Fetch parking lots from GraphQL API
  const { parkingLots, loading, error, fetchMoreParkingLots } =
    useFetchParkingLots(0, 5);

  // local state to keep track of the current index of the parking lot
  const [currentIndexLot, setCurrentIndexLot] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  //  custom hook to our lots slice
  const { handleUpdateSummaryViewList } = useSummaryViewLots();

  const handleOnSelectLot = (lot: SummaryViewT) => {
    handleUpdateSummaryViewList(lot);

    // Add the lot to the bad or good list
    setCurrentIndexLot((prev) => prev + 1);
    setOffset((prev) => prev + 1);

    //fetch more parking lots if we are at the end of the list
    if (currentIndexLot >= parkingLots.length - 1) {
      fetchMoreParkingLots(offset);
      setCurrentIndexLot(0);
    }
  };

  const renderSummaryViewLink = () => {
    return (
      <Link to="/summary-view" className="text-blue-600">
        <Button>Go to Summary View</Button>
      </Link>
    );
  };

  if (loading)
    return (
      <div className="justify-center flex flex-col h-screen items-center">
        <span>Loading...</span>
      </div>
    );

  if (error) {
    return (
      <div className="justify-center flex flex-col h-screen items-center">
        <span>Error...</span>
      </div>
    );
  }

  if (parkingLots !== null && parkingLots.length === 0)
    return (
      <div className="justify-center flex flex-col h-screen items-center">
        <div className="mb-5">{renderSummaryViewLink()}</div>
        <h1 className=" text-2xl">List is empty ☹️</h1>
      </div>
    );

  return (
    <div className="container">
      <div className="flex justify-center items-center mt-5 ">
        {renderSummaryViewLink()}
      </div>
      <div className="flex justify-center items-center mt-5">
        {parkingLots[currentIndexLot] && (
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ParkingLotCard
              lot={parkingLots[currentIndexLot]}
              handleOnSelectLot={handleOnSelectLot}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingLotsPage;
