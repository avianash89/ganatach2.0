import { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen mt-25 flex items-center justify-center bg-bgprimary px-4 sm:px-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 border-b pb-2">
          Students Enquiry Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Course */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 rounded-md text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
