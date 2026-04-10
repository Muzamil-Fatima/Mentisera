import React, { useEffect, useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
const AllConsultant = () => {
  const {
    aToken,
    consultant = [],
    getAllConsultants,
  } = useContext(AdminContext);

  const [rowsPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(consultant.length / rowsPerPage);

  const paginatedConsultant = consultant.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  useEffect(() => {
    if (aToken) {
      getAllConsultants();
    }
  }, [aToken, getAllConsultants]);

  return (
    <div className="p-4">
      <div className="mt-2 border border-gray-300 rounded-lg bg-white shadow-sm">
        {/* Top bar */}
        <div className="flex py-2 px-4 items-center justify-between border-b border-gray-200">
          <div className="text-lg font-semibold">List</div>
          <div className="flex gap-3 items-center justify-end">
            <button className="flex items-center px-4 py-2 rounded-full bg-blue-800 text-white gap-2 hover:bg-gray-700">
              Send Email <img src={assets.send} alt="" className="w-4 h-4" />
            </button>
            <img
              src={assets.deletes}
              alt=""
              className="px-2.5 border-l border-r border-gray-200 m-1 cursor-pointer"
            />
            <p className="text-sm">
              1-10 <span className="text-gray-400">of {consultant.length}</span>
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-green-500 border border-gray-300 rounded focus:ring-green-300"
                    />
                    ID
                    <img src={assets.group_icon} className="w-2 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1">
                    Name
                    <img src={assets.group_icon} className="w-2 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1">
                    Email
                    <img src={assets.group_icon} className="w-2 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1">
                    Status
                    <img src={assets.group_icon} className="w-2 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-1">
                    Action
                    <img src={assets.group_icon} className="w-2 h-4" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedConsultant.map((consultant, index) => (
                <tr
                  key={consultant._id}
                  className={index % 2 !== 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-green-500 border border-gray-300 rounded focus:ring-green-300"
                    />
                    <span className="pl-1"> {index + 1}</span>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={consultant.profile || assets.default_profile}
                      alt={consultant.fullName}
                      className="w-6 h-6 rounded-full"
                    />
                    {consultant.fullName}
                  </td>
                  <td className="px-4 py-3">{consultant.email}</td>
                  <td className="px-4 py-3">{consultant.status}</td>
                  <td className="px-4 py-3 space-x-1">
                    <button className="p-1 px-3 rounded-full text-green-600 bg-green-100 border border-green-600 text-sm">
                      <CheckIcon fontSize="small" />
                    </button>
                    <button className="px-3 py-1 rounded-full text-red-600 bg-red-100 border border-red-600 text-sm">
                      <RemoveIcon fontSize="small" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom pagination */}
        <div className="mt-6 mb-6 flex justify-between items-center px-4">
          <p>
            {(currentPage - 1) * rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, consultant.length)} of{" "}
            {consultant.length}
          </p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              Row per Page:
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="ml-1 px-2 py-1 bg-gray-50 border border-gray-300 rounded text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-1 border border-gray-300 rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ArrowUpwardIcon className="rotate-180 text-black w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`p-1 border border-gray-300 rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ArrowUpwardIcon className="text-black w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllConsultant;
