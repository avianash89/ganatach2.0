import { AheroCard, Container } from '../index'
import { motion, useScroll, useTransform } from "framer-motion"
import { hero2image } from '../images';
import { useRef } from 'react';
// import icons 
import { IconCloudCode, IconStack2, IconBrandSentry, IconUsers } from '@tabler/icons-react'

const cardVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const cardVariants2 = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const myMargin = { margin: "0px 0px 0px 0px" }

export default function AHeroSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Scale from 1 to 1.3 as user scrolls
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

    // Move from right to left (start at 50px right, end at -20px left)
    const x = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <div ref={sectionRef} className="h-auto w-full mt-80 relative">
            <div className="absolute w-full h-full bg-bgprimary -z-10 top-40"></div>

            <Container className="px-4">
                <div className="w-full md:h-[1199px] md:mb-40 md:flex flex-col md:flex-row border border-text-secondary bg-bgprimary relative">

                    {/* Left box */}
                    <div className="md:w-1/3 py-20 md:py-0 text-center md:text-start md:border-r w-full border-text-secondary border-b md:border-b-0 px-4 relative overflow-hidden bg-red-50">
                        <motion.img
                            src={hero2image}
                            className='absolute top-0 h-full md:w-full inset-0 object-cover w-[100vw]'
                            style={{
                                scale,
                                x,
                                willChange: 'transform'
                            }}
                            transition={{
                                type: "tween",
                                ease: "linear",
                                duration: 0
                            }}
                        />
                        <motion.div className="flex flex-col gap-y-10 md:mt-30 lg:mt-50 md:pl-10 lg:pl-10 relative z-10"
                        >
                            <motion.h2
                                className="text-3xl text-text-primary"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: myMargin.margin }}
                            >
                                Your Path to a Future- <br />Ready IT Career
                            </motion.h2>

                            <motion.p
                                className="text-text-secondary text-lg md:text-start text-center lg:pr-20 overflow-hidden"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, margin: myMargin.margin }}
                            >
                                At Gana Tech Solutions, we are dedicated to providing a platform for individuals to transform their IT skills and knowledge...
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
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                    margin: myMargin.margin
                                }}
                            >
                                <AheroCard
                                    children={<IconCloudCode className='text-primary h-full w-full' />}
                                    primaryText="Comprehensive Cloud Analytics Training"
                                    secondaryText="Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations."
                                />
                            </motion.div>

                            <motion.div
                                className="md:w-[240px] md:absolute left-[340px] top-40"
                                variants={cardVariants2}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 0.5 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                    margin: myMargin.margin
                                }}
                            >
                                <AheroCard
                                    children={<IconStack2 className='h-full w-full text-primary' />}
                                    primaryText="Accelerate Your Career in Data Science"
                                    secondaryText="Discover the world of data science at Gana Tech Solutions and gain expertise in data analysis, machine learning, and predictive modeling to solve complex business challenges and drive informed decision-making."
                                />
                            </motion.div>

                            <motion.div
                                className="md:w-[240px] md:absolute top-[580px]"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 0.5 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                    margin: myMargin.margin
                                }}
                            >
                                <AheroCard
                                    children={<IconBrandSentry className='h-full w-full text-primary' />}
                                    primaryText="Versatile Application Development Courses"
                                    secondaryText="Explore a wide range of application development courses at Gana Tech Solutions, where you can master the skills needed to build scalable and secure applications across various platforms and technologies"
                                />
                            </motion.div>

                            <motion.div
                                className="md:w-[240px] md:absolute -bottom-20 left-[340px]"
                                variants={cardVariants2}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 0.3 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                    margin: myMargin.margin
                                }}
                            >
                                <AheroCard
                                    children={<IconUsers className='h-full w-full text-primary' />}
                                    primaryText="Superior Customer Experience and Support"
                                    secondaryText="At Gana Tech Solutions, we prioritize the learning experience of our students and provide exceptional support to ensure their success in the IT industry."
                                />
                            </motion.div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}