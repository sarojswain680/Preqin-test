import React from "react";
import { useSelector } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import { RootState } from "../Redux/store";
import {
  BASE_URL,
  LOADER_TEXT,
  TABLE_COLOUMNS,
  MAIN_HEADER_TEXT,
} from "../Utils/constatant";
import DynamicTable from "./TableComponent";

const InvestorsTable = () => {
  useDataFetching(`${BASE_URL}/investors`);
  const { data, isLoading } = useSelector((state) => state.firms);

  if (isLoading && data.length == 0) {
    return <h2>{LOADER_TEXT}</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{MAIN_HEADER_TEXT}</h2>
      <DynamicTable data={data} columns={TABLE_COLOUMNS} />
    </div>
  );
};

export default InvestorsTable;
