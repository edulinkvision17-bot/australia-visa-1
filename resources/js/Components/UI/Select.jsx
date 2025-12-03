import React from "react";

const Select = ({ value, onChange, options, placeholder = "Select an option" }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={{ height: "25px", paddingLeft: "2px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", borderColor: "#cccdce", width: "100%", }}>
      {/* Placeholder */}
      <option value="" disabled>
        {placeholder}
      </option>

      {/* Options */}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
