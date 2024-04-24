import React from "react";
import get from 'lodash/get';

const Dropdown = ({ id, value, options, onChange }) => {
  return (
    <select id={id} value={value} onChange={(e) => onChange(get(e,'target.value',''))}>
      {options.map((option, index) => (
        <option key={index} value={get(option,'value')}>
          {get(option,'label')}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
