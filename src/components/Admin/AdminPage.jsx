// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaLaptopCode,
  FaWhatsapp,
  FaEdit,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

export default function AdminPage({ setShowNavbar }) {
  const [view, setView] = useState("trainer"); // "trainer" or "student"
  const [trainers, setTrainers] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const [trainersRes, studentsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/trainers"),
          axios.get("http://localhost:5000/api/students"),
        ]);
        setTrainers(trainersRes.data);
        setStudents(studentsRes.data);
        setLoading(false);
        toast.success("✅ Data loaded successfully!");
      } catch (err) {
        console.error(err);
        toast.error("❌ Failed to fetch data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      if (type === "trainer") {
        await axios.delete(`http://localhost:5000/api/trainers/${id}`);
        setTrainers(trainers.filter((t) => t._id !== id));
        toast.success("🗑️ Trainer deleted successfully!");
      } else {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        setStudents(students.filter((s) => s._id !== id));
        toast.success("🗑️ Student deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to delete.");
    }
  };

  const handleEdit = (id, type) => {
    if (type === "trainer") {
      window.location.href = `/edit-trainer/${id}`;
    } else {
      window.location.href = `/edit-student/${id}`;
    }
  };

  const dataToShow = view === "trainer" ? trainers : students;

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 px-4">
        <p className="text-center text-lg py-10">Loading...</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 px-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-700">
          Admin Dashboard
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setView("trainer")}
            className={`px-6 py-2 rounded-full font-semibold ${
              view === "trainer"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600"
            } transition`}
          >
            Trainers
          </button>
          <button
            onClick={() => setView("student")}
            className={`px-6 py-2 rounded-full font-semibold ${
              view === "student"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 border border-green-600"
            } transition`}
          >
            Students
          </button>
        </div>

        {/* Grid of cards */}
        {dataToShow.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No {view}s found.</p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {dataToShow.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center border-t-4 border-blue-500"
              >
                <div className="bg-gradient-to-tr from-blue-400 to-purple-500 p-1 rounded-full mb-4">
                  <FaUserCircle className="text-white text-8xl rounded-full" />
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {view === "trainer" ? item.trainerName : item.name}
                </h2>

                <div className="w-full space-y-3 text-gray-700 text-sm md:text-base">
                  <p className="flex items-center gap-3">
                    <FaPhone className="text-blue-600" />{" "}
                    {view === "trainer" ? item.phoneNumber : item.mobile}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope className="text-red-500" /> {item.email}
                  </p>

                  {view === "trainer" ? (
                    <>
                      <p className="flex items-center gap-3">
                        <FaLaptopCode className="text-green-500" /> {item.technology}
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="font-semibold">Experience:</span> {item.experience} years
                      </p>
                    </>
                  ) : (
                    <p className="flex items-center gap-3">
                      <span className="font-semibold">Course:</span> {item.course}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleEdit(item._id, view)}
                    className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 shadow-md"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id, view)}
                    className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 hover:scale-105 transition-transform duration-300 shadow-md"
                  >
                    <MdDelete /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <a
          href="https://wa.me/918340901901"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}

