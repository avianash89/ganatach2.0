import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function TrainerRegistrationForm() {
  const [formData, setFormData] = useState({
    trainerName: "",
    phoneNumber: "",
    email: "",
    technology: "",
    experience: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const { loginTrainerWithOtp } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Use your deployed backend URL
  const BASE_URL = "http://localhost:5000";

  // ✅ Send OTP via backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/trainers/signup-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server Error. Please try again later.");
      console.error(err);
    }
  };

  // ✅ Verify OTP and login
  const handleOtpValidation = async () => {
    try {
      const trainer = await loginTrainerWithOtp(formData.phoneNumber, enteredOtp);

      if (trainer) {
        toast.success("✅ OTP Verified! Trainer Logged in.");
        navigate("/trainer"); // redirect to trainer dashboard
      } else {
        toast.error("Invalid OTP");
      }
    } catch (err) {
      toast.error("Server Error. Please try again later.");
      console.error(err);
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
          Trainer Registration
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {["trainerName", "phoneNumber", "email", "technology", "experience"].map(
              (field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-medium capitalize text-sm sm:text-base">
                    {field.replace(/([A-Z])/g, " $1")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                    className="mt-1 w-full border border-gray-300 rounded-xl p-2 sm:p-3 
                      focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-sm sm:text-base"
                  />
                </div>
              )
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleOtpValidation(); }} className="space-y-4 sm:space-y-5">
            <p className="text-center text-gray-700 text-sm sm:text-base">
              OTP sent to <strong>{formData.phoneNumber}</strong>
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
              className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transform transition disabled:opacity-50 text-sm sm:text-base"
            >
              Validate OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
