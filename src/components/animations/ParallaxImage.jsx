import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxImage = ({ src, alt, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Zoom effect: Scales up slightly as you scroll down
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // Parallax effect: Moves slightly opposite to scroll
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ overflow: "hidden", position: "relative" }}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{
                    scale,
                    y,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
};
