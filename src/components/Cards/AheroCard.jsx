import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AheroCard({
  primaryText = "",
  secondaryText = "",
  icon = "",
  className = "",
  children,
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true, // Animation triggers only once
    amount: 0.3, // Trigger when 30% is visible
    margin: "0px 0px -150px 0px",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between child animations
        delayChildren: 0.2, // Initial delay before children start
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Start 50px to the left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${className} md:h-auto md:w-[240px] bg-[#1B1C1E] flex flex-col rounded-lg pl-6  py-10 pr-10 pb-14 md:pb-10 w-[90%] mx-auto overflow-hidden md:p-8 `}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}>
      {/* Icon */}
      <motion.div className="h-10 w-10 relative" variants={itemVariants}>
        {children}
      </motion.div>

      {/* Primary Text */}
      <motion.div
        className="pt-20 md:pt-14 text-sky-300 pb-8"
        variants={itemVariants}>
        <h3 className="font-semibold md:text-[18px] text-2xl text-wrap">
          {primaryText}
        </h3>
      </motion.div>

      {/* Secondary text */}
      <motion.div variants={itemVariants}>
        {Array.isArray(secondaryText) ? (
          <ul className="text-text-secondary md:text-sm list-disc pl-5 space-y-2">
            {secondaryText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-text-secondary text-wrap md:text-sm">
            {secondaryText}
          </p>
        )}
      </motion.div>

      <motion.span
        className="h-[1px] w-full bg-text-secondary rounded-full mt-8"
        variants={lineVariants}
        style={{ originX: 0 }} // Scale from left
      ></motion.span>
    </motion.div>
  );
}