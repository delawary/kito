import React from 'react';
import cltDetail from '../assets/clt_detail.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { StaggerText } from '../components/animations/StaggerText.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';

const Concept = () => {
    return (
        <section className="concept-section">
            <div className="container">
                <div className="concept-grid">
                    <div className="concept-text">
                        <Reveal>
                            {/* Use h2 directly or wrapper. StaggerText for the title for emphasis if viewed first time, 
                                 but Reveal is safer for scroll handling. Let's stick to Reveal for block fade 
                                 and maybe StaggerText for just the letters inside if we want extra flair, 
                                 but let's keep it clean with Reveal for now to match the "elegant" request. */}
                            <h2 className="section-title">
                                構築される<br />
                                自然。
                            </h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="concept-description">
                                CLT（直交集成板）は、単なる木材ではありません。それは、持続可能な建築の未来です。
                                木材を繊維方向が直交するように積層接着することで、コンクリートに匹敵する強度と、木の温もりを兼ね備えた素材が生まれます。
                                <br /><br />
                                KITOのユニットは、この技術を最大限に活用し、現代的でありながら、深く森とつながる空間を創造します。
                            </p>
                        </Reveal>
                        <Reveal delay={0.5}>
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
                        </Reveal>
                    </div>
                    <div className="concept-image-wrapper">
                        {/* Swapped custom manual parallax logic for the standardized components */}
                        <ParallaxImage src={cltDetail} alt="CLT Detail" className="concept-image-parallax" />
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
            }

            @media (min-width: 960px) {
                .concept-grid {
                    grid-template-columns: 1fr 1fr;
                }
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
                border-radius: 4px;
                overflow: hidden;
                box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
                height: 500px; /* Fixed height for consistent layout */
            }
            
            .concept-image-parallax {
                width: 100%; height: 100%;
            }

            /* Custom overlay if needed, ParallaxImage doesn't include it by default inside */
            .image-overlay {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: linear-gradient(to bottom right, rgba(0,0,0,0) 50%, rgba(197, 164, 126, 0.1));
                pointer-events: none;
            }
        `}</style>
        </section>
    );
};

export default Concept;
