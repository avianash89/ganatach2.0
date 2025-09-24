import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
  const { loginWithOtp } = useAuth();
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  // 🔹 Send OTP via backend
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
      console.error(err);
    }
  };

  // 🔹 Validate OTP via AuthContext
  const handleValidateOtp = async (e) => {
    e.preventDefault();

    if (!enteredOtp) {
      toast.error("Enter OTP!");
      return;
    }

    try {
      await loginWithOtp(mobile, enteredOtp);
      window.location.href = "/"; // Redirect to homepage on success
      toast.success("✅ Login Successful!");

      // Reset form
      setMobile("");
      setEnteredOtp("");
      setOtpSent(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ❌
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login with OTP
        </h2>

        {!otpSent ? (
          // Step 1: Enter Mobile Number
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Enter 10-digit mobile"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          // Step 2: Validate OTP
          <form onSubmit={handleValidateOtp} className="space-y-4">
            <p className="text-center text-gray-700">
              OTP sent to <strong>{mobile}</strong>
            </p>

            <input
              type="text"
              maxLength="4"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              placeholder="Enter OTP"
              className="mt-1 w-full border border-gray-300 rounded-md p-3 text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Validate OTP & Login
            </button>
          </form>
        )}

        {/* Signup link */}
        <div className="mt-4 text-center">
          <Link to="/student-registration" className="text-blue-600 hover:underline">
            New user? Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
