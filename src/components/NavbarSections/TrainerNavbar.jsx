import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import { useAuth } from "../../context/AuthContext.jsx";
import toast from "react-hot-toast";

export default function TrainerNavbar() {
  const navigate = useNavigate();
  const { logoutTrainer } = useAuth();

  const handleLogout = async () => {
    await logoutTrainer();
    toast.success("Trainer Logout successfully");
    navigate("/"); // redirect to home
  };

  return (
    <nav className="w-full bg-bgprimary shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side: Logo + text */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="md:text-xl text-md font-logo font-medium text-white capitalize">
            Gana Tech Solution
          </span>
        </div>

        {/* Right side: Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition duration-300">
          Logout
        </button>
      </div>
    </nav>
  );
}
