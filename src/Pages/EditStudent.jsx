// src/pages/EditStudent.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function EditStudent({ setShowNavbar }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });
  const [loading, setLoading] = useState(true);

  // Hide navbar on this page
  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  // Fetch student data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/students/${id}`)
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to fetch student data");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student);
      toast.success("✅ Student updated successfully!");
      navigate("/admin-dashboard");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to update student");
    }
  };

  if (loading)
    return (
      <p className="text-center text-lg py-10 text-gray-500 animate-pulse">
        Loading student data...
      </p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        {/* Decorative Gradient Circle */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-tr from-purple-400 to-indigo-500 rounded-full opacity-30"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-30"></div>

        <Link
          to="/admin-dashboard"
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-red-500 text-xl sm:text-2xl font-bold">
          ❌
        </Link>
        
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
          Edit Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={student.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={student.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={student.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Course
            </label>
            <input
              type="text"
              name="course"
              placeholder="Enter course"
              value={student.course}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transform transition">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}
