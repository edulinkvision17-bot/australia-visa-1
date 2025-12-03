// SimpleTable.jsx
import React from "react";

/**
 * columns: [
 *  {
 *    key: "type",             // unique key
 *    header: "Type",          // header text
 *    className?: "w-1/3",     // optional extra classes
 *    render?: (row) => JSX    // optional custom cell renderer
 *  }
 * ]
 *
 * data: [
 *  { type: "...", date: "...", actionUrl: "..." },
 *  ...
 * ]
 */

const Table = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto border border-gray-300">
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead>
          <tr className="bg-gray-600 text-white">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-1 py-1 text-left font-bold border-b border-gray-400 ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-1 py-1 border-b border-gray-300 align-top text-[14px]"
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-4 text-center text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
