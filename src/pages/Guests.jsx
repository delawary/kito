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

                {/* Concept Intro */}
                <div className="intro-text text-center">
                    <Reveal width="100%">
                        <h2>五感を研ぎ澄ます、<br />何もしない贅沢。</h2>
                        <p>
                            KITOの滞在に、決まったスケジュールはありません。<br />
                            あるのは、圧倒的な静寂と、木の温もりだけ。<br />
                            日常のノイズから解放され、本来の自分へと還る時間を提供します。<br /><br />

                            朝は小鳥のさえずりで目覚め、<br />
                            昼は木漏れ日の中で読書に耽り、<br />
                            夜は満天の星空の下で炎を見つめる。<br />
                            シンプルでありながら、何よりも贅沢な時間がここにあります。
                        </p>
                    </Reveal>
                </div>

                <div className="scenes-section">
                    <Reveal width="100%"><h3 className="section-heading">Scenes of Stay</h3></Reveal>

                    <div className="scene-row">
                        <div className="scene-content">
                            <h4>07:00 AM - Awakening</h4>
                            <h5>光と音で目覚める朝</h5>
                            <p>
                                カーテンを開け放ち、朝の光を全身に浴びる。<br />
                                森の澄んだ空気を胸いっぱいに吸い込めば、細胞の一つひとつが目覚めていくのを感じます。<br />
                                朝食は、地元の新鮮な野菜と手作りのパンをバスケットに詰めてテラスへ。<br />
                                自然の音だけをBGMに、ゆっくりとコーヒーを味わう至福のひとときです。
                            </p>
                        </div>
                        <div className="scene-visual gray-bg">
                            <span>Morning Light</span>
                        </div>
                    </div>

                    <div className="scene-row reverse">
                        <div className="scene-content">
                            <h4>02:00 PM - Retreat</h4>
                            <h5>自分と向き合う静寂の午後</h5>
                            <p>
                                部屋に備え付けられたライブラリーから、気になった本を手に取る。<br />
                                あるいは、ただ窓の外の揺れる木々を眺めて過ごす。<br />
                                誰にも邪魔されないプライベートな「離れ」だからこそ、<br />
                                没頭できる趣味の時間や、深い思索の時間を心ゆくまで楽しめます。<br />
                                Wi-Fi完備のため、クリエイティブなワーケーションにも最適です。
                            </p>
                        </div>
                        <div className="scene-visual gray-bg-dark">
                            <span>Private Time</span>
                        </div>
                    </div>

                    <div className="scene-row">
                        <div className="scene-content">
                            <h4>09:00 PM - Deep Night</h4>
                            <h5>炎と星空に包まれる夜</h5>
                            <p>
                                日が暮れると、あたりは漆黒の闇と静寂に包まれます。<br />
                                テラスのファイヤーピットに火を灯し、揺らぐ炎を見つめる。<br />
                                パチパチという薪の爆ぜる音と、頭上に広がる満天の星空。<br />
                                グラスを傾けながら語り合う夜は、忘れられない旅の記憶となるでしょう。<br />
                                就寝前には、檜の香りが漂うバスルームで、一日の疲れを芯から癒やしてください。
                            </p>
                        </div>
                        <div className="scene-visual gray-bg">
                            <span>Night Bonfire</span>
                        </div>
                    </div>
                </div>

                <div className="amenities-section">
                    <Reveal width="100%"><h3 className="section-heading">Amenities & Details</h3></Reveal>
                    <div className="amenities-grid">
                        <div className="amenity-item">
                            <h4>Architecture</h4>
                            <p>釘を使わない伝統的な「蝶蟻」接合で組み上げられたCLTユニット。木の構造美をそのまま鑑賞できる、美術館のような空間です。</p>
                        </div>
                        <div className="amenity-item">
                            <h4>Sleep</h4>
                            <p>最高級のオーガニックコットンリネンと、体圧分散に優れた特注マットレスを採用。深い眠りをお約束します。</p>
                        </div>
                        <div className="amenity-item">
                            <h4>Bath</h4>
                            <p>森林の香りをそのまま閉じ込めたオリジナルバスアメニティ。肌に優しいオーガニック成分100%です。</p>
                        </div>
                        <div className="amenity-item">
                            <h4>Tools</h4>
                            <p>厳選されたコーヒーミル、Bluetoothスピーカー、ヨガマットなど、滞在を豊かにするツールを完備。</p>
                        </div>
                    </div>
                </div>

            </section>

            <style>{`
                .page-header {
                    position: relative;
                    height: 70vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 8rem;
                    overflow: hidden;
                }

                .header-bg-wrapper { position: absolute; top:0; left:0; width:100%; height:100%; z-index:1; }
                .header-img-parallax { width: 100%; height: 100%; object-fit: cover; animation: zoomSlow 20s linear infinite alternate; }
                @keyframes zoomSlow { from{transform: scale(1);} to{transform: scale(1.15);} }
                .header-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.3); z-index: 2; }
                .header-content { z-index: 3; position: relative; text-align: center; }

                .page-title { font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-family-serif); }

                .intro-text { max-width: 800px; margin: 0 auto 10rem; line-height: 2.2; }
                .intro-text h2 { font-size: 2.2rem; margin-bottom: 2rem; font-family: var(--font-family-serif); color: var(--color-wood-dark); }
                .intro-text p { font-size: 1.1rem; opacity: 0.9; }

                .section-heading {
                    font-family: var(--font-family-serif);
                    font-size: 2.5rem;
                    color: var(--color-accent);
                    margin-bottom: 4rem;
                    text-align: center;
                }

                .scenes-section { margin-bottom: 10rem; }
                .scene-row { display: flex; gap: 4rem; margin-bottom: 6rem; align-items: center; }
                .scene-row.reverse { flex-direction: row-reverse; }
                
                .scene-content { flex: 1; }
                .scene-content h4 { font-size: 1rem; color: var(--color-accent); letter-spacing: 0.1em; margin-bottom: 0.5rem; text-transform: uppercase; }
                .scene-content h5 { font-size: 1.8rem; margin-bottom: 1.5rem; font-family: var(--font-family-serif); color: var(--color-wood-dark); }
                .scene-content p { font-size: 1rem; line-height: 2; color: var(--color-text-secondary); }

                .scene-visual { 
                    flex: 1; height: 400px; 
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 2px;
                    color: rgba(255,255,255,0.8); font-family: var(--font-family-serif); font-size: 2rem;
                }
                .gray-bg { background-color: #d8d8d8; }
                .gray-bg-dark { background-color: #bebebe; }

                .amenities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                }
                .amenity-item {
                    background: var(--color-background-light);
                    padding: 2.5rem;
                    border-top: 2px solid var(--color-wood-medium);
                }
                .amenity-item h4 { font-size: 1.2rem; margin-bottom: 1rem; font-family: var(--font-family-serif); color: var(--color-wood-dark); }
                .amenity-item p { font-size: 0.95rem; line-height: 1.8; opacity: 0.8; }

                @media (max-width: 768px) {
                    .scene-row, .scene-row.reverse { flex-direction: column; }
                    .scene-visual { width: 100%; height: 250px; }
                }
            `}</style>
        </div>
    );
};

export default Guests;
