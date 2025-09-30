import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaLaptopCode,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TrainerNavbar from "../NavbarSections/TrainerNavbar.jsx";
import toast from "react-hot-toast";

export default function TrainerPage({ setShowNavbar }) {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hide Navbar when entering this page
  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, []);

  // Fetch trainers
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trainers")
      .then((res) => {
        setTrainers(res.data);
        setLoading(false);
        toast.success("✅ Trainers loaded successfully!");
      })
      .catch((err) => {
        console.error("Error fetching trainers:", err);
        toast.error("❌ Failed to fetch trainers.");
        setLoading(false);
      });
  }, []);

  // Delete trainer
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this trainer?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/trainers/${id}`);
      setTrainers(trainers.filter((trainer) => trainer._id !== id));
      toast.success("🗑️ Trainer deleted successfully!");
    } catch (err) {
      console.error("Error deleting trainer:", err);
      toast.error("❌ Failed to delete trainer.");
    }
  };

  if (loading)
    return <p className="text-center text-lg py-10">Loading trainers...</p>;

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <TrainerNavbar />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700 tracking-wide">
        Our Trainers
      </h1>

      {trainers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No trainers available.
        </p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center border-t-4 border-blue-500">
              <div className="bg-gradient-to-tr from-blue-400 to-purple-500 p-1 rounded-full mb-4">
                <FaUserCircle className="text-white text-8xl rounded-full" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {trainer.trainerName}
              </h2>

              <div className="w-full space-y-3 text-gray-700 text-sm md:text-base">
                <p className="flex items-center gap-3">
                  <FaPhone className="text-blue-600" /> {trainer.phoneNumber}
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-red-500" /> {trainer.email}
                </p>
                <p className="flex items-center gap-3">
                  <FaLaptopCode className="text-green-500" />{" "}
                  {trainer.technology}
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold">Experience:</span>{" "}
                  {trainer.experience} years
                </p>
              </div>

              <button
                onClick={() => handleDelete(trainer._id)}
                className="mt-6 flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 hover:scale-105 transition-transform duration-300 shadow-md">
                <MdDelete /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <a
        href="https://wa.me/918340901901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50">
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
