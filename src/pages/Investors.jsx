import React from 'react';
import hotelExterior from '../assets/hotel_exterior_roadside.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import '../styles/global.css';

const Investors = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <img src={hotelExterior} alt="Roadside Hotel Exterior" className="hero-img" />
                <div className="hero-overlay"></div>
                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title">Investment Opportunities</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">次世代ロードサイドホテル事業への招待</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                <div className="intro-block text-center">
                    <Reveal width="100%">
                        <h2>KITOのビジネスモデル</h2>
                        <p>
                            「建設会社 × ホテルオペレーター」<br />
                            私たちは、自社開発のCLTセルユニット技術を最大限に活用し、
                            土地選定から建設、運営までを一気通貫で行うことで、
                            高収益かつサステナブルな投資機会を創出します。
                        </p>
                    </Reveal>
                </div>

                <div className="merit-grid">
                    <Reveal delay={0.2}>
                        <div className="merit-item">
                            <span className="number">01</span>
                            <h3>初期投資の最小化</h3>
                            <p>工場生産による効率化で、建築コストを大幅に削減。短工期により、資金回収までの期間も短縮されます。</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="merit-item">
                            <span className="number">02</span>
                            <h3>流動性の高い不動産</h3>
                            <p>移設可能なユニット構造は、万が一の立地リスクをヘッジします。土地に縛られない、新しい不動産の形です。</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="merit-item">
                            <span className="number">03</span>
                            <h3>地方創生への貢献</h3>
                            <p>宿泊施設不足に悩む地方のロードサイドに、質の高い宿泊体験を提供することで、地域経済を活性化させます。</p>
                        </div>
                    </Reveal>
                </div>

                <div className="cta-section">
                    <Reveal width="100%">
                        <h2>お問い合わせ</h2>
                        <p>事業計画の詳細やシミュレーションについては、お気軽にお問い合わせください。</p>
                        <button className="btn-primary">資料請求 / お問い合わせ</button>
                    </Reveal>
                </div>
            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 70vh;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 6rem;
                }

                .hero-img {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    filter: brightness(0.8);
                    animation: zoomIn 20s infinite alternate ease-in-out;
                }
                
                @keyframes zoomIn { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }

                .header-content { position: relative; z-index: 3; text-align: center; display: flex; flex-direction: column; align-items: center;}

                .page-title { 
                    font-size: clamp(2.5rem, 5vw, 4rem); 
                    margin-bottom: 1rem; 
                    font-weight: 300;
                    letter-spacing: -0.01em;
                }

                .intro-block {
                    max-width: 800px;
                    margin: 0 auto 6rem;
                }
                .intro-block h2 { margin-bottom: 1.5rem; font-size: var(--font-size-h2); }
                .intro-block p {
                    font-size: 1.2rem;
                    opacity: 0.8;
                }

                /* Grid Layout */
                .merit-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                    margin-bottom: 8rem;
                }

                .merit-item {
                    padding: 2rem;
                    border: 1px solid #eee;
                    position: relative;
                    transition: all var(--transition-medium);
                    height: 100%;
                    background: white;
                }

                .merit-item:hover {
                    box-shadow: var(--shadow-soft);
                    border-color: transparent;
                    transform: translateY(-5px);
                }

                .merit-item .number {
                    font-family: var(--font-family-serif);
                    font-size: 4rem;
                    color: var(--color-accent);
                    opacity: 0.3;
                    position: absolute;
                    top: -1.5rem;
                    right: 1rem;
                }

                .merit-item h3 {
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid var(--color-accent);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }

                .cta-section {
                    text-align: center;
                    background-color: var(--color-background-dark);
                    color: white;
                    padding: 4rem;
                }

                .btn-primary {
                    margin-top: 2rem;
                    padding: 1rem 3rem;
                    background-color: var(--color-accent);
                    color: white;
                    border: none;
                    font-size: 1rem;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: background-color var(--transition-fast);
                }
                .btn-primary:hover { background-color: var(--color-accent-hover); }
            `}</style>
        </div>
    );
};

export default Investors;
