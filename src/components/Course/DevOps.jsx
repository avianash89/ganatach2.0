import React from "react";

export default function DevOps() {
  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          DevOps Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Accelerate your career with Ganatech’s DevOps Training in Hyderabad.
          Learn Continuous Integration, Continuous Deployment, Docker,
          Kubernetes, Jenkins, Git, AWS Cloud, and more with hands-on projects.
        </p>
        <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Ganatech DevOps Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Industry Experts</h3>
            <p>
              Learn from certified DevOps engineers with real-time project
              expertise in CI/CD pipelines and automation.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Hands-On Labs</h3>
            <p>
              Work on live projects with Git, Jenkins, Docker, Kubernetes, AWS,
              and monitoring tools for real-time experience.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-lg mb-3">Placement Support</h3>
            <p>
              Crack interviews with mock tests, resume building, and guaranteed
              placement assistance from Ganatech.
            </p>
          </div>
        </div>
      </section>

      {/* About DevOps Training */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          About DevOps Training
        </h2>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            DevOps is the most in-demand IT methodology that integrates
            development and operations to deliver applications faster. This
            training program equips you with practical skills in automation,
            containerization, CI/CD, and cloud deployment.
          </p>
          <p>
            At Ganatech, you’ll gain hands-on knowledge of tools like Git,
            Jenkins, Docker, Kubernetes, Terraform, Ansible, and AWS Cloud to
            build and deploy scalable, reliable systems.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          DevOps Course Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Version Control & CI/CD</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Git & GitHub Basics</li>
              <li>Continuous Integration with Jenkins</li>
              <li>Pipeline Automation</li>
              <li>Build & Deployment Strategies</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Containerization & Orchestration</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Docker & Docker Compose</li>
              <li>Kubernetes Architecture</li>
              <li>Pods, Deployments, Services</li>
              <li>Helm & Cluster Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Infrastructure Automation</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Infrastructure as Code with Terraform</li>
              <li>Configuration Management with Ansible</li>
              <li>Monitoring with Prometheus & Grafana</li>
              <li>Logging with ELK Stack</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-3">Cloud & Real Projects</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>AWS Cloud Services for DevOps</li>
              <li>CI/CD on AWS</li>
              <li>Deploying Microservices</li>
              <li>Capstone Project</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get DevOps Certification
        </h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Gain globally recognized DevOps certification and showcase your
          expertise in automation, CI/CD pipelines, and cloud deployments.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Kickstart Your DevOps Career!</h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s DevOps Training in Hyderabad to master cloud,
          automation, and CI/CD skills with placement assistance.
        </p>
        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Register Now
        </button>
      </section>
    </div>
  );
}
