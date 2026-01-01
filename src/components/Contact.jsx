import React from 'react';

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-cta">
            <h2 className="cta-title">未来を<br />建設する。</h2>
            <p className="cta-text">
              KITOのモジュール建築にご興味はありませんか？
              <br />
              持続可能な未来を、共に創りましょう。
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdht0RvkOtMU3rMTpiaaxUWEYLnDERXFVvrGa18K5t6GuIi0w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="cta-button">
              お問い合わせ
            </a>
          </div>

          <div className="contact-info">
            <div className="info-group">
              <h3 className="info-label">連絡先</h3>
              <p>
                <a href="https://ryokan.life/" target="_blank" rel="noopener noreferrer">運営会社</a>
                <br />
                <a href="mailto:info@ryokan.life">info@ryokan.life</a>
              </p>
            </div>
            <div className="info-group">
              <h3 className="info-label">SNS</h3>
              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">X (Twitter)</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 KITO All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">プライバシーポリシー</a>
            <a href="#">利用規約</a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-wood-dark);
          color: var(--color-background-off-white);
          padding: 2.5rem 0 1.5rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 960px) {
          .contact-content {
            grid-template-columns: 1.5fr 1fr;
          }
        }

        .cta-title {
          font-family: var(--font-family-serif);
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1;
          margin-bottom: 1.5rem;
          color: var(--color-accent);
        }

        .cta-text {
          font-size: 1.125rem;
          margin-bottom: 3rem;
          opacity: 0.8;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          border: 1px solid var(--color-background-off-white);
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: var(--color-background-off-white);
          color: var(--color-wood-dark);
        }

        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .info-group p, .info-group a {
          font-size: 0.95rem;
          line-height: 1.8;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .info-group a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.875rem;
          opacity: 0.6;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }
      `}</style>
    </footer>
  );
};

export default Contact;
