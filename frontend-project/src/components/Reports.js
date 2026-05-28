import React, { useState } from "react";
import Navbar from "./Navbar";

function Reports() {

  const [search, setSearch] = useState("");

  const currentDate = new Date().toLocaleDateString();

  const printReport = () => {
    window.print();
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            Stock Reports
          </h1>

          <div className="text-lg font-semibold text-gray-700 mt-4 md:mt-0">
            Date: {currentDate}
          </div>

        </div>

        {/* SEARCH + PRINT */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

          <input
            type="text"
            placeholder="Search Spare Part..."
            className="border p-3 rounded-lg w-full md:w-1/3 shadow"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

          <button
            onClick={printReport}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg"
          >
            Print Report
          </button>

        </div>

        {/* REPORT CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Daily StockOut */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-600">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Daily StockOut Report
            </h2>

            <div className="space-y-4 text-lg text-gray-700">

              <p>
                <span className="font-bold">
                  Spare Part:
                </span>
              </p>

              <p>
                <span className="font-bold">
                  Quantity:
                </span> 
              </p>

              <p>
                <span className="font-bold">
                  Unit Price:
                </span> 
              </p>

              <p>
                <span className="font-bold">
                  Total Price:
                </span>
              </p>

              <p>
                <span className="font-bold">
                  Date:
                </span> {currentDate}
              </p>

            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full">
              Generate Report
            </button>

          </div>

          {/* Daily Stock Status */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-600">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Daily Stock Status
            </h2>

            <div className="space-y-4 text-lg text-gray-700">

              <p>
                <span className="font-bold">
                  Spare Part:
                </span> Brake Pad
              </p>

              <p>
                <span className="font-bold">
                  Stored Quantity:
                </span> 
                </p>

              <p>
                <span className="font-bold">
                  StockOut:
                </span> 
              </p>

              <p>
                <span className="font-bold">
                  Remaining Quantity:
                </span> 
              </p>

              <p>
                <span className="font-bold">
                  Date:
                </span> {currentDate}
              </p>

            </div>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full">
              View Status
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg overflow-auto">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Daily Report Table
          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4 border">
                  Spare Part
                </th>

                <th className="p-4 border">
                  Quantity
                </th>

                <th className="p-4 border">
                  Unit Price
                </th>

                <th className="p-4 border">
                  Total Price
                </th>

                <th className="p-4 border">
                  Remaining
                </th>

                <th className="p-4 border">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="text-center hover:bg-gray-100">

                <td className="p-4 border">
                  Brake Pad
                </td>

                <td className="p-4 border">
                  5
                </td>

                <td className="p-4 border">
                  2000
                </td>

                <td className="p-4 border">
                  10000
                </td>

                <td className="p-4 border">
                  15
                </td>

                <td className="p-4 border">
                  {currentDate}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;