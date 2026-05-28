import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/Login";
import SparePart from "./components/SparePart";
import StockIn from "./components/StockIn";
import StockOut from "./components/StockOut";
import Reports from "./components/Reports";

function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-4 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          SIMS SYSTEM
        </h1>

        <div className="flex gap-6 text-sm md:text-base">

          <Link className="hover:text-blue-400 transition" to="/sparepart">
            SparePart
          </Link>

          <Link className="hover:text-blue-400 transition" to="/stockin">
            StockIn
          </Link>

          <Link className="hover:text-blue-400 transition" to="/stockout">
            StockOut
          </Link>

          <Link className="hover:text-blue-400 transition" to="/reports">
            Reports
          </Link>

          <Link className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition" to="/">
            Logout
          </Link>

        </div>

      </nav>

      {/* PAGE CONTENT */}
      <div className="min-h-screen bg-gray-100">

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/sparepart" element={<SparePart />} />
          <Route path="/stockin" element={<StockIn />} />
          <Route path="/stockout" element={<StockOut />} />
          <Route path="/reports" element={<Reports />} />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;