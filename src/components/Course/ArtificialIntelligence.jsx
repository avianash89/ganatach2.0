import React from "react";

export default function ArtificialIntelligence() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Artificial Intelligence Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Become a skilled AI professional with hands-on training in Machine
          Learning, Deep Learning, TensorFlow, Neural Networks, and NLP.
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech AI Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Certified Trainers
            </h3>
            <p>
              Learn directly from industry experts who specialize in Artificial
              Intelligence and related fields.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              3 Months + Weekend Sessions
            </h3>
            <p>
              Flexible sessions for both students and working professionals.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">
              Career-Oriented
            </h3>
            <p>
              Build strong knowledge foundations and secure a future-proof career
              in AI.
            </p>
          </div>
        </div>
      </section>

      {/* About AI */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About Artificial Intelligence Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Artificial Intelligence (AI) has a long history but is rapidly
            evolving with new applications. In this course, you’ll learn the
            basics of AI along with advanced topics like Data Science, Machine
            Learning, Deep Learning, Statistics, Neural Networks, Restricted
            Boltzmann Machine (RBM), and TensorFlow with Python.
          </p>
          <p>
            Our AI Training Program is designed with IBM and Ganatech to make
            learners job-ready by mastering advanced tools, frameworks, and
            models for real-world applications.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          AI Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">
              Core AI Concepts
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Artificial Intelligence Fundamentals</li>
              <li>Machine Learning Basics</li>
              <li>Deep Learning Concepts</li>
              <li>Neural Networks</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Tools & Libraries</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python for AI</li>
              <li>Google TensorFlow</li>
              <li>Tensor Processing Unit (TPU)</li>
              <li>Scikit-learn, NumPy, Pandas</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Applications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Natural Language Processing</li>
              <li>Image Recognition</li>
              <li>Speech Recognition</li>
              <li>Recommendation Systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Hands-on Projects</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Case Studies & Real-time Projects</li>
              <li>Capstone Project</li>
              <li>Job-ready Assignments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Earn Your AI Training Certificate
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Showcase your skills with industry-recognized certification. This
          certificate proves your mastery in AI and differentiates you from
          others in the job market.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Become an AI Expert?
        </h2>
        <p className="mb-6 text-lg">
          Register now and step into the future of technology with Artificial
          Intelligence Training in Hyderabad.
        </p>
        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
          Register Now
        </button>
      </section>
    </div>
  );
}
