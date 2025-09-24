import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MachineLearning() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Machine Learning Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Master Machine Learning with Python, Deep Learning, Supervised &
          Unsupervised Learning, and AI Applications. Learn from basics to
          advanced level with Ganatech’s hands-on training program.
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech ML Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Industry Experts
            </h3>
            <p>
              Learn from experienced Machine Learning professionals with
              real-time projects and practical knowledge.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Flexible Training
            </h3>
            <p>
              Choose from 3-month intensive training or weekend sessions designed
              for working professionals.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Placement Assistance
            </h3>
            <p>
              Gain the skills needed for top MNC jobs with placement support and
              interview preparation.
            </p>
          </div>
        </div>
      </section>

      {/* About Machine Learning */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About Machine Learning Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Machine Learning is a branch of Artificial Intelligence that enables
            systems to learn from data without explicit programming. In this
            course, you’ll learn supervised learning, unsupervised learning,
            reinforcement learning, and deep learning concepts.
          </p>
          <p>
            Our curriculum covers real-world use cases like recommendation
            systems, fraud detection, image classification, natural language
            processing, and predictive analytics.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Machine Learning Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Core ML Topics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Introduction to Machine Learning</li>
              <li>Supervised Learning</li>
              <li>Unsupervised Learning</li>
              <li>Reinforcement Learning</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Python & Libraries</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python for ML</li>
              <li>NumPy, Pandas, Matplotlib</li>
              <li>Scikit-learn</li>
              <li>TensorFlow & Keras Basics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Applications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Recommendation Systems</li>
              <li>Image Recognition</li>
              <li>Natural Language Processing</li>
              <li>Predictive Analytics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Projects</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Spam Email Detection</li>
              <li>Movie Recommendation System</li>
              <li>Customer Churn Prediction</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-emerald-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Earn Your Machine Learning Certificate
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Validate your expertise in Machine Learning with an industry-recognized
          certification. Showcase your skills and boost your career
          opportunities in AI/ML domains.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Machine Learning Journey Today!
        </h2>
        <p className="mb-6 text-lg">
          Enroll now to gain hands-on expertise in ML and secure a high-paying
          career in AI and Data Science.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Register Now
        </button>
      </section>
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
