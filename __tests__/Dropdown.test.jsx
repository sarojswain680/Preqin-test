import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../src/Components/DropDown';

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Dropdown component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const onChangeMock = jest.fn();

  it('renders options correctly', () => {
    const wrapper = shallow(
      <Dropdown id="dropdown" value="option1" options={options} onChange={onChangeMock} />
    );

    expect(wrapper.find('option')).toHaveLength(options.length);
  });

  it('calls onChange when an option is selected', () => {
    const wrapper = shallow(
      <Dropdown id="dropdown" value="option1" options={options} onChange={onChangeMock} />
    );

    wrapper.find('select').simulate('change', { target: { value: 'option2' } });

    expect(onChangeMock).toHaveBeenCalledWith('option2');
  });
});
