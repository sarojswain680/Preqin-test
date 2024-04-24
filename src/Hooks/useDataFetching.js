import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData, setError, setLoading } from "../Redux/Reducers/firmsSlice";
import { FIRM_IDS_TO_FILTER } from "../Utils/constatant";
import { filterDataByIds } from "../Utils/helperFunctions";

const useDataFetching = (url, isInvestAPI) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(url);
        let data = response.data;
        if (isInvestAPI) {
          data = filterDataByIds(data, FIRM_IDS_TO_FILTER);
          dispatch(setData(data));
        } else {
          dispatch(setData(data));
        }
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [url, isInvestAPI, dispatch]);
};

export default useDataFetching;
