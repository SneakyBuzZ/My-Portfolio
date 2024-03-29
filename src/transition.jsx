import { motion } from "framer-motion";

function transition(children) {
    return (
        <>
            {children}
            <motion.div
                className="slide-down"
                initial={{ scaleY: 0 }}
                animate={{ scale: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
                className="slide-up"
                initial={{ scaleY: 1 }}
                animate={{ scale: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
                className="slide-right"
                initial={{ scaleX: 0 }}
                animate={{ scale: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
                className="slide-left"
                initial={{ scaleX: 1 }}
                animate={{ scale: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
        </>
    );
}

export default transition;