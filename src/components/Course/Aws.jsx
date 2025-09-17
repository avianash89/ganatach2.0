import React from "react";

export default function AwsSolutionArchitect() {
  const modules = [
    {
      title: "Module 1: Introduction to Cloud Computing",
      objective:
        "Understand the fundamentals of cloud computing, deployment/service models, and importance in IT.",
      topics: [
        "What is Cloud Computing",
        "Key Characteristics of Cloud Computing",
        "Benefits of Cloud Computing",
        "Cloud Deployment Models (Public, Private, Hybrid)",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Cloud Computing vs Traditional Computing",
        "Real-World Use Cases",
        "Introduction to AWS as a Leading Cloud Provider",
      ],
      labs: [
        "Identify real-life examples of cloud computing",
        "Classify workloads into deployment models",
        "Map services like EC2, S3, Gmail, Salesforce to IaaS/PaaS/SaaS",
        "Navigate AWS global infrastructure map",
      ],
    },
    {
      title: "Module 2: Getting Started with AWS",
      objective:
        "Set up and navigate AWS accounts, explore AWS Free Tier, and gain console familiarity.",
      topics: [
        "Introduction to AWS and its core services",
        "AWS global infrastructure: Regions, AZs, Edge Locations",
        "AWS Free Tier overview & limitations",
        "Creating & verifying Free Tier account",
        "AWS Management Console navigation",
        "Shared Responsibility Model",
        "Service categories: Compute, Storage, Networking, Database",
        "Billing console & budgets",
      ],
      labs: [
        "Create & verify AWS Free Tier account with billing alerts",
        "Navigate AWS Console and locate EC2, S3, RDS",
        "Explore regions & availability zones",
        "Set budget alert",
        "Launch & stop a basic EC2 instance",
      ],
    },
    {
      title: "Module 3: IAM & AWS CLI",
      objective:
        "Learn IAM for secure access control and AWS CLI for managing resources efficiently.",
      topics: [
        "IAM basics: Users, Groups, Roles, Policies",
        "Permissions & least privilege principle",
        "Multi-Factor Authentication (MFA)",
        "IAM best practices",
        "Introduction to AWS CLI",
        "Installing & configuring AWS CLI",
        "Managing EC2 & S3 with CLI",
      ],
      labs: [
        "Create IAM users & groups",
        "Enable MFA",
        "Attach IAM policies",
        "Install & configure AWS CLI",
        "List/manage S3 buckets with CLI",
        "Describe EC2 instances with CLI",
      ],
    },
    // 👉 Continue similarly for all Modules 4–15 from PDF
  ];

  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          AWS Solution Architect Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Become an AWS Certified Solutions Architect with Ganatech. Learn cloud
          architecture, scaling, deployment, and hands-on labs aligned with the
          AWS SAA-C03 exam.
        </p>
        <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          AWS Solution Architect Course Curriculum
        </h2>
        <div className="space-y-8">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-3">{mod.title}</h3>
              <p className="mb-3 text-gray-700">
                <span className="font-semibold">Objective:</span> {mod.objective}
              </p>
              <p className="font-semibold">Topics:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                {mod.topics.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
              <p className="font-semibold">Hands-On Labs:</p>
              <ul className="list-disc list-inside text-gray-700">
                {mod.labs.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section className="bg-orange-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get AWS Solution Architect Certification
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Showcase your AWS expertise with globally recognized certification.
          Boost your career with real-time skills in cloud solutions
          architecture.
        </p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your AWS Journey Today!
        </h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s AWS Solution Architect Training to build your
          cloud career with hands-on projects and placement support.
        </p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
          Register Now
        </button>
      </section>
    </div>
  );
}
