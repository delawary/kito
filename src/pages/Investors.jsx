import React from 'react';
import hotelExterior from '../assets/hotel_exterior_roadside.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import '../styles/global.css';

const Investors = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="header-image-wrapper">
                    <img src={hotelExterior} alt="Roadside Hotel Exterior" className="hero-img" />
                </div>
                <div className="hero-overlay"></div>
                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title">Partnership</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">次世代ロードサイドホテル事業への招待</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                {/* Intro */}
                <div className="intro-block text-center">
                    <Reveal width="100%">
                        <h2>ホテル事業で、<br className="mobile-only" />土地の価値を最大化する。</h2>
                        <p>
                            KITOは、CLTセルユニットを活用した新しいホテル運営の形を提案します。<br />
                            土地をお持ちのオーナー様、事業多角化を目指す投資家様へ。<br />
                            私たちは、信頼できる建設パートナーと共に、<br />
                            収益性の高いサステナブルな事業モデルを提供します。
                        </p>
                    </Reveal>
                </div>

                {/* Main Scheme: Management Contract */}
                <div className="target-section">
                    <Reveal width="100%"><h3 className="section-heading">Business Model</h3></Reveal>
                    <div className="scheme-block">
                        <div className="scheme-text">
                            <Reveal>
                                <h4 className="scheme-title">運営委託方式</h4>
                                <p className="scheme-desc">
                                    お客様がホテルを所有し、運営業務をKITOへ委託するプランです。
                                    建設は提携する建設パートナーが担当。<br />
                                    KITOは集客、現場運営、採用などのオペレーション全般を担い、
                                    売上に応じた収益還元を目指します。
                                </p>
                                <ul className="merit-list">
                                    <li>事業収益の最大化</li>
                                    <li>プロによる運営代行</li>
                                    <li>資産形成・節税効果</li>
                                </ul>
                            </Reveal>
                        </div>
                        <div className="scheme-visual">
                            <div className="visual-box">Management Contract</div>
                        </div>
                    </div>
                </div>

                {/* KITO's Value */}
                <div className="value-section">
                    <Reveal width="100%">
                        <h3 className="section-heading text-center">Why KITO?</h3>
                    </Reveal>

                    <div className="value-grid">
                        <Reveal delay={0.2}>
                            <div className="value-card">
                                <div className="value-icon">01</div>
                                <h4>Relocatability</h4>
                                <p>
                                    CLTセルユニットは移設が可能です。
                                    万が一の立地環境の変化にも、建物を「移動」させることで対応。
                                    不動産投資の最大のリスクである「固定化」を解消します。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="value-card">
                                <div className="value-icon">02</div>
                                <h4>Cost Performance</h4>
                                <p>
                                    工場生産によるユニット化は、現場工期を大幅に短縮。
                                    建設パートナーとの連携により、高品質かつコストパフォーマンスに優れた
                                    ホテル開発を実現します。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <div className="value-card">
                                <div className="value-icon">03</div>
                                <h4>Inbound & Roadside</h4>
                                <p>
                                    回復するインバウンド需要に加え、国内旅行者の移動拠点となるロードサイド立地に着目。
                                    競合の少ないブルーオーシャン市場を開拓します。
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="cta-section">
                    <Reveal width="100%">
                        <h2>お問い合わせ</h2>
                        <p>具体的な収支シミュレーションや、遊休地の簡易診断も承っております。</p>
                        <button className="btn-primary">資料請求 / 案件のご相談</button>
                    </Reveal>
                </div>
            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 60vh;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 6rem;
                }

                .header-image-wrapper {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                }

                .hero-img {
                    width: 100%; height: 100%; object-fit: cover;
                    /* Gentle zoom animation */
                    animation: zoomEffect 20s infinite alternate;
                }
                
                @keyframes zoomEffect { from{transform: scale(1);} to{transform: scale(1.1);} }

                .header-content { position: relative; z-index: 3; text-align: center; display: flex; flex-direction: column; align-items: center;}
                .page-title { font-size: clamp(3rem, 5vw, 4.5rem); margin-bottom: 1rem; font-family: var(--font-family-serif); }

                .intro-block { max-width: 800px; margin: 0 auto 8rem; }
                .intro-block h2 { margin-bottom: 2rem; font-size: 2rem; line-height: 1.4; color: var(--color-wood-dark); }
                .intro-block p { font-size: 1.1rem; line-height: 2; opacity: 0.8; }

                /* Schemes */
                .section-heading {
                    font-family: var(--font-family-serif);
                    font-size: 2.5rem;
                    color: var(--color-accent);
                    margin-bottom: 3rem;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 1rem;
                    display: inline-block;
                }
                
                .target-section { margin-bottom: 6rem; }

                .scheme-block {
                    display: flex;
                    align-items: center;
                    gap: 4rem;
                    background: white;
                    padding: 3rem;
                    border-radius: 4px;
                    box-shadow: var(--shadow-soft);
                }

                .scheme-text { flex: 1.2; }
                .scheme-title { font-size: 1.8rem; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .scheme-desc { margin-bottom: 1.5rem; line-height: 1.8; }
                
                .merit-list { list-style: none; display: flex; gap: 1rem; flex-wrap: wrap; }
                .merit-list li {
                    background: var(--color-background-light);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    color: var(--color-wood-medium);
                    border: 1px solid var(--color-accent);
                }

                .scheme-visual {
                    flex: 1;
                    height: 250px;
                    background: var(--color-background-off-white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px dashed var(--color-text-secondary);
                }
                .visual-box { font-family: var(--font-family-serif); font-size: 1.2rem; color: var(--color-text-secondary); opacity: 0.5; }

                /* Value Grid */
                .value-section { margin-bottom: 8rem; }
                .value-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                }

                .value-card {
                    background: white;
                    padding: 2.5rem;
                    height: 100%;
                    border-top: 3px solid var(--color-wood-light);
                    transition: transform 0.3s;
                }
                .value-card:hover { transform: translateY(-5px); border-color: var(--color-accent); }

                .value-icon {
                    font-family: var(--font-family-serif);
                    font-size: 3rem;
                    color: var(--color-background-off-white);
                    /* Outline text effect */
                     -webkit-text-stroke: 1px var(--color-accent);
                     margin-bottom: 1rem;
                     line-height: 1;
                }

                .value-card h4 { font-size: 1.4rem; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .value-card p { font-size: 0.95rem; line-height: 1.7; opacity: 0.8; }

                .cta-section {
                    text-align: center;
                    background-color: var(--color-wood-dark);
                    color: white;
                    padding: 5rem 2rem;
                    border-radius: 4px;
                }
                
                 .cta-section h2 { margin-bottom: 1rem; color: var(--color-accent); }

                .btn-primary {
                    margin-top: 2.5rem;
                    padding: 1.2rem 3.5rem;
                    background-color: var(--color-accent);
                    color: white;
                    border: none;
                    font-size: 1.1rem;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    border-radius: 50px;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                }
                .btn-primary:hover { 
                    background-color: white; 
                    color: var(--color-accent);
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .scheme-block { flex-direction: column; padding: 2rem; }
                    .scheme-visual { width: 100%; height: 200px; margin-top: 1.5rem; }
                    .mobile-only { display: block; }
                }
                @media (min-width: 769px) { .mobile-only { display: none; } }
            `}</style>
        </div>
    );
};

export default Investors;
