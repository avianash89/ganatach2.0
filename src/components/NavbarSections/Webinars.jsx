import React from "react";

export default function Webinars() {
  const webinars = [
    {
      title: "Mastering Data Science",
      date: "20th Sept 2025",
      time: "7:00 PM - 8:30 PM IST",
      speaker: "Dr. Anil Kumar",
      link: "#",
    },
    {
      title: "Cloud Computing with AWS",
      date: "25th Sept 2025",
      time: "6:00 PM - 7:30 PM IST",
      speaker: "Sneha Verma",
      link: "#",
    },
    {
      title: "AI & Machine Learning Trends 2025",
      date: "30th Sept 2025",
      time: "5:30 PM - 7:00 PM IST",
      speaker: "Ravi Sharma",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen mt-30 bg-bgprimary py-12 px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-400 mb-4">
        Upcoming Webinars
      </h2>
      <p className="text-center text-gray-100 max-w-2xl mx-auto mb-10">
        Join our live webinars hosted by industry experts. Stay updated with the
        latest trends in technology and enhance your skills.
      </p>

      {/* Webinars Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {webinar.title}
              </h3>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {webinar.date}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Time:</strong> {webinar.time}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Speaker:</strong> {webinar.speaker}
              </p>
            </div>
            <a
              href={webinar.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
