import React from 'react';
import cltDetail from '../assets/clt_detail.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';
import '../styles/global.css';

const CltCellUnit = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="header-image-wrapper">
                    <div className="header-image" style={{ backgroundImage: `url(${cltDetail})` }}></div>
                </div>
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title">CLTセルユニット</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">Tradition Meets Innovation</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                <div className="zigzag-block">
                    <div className="text-content">
                        <Reveal>
                            <h2>革新的な箱型ユニット</h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p>
                                CLTセルユニットは、国産のクロス・ラミネーテッド・ティンバー（CLT）を100%使用した、
                                新しい建築のカタチです。工場で精密に製造されたユニットは、
                                現場での施工期間を劇的に短縮し、高品質な空間を提供します。
                            </p>
                        </Reveal>
                    </div>
                    <div className="image-content-wrapper">
                        <ParallaxImage src={cltDetail} alt="CLT Structure" className="decoration-box-img" />
                    </div>
                </div>

                <div className="zigzag-block reverse">
                    <div className="text-content">
                        <Reveal>
                            <h2>伝統技術「蝶蟻」</h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p>
                                釘や金物を一切使用しない「蝶蟻（ちょうあり）」接合技術。
                                日本の伝統的な木組みの知恵を現代の技術で蘇らせました。
                                金属の錆びによる劣化がなく、木の呼吸を妨げません。
                            </p>
                        </Reveal>
                    </div>
                    <div className="image-content-wrapper circle-mask">
                        <ParallaxImage src={cltDetail} alt="Joinery Detail" className="decoration-circle-img" />
                    </div>
                </div>

                <div className="features-grid">
                    <Reveal delay={0.2} width="100%">
                        <div className="feature-card">
                            <h3>Speed</h3>
                            <p>工期を従来の1/3に短縮</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4} width="100%">
                        <div className="feature-card">
                            <h3>Strength</h3>
                            <p>耐震等級3相当の安全性</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6} width="100%">
                        <div className="feature-card">
                            <h3>Sustainability</h3>
                            <p>国産材100%使用による環境貢献</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 60vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 6rem;
                    text-align: center;
                    overflow: hidden;
                }

                .header-image {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-size: cover;
                    background-position: center;
                    z-index: 1;
                    /* Simple scale animation on load */
                    animation: scaleIn 10s ease-out forwards;
                }
                
                @keyframes scaleIn { from{transform: scale(1);} to{transform: scale(1.1);} }

                 .header-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.4);
                    z-index: 2;
                }

                .header-content { z-index: 3; position: relative; display: flex; flex-direction: column; align-items: center;}
                
                .page-title { font-size: var(--font-size-h1); margin-bottom: 1rem; text-shadow: 0 4px 10px rgba(0,0,0,0.3); }
                .page-subtitle { font-family: var(--font-family-sans); font-size: 1.2rem; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.9; }

                /* Zigzag Layout */
                .zigzag-block {
                    display: flex;
                    align-items: center;
                    gap: 4rem;
                    margin-bottom: 8rem;
                }
                
                .zigzag-block.reverse { flex-direction: row-reverse; }

                .text-content { flex: 1; }
                
                .image-content-wrapper {
                    flex: 1;
                    height: 400px;
                    overflow: hidden;
                    border-radius: 4px;
                }
                
                .decoration-box-img {
                    width: 100%; height: 100%;
                    box-shadow: 20px 20px 0 var(--color-accent);
                }
                
                .circle-mask {
                    border-radius: 50% 50% 0 0;
                    position: relative;
                }

                .text-content h2 { 
                    color: var(--color-wood-dark); 
                    margin-bottom: 1.5rem; 
                    border-left: 3px solid var(--color-accent);
                    padding-left: 1.5rem;
                }

                /* Features Grid */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-top: 4rem;
                }

                .feature-card {
                    background: white;
                    padding: 3rem 2rem;
                    text-align: center;
                    border-top: 2px solid var(--color-accent);
                    box-shadow: var(--shadow-card);
                    transition: transform var(--transition-fast);
                    height: 100%; /* Ensure equal height in flex */
                }
                
                .feature-card:hover { transform: translateY(-5px); }

                .feature-card h3 {
                    font-family: var(--font-family-serif);
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-secondary);
                }

                @media (max-width: 768px) {
                    .zigzag-block, .zigzag-block.reverse { flex-direction: column; }
                    .image-content-wrapper { width: 100%; height: 300px; }
                }
            `}</style>
        </div>
    );
};

export default CltCellUnit;
