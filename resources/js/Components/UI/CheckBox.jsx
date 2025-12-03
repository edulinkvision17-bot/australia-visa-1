import React from "react";

export default function Checkbox({ label, value, onChange }) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="w-4 h-4 border-2 border-gray-400 rounded-none accent-blue-600 cursor-pointer transform translate-y-1"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
}
