import React from 'react';
import cltDetail from '../assets/clt_detail.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { StaggerText } from '../components/animations/StaggerText.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';

const Concept = () => {
    return (
        <section className="concept-section">
            <div className="container">
                <div className="concept-header text-center">
                    <Reveal width="100%">
                        <h2 className="section-title">
                            <StaggerText text="Philosophy" />
                        </h2>
                        <p className="section-subtitle">KITOが描く、建築と自然の新しい関係</p>
                    </Reveal>
                </div>

                <div className="philosophy-block left-align">
                    <div className="philosophy-text">
                        <Reveal>
                            <h3>構築される<br />自然。</h3>
                            <p>
                                私たちが目指したのは、単なる「木造建築」ではありません。<br />
                                それは、科学技術と自然素材が高度に融合した、新しい生態系の構築です。<br /><br />

                                CLT（直交集成板）というテクノロジーは、木材を単なる「材料」から「構造体」へと進化させました。
                                コンクリートと同等の強度を持ちながら、呼吸し、炭素を固定し、そしてやがて土に還る。<br />
                                KITOのユニットは、このCLTの特性を最大限に引き出し、都市の利便性と森の静寂を同時に実現します。<br /><br />

                                これまで、人間は自然を切り開き、コンクリートで覆うことで都市を築いてきました。
                                しかし、これからの建築は、自然と対立するのではなく、自然の一部として機能すべきです。<br />
                                私たちの建築は、森の中に異物として存在するのではなく、
                                まるで一本の巨木がそこに在るかのように、風景に溶け込み、周囲の環境と調和します。
                            </p>
                        </Reveal>
                    </div>
                    <div className="philosophy-image">
                        <ParallaxImage src={cltDetail} alt="Structure of Nature" />
                    </div>
                </div>

                <div className="philosophy-block right-align">
                    <div className="philosophy-image">
                        {/* Placeholder for another conceptual image if available, using existing for now but styled differently could be better. 
                            Reusing cltDetail for visual consistency or assume we might add more later. */}
                        <div className="image-placeholder-artistic">
                            <span className="placeholder-text">Time & Silence</span>
                        </div>
                    </div>
                    <div className="philosophy-text">
                        <Reveal>
                            <h3>時間の<br />再定義。</h3>
                            <p>
                                現代社会において、時間は常に「消費」される対象です。<br />
                                効率、スピード、生産性。私たちは常に何かに追われ、<br />
                                立ち止まることの豊かさを忘れかけています。<br /><br />

                                KITOが提供するのは、「空白」としての時間です。<br />
                                木の香りに包まれた静寂な空間で、何もしない贅沢を味わう。<br />
                                窓の外の葉擦れの音、移ろいゆく光のグラデーション、<br />
                                そして自分自身の呼吸の音に耳を澄ます。<br /><br />

                                ここでは、時計の針は意味を持ちません。<br />
                                流れるのは、太陽の動きと、木々の成長のリズムだけ。<br />
                                忙しない日常から切り離されたこの場所で、<br />
                                あなたは、本来の自分を取り戻すための「時間」を手に入れるのです。
                            </p>
                        </Reveal>
                    </div>
                </div>

                <Reveal delay={0.5} width="100%">
                    <div className="stats-row">
                        <div className="stat">
                            <span className="stat-number">CO₂</span>
                            <span className="stat-label">Carbon Neutral</span>
                            <p className="stat-desc">建材自体が炭素を固定し、製造過程の排出も最小限に抑えます。</p>
                        </div>
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Recyclable</span>
                            <p className="stat-desc">解体後も再利用が可能な、真のサーキュラーエコノミーを実現。</p>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1/f</span>
                            <span className="stat-label">Fluctuation</span>
                            <p className="stat-desc">木目や自然音が持つゆらぎが、脳波をα波へと導きます。</p>
                        </div>
                    </div>
                </Reveal>

            </div>

            <style>{`
            .concept-section {
                padding: 150px 0;
                background-color: var(--color-background-off-white);
                overflow: hidden;
            }

            .concept-header { margin-bottom: 8rem; }
            .section-title {
                font-family: var(--font-family-serif);
                font-size: clamp(3rem, 6vw, 5rem);
                color: var(--color-wood-dark);
                margin-bottom: 1rem;
            }
            .section-subtitle { font-size: 1.2rem; letter-spacing: 0.1em; color: var(--color-text-secondary); opacity: 0.8; }

            .philosophy-block {
                display: grid;
                grid-template-columns: 1fr;
                gap: 4rem;
                align-items: center;
                margin-bottom: 10rem;
            }

            @media (min-width: 960px) {
                .philosophy-block { grid-template-columns: 1fr 1fr; gap: 6rem; }
                .philosophy-block.right-align { direction: rtl; } /* Quick hack to swap columns visually, need to reset text direction inside */
                .philosophy-block.right-align .philosophy-text, 
                .philosophy-block.right-align .philosophy-image { direction: ltr; }
            }

            .philosophy-text h3 {
                font-family: var(--font-family-serif);
                font-size: 2.5rem;
                line-height: 1.3;
                margin-bottom: 2.5rem;
                color: var(--color-wood-dark);
            }

            .philosophy-text p {
                font-size: 1.05rem;
                color: var(--color-text-primary);
                line-height: 2.2; /* Relaxed line height for readability */
                opacity: 0.9;
                text-align: justify;
            }

            .philosophy-image {
                height: 500px;
                width: 100%;
                position: relative;
                overflow: hidden;
                border-radius: 2px;
                box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
            }
            
            .image-placeholder-artistic {
                width: 100%; height: 100%;
                background-color: #d8d0c5;
                display: flex; align-items: center; justify-content: center;
                color: white; font-family: var(--font-family-serif); font-size: 2rem;
            }

            .stats-row {
                display: flex;
                gap: 4rem;
                border-top: 1px solid rgba(0,0,0,0.1);
                padding-top: 4rem;
                flex-wrap: wrap;
                justify-content: space-between;
            }

            .stat {
                flex: 1;
                min-width: 250px;
                text-align: center;
            }

            .stat-number {
                display: block;
                font-family: var(--font-family-serif);
                font-size: 3rem;
                color: var(--color-wood-medium);
                margin-bottom: 0.5rem;
            }

            .stat-label {
                display: block;
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--color-wood-dark);
                font-weight: 600;
                margin-bottom: 1rem;
            }
            
            .stat-desc {
                font-size: 0.9rem;
                line-height: 1.6;
                color: var(--color-text-secondary);
            }
        `}</style>
        </section>
    );
};

export default Concept;
