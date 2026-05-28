import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-2xl border-b border-gray-700">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">

            <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
              S
            </div>

            <h1 className="text-2xl font-extrabold tracking-wide">
              SIMS
            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link
              to="/sparepart"
              className="hover:text-blue-400 hover:scale-105 transition duration-300"
            >
              SparePart
            </Link>

            <Link
              to="/stockin"
              className="hover:text-blue-400 hover:scale-105 transition duration-300"
            >
              StockIn
            </Link>

            <Link
              to="/stockout"
              className="hover:text-blue-400 hover:scale-105 transition duration-300"
            >
              StockOut
            </Link>

            <Link
              to="/reports"
              className="hover:text-blue-400 hover:scale-105 transition duration-300"
            >
              Reports
            </Link>

            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300 shadow-md"
            >
              Logout
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-6 py-5 space-y-4 animate-fadeIn">

          <Link
            to="/sparepart"
            className="block hover:text-blue-400 transition"
          >
            SparePart
          </Link>

          <Link
            to="/stockin"
            className="block hover:text-blue-400 transition"
          >
            StockIn
          </Link>

          <Link
            to="/stockout"
            className="block hover:text-blue-400 transition"
          >
            StockOut
          </Link>

          <Link
            to="/reports"
            className="block hover:text-blue-400 transition"
          >
            Reports
          </Link>

          <Link
            to="/"
            className="block bg-red-600 hover:bg-red-700 text-center py-2 rounded-lg transition"
          >
            Logout
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;