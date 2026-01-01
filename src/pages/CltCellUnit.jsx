import React from 'react';
import '../styles/global.css';

const CltCellUnit = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title fade-in-up">CLTセルユニットとは</h1>
                    <p className="page-subtitle fade-in-up delay-1">次世代の木造建築システム</p>
                </div>
            </header>

            <section className="section container">
                <div className="content-block fade-in-up delay-2">
                    <h2>革新的な箱型ユニット</h2>
                    <p>
                        CLTセルユニットは、国産のクロス・ラミネーテッド・ティンバー（CLT）を100%使用した、
                        新しい建築のカタチです。あらかじめ工場で精密に製造された箱型のユニット（セル）を、
                        現地で積み木のように組み合わせるだけで、強固な建築物が完成します。
                    </p>
                </div>

                <div className="content-block fade-in-up">
                    <h2>伝統技術「蝶蟻（ちょうあり）」</h2>
                    <p>
                        私たちのユニットの最大の特徴は、釘や金物を一切使用しない接合技術にあります。
                        日本の伝統的な木組み技術「蝶蟻（ちょうあり）」を応用し、木と木を強固に噛み合わせることで、
                        美しさと強度を両立させました。金属の経年劣化の心配がなく、木の温もりをダイレクトに感じられます。
                    </p>
                </div>

                <div className="content-block fade-in-up">
                    <h2>圧倒的なメリット</h2>
                    <ul className="benefit-list">
                        <li>
                            <strong>工期短縮：</strong> 工場で製造するため、現場での作業時間が劇的に短縮されます。従来の工法の約1/3の期間で完成します。
                        </li>
                        <li>
                            <strong>高い耐震性：</strong> コンクリートに匹敵する強度を持つCLT材と、粘り強い木組み構造により、耐震等級3相当の安全性を実現しています。
                        </li>
                        <li>
                            <strong>サステナビリティ：</strong> 国産木材を大量に使用することで、森林資源の循環を促進し、脱炭素社会の実現に貢献します。
                        </li>
                    </ul>
                </div>
            </section>

            <style>{`
                .page-header {
                    background-color: var(--color-wood-dark);
                    color: white;
                    padding: 120px 0 60px;
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .page-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .page-subtitle {
                    opacity: 0.8;
                    letter-spacing: 0.1em;
                }

                .content-block {
                    margin-bottom: 4rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .content-block h2 {
                    font-size: 1.8rem;
                    color: var(--color-wood-dark);
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid var(--color-wood-light);
                    padding-bottom: 0.5rem;
                }

                .benefit-list {
                    list-style: none;
                }

                .benefit-list li {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                    position: relative;
                }

                .benefit-list li::before {
                    content: '•';
                    color: var(--color-accent);
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                /* Animation Utils (reused, could be global) */
                .fade-in-up {
                    animation: fadeInUp 0.8s forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.4s; }

                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default CltCellUnit;
