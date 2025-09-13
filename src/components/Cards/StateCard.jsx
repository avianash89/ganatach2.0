const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "50+", label: "Industry-Aligned Courses" },
    { value: "95%", label: "Learner Satisfaction Rate" },
    { value: "20+", label: "Tech Partnerships" },
    { value: "5", label: "Industry Recognitions" },
];

export default function StateCard({ }) {
    return (
        <div className="bg-black text-red-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                {stats.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-3xl font-bold">{item.value}</h2>
                        <p className="text-gray-300 mt-2">{item.label}</p>
                        <div className="mt-2 h-0.5 w-16 mx-auto bg-gray-700"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
