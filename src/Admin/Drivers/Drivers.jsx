import React, { useState, useMemo } from "react";
import { Search, Plus } from "lucide-react";
import { CommonCards } from "@/components/CommonCards";
import DriversTable from "./DriversTable";
import allDriversData from "../../../public/driversInfo.json";
import AddDriverModal from "./AddDriverModal";

export const Drivers = () => {
  const driverCards = [
    {
      title: "Total Drivers",
      number: "24",
      numberColor: "#101828",
    },
    {
      title: "Active Drivers",
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

  const [searchQuery, setSearchQuery] = useState("");
  const [drivers, setDrivers] = useState(allDriversData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDrivers = useMemo(() => {
    if (!searchQuery) {
      return drivers;
    }
    return drivers.filter((driver) =>
      driver.driverName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, drivers]);

  const handleAddDriver = (newDriver) => {
    // Create a new driver object with a unique ID
    const driverToAdd = {
      ...newDriver,
      id: (drivers.length + 1).toString(), // Simple ID generation
    };
    setDrivers([driverToAdd, ...drivers]); // Add new driver to the top of the list
    setIsModalOpen(false); // Close the modal
  };

  const handleDeleteDriver = () => {
    setDrivers((prev) => prev.filter((d) => d.id !== driverToDelete));
    setIsDeleteModalOpen(false);
    setDriverToDelete(null);
    toast.success("Driver deleted successfully!");
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [driverToDelete, setDriverToDelete] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by driver name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-[24px] border border-gray-200 bg-white pl-10 pr-3 text-sm placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Add drivers button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex h-9 w-64 flex-shrink-0 items-center justify-center gap-2 rounded-[24px] border border-gray-200 bg-white px-3 text-sm font-medium text-black hover:bg-gray-50"
        >
          <Plus className="h-4 w-4" />
          <span>Add Driver</span>
        </button>
      </div>
      {/* Pass the driver-specific data to the reusable component */}
      <CommonCards cards={driverCards} />
      {/* Table */}
      <DriversTable
        drivers={filteredDrivers}
        onDeleteRequest={(id) => {
          setDriverToDelete(id);
          setIsDeleteModalOpen(true);
        }}
      />
      {/* Modal */}
      <AddDriverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddDriver={handleAddDriver}
      />

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[350px]">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this driver? This action cannot be
              undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteDriver}
                className="px-4 py-2 rounded-md bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
