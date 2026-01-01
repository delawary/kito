import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Building2, TrendingUp, History } from 'lucide-react'
import MemberCard from './components/MemberCard'

function App() {
  const members = [
    {
      name: "デラワリ　アミン",
      role: "代表取締役",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "フューチャーベンチャーキャピタル、星野リゾートを経て当社創業。宿泊・観光を軸とした地域活性化を推進。"
    },
    {
      name: "於保　孝志",
      role: "取締役",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "星野リゾートにて総支配人を歴任。宿泊施設の経営・運営、アセットマネジメントに精通。"
    },
    {
      name: "なのなの",
      role: "メンター / 名付け親",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      bio: "投資リテラシーの啓蒙活動を行う魔法少女。当社創業時からメンバーを勇気づけるメンター。"
    }
  ]

  const businesses = [
    {
      title: "宿泊・温浴施設の運営、事業承継",
      desc: "後継者不在のお宿を引き継ぎ、現代のニーズに合わせたリノベーションと経営改善を行います。",
      icon: <History size={32} />
    },
    {
      title: "地域資源を活かした観光活性化",
      desc: "遊休不動産活用や特産品開発、体験プログラム企画を通じて地域全体の価値を向上させます。",
      icon: <TrendingUp size={32} />
    }
  ]

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 2rem', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="serif" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>愛あれば大丈夫</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
          <a href="#about">想い</a>
          <a href="#business">事業内容</a>
          <a href="#members">メンバー</a>
          <a href="#recruit">採用</a>
          <a href="#contact">お問い合わせ</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ color: 'white' }}
          >
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>心安らぐ、原風景</h1>
            <p className="serif" style={{ fontSize: '1.4rem', letterSpacing: '0.3em', opacity: 0.9 }}>小さなお宿の心を次世代へつなぐ</p>
          </motion.div>
        </section>

        {/* Concept Section */}
        <section id="about" style={{ padding: '10rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="serif" style={{ color: 'var(--color-accent)', fontWeight: 'bold', letterSpacing: '0.1em' }}>CONCEPT</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '1rem', marginBottom: '3.5rem' }}>私たちの想い</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '2.2', color: 'var(--color-text-sub)' }}>
              地域には、知られていない美しい風景、伝統、そして人々の営みがあります。<br />
              私たちはそれらの価値を再発見し、歴史ある旅館や温泉に新たな息吹を吹き込みます。<br />
              訪れる人々に深い安らぎと感動を届ける、「持続可能な観光」の形を追求し続けます。
            </p>
          </motion.div>
        </section>

        {/* Business Section */}
        <section id="business" style={{ padding: '8rem 2rem', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span className="serif" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>BUSINESS</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '1rem' }}>事業内容</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {businesses.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass"
                  style={{ padding: '3rem', borderRadius: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                >
                  <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', lineHeight: '1.4' }}>{b.title}</h3>
                  <p style={{ color: 'var(--color-text-sub)', lineHeight: '1.8' }}>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members" style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="serif" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>MEMBERS</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '1rem' }}>メンバー紹介</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {members.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>
        </section>

        {/* Recruit Section */}
        <section id="recruit" style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span className="serif" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>RECRUIT</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '1rem', marginBottom: '3rem' }}>私たちと一緒に働きませんか？</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '2', marginBottom: '4rem', opacity: 0.8 }}>
              私たちは、地域の魅力を次世代へつなぐ仲間を募集しています。<br />
              フラットな組織で、自律的に挑戦できる環境をご用意しています。
            </p>
            <motion.a
              href="https://www.wantedly.com/companies/company_9605417"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1.2rem 3rem',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                borderRadius: '3rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}
            >
              採用情報を見る <ArrowRight size={20} />
            </motion.a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="serif" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>CONTACT</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '1rem', marginBottom: '3rem' }}>お問い合わせ</h2>
            <p style={{ color: 'var(--color-text-sub)', marginBottom: '4rem' }}>
              事業承継、地域活性化、採用に関するお問い合わせは、<br />
              以下のボタンより承っております。
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>お名前</label>
                <input type="text" className="glass" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>メールアドレス</label>
                <input type="email" className="glass" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>メッセージ</label>
                <textarea rows="5" className="glass" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ddd', resize: 'none' }}></textarea>
              </div>
              <motion.button
                whileHover={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                style={{
                  marginTop: '1rem',
                  padding: '1.2rem',
                  borderRadius: '0.5rem',
                  border: '2px solid var(--color-primary)',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                送信する
              </motion.button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '6rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-primary)', color: 'white' }}>
          <div className="serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>愛あれば大丈夫</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>© 2025 AI AREBA DAIJOBU Inc. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
