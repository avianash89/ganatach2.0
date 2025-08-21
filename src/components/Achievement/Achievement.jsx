import { useEffect, useRef } from "react";
import { Container } from "../Container.jsx";
import achievementBg from "../../assets/achievementBg.avif";
import "./Achievement.css";

const stats = [
  { value: "10K+", label: "Students Trained" },
  { value: "50+", label: "Industry-Aligned Courses" },
  { value: "95%", label: "Learner Satisfaction Rate" },
  { value: "20+", label: "Tech Partnerships" },
  { value: "5", label: "Industry Recognitions" },
];

export default function Achievement() {
  const headingRef = useRef(null);
  const statRefs = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");   // animate in
          } else {
            entry.target.classList.remove("show"); // animate out
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (bgRef.current) observer.observe(bgRef.current);
    statRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="achievement">
      <Container>
        <div className="achievement-content">
          {/* Heading */}
          <h3 className="achievement-heading" ref={headingRef}>
            We Take Pride in Our Training Excellence
          </h3>

          {/* Stats */}
          <div className="stats-wrapper">
            <div className="stats-grid">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="stat-item"
                  style={{ transitionDelay: `${index * 0.2}s` }} // stagger effect
                  ref={(el) => (statRefs.current[index] = el)}
                >
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
      <div className="achievement-bg" ref={bgRef}>
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
