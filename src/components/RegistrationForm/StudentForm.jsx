import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    email: "",
    message: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit -> Send OTP
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number!");
      return;
    }

    // Generate OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);

    console.log("Student Form Data:", formData);
    console.log("OTP Sent:", generatedOtp);

    toast.success(`OTP sent to ${formData.mobile}`);
  };

  // OTP Validation
  const handleOtpValidation = () => {
    if (enteredOtp === otp) {
      toast.success("✅ OTP Verified! Student Enquiry Submitted.");
      console.log("Final Student Data:", formData);

      // Reset
      setFormData({
        name: "",
        mobile: "",
        course: "",
        email: "",
        message: "",
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
      <div className="w-full max-w-md relative bg-white shadow-md rounded-lg p-6 sm:p-8">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ❌
        </Link>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 border-b pb-2">
          Students Enquiry Form
        </h2>

        {/* Step 1: Normal Form */}
        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 10-digit mobile"
              />
            </div>

            <div>
              <label className="block font-medium">
                Which Course? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
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
          // Step 2: OTP Validation
          <div className="space-y-4">
            <p className="text-center text-gray-700">
              OTP sent to <strong>{formData.mobile}</strong>
            </p>
            <input
              type="text"
              maxLength="4"
              placeholder="Enter OTP"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 
                         text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
