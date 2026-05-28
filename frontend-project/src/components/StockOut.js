import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function StockOut() {

  const [form, setForm] = useState({
    sparePartID: "",
    stockOutQuantity: "",
    stockOutUnitPrice: "",
    stockOutDate: ""
  });

  // CALCULATE TOTAL PRICE
  const stockOutTotalPrice =
    Number(form.stockOutQuantity) *
    Number(form.stockOutUnitPrice);

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATION
    if (
      !form.sparePartID ||
      !form.stockOutQuantity ||
      !form.stockOutUnitPrice ||
      !form.stockOutDate
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:3000/api/stockout",
        {
          sparePartID: Number(form.sparePartID),
          stockOutQuantity: Number(form.stockOutQuantity),
          stockOutUnitPrice: Number(form.stockOutUnitPrice),
          stockOutTotalPrice: Number(stockOutTotalPrice),
          stockOutDate: form.stockOutDate
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert(res.data.message);

      // CLEAR FORM
      setForm({
        sparePartID: "",
        stockOutQuantity: "",
        stockOutUnitPrice: "",
        stockOutDate: ""
      });

    } catch (err) {

      console.log(err);

      if (err.response) {
        alert(err.response.data);
      } else {
        alert("Server Error");
      }
    }
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center py-10">

        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Stock Out Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* SPARE PART ID */}
            <input
              name="sparePartID"
              value={form.sparePartID}
              onChange={handleChange}
              type="number"
              placeholder="Spare Part ID"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* QUANTITY */}
            <input
              name="stockOutQuantity"
              value={form.stockOutQuantity}
              onChange={handleChange}
              type="number"
              placeholder="Quantity"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* UNIT PRICE */}
            <input
              name="stockOutUnitPrice"
              value={form.stockOutUnitPrice}
              onChange={handleChange}
              type="number"
              placeholder="Unit Price"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* TOTAL PRICE */}
            <input
              value={stockOutTotalPrice}
              type="number"
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
              placeholder="Total Price"
            />

            {/* DATE */}
            <input
              name="stockOutDate"
              value={form.stockOutDate}
              onChange={handleChange}
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Save Stock Out
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default StockOut;