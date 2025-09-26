import pdfFile from "../../assets/aws_solution_architect.pdf";

export default function ViewCourse() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = coursePDF;
    link.download = "AWS Soution Architect Associate Course Curriculum.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen mt-25 flex flex-col items-center justify-center bg-bgprimary p-4">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-400">
        Course Curriculum View and Download
      </h2>

      {/* PDF Preview */}
      <div className="w-full max-w-4xl h-[400px] sm:h-[500px] md:h-[700px] bg-white shadow-lg border rounded-lg overflow-hidden">
        <iframe
          src={coursePDF}
          title="AWS Soution Architect Associate Course Curriculum"
          className="w-full h-full"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md justify-center">
        <a
          href={coursePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View in New Tab
        </a>
        <button
          onClick={handleDownload}
          className="w-full sm:w-auto text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Download
        </button>
      </div>
    </div>
  );
}
