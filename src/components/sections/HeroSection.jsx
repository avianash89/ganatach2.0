import { Button, Container } from "../index";
import { motion } from "framer-motion";
import { useScrollTimeline } from "../hooks/useScrollTimeline";

export default function HeroSection() {

    const { ref, inView, container, item } = useScrollTimeline({
        threshold: 0.2,
        stagger: 0.25,
        itemHidden: { opacity: 0, x: -80 },
        itemShow: { opacity: 1, x: 0 },
        itemTransition: { duration: 1, ease: "easeOut" },
    });

    return (
        <div className="w-full h-auto mx-auto" ref={ref}>
            <Container className="px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="md:pt-80 pt-56 md:pb-40 pb-20 max-h-full flex flex-col items-start w-full"
                >
                    <motion.h1
                        variants={item}
                        className="text-6xl text-white tracking-lose md:text-8xl md:leading-28"
                    >
                        Empower <br /> Your IT Career
                        with <br /> Gana Tech Solutions
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-neutral-300 mt-12 sm:text-xl text-start md:text-4xl"
                    >
                        Use Data to Get a 360-Degree <br /> View of Your Business
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-14 flex justify-between items-center gap-x-2 w-full"
                    >
                        <Button
                            className="px-6 flex-1 py-2 md:hidden dark:text-text-primary text-md text-nowrap border-amber-50 hover:bg-transparent hover:text-amber-50"
                            text="get start"
                        />

                        <Button
                            className="px-8 py-2 md:py-4 text-md text-nowrap text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
                            text="Learn more"
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}
