import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function DataScience() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Data Science Training in Ameerpet
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn Data Analytics, Python, R programming, Machine Learning, AI, and
          more from Beginner to Advanced with real-time scenarios and assured
          placements.
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Gana Tech Solutions?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Real-Time Projects
            </h3>
            <p>
              Work on industry-level projects and case studies to gain practical
              experience.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Flexible Timings
            </h3>
            <p>
              Weekend and weekday batches for working professionals & students.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              100% Placement Assistance
            </h3>
            <p>
              Dedicated placement support to help you get into top MNCs.
            </p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Course Curriculum
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Module 1: Python Basics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Data Types, Lists, Dictionaries, Tuples</li>
              <li>Loops & Functions</li>
              <li>Pandas & NumPy</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Module 2: Statistics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Probability & Hypothesis Testing</li>
              <li>Regression Analysis</li>
              <li>Correlation & ANOVA</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">
              Module 3: Machine Learning
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Linear & Logistic Regression</li>
              <li>Decision Trees & Random Forest</li>
              <li>Clustering & PCA</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Module 4: Advanced</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Deep Learning (ANN, CNN, RNN)</li>
              <li>Natural Language Processing</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Who Can Join This Course?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li>✅ Any Graduate</li>
          <li>✅ Professionals from BPO, Finance, Accounting</li>
          <li>✅ Management Professionals</li>
          <li>✅ Anyone looking to switch careers with high package</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Data Science Journey?
        </h2>
        <p className="mb-6 text-lg">
          Register today and learn from industry experts with hands-on training.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Register Now
        </button>
      </section>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918340901901" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
