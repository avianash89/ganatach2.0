import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Use your deployed backend URL
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/courses/${id}`);
        console.log("Course data:", res.data);
        setCourse(res.data);
      } catch (err) {
        console.error(err);
        toast.error("❌ Failed to load course details");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading course...</p>
      </div>
    );

  if (!course)
    return (
      <div className="text-center py-20 text-gray-600">Course not found</div>
    );

  const pdfLink = course?.pdfUrl
    ? course.pdfUrl.startsWith("http")
      ? course.pdfUrl
      : `${BASE_URL}${course.pdfUrl}`
    : null;

  return (
    <div className="bg-gray-50 mt-40 md:mt-30 text-gray-800 relative">
      {/* PDF Download Button */}
      {pdfLink && (
        <a
          href={pdfLink}
          download={`${course.title}_Course.pdf`}
          className="absolute top-4 right-6 bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition">
          📘 Download PDF
        </a>
      )}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {course.title} Training in Ameerpet
        </h1>
        <p className="max-w-3xl mx-auto text-lg">{course.description}</p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* WHY CHOOSE GANATECH */}
      {course.whyChoose && course.whyChoose.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Ganatech {course.title} Training?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {course.whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 shadow-lg p-6 rounded-2xl border hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-2 text-center text-blue-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT COURSE */}
      {course.aboutCourse && (
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            About {course.title} Programming Training
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            {course.aboutCourse}
          </p>
        </section>
      )}

      {/* COURSE CURRICULUM */}
      {course.curriculum && course.curriculum.length > 0 && (
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Course Curriculum
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {course.curriculum.map((module, mIdx) => (
              <div
                key={mIdx}
                className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                  {module.title}
                </h3>

                {/* Topics */}
                {module.topics && module.topics.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Topics:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {module.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Labs */}
                {module.labs && module.labs.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Labs / Exercises:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {module.labs.map((lab, lIdx) => (
                        <li key={lIdx}>{lab}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHO CAN JOIN */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Who Can Join This Course?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li>✅ Any Graduate</li>
          <li>✅ Working Professionals</li>
          <li>✅ Career Switchers</li>
          <li>✅ Students Interested in {course.title}</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your {course.title} Journey?
        </h2>
        <p className="mb-6 text-lg">
          Register today and learn from industry experts with hands-on training.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Register Now
        </button>
      </section>
    </div>
  );
}
