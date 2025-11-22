import React from "react";
import { Search, Plus } from "lucide-react";
import { CommonCards } from "@/components/CommonCards";
import DriversTable from "./DriversTable";


export const Vendors = () => {
  const vendorCards = [
    {
      title: "Total Vendors",
      number: "24",
      numberColor: "#101828",
    },
    {
      title: "Active Vendors",
      number: "20",
      numberColor: "#1A9F42",
    },
    {
      title: "On Shift",
      number: "14",
      numberColor: "#2B7FFF",
    },
    {
      title: "Trial",
      number: "5",
      numberColor: "#FE9A00",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by customer or vendor name..."
            className="h-9 w-full rounded-[24px] border border-gray-200 bg-white pl-10 pr-3 text-sm placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Add vendors button */}
        <button className="flex h-9 w-64 flex-shrink-0 items-center justify-center gap-2 rounded-[24px] border border-gray-200 bg-white px-3 text-sm font-medium text-black hover:bg-gray-50">
          <Plus className="h-4 w-4" />
          <span>Add Vendor</span>
        </button>
      </div>
      {/* Pass the vendor-specific data to the reusable component */}
      <CommonCards cards={vendorCards} />

      {/* Table */}
      <DriversTable />
    </div>
  );
};
