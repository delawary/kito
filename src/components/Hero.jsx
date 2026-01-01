import React from 'react';
/* 
   Note: In a real environment, we would import the image from a local path relative to this file.
   However, since the images were generated to the artifacts folder, I will assume they are copied
   to src/assets/ or referenced correctly. For now, I will update the import assuming the image
   is in ../assets/hero_bg_premium.png. 
   **CRITICAL**: I must ensure the file exists there. I will handle the file copy in the next step.
*/
// import heroBg from '../assets/hero_bg_premium.png'; // Placeholder for now, original uses import
// Using the path relative to where I will put the image
import heroBg from '../assets/hero_bg_premium.png';

import '../styles/global.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title fade-in-up">
                    自然と、生きる。
                    <br />
                    <span className="hero-title-sub">CLTが拓く、建築の未来</span>
                </h1>
                <p className="hero-subtitle fade-in-up delay-1">
                    KITO - The Future of Wood Architecture
                </p>
                <div className="scroll-indicator fade-in-up delay-2">
                    <span className="line"></span>
                    SCROLL
                </div>
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

            .hero-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                z-index: 1;
                /* Enhanced Parallax */
                transform: scale(1.1); 
                transition: transform 10s ease-out;
            }
            
            /* Simple zoom effect on load if we added JS, for now static but prepared */

            .hero-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
                z-index: 2;
            }

            .hero-content {
                position: relative;
                z-index: 3;
                width: 100%;
                padding-top: 10vh;
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
                opacity: 0.8;
                margin-left: 4px;
            }

            .scroll-indicator {
                position: absolute;
                bottom: -20vh; /* Adjust based on padding-top container */
                margin-top: 15vh;
                left: 0; /* Or center */
                display: flex;
                align-items: center;
                gap: 1rem;
                font-family: var(--font-family-sans);
                font-size: 0.8rem;
                letter-spacing: 0.2em;
                opacity: 0.7;
            }

            .scroll-indicator .line {
                width: 60px;
                height: 1px;
                background-color: white;
            }

            /* Animations */
            .fade-in-up {
                animation: fadeInUp var(--transition-slow) forwards;
                opacity: 0;
                transform: translateY(40px);
            }

            .delay-1 { animation-delay: 0.3s; }
            .delay-2 { animation-delay: 0.6s; }

            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `}</style>
        </section>
    );
};

export default Hero;
