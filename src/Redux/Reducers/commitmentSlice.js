import { createSlice } from "@reduxjs/toolkit";
import get from "lodash/get";

const initialState = {
  commitments: "",
  isLoading: false,
  error: null,
};

const commitmentSlice = createSlice({
  name: "commitment",
  initialState,
  reducers: {
    setCommitmentInfo(state, action) {
      state.commitments = get(action, "payload", "");
    },
    setLoading(state, action) {
      state.isLoading = get(action, "payload", false);
    },
    setError(state, action) {
      state.error = get(action, "payload", null);
    },
  },
});

export const { setCommitmentInfo, setLoading, setError } =
  commitmentSlice.actions;

export default commitmentSlice.reducer;
