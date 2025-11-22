"use client";

import { SquarePen, Trash } from "lucide-react";
import drivers from "../../../public/driversInfo.json";

export default function DriversTable({ onViewDetails }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-[#00C950]/10 border border-[#00C950]/20 text-[#00C950]";
      case "inactive":
        return "bg-[#6A7282]/10 border border-[#6A7282]/20 text-[#6A7282]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Directly use the orders from the JSON file without filtering
  const filteredDrivers = drivers;
  return (
    <div className="min-h-screen">
      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-gray-50">
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Driver Name
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Phone
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Shift
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Zone
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver) => (
                  <tr
                    key={driver.id}
                    className="border-b border-[#E5E7EB] hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-center text-sm font-normal text-gray-900 ">
                      {driver.driverName} <br />
                      <span className="text-[#525355] font-normal text-xs">{driver.driverId}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-normal text-gray-900">
                      {driver.email}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-normal text-gray-900">
                      {driver.phone}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          driver.status
                        )}`}
                      >
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-normal text-gray-900">
                      {driver.shift}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-normal text-gray-900">
                      {driver.zone}
                    </td>
                    <td className="px-6 py-4 text-sm flex items-center justify-center gap-2">
                      <button className="px-2.5 py-2 bg-[#F3F4F6] rounded-lg">
                        <SquarePen size={16} color="#101828" />
                      </button>
                      <button className="px-2.5 py-2 bg-[#FE1A1A] rounded-lg">
                        <Trash size={16} color="#F3F4F6" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    No orders found for this Order ID.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
