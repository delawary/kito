import React from 'react';
import '../styles/global.css';

const Guests = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title fade-in-up">宿泊体験</h1>
                    <p className="page-subtitle fade-in-up delay-1">木に包まれる、非日常の安らぎ</p>
                </div>
            </header>

            <section className="section container">
                <div className="content-block fade-in-up delay-2">
                    <h2>五感で感じる木の香り</h2>
                    <p>
                        KITOのホテルに足を踏み入れた瞬間、あなたは深い森の中にいるような清々しい木の香りに包まれます。
                        国産杉の無垢材をふんだんに使用した室内は、まるで森林浴をしているかのようなリラックス効果をもたらします。
                        都会の喧騒を離れ、深呼吸したくなる空間がここにあります。
                    </p>
                </div>

                <div className="content-block fade-in-up">
                    <h2>プライベートな離れ空間</h2>
                    <p>
                        客室はすべて独立した「離れ」のようなユニット構造です。
                        隣の部屋の音を気にすることなく、自分たちだけの時間をゆったりと過ごすことができます。
                        ご家族やパートナー、あるいは一人でのワーケーションにも最適な、静寂とプライバシーが守られた空間です。
                    </p>
                </div>

                <div className="content-block fade-in-up">
                    <h2>自然とつながるデザイン</h2>
                    <p>
                        大きな窓からは、その土地ならではの景色を切り取った絵画のような風景が広がります。
                        インテリアはシンプルながらも上質で、木の美しさを引き立てるデザイン。
                        朝日で目覚め、木の温もりに癒さる。そんな贅沢な一日をお約束します。
                    </p>
                </div>
            </section>

            <style>{`
                .page-header {
                    background-color: var(--color-wood-medium);
                    color: white;
                    padding: 120px 0 60px;
                    text-align: center;
                    margin-bottom: 4rem;
                }
                
                .page-title { font-size: 2.5rem; margin-bottom: 1rem; }
                .page-subtitle { opacity: 0.8; letter-spacing: 0.1em; }
                
                .content-block { margin-bottom: 4rem; max-width: 800px; margin: 0 auto 4rem; }
                .content-block h2 { 
                    font-size: 1.8rem; 
                    color: var(--color-wood-medium);
                    margin-bottom: 1.5rem; 
                    position: relative;
                    padding-left: 1rem;
                }
                .content-block h2::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.2em;
                    bottom: 0.2em;
                    width: 4px;
                    background-color: var(--color-accent);
                }

                .fade-in-up { animation: fadeInUp 0.8s forwards; opacity: 0; transform: translateY(20px); }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.4s; }
                @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default Guests;
