import React, { useEffect, useRef, useState } from "react";
import "./Middle2.css";

export default function Middle2() {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState({
    h2: false,
    p: false,
    button: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === h2Ref.current && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, h2: true }));
          }
          if (entry.target === pRef.current && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, p: true }));
          }
          if (entry.target === buttonRef.current && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, button: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (h2Ref.current) observer.observe(h2Ref.current);
    if (pRef.current) observer.observe(pRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="box">
      <div className="box1">
        <h2
          ref={h2Ref}
          className={`text ${visible.h2 ? "animate-up" : ""}`}
        >
          Comprehensive IT Training Services
        </h2>
      </div>

      <div className="box2">
        <p
          ref={pRef}
          className={`text ${visible.p ? "animate-left" : ""}`}
        >
          <span>
            Gana Tech Solutions offers a wide range of IT training services
            designed to cater to the diverse needs of learners. Our comprehensive
            programs focus on delivering in-demand skills and practical knowledge
            to help individuals thrive in the competitive IT landscape.
          </span>
        </p>
        <button
          ref={buttonRef}
          className={visible.button ? "animate-left" : ""}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
