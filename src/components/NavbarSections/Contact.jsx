import React from 'react';
import FooterSection from '../sections/FooterSection';

export default function Contact() {
  return (
    <div className="min-h-screen mt-38 bg-bgprimarypy-12 px-4 sm:px-6 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-400 mb-10">
        Contact Us
      </h1>

      {/* Reach Us */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reach Us</h2>
        <p className="text-gray-600 mb-4">
          Contact us @ <span className="font-semibold">Gana Tech</span>
        </p>
        <p className="text-gray-600 leading-relaxed">
          Flat No: 308, 3rd Floor, <br />
          Aditya Enclave, Annapurna Block, <br />
          Satyam Theatre Road, <br />
          Ameerpet, Hyderabad, <br />
          Telangana - 500038
        </p>
        <p className="mt-4 text-gray-600">
          📞 <span className="font-medium">+91 8340901901</span>
        </p>
        <p className="text-gray-600">
          💬 WhatsApp: <span className="font-medium">+91 8340901901</span>
        </p>
      </div>

      {/* About GanaTech */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          About GanaTech
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          GanaTech (About Gana Tech Solutions) is an{" "}
          <span className="font-semibold">2012 CERTIFIED</span> company and
          expertise in classroom & online training sources for quality with
          real-time examples at a reasonable cost. Our team designed the course
          modules based on the latest trends and forecasting students' future
          careers, and also classes are scheduled to suit students.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          To become the most respected IT Training, Corporate Training provider,
          Mobile & Web application development and solutions company in the
          world through world-class, quality, result-oriented products and
          services with a focus on emerging technologies where the best in the
          industry want to work for the job satisfaction and professional growth
          it provides.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Gana Tech not only teaches you just theory but gives assignment
          training on real-time requirements and Project Oriented Training with
          project management skills.
        </p>
      </div>

      {/* Enquiry */}
      <div className="max-w-4xl mb-5 mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enquiry</h2>
        <p className="text-gray-600">
          📞 Phone: <span className="font-medium">+91 8340 901 901</span>
        </p>
        <p className="text-gray-600">
          📧 e-Mail:{" "}
          <a
            href="mailto:info@ganatech.co.in"
            className="text-blue-600 hover:underline"
          >
            info@ganatech.co.in
          </a>
        </p>
      </div>
      <FooterSection/>
    </div>
  );
}

    