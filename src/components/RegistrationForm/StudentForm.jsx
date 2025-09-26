import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate added
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext.jsx";
import axios from "axios";

export default function StudentForm() {
  const { loginWithOtp } = useAuth(); 
  const navigate = useNavigate(); // ✅ hook for navigation

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

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/send-otp",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setOtpSent(true);
      } else {
        toast.error(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      toast.error("Server error while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and login
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

      // ✅ Close the form after success
      setTimeout(() => {
        navigate("/"); // redirect to homepage
      }, 1000);

      // Reset form states
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px] px-4 sm:px-6">
      <div className="w-full max-w-md relative bg-white shadow-md rounded-lg p-6 sm:p-8">
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ❌
        </Link>

        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 border-b pb-2">
          Students Enquiry Form
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Mobile *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter 10-digit mobile"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Course *</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white font-medium py-2 sm:py-3 px-4 rounded-md hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpValidation} className="space-y-4">
            <p className="text-center text-gray-700">
              OTP sent to <strong>{formData.mobile}</strong>
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
              disabled={loading}
              className="w-full bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Verifying OTP..." : "Validate OTP & Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
