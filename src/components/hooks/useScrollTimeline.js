// useScrollTimeline.js
import { useInView } from "react-intersection-observer";

export const useScrollTimeline = (
    {
        threshold = 0.2,
        once = true,
        stagger = 0.3,
        itemHidden = { opacity: 0, y: 40 },
        itemShow = { opacity: 1, y: 0 },
        itemTransition = { duration: 0.6, ease: "easeOut" },
    } = {}
) => {
    const { ref, inView } = useInView({ threshold, triggerOnce: once });

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };

    const item = {
        hidden: itemHidden,
        show: { ...itemShow, transition: itemTransition },
    };

    return { ref, inView, container, item };
};
