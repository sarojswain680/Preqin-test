import React, { useState } from "react";
import { ASSETS_CLASS_TEXT, DROP_DOWN_CONTENT } from "../Utils/constatant";
import Dropdown from "./DropDown";

const AssetClassDropdown=({ onChange, commitmentInfo }) => {
  const [assetClass, setAssetClass] = useState("");
  const handleAssetClassChange = async (selectedAssetClass) => {
    setAssetClass(selectedAssetClass);
    onChange(selectedAssetClass);
  };

  return (
    <div>
      <label htmlFor="assetClass">{ASSETS_CLASS_TEXT}</label>
      <Dropdown
        id="assetClass"
        value={assetClass}
        options={DROP_DOWN_CONTENT}
        onChange={handleAssetClassChange}
      />

      {commitmentInfo && (
        <div>
          <h3>Commitment Information for {assetClass}</h3>
          <p>{commitmentInfo}</p>
        </div>
      )}
    </div>
  );
};

export default AssetClassDropdown;
