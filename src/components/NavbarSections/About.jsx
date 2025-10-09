import { AheroCard, Container, FooterSection } from "../index";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero2image } from "../images";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const cardVariants2 = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const myMargin = { margin: "0px 0px 0px 0px" };

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div ref={sectionRef} className=" w-full mt-40 relative">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-400 mb-10">
        About Us
      </h1>
      <div className="absolute w-full bg-bgprimary -z-10 top-40"></div>

      <Container className="px-4">
        <div className="w-full mt-0 md:mt-40 md:h-[1199px] md:mb-40 md:flex flex-col md:flex-row border border-text-secondary bg-bgprimary relative">
          {/* Left box */}
          <div className="md:w-1/3 py-20 md:py-0 text-center md:text-start md:border-r w-full border-text-secondary border-b md:border-b-0 px-4 relative overflow-hidden bg-red-50">
            <motion.img
              src={hero2image}
              className="absolute top-0 h-full md:w-full inset-0 object-cover w-[100vw]"
              style={{ scale, x, willChange: "transform" }}
              transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            <motion.div className="flex flex-col gap-y-10 md:mt-30 lg:mt-50 md:pl-10 lg:pl-10 relative z-10">
              <motion.h2
                className="text-3xl text-text-primary"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: myMargin.margin }}>
                <h2>
                  Welcome to <span className="text-blue-600">GanaTech</span>
                </h2>
              </motion.h2>

              <motion.p
                className="text-text-secondary text-lg md:text-start text-center lg:pr-20 overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: myMargin.margin }}>
                <p>
                  GanaTech (About Gana Tech Solutions) is an{" "}
                  <span className="font-semibold">2012 CERTIFIED</span> company
                  and expertise in classroom & online training sources for
                  quality with real-time examples at a reasonable cost. Our team
                  designed the course modules based on the latest trends and
                  forecasting students' future careers, and classes are
                  scheduled to suit students.
                </p>
              </motion.p>
            </motion.div>
          </div>

          {/* Right box */}
          <div className="md:flex-1 relative">
            <div className="h-auto md:px-20 flex flex-col items-center gap-y-10 my-10 md:block">
              <motion.div
                className="md:w-[240px] md:absolute -top-20"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 1 }}
                viewport={{ once: true, amount: 0.2, margin: myMargin.margin }}>
                <AheroCard
                  primaryText="Mission"
                  secondaryText="The mission is to provide quality services to students & customers. In
                    order to achieve these objectives, Gana Tech (Training & Development)
                    focuses on analysing and understanding the requirements of each
                    Student / Customer and providing affordable solutions."
                />
              </motion.div>

              <motion.div
                className="md:w-[240px] md:absolute left-[340px] top-40"
                variants={cardVariants2}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.5 }}
                viewport={{ once: true, amount: 0.2, margin: myMargin.margin }}>
                <AheroCard
                  primaryText="Vision"
                  secondaryText="To become the most respected IT Training, Corporate Training provider,
                        Mobile & Web application development and solutions company in the
                        world through world-class, quality, result-oriented products and
                        services with a focus on emerging technologies — where the best in the
                        industry want to work for the job satisfaction and professional growth
                        it provides."
                />
              </motion.div>

              <motion.div
                className="md:w-[240px] md:absolute top-[580px]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.5 }}
                viewport={{ once: true, amount: 0.2, margin: myMargin.margin }}>
                <AheroCard
                  primaryText="Values"
                  secondaryText={[
                    "Honesty, Integrity and Transparency",
                    "Customer Focus and Commitment",
                    "Respect for the Individual and Environment",
                    "Creativity, Innovation and Quality",
                    "Teamwork and Collaboration",
                  ]}
                />
              </motion.div>

              <motion.div
                className="md:w-[240px] md:absolute -bottom-50 left-[340px]"
                variants={cardVariants2}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3 }}
                viewport={{ once: true, amount: 0.2, margin: myMargin.margin }}>
                <AheroCard
                  primaryText="Why Us?"
                  secondaryText={[
                    "No.1 Training Institute with Dedicated Trainers and Professionals.",
                    "Trainers have 3+ to 12+ years of experience, with in-depth and up-to-date knowledge, and passion to TEACH and SHARE knowledge.",
                    "Real-time examples for every topic.",
                    "Huge web resources to help in future web projects.",
                    "Free study material for all topics with examples and projects.",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
      <FooterSection/>
    </div>
  );
}
