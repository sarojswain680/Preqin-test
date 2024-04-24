// api.ts

import axios from "axios";
import {
  setCommitmentInfo,
  setError,
  setLoading,
} from "../Redux/Reducers/commitmentSlice";
import { BASE_URL } from "../Utils/constatant";

export const fetchCommitmentInfo = async (
  selectedAssetClass,
  firmId,
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      `${BASE_URL}/Investor/commitment/${selectedAssetClass}/${firmId}`
    );
    dispatch(setCommitmentInfo(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
