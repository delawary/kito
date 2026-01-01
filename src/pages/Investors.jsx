import React from 'react';
import '../styles/global.css';

const Investors = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title fade-in-up">投資家の皆様へ</h1>
                    <p className="page-subtitle fade-in-up delay-1">新しいロードサイドホテルの形</p>
                </div>
            </header>

            <section className="section container">
                <div className="content-block fade-in-up delay-2">
                    <h2>KITOのビジネスモデル</h2>
                    <p>
                        私たちは単なる建設会社ではありません。CLTセルユニットという革新的な技術を活用し、
                        自らが「ホテルオペレーター」としてロードサイドホテルの運営を行います。
                        土地の選定から建設、そして日々の運営までを一貫して手掛けることで、
                        高収益かつ持続可能な事業モデルを構築しています。
                    </p>
                </div>

                <div className="content-block fade-in-up">
                    <h2>投資のメリット</h2>
                    <ul className="benefit-list">
                        <li>
                            <strong>初期投資の抑制：</strong>
                            工場生産によるコストダウンと工期短縮により、従来のホテル建設に比べて初期投資を大幅に抑えることが可能です。
                        </li>
                        <li>
                            <strong>早期の収益化：</strong>
                            短い工期（最短2週間程度での棟上げ）により、資金投下から営業開始までのリードタイムを最小限にし、早期のキャッシュフローを生み出します。
                        </li>
                        <li>
                            <strong>高い資産価値：</strong>
                            移設可能なユニット構造であるため、万が一の立地リスクにも対応可能。不動産としての流動性が高く、出口戦略が描きやすいのも特徴です。
                        </li>
                    </ul>
                </div>

                <div className="content-block fade-in-up">
                    <h2>今後の展望</h2>
                    <p>
                        全国の主要なロードサイドエリアへの展開を計画しています。
                        手軽に泊まれる快適な宿泊施設が不足している地域に、KITOの木のホテルを展開することで、
                        地方創生と観光需要の受け皿作りを同時に実現します。
                        持続可能な社会投資としての側面も併せ持つ、KITOの事業にぜひご期待ください。
                    </p>
                </div>
            </section>

            <style>{`
                .page-header {
                    background-color: #2c3e50; /* distinct color for investors */
                    color: white;
                    padding: 120px 0 60px;
                    text-align: center;
                    margin-bottom: 4rem;
                }
                
                /* Reuse styles from CltCellUnit or global */
                .page-title { font-size: 2.5rem; margin-bottom: 1rem; }
                .page-subtitle { opacity: 0.8; letter-spacing: 0.1em; }
                .content-block { margin-bottom: 4rem; max-width: 800px; margin: 0 auto 4rem; }
                .content-block h2 { 
                    font-size: 1.8rem; 
                    color: #2c3e50; 
                    margin-bottom: 1.5rem; 
                    border-bottom: 1px solid #bdc3c7; 
                    padding-bottom: 0.5rem; 
                }
                .benefit-list { list-style: none; }
                .benefit-list li { margin-bottom: 1.5rem; padding-left: 1.5rem; position: relative; }
                .benefit-list li::before { content: '✓'; color: #e67e22; position: absolute; left: 0; top: 0; font-weight:bold; }

                .fade-in-up { animation: fadeInUp 0.8s forwards; opacity: 0; transform: translateY(20px); }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.4s; }
                @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default Investors;
