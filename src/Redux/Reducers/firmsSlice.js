import { createSlice } from "@reduxjs/toolkit";
import get from "lodash/get";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const firmsSlice = createSlice({
  name: "firms",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = get(action, "payload", []);
    },
    setLoading: (state, action) => {
      state.isLoading = get(action, "payload", false);
    },
    setError: (state, action) => {
      state.error = get(action, "payload", null);
    },
  },
});

export const { setData, setLoading, setError } = firmsSlice.actions;

export default firmsSlice.reducer;
