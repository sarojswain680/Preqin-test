import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCommitmentInfo } from "../API";
import { filterDataByIds, formatUTCtoIST } from "../Utils/helperFunctions";
import AssetClassDropdown from "./AssetClassDropDown";
import get from "lodash/get";

const InvestorDetails = () => {
  const { firm_id } = useParams();
  const { data } = useSelector((state) => state.firms);
  const { commitments } = useSelector((state) => state.commitment);
  const [investor, setInvestor] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInvestorDetails = async () => {
      try {
        const getInvestorDetails = filterDataByIds(data || [], [
          firm_id || 0 ? parseInt(firm_id) : 0,
        ]);
        setInvestor(get(getInvestorDetails, "0", {}));
      } catch (error) {
        console.error(error);
      }
    };

    fetchInvestorDetails();
  }, [firm_id]);

  const handleAssetClassChange = async (selectedAssetClass) => {
    await fetchCommitmentInfo(selectedAssetClass, firm_id || "", dispatch);
  };

  if (!investor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Investor Details</h2>
      <p>Firm Id: {get(investor, "firm_id", "")}</p>
      <p>Firm Name: {get(investor, "firm_name", "")}</p>
      <p>Type: {get(investor, "firm_type", "")}</p>
      <p>Date Added: {formatUTCtoIST(get(investor, "date_added", ""))}</p>
      <p>Address: {get(investor, "address", "")}</p>

      <AssetClassDropdown
        onChange={handleAssetClassChange}
        commitmentInfo={commitments}
      />
    </div>
  );
};

export default InvestorDetails;
