import { Container } from "../Container";
import achievementBg from '../../assets/achievementBg.avif'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "50+", label: "Industry-Aligned Courses" },
    { value: "95%", label: "Learner Satisfaction Rate" },
    { value: "20+", label: "Tech Partnerships" },
    { value: "5", label: "Industry Recognitions" },
];

export default function Achievement() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // move image from right (100px) to left (-100px) as user scrolls
    const xRange = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const x = useSpring(xRange, { stiffness: 100, damping: 30 });
    return (
        <div className="bg-bgprimary h-auto w-full pb-10 " ref={ref}>
            <Container className="px-4">
                <div className="h-full w-full bg-gradient-to-t to-bgprimary from-transparent">
                    <div className="w-full flex flex-col items-center pt-4">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-center text-[30px] font-extralight text-text-primary"
                        >
                            We Take Pride in Our Training Excellence
                        </motion.h3>
                    </div>

                    <div>
                        <div className="pt-20">
                            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
                                {stats.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col gap-4 border border-text-secondary md:border-none py-14"
                                    >
                                        <h2 className="text-6xl font-extralight font-global text-primary">{item.value}</h2>
                                        <p className="text-text-secondary px-4 mt-2">{item.label}</p>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="mt-2 h-1 w-[80%] mx-auto bg-text-secondary rounded-full origin-left"
                                        ></motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Background with scroll-based parallax effect */}
            <div className="w-[200vw] h-[30rem] md:h-[30rem] relative overflow-hidden ">
                <motion.img
                    src={achievementBg}
                    style={{ x }} // image moves as you scroll
                    className="w-full h-full -z-10 object-cover object-center"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-bgprimary via-transparent via-80% to-bgprimary z-10"></div>
                
            </div>
        </div>
    )
}
