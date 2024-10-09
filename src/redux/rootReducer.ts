import { combineReducers } from "redux";

import lotsReducer from "./lots/slice";

const rootReducer = combineReducers({
  lots: lotsReducer,
});

export default rootReducer;
