import React from 'react';
import roomInterior from '../assets/guest_room_interior.png';
import exterior from '../assets/hotel_exterior_roadside.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';
import '../styles/global.css';

const Residence = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="header-bg-wrapper">
                    <ParallaxImage src={exterior} alt="Residence Exterior" className="header-img-parallax" />
                </div>
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title">Residence</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">木と共に暮らす、新しい日常</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                {/* Intro */}
                <div className="intro-block text-center">
                    <Reveal width="100%">
                        <h2>「住まい」としてのCLTセルユニット</h2>
                        <p>
                            KITOの技術は、ホテルのためだけのものではありません。<br />
                            高い断熱性、遮音性、そして木の温もりは、<br />
                            毎日を過ごす「住まい」にこそ、最適な環境を提供します。<br />
                            賃貸アパートメント、社員寮、学生寮。<br />
                            合理的かつ人間に優しい、次世代の居住空間をご提案します。
                        </p>
                    </Reveal>
                </div>

                <hr className="divider" />

                {/* Benefits for Living */}
                <div className="benefits-section">
                    <Reveal width="100%"><h3 className="section-heading text-center">Why Wood for Living?</h3></Reveal>

                    <div className="features-grid">
                        <Reveal delay={0.2}>
                            <div className="feature-card">
                                <h3>Comfort</h3>
                                <h4>夏涼しく、冬暖かい</h4>
                                <p>
                                    木材ならではの調湿効果と、CLTの分厚い壁による高断熱性能。<br />
                                    エアコンの稼働を抑えながら、一年中快適な室温を保ちます。<br />
                                    結露の発生も抑制し、健康的でクリーンな空気環境を実現します。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="feature-card">
                                <h3>Silence</h3>
                                <h4>静寂に守られる暮らし</h4>
                                <p>
                                    集合住宅で最も気になる「音」の問題。<br />
                                    CLTパネルは遮音性にも優れており、隣室の生活音や外部の騒音を大幅に軽減します。<br />
                                    プライバシーが守られた、静かで落ち着いた生活を約束します。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="feature-card">
                                <h3>Speed & Cost</h3>
                                <h4>オーナー様のメリット</h4>
                                <p>
                                    工場で完成されたユニットを積層する工法により、
                                    RC造のマンションと比較して工期を圧倒的に短縮。<br />
                                    社員寮の急な需要増や、遊休地の早期収益化に貢献します。<br />
                                    また、解体・移設も可能なため、将来的な土地利用の変更にも柔軟に対応できます。
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="usecase-section">
                    <Reveal width="100%"><h3 className="section-heading">Use Cases</h3></Reveal>

                    <div className="usecase-row">
                        <div className="usecase-visual">
                            <ParallaxImage src={roomInterior} alt="Apartment Interior" />
                        </div>
                        <div className="usecase-desc">
                            <h4>Design Apartment</h4>
                            <h5>プレミアム賃貸住宅</h5>
                            <p>
                                木の質感を活かしたデザイナーズアパートメント。<br />
                                規格化されたユニットでありながら、内装の自由度は高く、
                                入居ターゲットに合わせたカスタマイズが可能です。<br />
                                「木造は安っぽい」という常識を覆す、ラグジュアリーな住空間を提供します。
                            </p>
                        </div>
                    </div>

                    <div className="usecase-row reverse">
                        <div className="usecase-visual gray-bg">
                            <span className="placeholder-text">Dormitory Visual</span>
                        </div>
                        <div className="usecase-desc">
                            <h4>Corporate Dormitory</h4>
                            <h5>社員寮・学生寮</h5>
                            <p>
                                企業の福利厚生としての社員寮や、大学近隣の学生寮に。<br />
                                頑丈でメンテナンス性に優れ、長期間の運用にも耐えうる品質です。<br />
                                共有スペース（ラウンジや食堂）のみを別ユニットで構成するなど、
                                コミュニティ形成を促進する配置計画も可能です。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <Reveal width="100%">
                        <h2>お問い合わせ</h2>
                        <p>
                            アパート経営、土地活用、社宅建築のご相談はこちらから。<br />
                            プランニングから概算見積もりまで、お気軽にお問い合わせください。
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdht0RvkOtMU3rMTpiaaxUWEYLnDERXFVvrGa18K5t6GuIi0w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>住まいについて相談する</a>
                    </Reveal>
                </div>
            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 50vh;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 6rem;
                }
                .header-bg-wrapper { position: absolute; top:0; left:0; width:100%; height:100%; z-index:1; }
                .header-overlay { position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.3); z-index:2; }
                .header-content { position: relative; z-index: 3; text-align: center; }
                .page-title { font-family: var(--font-family-serif); font-size: 3rem; margin-bottom: 1rem; }

                .intro-block { max-width: 800px; margin: 0 auto 5rem; }
                .intro-block h2 { font-size: 2rem; margin-bottom: 2rem; color: var(--color-wood-dark); font-family: var(--font-family-serif); }
                .intro-block p { font-size: 1.1rem; line-height: 2; opacity: 0.9; }

                .divider { border: 0; height: 1px; background: #ddd; margin: 4rem auto; max-width: 200px; }

                .section-heading {
                    font-family: var(--font-family-serif);
                    font-size: 2.5rem;
                    color: var(--color-accent);
                    margin-bottom: 4rem;
                }

                .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 8rem; }
                .feature-card { background: var(--color-background-light); padding: 2.5rem; border-top: 3px solid var(--color-wood-medium); height: 100%; }
                .feature-card h3 { font-family: var(--font-family-serif); font-size: 1.5rem; color: var(--color-accent); margin-bottom: 0.5rem; }
                .feature-card h4 { font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .feature-card p { opacity: 0.8; line-height: 1.8; }

                .usecase-section { margin-bottom: 8rem; }
                .usecase-row { display: flex; gap: 4rem; margin-bottom: 5rem; align-items: center; }
                .usecase-row.reverse { flex-direction: row-reverse; }
                .usecase-visual { flex: 1; height: 350px; border-radius: 4px; overflow: hidden; position: relative; }
                .usecase-desc { flex: 1; }
                .usecase-desc h4 { font-family: var(--font-family-serif); font-size: 1.2rem; color: var(--color-accent); margin-bottom: 0.5rem; }
                .usecase-desc h5 { font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--color-wood-dark); }
                .usecase-desc p { line-height: 2; opacity: 0.9; font-size: 1.05rem; }

                .gray-bg { background-color: #ddd; display: flex; align-items: center; justify-content: center; }
                .placeholder-text { color: #888; letter-spacing: 0.1em; font-family: var(--font-family-serif); font-size: 1.5rem; }

                .cta-section { text-align: center; background-color: var(--color-wood-dark); color: white; padding: 3rem 1.5rem; border-radius: 4px; }
                .cta-section h2 { margin-bottom: 1.5rem; color: var(--color-accent); }
                .btn-primary { padding: 1.2rem 3.5rem; background-color: var(--color-accent); color: white; border: none; font-size: 1.1rem; letter-spacing: 0.1em; cursor: pointer; border-radius: 50px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
                .btn-primary:hover { background-color: white; color: var(--color-accent); transform: scale(1.05); }

                @media (max-width: 768px) {
                    .usecase-row, .usecase-row.reverse { flex-direction: column; }
                    .usecase-visual { width: 100%; height: 250px; }
                }
            `}</style>
        </div>
    );
};

export default Residence;
