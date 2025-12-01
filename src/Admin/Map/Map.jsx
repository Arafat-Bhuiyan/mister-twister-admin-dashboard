import { CommonCards } from "@/components/CommonCards";
import React from "react";

export const Map = () => {
  const customersCards = [
    {
      title: "Active Drivers",
      number: "3",
      numberColor: "#101828",
    },
    {
      title: "Offline Drivers",
      number: "1",
      numberColor: "#1A9F42",
    },
    {
      title: "Total Requests",
      number: "6",
      numberColor: "#2B7FFF",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {/* Pass the driver-specific data to the reusable component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customersCards.map((card, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E7EB] p-4 flex items-center rounded-xl shadow-md"
            >
              <div className="text-[#2B2B2B] flex flex-col gap-2">
                <h2 className="text-gray-600 text-sm font-normal">
                  {card.title}
                </h2>
                <p
                  className="text-2xl font-normal"
                  style={{ color: card.numberColor }}
                >
                  {card.number}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map */}
      <div className="w-full flex items-center justify-center gap-4">
        <div className="w-2/3"></div>
        <div className="w-1/3">
          <div className="w-full relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="mb-6">
              <div className="justify-start text-gray-900 text-lg font-normal leading-7">
                Active Vendors
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="self-stretch p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-2 h-2 relative bg-green-500 rounded-full" />
                    <div className="flex justify-start items-start">
                      <div className="justify-start text-gray-900 text-base font-normal leading-6">
                        Mister Cream
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-blue-500/10 rounded-[10px] border border-blue-500/20 flex justify-center items-center gap-1">
                    <div className="justify-start text-blue-500 text-xs font-medium leading-4">
                      2
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="justify-start text-gray-600 text-xs font-normal leading-4">
                    Dhanmondi 27
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="justify-start text-gray-600 text-xs font-normal leading-4">
                    Updated Just now
                  </div>
                </div>
              </div>

              <div className="self-stretch p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-2 h-2 relative bg-gray-400 rounded-full" />
                    <div className="flex justify-start items-start">
                      <div className="justify-start text-gray-900 text-base font-normal leading-6">
                        Mister Cream
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 bg-blue-500/10 rounded-[10px] border border-blue-500/20 flex justify-center items-center gap-1">
                    <div className="justify-start text-blue-500 text-xs font-medium leading-4">
                      2
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="justify-start text-gray-600 text-xs font-normal leading-4">
                    Dhanmondi 27
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="justify-start text-gray-600 text-xs font-normal leading-4">
                    Updated Just now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
