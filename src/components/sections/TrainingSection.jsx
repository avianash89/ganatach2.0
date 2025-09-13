import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../Button";
import { Container } from "../Container";
import { trainingBg } from "../images";

export default function TrainingSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // start anim when enters, end when leaves
    });

    // Skew effect for image
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div className="bg-bgprimary w-full py-20" ref={ref}>
            <Container className="px-4">
                <div className="md:h-screen h-auto w-full border border-text-secondary md:flex items-center justify-between flex-col md:flex-row relative overflow-hidden">
                    {/* left */}
                    <motion.div
                        className="h-full md:w-1/2 md:border-r border-b border-text-secondary flex justify-center items-center py-20 px-10 md:p-0 relative overflow-hidden"
                    >
                        <motion.img
                            src={trainingBg}
                            style={{ scale }}
                            className="absolute w-full h-full object-cover inset-0"
                        />
                        <motion.p className="text-text-primary sm:text-4xl text-3xl md:px-20 text-center px-10 z-[2]"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: '0px 0px 70px 0px' }}
                        >
                            Comprehensive IT Training Services
                        </motion.p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="h-full md:w-1/2 text-center md:text-start mb-10"
                    >
                        <motion.div className="mx-auto px-10 md:pt-30 pt-10 md:w-md">
                            <motion.p className="text-text-secondary mb-10 text-lg leading-relaxed"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, margin: '0px 0px 70px 0px' }}
                            >
                                Gana Tech Solutions offers a wide range of IT training services
                                designed to cater to the diverse needs of learners. Our comprehensive
                                programs focus on delivering in-demand skills and practical knowledge
                                to help individuals thrive in the competitive IT landscape.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, margin: '0px 0px 70px 0px' }}

                            >
                                <Button className="px-8 py-4 text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50" text="Learn more" />
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
