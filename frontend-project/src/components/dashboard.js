import React from "react";
import SparePartTable from "../tables/SparePartTable";
import StockInTable from "../tables/StockInTable";
import StockOutTable from "../tables/StockOutTable";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-10">

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        SPARE PART DASHBOARD
              </h1>

      {/* GRID LAYOUT (RESPONSIVE) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Spare Parts */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            SPARE PARTS
          </h2>
          <div className="overflow-x-auto">
            <SparePartTable />
          </div>
        </div>

        {/* Stock In */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            STOCK IN
          </h2>
          <div className="overflow-x-auto">
            <StockInTable />
          </div>
        </div>

        {/* Stock Out (full width on large screens) */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            STOCK OUT
          </h2>
          <div className="overflow-x-auto">
            <StockOutTable />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;