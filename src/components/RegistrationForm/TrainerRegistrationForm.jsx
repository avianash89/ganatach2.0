import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function TrainerRegistrationForm() {
  const [formData, setFormData] = useState({
    trainerName: "",
    phoneNumber: "",
    email: "",
    technology: "",
    experience: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    // Generate OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);

    console.log("OTP Sent:", generatedOtp);
    toast.success(`OTP sent to ${formData.phoneNumber}`);
  };

  const handleOtpValidation = () => {
    if (enteredOtp === otp) {
      toast.success("✅ OTP Verified! Trainer Registration Completed.");
      console.log("Trainer Data:", formData);

      // Reset after successful verification
      setFormData({
        trainerName: "",
        phoneNumber: "",
        email: "",
        technology: "",
        experience: "",
      });
      setOtp("");
      setEnteredOtp("");
      setOtpSent(false);
    } else {
      toast.error("❌ Invalid OTP, please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px] px-4 sm:px-6">
      <div className="w-full max-w-lg relative bg-white shadow-lg rounded-lg p-6 sm:p-8">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ❌
        </Link>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 border-b pb-2 text-gray-800">
          Trainer Registration
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">
                Trainer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="trainerName"
                required
                value={formData.trainerName}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Technology <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="technology"
                required
                value={formData.technology}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium py-2 sm:py-3 px-4 
                         rounded-md hover:bg-green-700 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700 text-center">
              OTP has been sent to <span className="font-semibold">{formData.phoneNumber}</span>
            </p>

            <div>
              <label className="block font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                maxLength="4"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
              />
            </div>

            <button
              onClick={handleOtpValidation}
              className="w-full bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 
                         rounded-md hover:bg-blue-700 transition"
            >
              Validate OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
