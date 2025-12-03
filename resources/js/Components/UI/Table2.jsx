import { ChevronDown, ChevronUp } from "lucide-react";

const Table2 = ({ columns = [], data = [] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full">
        <table className="w-full border-collapse">

          {/* HEADER */}
          <thead>
            <tr className="bg-[#6f6f6f] text-white text-xs uppercase">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-3 py-0 text-left font-extrabold align-top border border-gray-400 ${col.className || ""}`}
                >
                  <div className="flex justify-between items-center gap-2">
                    <p className="select-none">{col.header}</p>

                    {/* Sort Icon (Up + Down) */}
                    <div className="flex flex-col leading-none">
                      <ChevronUp className="text-[#989090]" size={14} />
                      <ChevronDown className="text-[#989090]" size={14} />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
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

            {data.map((row, i) => (
              <tr
                key={row.id ?? i}
                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} text-sm text-gray-800`}
              >
                {columns.map((col) => {
                  const value = col.render ? col.render(row) : row[col.key];

                  let cellContent = value;

                  // Amount hyperlink formatting
                  if (col.key === "amount" && value != null) {
                    cellContent = (
                      <a
                        href={row.actionUrl ?? "#"}
                        className="text-blue-600 underline"
                      >
                        {value}
                      </a>
                    );
                  }

                  // Status pill styling
                  if (col.key === "status" && value != null) {
                    cellContent = (
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full font-medium">
                        {value}
                      </span>
                    );
                  }

                  return (
                    <td
                      key={col.key}
                      className="px-3 py-[2px] align-top border border-gray-300"
                    >
                      {cellContent}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Table2;
