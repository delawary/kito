import React, { useEffect, useRef, useState } from 'react';
import cltDetail from '../assets/clt-detail.png';

const Concept = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="concept-section" ref={sectionRef}>
            <div className="container">
                <div className={`concept-grid ${isVisible ? 'animate' : ''}`}>
                    <div className="concept-text">
                        <h2 className="section-title">
                            構築される<br />
                            自然。
                        </h2>
                        <p className="concept-description">
                            CLT（直交集成板）は、単なる木材ではありません。それは、持続可能な建築の未来です。
                            木材を繊維方向が直交するように積層接着することで、コンクリートに匹敵する強度と、木の温もりを兼ね備えた素材が生まれます。
                            <br /><br />
                            KITOのユニットは、この技術を最大限に活用し、現代的でありながら、深く森とつながる空間を創造します。
                        </p>
                        <div className="stats-row">
                            <div className="stat">
                                <span className="stat-number">CO₂</span>
                                <span className="stat-label">カーボンニュートラル</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">リサイクル可能</span>
                            </div>
                        </div>
                    </div>
                    <div className="concept-image-wrapper">
                        <img src={cltDetail} alt="CLT Detail" className="concept-image" />
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </div>

            <style>{`
            .concept-section {
                padding: 120px 0;
                background-color: var(--color-background-off-white);
                overflow: hidden;
            }

            .concept-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 4rem;
                align-items: center;
                opacity: 0;
                transform: translateY(40px);
                transition: opacity 1s ease-out, transform 1s ease-out;
            }

            @media (min-width: 960px) {
                .concept-grid {
                    grid-template-columns: 1fr 1fr;
                }
            }

            .concept-grid.animate {
                opacity: 1;
                transform: translateY(0);
            }

            .section-title {
                font-family: var(--font-family-serif);
                font-size: clamp(2.5rem, 5vw, 4rem);
                margin-bottom: 2rem;
                color: var(--color-wood-dark);
            }

            .concept-description {
                font-size: 1.125rem;
                color: var(--color-text-secondary);
                margin-bottom: 3rem;
                line-height: 1.8;
            }

            .stats-row {
                display: flex;
                gap: 4rem;
                border-top: 1px solid var(--color-accent);
                padding-top: 2rem;
            }

            .stat {
                display: flex;
                flex-direction: column;
            }

            .stat-number {
                font-family: var(--font-family-serif);
                font-size: 2rem;
                color: var(--color-wood-medium);
            }

            .stat-label {
                font-size: 0.875rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--color-text-secondary);
            }

            .concept-image-wrapper {
                position: relative;
                border-radius: 4px; /* Slight softening */
                overflow: hidden;
                box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
            }

            .concept-image {
                width: 100%;
                height: auto;
                transition: transform 1.5s cubic-bezier(0.2, 1, 0.3, 1);
            }

            .concept-grid:hover .concept-image {
                transform: scale(1.03);
            }
        `}</style>
        </section>
    );
};

export default Concept;
