import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext.jsx";
import axios from "axios";

export default function StudentForm() {
  const { loginWithOtp } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    email: "",
    message: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/signup-otp",
        formData,
        { withCredentials: true }
      );
      if (res.data.alreadyExists) {
        toast.error(res.data.message);
      } else if (res.data.success) {
        toast.success(res.data.message);
        setOtpSent(true);
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      toast.error("Server error while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpValidation = async (e) => {
    e.preventDefault();
    if (!enteredOtp) {
      toast.error("Enter OTP!");
      return;
    }
    setLoading(true);
    try {
      await loginWithOtp("student", formData.mobile, enteredOtp);
      toast.success("✅ OTP Verified! Student Enquiry Submitted.");
      setTimeout(() => navigate("/"), 1000);
      setOtpSent(false);
      setEnteredOtp("");
      setFormData({ name: "", mobile: "", course: "", email: "", message: "" });
    } catch (err) {
      console.error("Verify OTP error:", err);
      toast.error(err.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 sm:px-6">
      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Decorative Circles */}
        <div className="absolute -top-12 -right-12 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-purple-400 to-indigo-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-30 animate-pulse"></div>

        <Link
          to="/"
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-red-500 text-xl sm:text-2xl font-bold"
        >
          ❌
        </Link>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6 text-indigo-700 border-b pb-2">
          Students Enquiry Form
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4 sm:space-y-5">
            {["name", "mobile", "course", "email"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-medium capitalize text-sm sm:text-base">{field} *</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={`Enter ${field}`}
                  className="mt-1 w-full border border-gray-300 rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm sm:text-base"
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-700 font-medium text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Optional message"
                className="mt-1 w-full border border-gray-300 rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpValidation} className="space-y-4 sm:space-y-5">
            <p className="text-center text-gray-700 text-sm sm:text-base">
              OTP sent to <strong>{formData.mobile}</strong>
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
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? "Verifying OTP..." : "Validate OTP & Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
