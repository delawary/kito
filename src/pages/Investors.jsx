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

                <hr className="divider" />

                {/* Market Analysis (New Content) */}
                <div className="analysis-section">
                    <Reveal width="100%"><h3 className="section-heading text-center">Market Strategy</h3></Reveal>

                    <div className="analysis-block">
                        <Reveal>
                            <h4>なぜ今、「ロードサイド」なのか？</h4>
                            <p>
                                従来のホテル開発は、駅前や観光地中心部に集中していました。しかし、これらは地価が高騰し、競合も激化しています。<br />
                                一方で、日本の地方ロードサイドには、広大で安価な土地が眠っています。<br />
                                インバウンド旅行者のスタイルは「団体バス旅行」から「レンタカー個人旅行」へと劇的に変化しており、
                                地方の絶景スポットを巡る拠点としてのロードサイドホテルの需要が急増しています。<br />
                                KITOは、このブルーオーシャン市場にいち早く参入し、先行者利益を確保します。
                            </p>
                        </Reveal>
                    </div>

                    <div className="analysis-grid">
                        <div className="analysis-item">
                            <h5>インバウンドの地方分散</h5>
                            <p>
                                政府目標である訪日客数6000万人達成のためには、ゴールデンルート以外の地方への誘客が不可欠です。
                                地方の自然体験に関心の高い富裕層旅行者にとって、KITOのような高付加価値な宿泊施設は強く求められています。
                            </p>
                        </div>
                        <div className="analysis-item">
                            <h5>コト消費へのシフト</h5>
                            <p>
                                「モノ」を買う旅行から、「体験（コト）」を買う旅行へ。
                                ただ泊まるだけでなく、その土地の自然、食、文化を深く体験できる滞在型コンテンツへのニーズが高まっています。
                            </p>
                        </div>
                    </div>
                </div>


                {/* Main Scheme: Management Contract */}
                <div className="target-section">
                    <Reveal width="100%"><h3 className="section-heading">Business Model</h3></Reveal>
                    <div className="scheme-block">
                        <div className="scheme-text">
                            <Reveal>
                                <h4 className="scheme-title">運営委託方式 (Management Contract)</h4>
                                <p className="scheme-desc">
                                    お客様がホテルを所有し、運営業務をKITOへ委託するプランです。<br />
                                    建設は提携する建設パートナーが担当し、高品質な施設を適正価格で実現します。<br /><br />

                                    KITOは、ブランド構築、集客マーケティング、現場オペレーション、スタッフ採用・教育など、
                                    ホテル運営に関わる全ての業務をプロフェッショナルとして代行します。<br />
                                    オーナー様には、ホテルの売上（GOP）に応じた収益が還元されます。<br />
                                    固定賃料方式と比較して、事業が成功した際のリターンが大きく、インフレにも強い契約形態です。
                                </p>
                                <ul className="merit-list">
                                    <li>事業収益の最大化 (Upside Potential)</li>
                                    <li>プロによる運営代行 (Professional Operation)</li>
                                    <li>資産形成・節税効果 (Asset Management)</li>
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
                                    最大のリスクヘッジは「移動できる」こと。<br />
                                    CLTセルユニットは移設が可能です。万が一の商圏変化や、自然災害のリスク、
                                    あるいは借地契約の終了時にも、建物を解体することなく、別の場所へ「移動」させて事業を継続できます。
                                    これは不動産投資の概念を覆すイノベーションです。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="value-card">
                                <div className="value-icon">02</div>
                                <h4>Cost Performance</h4>
                                <p>
                                    工場生産によるユニット化。<br />
                                    現場での作業を最小限に抑えることで、工期を大幅に短縮し、建設コストを抑制します。
                                    また、CLTの高い断熱性はランニングコスト（光熱費）の削減にも寄与し、
                                    長期的な事業収支（NOI）を向上させます。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <div className="value-card">
                                <div className="value-icon">03</div>
                                <h4>ESG Investment</h4>
                                <p>
                                    脱炭素への貢献。<br />
                                    木材の積極的な利用は、企業のESG（環境・社会・ガバナンス）評価を高めます。
                                    KITOへの投資は、単なる収益事業であるだけでなく、
                                    地球環境保全と持続可能な社会への貢献を示すステートメントとなります。
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="cta-section">
                    <Reveal width="100%">
                        <h2>お問い合わせ</h2>
                        <p>
                            具体的な収支シミュレーション、エリアマーケティングデータ、<br />
                            遊休地の簡易診断など、詳細な資料をご用意しております。<br />
                            まずは無料相談よりお問い合わせください。
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdht0RvkOtMU3rMTpiaaxUWEYLnDERXFVvrGa18K5t6GuIi0w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>資料請求 / 事業相談</a>
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
                .header-image-wrapper { position: absolute; top:0; left:0; width:100%; height:100%; z-index:1; }
                .hero-img { width: 100%; height: 100%; object-fit: cover; animation: zoomEffect 20s infinite alternate; }
                @keyframes zoomEffect { from{transform: scale(1);} to{transform: scale(1.1);} }
                .hero-overlay { position: absolute; top:0; left:0; width:100%; height:100%; z-index:2; background: rgba(0,0,0,0.3); }
                .header-content { position: relative; z-index: 3; text-align: center; }

                .page-title { font-size: clamp(3rem, 5vw, 4.5rem); margin-bottom: 1rem; font-family: var(--font-family-serif); }

                .intro-block { max-width: 800px; margin: 0 auto 5rem; line-height: 2; }
                .intro-block h2 { margin-bottom: 2rem; font-size: 2rem; color: var(--color-wood-dark); }
                .intro-block p { font-size: 1.1rem; opacity: 0.9; }

                .divider { border: 0; height: 1px; background: #ddd; margin: 4rem auto; max-width: 100px; }

                .section-heading {
                    font-family: var(--font-family-serif);
                    font-size: 2.5rem;
                    color: var(--color-accent);
                    margin-bottom: 3rem;
                    padding-bottom: 1rem;
                    display: block;
                }

                /* Analysis Section */
                .analysis-section { margin-bottom: 8rem; }
                .analysis-block { max-width: 900px; margin: 0 auto 4rem; text-align: justify; }
                .analysis-block h4 { font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-wood-dark); border-bottom: 2px solid var(--color-accent); display: inline-block; padding-bottom: 0.5rem; }
                .analysis-block p { font-size: 1.05rem; line-height: 2; color: var(--color-text-primary); }

                .analysis-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
                .analysis-item { background: var(--color-background-light); padding: 2rem; border-radius: 4px; }
                .analysis-item h5 { font-size: 1.2rem; color: var(--color-wood-dark); margin-bottom: 1rem; font-weight: 600; }
                .analysis-item p { font-size: 0.95rem; line-height: 1.8; }

                .target-section { margin-bottom: 6rem; }
                .scheme-block { display: flex; align-items: center; gap: 4rem; background: white; padding: 3rem; border-radius: 4px; box-shadow: var(--shadow-soft); }
                .scheme-text { flex: 1.2; }
                .scheme-title { font-size: 1.8rem; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .scheme-desc { margin-bottom: 1.5rem; line-height: 1.8; text-align: justify; }
                .merit-list { list-style: none; display: flex; gap: 1rem; flex-wrap: wrap; }
                .merit-list li { background: var(--color-background-light); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.9rem; color: var(--color-wood-medium); border: 1px solid var(--color-accent); }
                .scheme-visual { flex: 1; height: 250px; background: var(--color-background-off-white); display: flex; align-items: center; justify-content: center; border: 1px dashed var(--color-text-secondary); }
                .visual-box { font-family: var(--font-family-serif); font-size: 1.2rem; color: var(--color-text-secondary); opacity: 0.5; }

                .value-section { margin-bottom: 8rem; }
                .value-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
                .value-card { background: white; padding: 2.5rem; height: 100%; border-top: 3px solid var(--color-wood-light); transition: transform 0.3s; }
                .value-card:hover { transform: translateY(-5px); border-color: var(--color-accent); }
                .value-icon { font-family: var(--font-family-serif); font-size: 3rem; color: var(--color-background-off-white); -webkit-text-stroke: 1px var(--color-accent); margin-bottom: 1rem; line-height: 1; }
                .value-card h4 { font-size: 1.4rem; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .value-card p { font-size: 0.95rem; line-height: 1.8; opacity: 0.8; text-align: justify; }

                .cta-section { text-align: center; background-color: var(--color-wood-dark); color: white; padding: 2.5rem 1rem; border-radius: 4px; }
                .cta-section h2 { margin-bottom: 1.5rem; color: var(--color-accent); }
                .cta-section p { margin-bottom: 2rem; opacity: 0.9; line-height: 1.8; }
                .btn-primary { padding: 1.2rem 3.5rem; background-color: var(--color-accent); color: white; border: none; font-size: 1.1rem; letter-spacing: 0.1em; cursor: pointer; border-radius: 50px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
                .btn-primary:hover { background-color: white; color: var(--color-accent); transform: scale(1.05); }

                @media (max-width: 768px) {
                    .scheme-block { flex-direction: column; padding: 2rem; }
                    .scheme-visual { width: 100%; height: 200px; margin-top: 1.5rem; }
                    .analysis-grid { grid-template-columns: 1fr; }
                    .mobile-only { display: block; }
                }
                @media (min-width: 769px) { .mobile-only { display: none; } }
            `}</style>
        </div>
    );
};

export default Investors;
