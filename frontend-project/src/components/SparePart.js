import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function SparePart() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  // TOTAL PRICE
  const totalPrice = Number(quantity) * Number(unitPrice);

  // SAVE DATA
  const saveData = async () => {

    // VALIDATION
    if (
      !name ||
      !category ||
      !quantity ||
      !unitPrice
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:3000/api/sparepart",
        {
          name,
          category,
          quantity: Number(quantity),
          unitPrice: Number(unitPrice),
          totalPrice: Number(totalPrice)
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert(res.data);

      // CLEAR INPUTS
      setName("");
      setCategory("");
      setQuantity("");
      setUnitPrice("");

    } catch (error) {

      console.log(error);

      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Error saving data");
      }
    }
  };

  return (

    <div>

      <Navbar />

      <div className="p-8">

        <h1 className="text-2xl font-bold mb-4">
          SPARE PART
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="border p-2 w-full mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        {/* CATEGORY */}
        <input
          type="text"
          placeholder="Category"
          value={category}
          className="border p-2 w-full mb-3"
          onChange={(e) => setCategory(e.target.value)}
        />

        {/* QUANTITY */}
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          className="border p-2 w-full mb-3"
          onChange={(e) => setQuantity(e.target.value)}
        />

        {/* UNIT PRICE */}
        <input
          type="number"
          placeholder="Unit Price"
          value={unitPrice}
          className="border p-2 w-full mb-3"
          onChange={(e) => setUnitPrice(e.target.value)}
        />

        {/* TOTAL PRICE */}
        <input
          type="number"
          value={totalPrice}
          readOnly
          className="border p-2 w-full mb-3 bg-gray-100"
        />

        {/* BUTTON */}
        <button
          onClick={saveData}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          SAVE
        </button>

      </div>

    </div>
  );
}

export default SparePart;