import React from "react";

const Dropdown = ({ id, value, options, onChange }) => {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
