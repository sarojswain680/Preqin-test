import React from "react";
import { shallow } from "enzyme";
import AssetClassDropdown from "../src/Components/AssetClassDropDown";

import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

describe("AssetClassDropdown component", () => {
  it("renders without crashing", () => {
    shallow(<AssetClassDropdown onChange={() => {}} commitmentInfo="" />);
  });

  it("displays correct label", () => {
    const wrapper = shallow(
      <AssetClassDropdown onChange={() => {}} commitmentInfo="" />
    );
    expect(wrapper.find("label").text()).toEqual("Select Asset Class: ");
  });

  it("updates asset class value on change", () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <AssetClassDropdown onChange={onChangeMock} commitmentInfo="" />
    );
    const newValue = "New Value";

    wrapper
      .find("#assetClass")
      .simulate("change", { target: { value: newValue } });

    expect(onChangeMock).toHaveBeenCalledWith({ target: { value: newValue } });
  });

it('displays commitment information when available', () => {
  const commitmentInfo = 'Test Commitment Information';
  const wrapper = shallow(<AssetClassDropdown onChange={() => {}} commitmentInfo={commitmentInfo} />);
  
  // expect(wrapper.find("h3").text()).toEqual(`Commitment Information for ${wrapper.prop('value')}`);
  expect(wrapper.find("h3").text()).toEqual(`Commitment Information for `);
  expect(wrapper.find("p").text()).toEqual(commitmentInfo);
});


  it("does not display commitment information when not available", () => {
    const wrapper = shallow(
      <AssetClassDropdown onChange={() => {}} commitmentInfo="" />
    );
    expect(wrapper.find("h3")).toHaveLength(0);
    expect(wrapper.find("p")).toHaveLength(0);
  });
});
