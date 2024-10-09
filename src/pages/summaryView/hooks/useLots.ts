import { useSelector, useDispatch } from "react-redux";
// Adjust import path based on your structure
import { lotsActions, lotsSelector } from "@/redux/lots/slice";
import { toast } from "react-toastify";
import { SummaryViewT } from "@/typing/ParkingLots";

export const useSummaryViewLots = () => {
  const dispatch = useDispatch();

  // Select the current state for badLots and goodLots
  const { summaryViewList } = useSelector(lotsSelector);

  // Dispatch actions to add a bad or good lot
  const handleUpdateSummaryViewList = (lot: SummaryViewT) => {
    // Check if the lot already exists in the badLots list
    const isAlreadyExist = summaryViewList.some((item) => item.id === lot.id);
    if (isAlreadyExist) {
      toast.warning("Lot already exists in bad list");
      return;
    }
    dispatch(lotsActions.updateSummaryViewList(lot));

    lot.type === "good"
      ? toast.success("Lot added to good list")
      : toast.error("Lot added to bad list");
  };

  // Return the state and action creators for easy use in components
  return {
    summaryViewList,
    handleUpdateSummaryViewList,
  };
};
