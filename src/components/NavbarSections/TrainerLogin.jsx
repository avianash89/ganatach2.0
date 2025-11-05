import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext.jsx";

export default function TrainerLogin() {
  const { loginTrainerWithOtp } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Use your deployed backend URL
  const BASE_URL = "http://localhost:5000";

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/trainers/login-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleValidateOtp = async (e) => {
    e.preventDefault();
    if (!enteredOtp) {
      toast.error("Enter OTP!");
      return;
    }
    setLoading(true);
    try {
      const trainer = await loginTrainerWithOtp(phoneNumber, enteredOtp);
      if (trainer) {
        toast.success("✅ Login Successful!");
        navigate("/trainer");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 sm:px-6">
      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Decorative Gradient Circles */}
        <div className="absolute -top-16 -right-16 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-purple-400 to-indigo-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-30 animate-pulse"></div>

        <Link
          to="/"
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          ❌
        </Link>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-indigo-700 border-b pb-2">
          Trainer Login with OTP
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block font-medium text-gray-700 text-sm sm:text-base">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Enter 10-digit mobile"
                className="mt-1 w-full border border-gray-300 rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleValidateOtp} className="space-y-4 sm:space-y-5">
            <p className="text-center text-gray-700 text-sm sm:text-base">
              OTP sent to <strong>{phoneNumber}</strong>
            </p>

            <input
              type="text"
              maxLength="4"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              placeholder="Enter OTP"
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 sm:p-3 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? "Validating OTP..." : "Validate OTP & Login"}
            </button>
          </form>
        )}

        <div className="mt-4 text-center text-sm sm:text-base">
          <Link to="/trainer-registration" className="text-blue-600 hover:underline">
            New trainer? Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
