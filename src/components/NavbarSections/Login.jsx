import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  // 🔹 Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }

    // Generate random 4-digit OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);

    console.log("OTP Sent:", generatedOtp);
    toast.success(`OTP sent to ${mobile}`);
  };

  // 🔹 Validate OTP
  const handleValidateOtp = (e) => {
    e.preventDefault();
    if (enteredOtp === otp) {
      toast.success("✅ Login Successful!");
      console.log("User Logged in with Mobile:", mobile);

      // reset
      setMobile("");
      setOtp("");
      setEnteredOtp("");
      setOtpSent(false);
    } else {
      toast.error("❌ Invalid OTP, try again.");
    }
  };

  return (
    // Fullscreen overlay
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
                name="mobile"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 10-digit mobile"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 
                         rounded-md hover:bg-blue-700 transition"
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
              className="mt-1 w-full border border-gray-300 rounded-md p-3 
                         text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 
                         rounded-md hover:bg-green-700 transition"
            >
              Validate OTP & Login
            </button>
          </form>
        )}

        {/* Signup link */}
        <div className="mt-4 text-center">
          <Link
            to="/student-registration"
            className="text-blue-600 hover:underline"
          >
            New user? Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
