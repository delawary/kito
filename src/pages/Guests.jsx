import React from 'react';
import guestRoom from '../assets/guest_room_interior.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';
import '../styles/global.css';

const Guests = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                {/* Parallax Header */}
                <div className="header-bg-wrapper">
                    <img src={guestRoom} alt="Guest Room" className="header-img-parallax" />
                </div>
                <div className="header-overlay"></div>

                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title">The Stay</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">心身ともに、深呼吸する場所</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                <div className="concept-text text-center">
                    <Reveal width="100%">
                        <p>
                            五感で感じる木の香り。<br />
                            静寂に包まれたプライベートな空間。<br />
                            窓の外に広がる、ありのままの自然。
                        </p>
                    </Reveal>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item large">
                        <ParallaxImage src={guestRoom} alt="Private Cabin" className="gallery-img-full" />
                        <div className="caption">Private Cabin</div>
                    </div>
                    {/* Placeholders */}
                    <div className="gallery-item medium gray-bg">
                        <div className="caption-center">Wood Aroma</div>
                    </div>
                    <div className="gallery-item medium gray-bg-dark">
                        <div className="caption-center">Nature View</div>
                    </div>
                </div>

                <div className="features-list">
                    <Reveal delay={0.2} width="100%">
                        <div className="feature">
                            <h3>Natural Aroma</h3>
                            <p>あえて塗装を施さない、無垢の杉材。フィトンチッドの香りに包まれるリラクゼーション。</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4} width="100%">
                        <div className="feature">
                            <h3>Detached Privacy</h3>
                            <p>全ての客室が独立した「離れ」タイプ。隣人の気配を感じることなく、自分だけの時間を。</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6} width="100%">
                        <div className="feature">
                            <h3>Minimal Luxury</h3>
                            <p>必要なものだけがある、上質な空間。ノイズを削ぎ落としたデザインが、心の平穏をもたらします。</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 6rem;
                    overflow: hidden;
                }

                .header-bg-wrapper {
                     position: absolute; top:0; left:0; width:100%; height:100%; z-index:1;
                }

                .header-img-parallax {
                     width: 100%; height: 100%; object-fit: cover;
                     animation: zoomSlow 20s linear infinite alternate;
                }
                @keyframes zoomSlow { from{transform: scale(1);} to{transform: scale(1.15);} }

                .header-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.2);
                    z-index: 2;
                }
                .header-content { z-index: 3; position: relative; text-align: center; display: flex; flex-direction: column; align-items: center;}

                .page-title { font-size: 3rem; margin-bottom: 1rem; font-family: var(--font-family-serif); }

                .concept-text {
                    font-size: 1.5rem;
                    line-height: 2;
                    margin-bottom: 6rem;
                    font-family: var(--font-family-serif);
                    color: var(--color-wood-dark);
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    grid-template-rows: 300px 300px;
                    gap: 1rem;
                    margin-bottom: 6rem;
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                }
                
                .gallery-item.large {
                    grid-row: 1 / 3;
                    grid-column: 1 / 2;
                }

                .gallery-img-full {
                    width: 100%; height: 100%;
                }

                .gray-bg { background-color: #e5e5e5; }
                .gray-bg-dark { background-color: #d0d0d0; }

                .caption {
                    position: absolute;
                    bottom: 2rem;
                    left: 2rem;
                    color: white;
                    font-size: 1.2rem;
                    letter-spacing: 0.1em;
                    z-index: 2;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                 .caption-center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    color: var(--color-text-secondary);
                    font-family: var(--font-family-serif);
                    font-size: 1.5rem;
                 }


                .features-list {
                    display: flex;
                    flex-direction: column;
                    gap: 4rem;
                    max-width: 800px;
                    margin: 0 auto 6rem;
                }

                .feature h3 {
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    color: var(--color-wood-medium);
                }
                
                @media (max-width: 768px) {
                    .gallery-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
                    .gallery-item.large { grid-row: auto; height: 300px; }
                    .gallery-item.medium { height: 200px; }
                }
            `}</style>
        </div>
    );
};

export default Guests;
