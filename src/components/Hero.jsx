import React from 'react';
import heroBg from '../assets/hero-bg.png';
import '../styles/global.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title fade-in-up">
                    自然を、
                    <br />
                    再定義する。
                </h1>
                <p className="hero-subtitle fade-in-up delay-1">
                    KITO - CLTが拓く、建築の未来
                </p>
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
                /* Simple Parallax-like effect */
                background-attachment: fixed; 
            }

            .hero-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
                z-index: 2;
            }

            .hero-content {
                position: relative;
                z-index: 3;
                width: 100%;
            }

            .hero-title {
                font-family: var(--font-family-serif);
                font-size: 4rem; /* Fallback */
                font-size: clamp(3rem, 8vw, var(--font-size-hero));
                line-height: 1.1;
                margin-bottom: 2rem;
                font-weight: 300;
                letter-spacing: -0.02em;
            }

            .hero-subtitle {
                font-family: var(--font-family-sans);
                font-size: var(--font-size-lg);
                letter-spacing: 0.2em;
                text-transform: uppercase;
                opacity: 0.9;
            }

            /* Animations */
            .fade-in-up {
                animation: fadeInUp var(--transition-slow) forwards;
                opacity: 0;
                transform: translateY(30px);
            }

            .delay-1 {
                animation-delay: 0.2s;
            }

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
