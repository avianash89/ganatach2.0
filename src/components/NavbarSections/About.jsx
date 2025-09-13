import React from 'react';


export default function About() {
  return (
    <div className="min-h-screen mt-25 bg-bgprimary py-12 px-4 sm:px-6 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
        About Us
      </h1>

      {/* Welcome Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">GanaTech</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          GanaTech (About Gana Tech Solutions) is an{" "}
          <span className="font-semibold">2012 CERTIFIED</span> company and
          expertise in classroom & online training sources for quality with
          real-time examples at a reasonable cost. Our team designed the course
          modules based on the latest trends and forecasting students' future
          careers, and classes are scheduled to suit students.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          The mission is to provide quality services to students & customers. In
          order to achieve these objectives, Gana Tech (Training & Development)
          focuses on analysing and understanding the requirements of each
          Student / Customer and providing affordable solutions.
        </p>
      </div>

      {/* Vision */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          To become the most respected IT Training, Corporate Training provider,
          Mobile & Web application development and solutions company in the
          world through world-class, quality, result-oriented products and
          services with a focus on emerging technologies — where the best in the
          industry want to work for the job satisfaction and professional growth
          it provides.
        </p>
      </div>

      {/* Values */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Honesty, Integrity and Transparency</li>
          <li>Customer Focus and Commitment</li>
          <li>Respect for the Individual and Environment</li>
          <li>Creativity, Innovation and Quality</li>
          <li>Teamwork and Collaboration</li>
        </ul>
      </div>

      {/* Why Us */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>No.1 Training Institute with Dedicated Trainers and Professionals.</li>
          <li>
            Trainers have 3+ to 12+ years of experience, with in-depth and
            up-to-date knowledge, and passion to TEACH and SHARE knowledge.
          </li>
          <li>Real-time examples for every topic.</li>
          <li>Huge web resources to help in future web projects.</li>
          <li>Free study material for all topics with examples and projects.</li>
          <li>
            Placement Assistance through Gana Tech Placement cell after course
            completion.
          </li>
          <li>
            Project Oriented Training with project management skills, not just
            theory.
          </li>
          <li>
            Interview questions & answers, mock interviews, and 100% placement
            assistance.
          </li>
        </ul>
      </div>
    </div>
  );
}

    