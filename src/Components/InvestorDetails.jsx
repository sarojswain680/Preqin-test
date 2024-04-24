import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCommitmentInfo } from "../API";
import { filterDataByIds, formatUTCtoIST } from "../Utils/helperFunctions";
import AssetClassDropdown from "./AssetClassDropDown";

const InvestorDetails = () => {
  const { firm_id } = useParams();
  const { data } = useSelector((state) => state.firms);
  const { commitments } = useSelector((state) => state.commitment);
  const [investor, setInvestor] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInvestorDetails = async () => {
      try {
        const getInvestorDetails = filterDataByIds(data, [
          firm_id ? parseInt(firm_id) : 0,
        ]);
        setInvestor(getInvestorDetails[0] || {});
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
      <p>Firm Id: {investor.firm_id}</p>
      <p>Firm Name: {investor.firm_name}</p>
      <p>Type: {investor.firm_type}</p>
      <p>Date Added: {formatUTCtoIST(investor.date_added)}</p>
      <p>Address: {investor.address}</p>

      <AssetClassDropdown
        onChange={handleAssetClassChange}
        commitmentInfo={commitments}
      />
    </div>
  );
};

export default InvestorDetails;
