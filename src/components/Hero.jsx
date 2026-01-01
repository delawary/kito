import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StaggerText } from './animations/StaggerText.jsx';
import heroBg from '../assets/hero_bg_premium.png';
import '../styles/global.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Background parallax & scale
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section className="hero-section" ref={ref}>
            <motion.div
                className="hero-background-wrapper"
                style={{ y, scale, opacity }}
            >
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${heroBg})` }}
                ></div>
                <div className="hero-overlay"></div>
            </motion.div>

            <div className="hero-content container">
                <h1 className="hero-title">
                    <StaggerText text="自然と、生きる。" className="hero-title-main" delay={0.5} />
                    <br />
                    <motion.span
                        className="hero-title-sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        CLTが拓く、建築の未来
                    </motion.span>
                </h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 2.0, duration: 1 }}
                >
                    KITO - The Future of Wood Architecture
                </motion.p>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <span className="line"></span>
                    SCROLL
                </motion.div>
            </div>

            <style>{`
            .hero-section {
                position: relative;
                height: 100vh;
                width: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                color: var(--color-text-light);
            }

            .hero-background-wrapper {
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                z-index: 1;
            }

            .hero-background {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }

            .hero-overlay {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
            }

            .hero-content {
                position: relative;
                z-index: 3;
                width: 100%;
                padding-top: 10vh;
                /* Allow text to wrap nicely */
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%; 
            }

            .hero-title {
                font-family: var(--font-family-serif);
                font-size: clamp(3.5rem, 8vw, var(--font-size-hero));
                line-height: 1.1;
                margin-bottom: 2rem;
                font-weight: 300;
                letter-spacing: -0.02em;
                text-shadow: 0 4px 10px rgba(0,0,0,0.3);
            }
            
            /* Override StaggerText container inline style to block for main title */
            .hero-title-main {
                display: block !important;
                text-align: left; /* Or center based on design */
            }

            .hero-title-sub {
                display: block;
                font-size: clamp(1.5rem, 3vw, 2.5rem);
                margin-top: 1rem;
                opacity: 0.9;
                font-weight: 300;
            }

            .hero-subtitle {
                font-family: var(--font-family-sans);
                font-size: var(--font-size-lg);
                letter-spacing: 0.3em;
                text-transform: uppercase;
                margin-left: 4px;
            }

            .scroll-indicator {
                position: absolute;
                bottom: 3rem;
                left: var(--spacing-padding-desktop);
                display: flex;
                align-items: center;
                gap: 1rem;
                font-family: var(--font-family-sans);
                font-size: 0.8rem;
                letter-spacing: 0.2em;
            }

            .scroll-indicator .line {
                width: 60px;
                height: 1px;
                background-color: white;
            }
        `}</style>
        </section>
    );
};

export default Hero;
