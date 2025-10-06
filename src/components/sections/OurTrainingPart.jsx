import { Button, Container } from '../index'
import { useRef } from 'react';
import {
    Mikron,
    Pome,
    Velocity,
    Garmosh,
    careerBG
} from '../images'
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurTrainingPart() {

    // Animation variants for smooth fade + slide
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"], // start when top enters, end when bottom leaves
    });

    // Map scroll progress to scale (1 → 1.2 zoom)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // smooth fade in

    return (
        <div className='bg-bgprimary py-10'>
            <Container className='px-4'>
                <motion.div
                    className='h-full w-full grid md:grid-cols-5 md:grid-rows-4 border border-text-secondary relative sm:grid-cols-2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                >
                    {/* our training */}
                    <motion.div
                        className='border-r border-b border-text-secondary flex items-center justify-center md:text-text-primary text-text-secondary md:text-3xl md:font-thin text-start w-full h-72 md:h-full md:w-full text-4xl font-bold'
                        variants={fadeUp}
                    >
                        <h3>
                            Our <br /> Training <br />Partners
                        </h3>
                    </motion.div>

                    {/* Partner Logos */}
                    {[Mikron, Pome, Velocity, Garmosh].map((img, i) => (
                        <motion.div
                            key={i}
                            className={`border-b border-text-secondary flex items-center justify-center p-14 w-full h-72 md:h-full md:w-full ${i < 3 ? 'border-r' : 'sm:border-r md:border-r-transparent'}`}
                            variants={fadeUp}
                            viewport={{ once: true, margin: '0px 0px 70px 0px' }}
                        >
                            <img src={img} className='w-full object-center object-cover' />
                        </motion.div>
                    ))}

                    {/* Background career section */}
                    <motion.div
                        ref={ref}
                        className='md:col-span-3 md:row-span-4 border-r border-text-secondary border-b md:border-b-transparent w-full relative h-72 md:h-full md:w-full overflow-hidden'
                        variants={fadeUp}
                    >
                        <motion.img
                            src={careerBG}
                            className="h-full w-full object-cover"
                            style={{ scale, opacity }}
                            viewport={{ margin: '0px 0px -70px 0px' }}

                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                            <motion.p
                                initial={{ opacity: 0, scale: 2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                                className='text-text-primary z-20 text-3xl'>
                                Ready to Build Your IT Career?
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Text & Button */}
                    <motion.div
                        className='md:col-span-2 md:row-span-4 md:w-[55%] md:mx-auto flex justify-center md:items-start flex-col gap-y-6 md:m-0 mx-8 my-8 items-start'

                    >
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                            className='text-text-secondary font-extralight font-global leading-relaxed tracking-wide'>
                            Embark on a transformative journey with Gana Tech Solutions and unlock the potential for a successful IT career. Explore our range of IT training programs and take the first step towards a rewarding professional future.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4 }}
                            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                        >
                            <Button className='md:px-8 md:py-4 w-full md:w-auto text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                        </motion.div>

                    </motion.div>
                </motion.div>
            </Container>
        </div>
    )
}
