import React from "react";
import { motion } from "framer-motion";
import { LockKeyhole, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/sparepart");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 overflow-hidden relative">

      {/* Background Animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white"
      >

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">
          Welcome Back
        </h1>

        {/* Username */}
        <div className="relative mb-5">
          <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-3 pl-10 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <LockKeyhole className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 pl-10 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={login}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full p-3 rounded-xl font-semibold shadow-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Spare Parts Management System
        </p>

      </motion.div>
    </div>
  );
}

export default Login;