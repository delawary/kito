import React from 'react';
import cltDetail from '../assets/clt_detail.png';
import { Reveal } from '../components/animations/Reveal.jsx';
import { ParallaxImage } from '../components/animations/ParallaxImage.jsx';
import { StaggerText } from '../components/animations/StaggerText.jsx';
import '../styles/global.css';

const CltCellUnit = () => {
    return (
        <div className="page-container">
            {/* Header */}
            <header className="page-header">
                <div className="header-image-wrapper">
                    <ParallaxImage src={cltDetail} alt="CLT Detail Structure" />
                </div>
                <div className="hero-overlay"></div>
                <div className="container header-content">
                    <Reveal>
                        <h1 className="page-title"><StaggerText text="CLT Cell Unit" /></h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="page-subtitle">建築の未来を変える、テクノロジーと美学の融合</p>
                    </Reveal>
                </div>
            </header>

            <section className="section container">
                {/* Introduction */}
                <div className="intro-block">
                    <Reveal width="100%">
                        <div className="text-center">
                            <h2>What is CLT?</h2>
                            <p className="lead-text">
                                Cross Laminated Timber（直交集成板）。<br />
                                それは、木の繊維方向を直交（クロス）させることで、<br />
                                驚異的な強度と寸法安定性を実現した、次世代の建築材料です。
                            </p>
                            <p>
                                欧州で開発されたこの技術は、建築の「常識」を覆しました。<br />
                                KITOは、このCLTを独自の「セルユニット」技術へと昇華させ、<br />
                                これまでにないホテル建築の形を提案します。<br />
                                その真価は、単なる「木造」の枠を超え、RC造（鉄筋コンクリート）や鉄骨造に匹敵、<br />
                                あるいはそれを凌駕する建築性能にあります。
                            </p>
                        </div>
                    </Reveal>
                </div>

                <hr className="divider" />

                {/* 1. Structural Innovation */}
                <div className="detail-section">
                    <Reveal width="100%"><h3 className="section-title">01. Structural Innovation</h3></Reveal>
                    <Reveal delay={0.2} width="100%">
                        <p className="section-subtitle">圧倒的な構造強度と耐震性能</p>

                        <div className="feature-grid">
                            <div className="feature-item">
                                <h4>地震に強い「面」構造</h4>
                                <p>
                                    従来の木造軸組工法が「線（柱や梁）」で建物を支えるのに対し、CLTは厚みのあるパネルを用いた「面」で建物を支えます。
                                    これにより、地震や台風などの外部からの力を建物全体で受け止め、分散させることが可能です。
                                    実大振動台実験では、阪神・淡路大震災級の揺れにも耐えうる高い耐震安全性が実証されており、
                                    日本のような地震大国においてこそ、その真価を発揮します。
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>軽量かつ高強度</h4>
                                <p>
                                    CLTはコンクリートと比較して圧倒的に軽量（約1/5〜1/4）でありながら、構造材料として十分な強度を誇ります。
                                    建物自体の重量が軽くなることは、地震時に建物に作用する慣性力（揺れの力）を小さく抑えられることを意味します。
                                    これにより、基礎への負担も軽減され、地盤への負荷が少ないというメリットも生まれます。
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>Chō-ari（蝶蟻）接合技術</h4>
                                <p>
                                    KITOのセルユニットは、日本古来の「蝶蟻（ちょうあり）」という木組み技術を応用した独自の接合システムを採用しています。
                                    金物のみに頼らず、木と木が噛み合うことで生まれる強固な結合は、繰り返しの揺れに対しても粘り強さを発揮。
                                    伝統の知恵と最新のエンジニアリングが融合した、世界に誇る接合技術です。
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 2. Performance & Safety */}
                <div className="detail-section alt-bg">
                    <Reveal width="100%"><h3 className="section-title">02. Performance & Safety</h3></Reveal>
                    <Reveal delay={0.2} width="100%">
                        <p className="section-subtitle">安心と快適を支える、確かな性能</p>

                        <div className="text-columns">
                            <div className="column">
                                <h4>実は「燃えにくい」木材</h4>
                                <p>
                                    「木は燃えやすい」というのは過去の誤解です。
                                    厚みのあるCLTパネルは、火災時に表面が炭化することで断熱層（炭化層）を形成します。
                                    この炭化層が酸素の供給を遮断し、内部への熱の伝わりを遅らせるため、構造体の強度が長時間維持されます。
                                    鉄骨が高温で急激に強度を失うのに対し、CLTは火災時でも崩壊までの避難時間を十分に確保できる、優れた耐火性能を持っています。
                                </p>
                            </div>
                            <div className="column">
                                <h4>魔法瓶のような断熱性</h4>
                                <p>
                                    木材はコンクリートの約10倍、鉄の数約350倍とも言われる高い断熱性能を持っています。
                                    厚さのあるCLTパネル自体が巨大な断熱材として機能するため、外気温の影響を受けにくく、
                                    「夏は涼しく、冬は暖かい」理想的な室内環境を実現します。
                                    これにより冷暖房効率が飛躍的に向上し、ランニングコストの削減にも貢献します。
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 3. Design & Wellness */}
                <div className="detail-section">
                    <Reveal width="100%"><h3 className="section-title">03. Design & Wellness</h3></Reveal>
                    <Reveal delay={0.2} width="100%">
                        <p className="section-subtitle">五感に響く、木の空間美</p>

                        <div className="feature-grid two-col">
                            <div className="feature-item">
                                <h4>現し（あらわし）仕上げの美学</h4>
                                <p>
                                    CLTは構造材でありながら、そのまま内装の仕上げとして見せることができる美しさを持っています。
                                    壁や天井に木の木目を大胆に見せる「現し仕上げ」は、人工素材では再現できない重厚感と温もりを演出します。
                                    経年と共に深みを増す木の色合いは、空間に時間の経過という「物語」を与え、訪れるたびに違う表情を見せてくれます。
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>科学的に証明されたリラックス効果</h4>
                                <p>
                                    木材の香り成分（フィトンチッド）には、人間の副交感神経を優位にし、ストレスを軽減する効果があることが科学的に証明されています。
                                    また、木材の表面にある「1/fゆらぎ」と呼ばれる不規則な木目パターンは、人の目に安らぎを与えます。
                                    さらに、木材は有害な紫外線を吸収し、目に優しい光を反射する特性もあります。
                                    KITOのホテルに滞在すること自体が、心身を癒やすウェルネス体験となるのです。
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 4. Speed & Mobile */}
                <div className="detail-section alt-bg">
                    <Reveal width="100%"><h3 className="section-title">04. Speed & Relocatability</h3></Reveal>
                    <Reveal delay={0.2} width="100%">
                        <p className="section-subtitle">建設革命：速さと自由の両立</p>

                        <div className="text-columns">
                            <div className="column">
                                <h4>驚異的な施工スピード</h4>
                                <p>
                                    KITOのCLTセルユニットは、工場で精密にプレカット・組み立てられた状態で現場へ運ばれます。
                                    現場ではクレーンで「積むだけ」の作業が中心となるため、
                                    従来のRC造と比較して工期を大幅に（数ヶ月単位で）短縮することが可能です。
                                    また、乾式工法であるため、コンクリートの乾燥待ち時間も不要。
                                    天候にも左右されにくく、計画通りの迅速なホテル開業を実現します。
                                </p>
                            </div>
                            <div className="column">
                                <h4>「動く不動産」という概念</h4>
                                <p>
                                    ユニット化された構造は、建築後の「移設」を可能にしました。
                                    事業環境の変化や、土地の契約期間満了に伴い、建物を解体して廃棄するのではなく、
                                    また別の場所へ移動して再利用する。
                                    これは、不動産投資における「立地のリスク」を極限まで下げる画期的なソリューションであり、
                                    スクラップ＆ビルドからの脱却を目指すSDGsの観点からも極めて合理的です。
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 5. Ecology */}
                <div className="detail-section">
                    <Reveal width="100%"><h3 className="section-title">05. Environmental Impact</h3></Reveal>
                    <Reveal delay={0.2} width="100%">
                        <p className="section-subtitle">炭素を貯蔵する、都市の森林</p>
                        <p className="long-text">
                            木は成長過程で大気中のCO2（二酸化炭素）を吸収し、その身に固定します。
                            木材として利用された後も、その固定された炭素は燃やさない限り大気中に戻ることはありません。<br /><br />
                            CLTをふんだんに使用したKITOの建築は、いわば「第二の森林」です。
                            コンクリートや鉄の製造時には大量のCO2が排出されますが、木造建築はその排出量を大幅に削減できるだけでなく、
                            建物そのものが炭素の貯蔵庫として機能し、地球温暖化防止に直接的に貢献します。<br />
                            また、使用する木材には適切に管理された森林からの国産材などを積極的に採用。
                            「植える→育てる→使う→植える」という森林のサイクルを回すことで、日本の林業活性化と国土保全にも寄与します。<br />
                            KITOへの投資は、そのまま地球環境への投資となるのです。
                        </p>
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
                    margin-bottom: 5rem;
                }
                .header-image-wrapper { position: absolute; top:0; left:0; width:100%; height:100%; z-index:1; }
                .header-content { position: relative; z-index: 3; text-align: center; }
                .page-title { font-family: var(--font-family-serif); font-size: 3rem; margin-bottom: 1rem; }

                .intro-block { max-width: 800px; margin: 0 auto 5rem; line-height: 2; }
                .intro-block h2 { font-family: var(--font-family-serif); font-size: 2.5rem; margin-bottom: 2rem; color: var(--color-wood-dark); }
                .lead-text { font-size: 1.2rem; font-weight: 500; margin-bottom: 1.5rem; color: var(--color-text-primary); }

                .divider { border: 0; height: 1px; background: #ddd; margin: 4rem auto; max-width: 200px; }

                .detail-section { padding: 5rem 0; }
                .detail-section.alt-bg { background-color: var(--color-background-light); position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; width: 100vw; padding-left: max(2rem, calc(50% - 570px)); padding-right: max(2rem, calc(50% - 570px)); }
                
                .section-title { font-family: var(--font-family-serif); font-size: 3rem; margin-bottom: 0.5rem; color: #ddd; letter-spacing: 0.05em; }
                .section-subtitle { font-size: 1.5rem; margin-bottom: 3rem; color: var(--color-wood-dark); font-weight: 500; border-left: 4px solid var(--color-accent); padding-left: 1rem; }

                .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; }
                .feature-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
                
                .feature-item h4 { font-size: 1.2rem; margin-bottom: 1rem; color: var(--color-wood-dark); border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
                .feature-item p { font-size: 0.95rem; line-height: 1.8; opacity: 0.9; text-align: justify; }

                .text-columns { display: flex; gap: 4rem; flex-wrap: wrap; }
                .column { flex: 1; min-width: 300px; }
                .column h4 { font-size: 1.3rem; margin-bottom: 1rem; color: var(--color-wood-dark); font-family: var(--font-family-sans); }
                .column p { font-size: 1rem; line-height: 1.8; opacity: 0.9; text-align: justify; }

                .long-text { font-size: 1.05rem; line-height: 2; max-width: 900px; margin: 0 auto; text-align: justify; }

                @media (max-width: 768px) {
                    .feature-grid, .text-columns { grid-template-columns: 1fr; flex-direction: column; gap: 2rem; }
                    .detail-section { padding: 3rem 0; }
                    .page-title { font-size: 2.5rem; }
                }
            `}</style>
        </div>
    );
};

export default CltCellUnit;
