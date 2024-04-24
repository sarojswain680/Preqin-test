import { createSlice } from "@reduxjs/toolkit";

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
      state.commitments = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCommitmentInfo, setLoading, setError } =
  commitmentSlice.actions;

export default commitmentSlice.reducer;
