import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function LinuxAdministration() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Linux Administration Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Master Linux Administration with Ganatech’s training program in
          Hyderabad. Learn Linux fundamentals, shell scripting, system
          administration, server management, and security with hands-on labs.
        </p>
        <button className="mt-6 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech Linux Administration Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Expert Trainers</h3>
            <p>
              Get trained by industry professionals with real-time experience in
              Linux administration and server management.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Hands-On Labs</h3>
            <p>
              Practical labs on Linux installation, configuration, networking,
              monitoring, and troubleshooting to boost your skills.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Placement Support</h3>
            <p>
              Resume building, interview preparation, and job assistance with
              leading IT companies in system admin roles.
            </p>
          </div>
        </div>
      </section>

      {/* About Linux Training */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About Linux Administration Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Linux powers over 70% of servers worldwide. This Linux
            Administration course equips you with the knowledge and hands-on
            skills to manage Linux systems efficiently, including user
            management, networking, and security.
          </p>
          <p>
            You will also learn how to monitor performance, configure services,
            automate tasks with shell scripting, and prepare for global Linux
            certifications like RHCSA and RHCE.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Linux Administration Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Linux Basics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Introduction to Linux</li>
              <li>File System Structure</li>
              <li>Linux Commands & Navigation</li>
              <li>Users and Groups Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">System Administration</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Package Management (RPM, YUM, APT)</li>
              <li>Process Management</li>
              <li>System Monitoring & Performance Tuning</li>
              <li>Shell Scripting Basics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Networking & Security</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Network Configuration</li>
              <li>Firewall & iptables</li>
              <li>SELinux & Security Policies</li>
              <li>Server Security Best Practices</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Advanced Topics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Linux File Permissions</li>
              <li>Backup & Recovery</li>
              <li>Systemd & Services</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-gray-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Certified in Linux Administration
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Prepare for RHCSA, RHCE, and other Linux certifications with our
          structured training and practice labs.
        </p>
        <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Career as a Linux Administrator!
        </h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s Linux Administration Training in Hyderabad and
          gain real-world system admin skills with placement assistance.
        </p>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
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
