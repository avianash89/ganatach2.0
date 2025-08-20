import { Container } from "../Container.jsx";
import achievementBg from '../../assets/achievementBg.avif';
import './Achievement.css'

const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "50+", label: "Industry-Aligned Courses" },
    { value: "95%", label: "Learner Satisfaction Rate" },
    { value: "20+", label: "Tech Partnerships" },
    { value: "5", label: "Industry Recognitions" },
];

export default function Achievement() {
    return (
        <div className="achievement">
            <Container>
                <div className="achievement-content">
                    {/* Heading */}
                    <h3 className="achievement-heading">
                        We Take Pride in Our Training Excellence
                    </h3>

                    {/* Stats */}
                    <div className="stats-wrapper">
                        <div className="stats-grid">
                            {stats.map((item, index) => (
                                <div className="stat-item">
                                    <h2 className="stat-value">{item.value}</h2>
                                    <p className="stat-label">{item.label}</p>
                                    <div className="stat-line"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border"></div>
                </div>
            </Container>

            {/* Background image */}
            <div className="achievement-bg">
                <img
                    src={achievementBg}
                    className="bg-img"
                    alt="Achievements Background"
                />
                <div className="bg-overlay"></div>
            </div>
        </div>
    );
}

