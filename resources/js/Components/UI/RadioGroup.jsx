import React from "react";

export default function RadioGroup({
  value,
  onChange,
  options = [],
  orientation = "vertical",
  name = "radioGroup",
}) {
  return (
    <div
      className={`flex ${
        orientation === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"
      }`}
    >
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
