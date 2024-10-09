import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SummaryViewT } from "@/typing/ParkingLots";

export type LotsStateT = {
  summaryViewList: SummaryViewT[];
};

const initialState: LotsStateT = {
  summaryViewList: [],
};

export const lotsSlice = createSlice({
  name: "lots",
  initialState,
  reducers: {
    updateSummaryViewList: (state, action: PayloadAction<SummaryViewT>) => {
      state.summaryViewList.push(action.payload);
    },
  },
});

export const lotsSelector = (state: RootState) => state.lots;
export const lotsActions = lotsSlice.actions;

export default lotsSlice.reducer;
