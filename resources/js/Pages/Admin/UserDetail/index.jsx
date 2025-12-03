// AdminTable.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const [data, setData] = useState([]);

  // 🔹 Example: function for fetching data with axios
  // You can modify URL, headers, params, etc.
  const fetchTableData = async () => {
    try {
      const response = await axios.get("/api/admin/items"); // <- change this
      console.log("Fetched data:", response.data);

      // When backend is ready, update the state like:
      // setData(response.data);

    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    // For now we'll just set static data, but this is where you'd call:
    // fetchTableData();
    const staticData = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
      { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Viewer" },
      { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Moderator" },
    ];
    setData(staticData);
  }, []);

  const handleEdit = (id) => {
    console.log("Edit row id:", id);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Admin Records
            </h1>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              View and manage admin-related data in a clean, structured table.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live overview
            </span>
          </div>
        </div>

        {/* Outer glow */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-0.5 rounded-[1.8rem] bg-gradient-to-tr from-sky-500/40 via-transparent to-indigo-600/30 blur opacity-80" />

          {/* Card */}
          <div className="relative rounded-[1.6rem] border border-slate-800 bg-slate-900/90 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] px-4 sm:px-6 md:px-7 py-5 md:py-6 overflow-hidden">
            {/* Table wrapper */}
            <div className="overflow-x-auto custom-scrollbar">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-slate-400 border-b border-slate-800/80">
                    <th className="py-3 pr-4 text-left whitespace-nowrap">ID</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">Name</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">Email</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">Role</th>
                    <th className="py-3 pl-4 text-right whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-8 text-center text-slate-500 text-xs"
                      >
                        No data available.
                      </td>
                    </tr>
                  ) : (
                    data.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`border-b border-slate-800/60 last:border-0 ${
                          index % 2 === 0
                            ? "bg-slate-900/40"
                            : "bg-slate-900/20"
                        } hover:bg-slate-800/50 transition-colors`}
                      >
                        <td className="py-3 pr-4 text-slate-200 text-xs sm:text-sm whitespace-nowrap">
                          #{row.id}
                        </td>
                        <td className="py-3 px-4 text-slate-100 text-xs sm:text-sm whitespace-nowrap">
                          {row.name}
                        </td>
                        <td className="py-3 px-4 text-slate-300 text-xs sm:text-sm whitespace-nowrap">
                          {row.email}
                        </td>
                        <td className="py-3 px-4 text-xs sm:text-sm">
                          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200">
                            {row.role}
                          </span>
                        </td>
                        <td className="py-3 pl-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleEdit(row.id)}
                            className="inline-flex items-center rounded-xl border border-sky-500/60 bg-sky-500/10 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 transition-colors"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer / meta */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500">
              <span>
                Showing <span className="text-slate-300">{data.length}</span> entries
              </span>
              <span className="text-slate-500">
                You can plug real API data using <code>fetchTableData()</code>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
