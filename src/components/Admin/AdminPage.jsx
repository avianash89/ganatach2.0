import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaLaptopCode,
  FaEdit,
  FaTrash,
  FaFilePdf,
} from "react-icons/fa";

export default function AdminPage({ setShowNavbar }) {
  const [view, setView] = useState("trainer");
  const [trainers, setTrainers] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    pdf: null,
    curriculum: [],
    whyChoose: [
      { title: "Expert Trainers", content: "" },
      { title: "Real-World Projects", content: "" },
      { title: "Career Assistance", content: "" },
    ],
    aboutCourse: "",
  });

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [trainersRes, studentsRes, coursesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/trainers"),
        axios.get("http://localhost:5000/api/students"),
        axios.get("http://localhost:5000/api/courses"),
      ]);
      setTrainers(trainersRes.data);
      setStudents(studentsRes.data);
      setCourses(coursesRes.data);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleDelete = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/${type}s/${id}`);
      if (type === "trainer") setTrainers(trainers.filter((t) => t._id !== id));
      else if (type === "student")
        setStudents(students.filter((s) => s._id !== id));
      else setCourses(courses.filter((c) => c._id !== id));
      toast.success("🗑️ Deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to delete.");
    }
  };

  const handleEdit = (item, type) => {
    if (type === "trainer") window.location.href = `/edit-trainer/${item._id}`;
    else if (type === "student")
      window.location.href = `/edit-student/${item._id}`;
    else if (type === "course") {
      setEditId(item._id);
      setForm({
        title: item.title,
        description: item.description,
        pdf: null,
        curriculum: item.curriculum || [],
        whyChoose: item.whyChoose || [
          { title: "Expert Trainers", content: "" },
          { title: "Real-World Projects", content: "" },
          { title: "Career Assistance", content: "" },
        ],
        aboutCourse: item.aboutCourse || "",
      });
      setView("course");
    }
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description)
      return toast.error("Please fill all fields");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.pdf) formData.append("pdf", form.pdf);
    formData.append("curriculum", JSON.stringify(form.curriculum));
    formData.append("whyChoose", JSON.stringify(form.whyChoose));
    formData.append("aboutCourse", form.aboutCourse);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/courses/${editId}`, formData);
        toast.success("✅ Course updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/courses", formData);
        toast.success("✅ Course added successfully!");
      }
      setForm({
        title: "",
        description: "",
        pdf: null,
        curriculum: [],
        whyChoose: [
          { title: "Expert Trainers", content: "" },
          { title: "Real-World Projects", content: "" },
          { title: "Career Assistance", content: "" },
        ],
        aboutCourse: "",
      });
      setEditId(null);
      fetchAllData();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to save course");
    }
  };

  const addModule = () => {
    setForm({
      ...form,
      curriculum: [...form.curriculum, { title: "", topics: [], labs: [] }],
    });
  };

  const removeModule = (index) => {
    const updated = [...form.curriculum];
    updated.splice(index, 1);
    setForm({ ...form, curriculum: updated });
  };

  const addTopic = (mIdx) => {
    const updated = [...form.curriculum];
    updated[mIdx].topics.push("");
    setForm({ ...form, curriculum: updated });
  };

  const removeTopic = (mIdx, tIdx) => {
    const updated = [...form.curriculum];
    updated[mIdx].topics.splice(tIdx, 1);
    setForm({ ...form, curriculum: updated });
  };

  const addLab = (mIdx) => {
    const updated = [...form.curriculum];
    updated[mIdx].labs.push("");
    setForm({ ...form, curriculum: updated });
  };

  const removeLab = (mIdx, lIdx) => {
    const updated = [...form.curriculum];
    updated[mIdx].labs.splice(lIdx, 1);
    setForm({ ...form, curriculum: updated });
  };

  const dataToShow =
    view === "trainer" ? trainers : view === "student" ? students : courses;

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-purple-100 via-blue-100 to-yellow-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Admin Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["trainer", "student", "course"].map((tab) => (
          <button
            key={tab}
            onClick={() => setView(tab)}
            className={`px-6 py-2 rounded-full font-semibold capitalize ${
              view === tab
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-600 text-blue-600"
            }`}
          >
            {tab === "course" ? "Courses" : `${tab}s`}
          </button>
        ))}
      </div>

      {/* COURSE FORM */}
      {view === "course" && (
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {editId ? "✏️ Edit Course" : "➕ Add New Course"}
          </h2>
          <form
            onSubmit={handleCourseSubmit}
            className="flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <input
              type="text"
              placeholder="Course Title"
              className="border rounded p-2"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              placeholder="Course Description"
              className="border rounded p-2"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setForm({ ...form, pdf: e.target.files[0] })}
            />

            {/* WHY CHOOSE GANATECH */}
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Why Choose Ganatech {form.title || "Course"} Training?
              </h3>
              {form.whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border p-4 rounded-lg mb-4 shadow-sm"
                >
                  <input
                    type="text"
                    placeholder="Card Title"
                    className="border p-2 rounded w-full mb-2"
                    value={item.title}
                    onChange={(e) => {
                      const updated = [...form.whyChoose];
                      updated[idx].title = e.target.value;
                      setForm({ ...form, whyChoose: updated });
                    }}
                  />
                  <textarea
                    placeholder="Card Content"
                    className="border p-2 rounded w-full"
                    value={item.content}
                    onChange={(e) => {
                      const updated = [...form.whyChoose];
                      updated[idx].content = e.target.value;
                      setForm({ ...form, whyChoose: updated });
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ABOUT COURSE */}
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-4">
                About {form.title || "Course"} Programming Training
              </h3>
              <textarea
                placeholder="Write about the course..."
                className="border p-3 rounded w-full h-32"
                value={form.aboutCourse}
                onChange={(e) =>
                  setForm({ ...form, aboutCourse: e.target.value })
                }
              />
            </div>

            {/* CURRICULUM */}
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-4">Course Curriculum</h3>

              {form.curriculum.map((module, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-gray-50 border p-4 rounded-lg mb-4 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-3">
                    <input
                      type="text"
                      placeholder="Module Title"
                      className="border p-2 rounded w-full"
                      value={module.title}
                      onChange={(e) => {
                        const updated = form.curriculum.map((m, i) =>
                          i === mIdx ? { ...m, title: e.target.value } : m
                        );
                        setForm({ ...form, curriculum: updated });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeModule(mIdx)}
                      className="ml-2 text-red-600 font-bold hover:text-red-800"
                    >
                      ✖
                    </button>
                  </div>

                  {/* Topics */}
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Topics</h4>
                    {module.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Enter Topic"
                          className="border p-2 rounded w-full"
                          value={topic}
                          onChange={(e) => {
                            const updatedCurriculum = form.curriculum.map(
                              (m, i) =>
                                i === mIdx
                                  ? {
                                      ...m,
                                      topics: m.topics.map((t, j) =>
                                        j === tIdx ? e.target.value : t
                                      ),
                                    }
                                  : m
                            );
                            setForm({
                              ...form,
                              curriculum: updatedCurriculum,
                            });
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeTopic(mIdx, tIdx)}
                          className="text-red-600 font-bold hover:text-red-800"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addTopic(mIdx)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      + Add Topic
                    </button>
                  </div>

                  {/* Labs */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Labs / Exercises
                    </h4>
                    {module.labs.map((lab, lIdx) => (
                      <div key={lIdx} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Enter Lab / Exercise"
                          className="border p-2 rounded w-full"
                          value={lab}
                          onChange={(e) => {
                            const updatedCurriculum = form.curriculum.map(
                              (m, i) =>
                                i === mIdx
                                  ? {
                                      ...m,
                                      labs: m.labs.map((l, j) =>
                                        j === lIdx ? e.target.value : l
                                      ),
                                    }
                                  : m
                            );
                            setForm({
                              ...form,
                              curriculum: updatedCurriculum,
                            });
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeLab(mIdx, lIdx)}
                          className="text-red-600 font-bold hover:text-red-800"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addLab(mIdx)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      + Add Lab
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addModule}
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
              >
                + Add Module
              </button>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-4"
            >
              {editId ? "Update Course" : "Add Course"}
            </button>
          </form>
        </div>
      )}

      {/* DATA GRID */}
      {dataToShow.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No {view}s found.</p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dataToShow.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center border-t-4 border-blue-500"
            >
              {view !== "course" && (
                <>
                  <div className="bg-gradient-to-tr from-blue-400 to-purple-500 p-1 rounded-full mb-4">
                    <FaUserCircle className="text-white text-8xl rounded-full" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {view === "trainer" ? item.trainerName : item.name}
                  </h2>
                  <div className="w-full space-y-3 text-gray-700 text-sm md:text-base">
                    <p className="flex items-center gap-3">
                      <FaPhone className="text-blue-600" />{" "}
                      {view === "trainer" ? item.phoneNumber : item.mobile}
                    </p>
                    <p className="flex items-center gap-3">
                      <FaEnvelope className="text-red-500" /> {item.email}
                    </p>
                    {view === "trainer" && (
                      <>
                        <p className="flex items-center gap-3">
                          <FaLaptopCode className="text-green-500" />{" "}
                          {item.technology}
                        </p>
                        <p className="flex items-center gap-3">
                          <span className="font-semibold">Experience:</span>{" "}
                          {item.experience} years
                        </p>
                      </>
                    )}
                    {view === "student" && (
                      <p className="flex items-center gap-3">
                        <span className="font-semibold">Course:</span>{" "}
                        {item.course}
                      </p>
                    )}
                  </div>
                </>
              )}

              {view === "course" && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  {item.pdfUrl && (
                    <a
                      href={`http://localhost:5000${item.pdfUrl}`}
                      download
                      className="inline-flex items-center text-red-600 hover:underline mb-3"
                    >
                      <FaFilePdf className="mr-2" /> Download PDF
                    </a>
                  )}
                </>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => handleEdit(item, view)}
                  className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id, view)}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
