import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function AdvancePython() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Advance Python Programming Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Master advanced Python programming concepts with Ganatech’s
          industry-focused training program. Learn OOPs, file handling, advanced
          libraries, web frameworks, data science integration, and automation.
        </p>
        <button className="mt-6 bg-white text-yellow-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech Advance Python Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Expert Trainers</h3>
            <p>
              Get trained by certified Python professionals with hands-on
              industry experience in automation, data science, and web
              development.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Real-World Projects</h3>
            <p>
              Work on Python-based projects in data analytics, Django/Flask
              applications, and automation tools to build practical knowledge.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Career Assistance</h3>
            <p>
              Get resume-building guidance, interview preparation, and placement
              assistance in leading IT companies.
            </p>
          </div>
        </div>
      </section>

      {/* About Python Training */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About Advance Python Programming Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Python is one of the most popular programming languages powering AI,
            data science, web applications, and automation. Our Advance Python
            course goes beyond the basics, helping you master advanced topics,
            libraries, and frameworks used in real-world applications.
          </p>
          <p>
            By the end of this training, you’ll be confident in building
            enterprise-grade Python solutions and be job-ready for roles like
            Python Developer, Data Analyst, and Automation Engineer.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Advance Python Programming Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Core Python (Review)</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Advanced Data Types</li>
              <li>File Handling & Exceptions</li>
              <li>Modules & Packages</li>
              <li>Iterators & Generators</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">
              Object-Oriented Programming
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Classes & Objects</li>
              <li>Inheritance & Polymorphism</li>
              <li>Decorators & Metaclasses</li>
              <li>Advanced OOP Patterns</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">
              Python for Data & Web
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pandas & Numpy</li>
              <li>Matplotlib & Seaborn</li>
              <li>Django & Flask Basics</li>
              <li>REST API Development</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Automation & Testing</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Regular Expressions</li>
              <li>Automation with Python</li>
              <li>Unit Testing & PyTest</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-yellow-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Certified in Advance Python Programming
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Showcase your skills with an industry-recognized Python certification
          and stand out as a skilled developer.
        </p>
        <button className="bg-white text-yellow-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Become an Expert in Python Programming!
        </h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s Advance Python Training in Hyderabad and gain
          industry-ready skills for web development, data science, and
          automation.
        </p>
        <button className="bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
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
