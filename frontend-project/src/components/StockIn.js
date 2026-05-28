import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function StockIn() {

  const [form, setForm] = useState({
    sparePartID: "",
    stockInQuantity: "",
    stockInDate: ""
  });

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
      !form.stockInQuantity ||
      !form.stockInDate
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:3000/api/stockin",
        {
          sparePartID: Number(form.sparePartID),
          stockInQuantity: Number(form.stockInQuantity),
          stockInDate: form.stockInDate
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
        stockInQuantity: "",
        stockInDate: ""
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

          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            Stock In Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* SPARE PART ID */}
            <input
              name="sparePartID"
              value={form.sparePartID}
              onChange={handleChange}
              type="number"
              placeholder="Spare Part ID"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* QUANTITY */}
            <input
              name="stockInQuantity"
              value={form.stockInQuantity}
              onChange={handleChange}
              type="number"
              placeholder="Quantity"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* DATE */}
            <input
              name="stockInDate"
              value={form.stockInDate}
              onChange={handleChange}
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Save Stock In
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default StockIn;