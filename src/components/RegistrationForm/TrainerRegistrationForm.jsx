import { useState } from "react";

export default function TrainerRegistrationForm() {
  const [formData, setFormData] = useState({
    trainerName: "",
    phoneNumber: "",
    email: "",
    technology: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trainer Data:", formData);
    alert("Trainer Registration Submitted!");
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-bgprimary px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 border-b pb-2 text-gray-800">
          Trainer Registration
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Trainer Name */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Technology */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 sm:py-3 px-4 rounded-md hover:bg-green-700 transition text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
