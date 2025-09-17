import React from "react";

export default function AzureSolutionArchitect() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Azure Solution Architect Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Become a certified Azure Solution Architect with Ganatech’s training
          in Hyderabad. Learn cloud infrastructure, networking, security,
          automation, and architecture design with real-time projects.
        </p>
        <button className="mt-6 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech Azure Solution Architect Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Certified Trainers</h3>
            <p>
              Learn directly from Azure certified experts with industry
              experience in designing and implementing cloud solutions.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Hands-On Projects</h3>
            <p>
              Work on real-world Azure cloud projects covering networking,
              compute, storage, and identity management.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Placement Assistance</h3>
            <p>
              Resume preparation, mock interviews, and placement support to help
              you land your dream cloud job.
            </p>
          </div>
        </div>
      </section>

      {/* About Azure Training */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About Azure Solution Architect Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Microsoft Azure is one of the most widely adopted cloud platforms.
            This Azure Solution Architect training covers advanced skills like
            designing cloud infrastructure, security, and hybrid environments.
          </p>
          <p>
            You’ll learn how to plan, deploy, and manage Azure resources,
            implement security controls, and optimize cloud costs with real-time
            projects aligned to industry standards.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Azure Solution Architect Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Azure Basics</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Introduction to Azure Cloud</li>
              <li>Azure Portal & CLI</li>
              <li>Resource Groups & Subscriptions</li>
              <li>Azure Identity & Access Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Networking & Compute</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Azure Virtual Networks (VNet)</li>
              <li>Load Balancers & Firewalls</li>
              <li>Virtual Machines & Scale Sets</li>
              <li>App Services & Containers</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Storage & Databases</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Azure Blob, File & Queue Storage</li>
              <li>SQL Database & Cosmos DB</li>
              <li>Backup & Disaster Recovery</li>
              <li>Monitoring & Cost Optimization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Security & Projects</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Azure Security & Compliance</li>
              <li>DevOps with Azure Pipelines</li>
              <li>Hybrid Cloud Solutions</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-sky-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Azure Solution Architect Certification
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Validate your skills with Microsoft Azure certification and gain an
          edge in the cloud job market with hands-on expertise.
        </p>
        <button className="bg-white text-sky-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Become a Certified Azure Solution Architect!
        </h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s Azure Solution Architect Training in Hyderabad to
          build cloud skills with placement assistance and real-world projects.
        </p>
        <button className="bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition">
          Register Now
        </button>
      </section>
    </div>
  );
}
