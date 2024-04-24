import { combineReducers } from "@reduxjs/toolkit";
import firmReducer from "./firmsSlice";
import commitmentReducer from "./commitmentSlice";

const rootReducer = combineReducers({
  firms: firmReducer,
  commitment: commitmentReducer,
});

export default rootReducer;
