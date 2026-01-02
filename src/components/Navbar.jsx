import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/global.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we actally need a solid background (e.g. not on home page)
    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'solid-bg' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="KITO" className="navbar-logo" />
                </Link>
                <ul className="navbar-links">
                    <li><Link to="/">TOP</Link></li>
                    <li><Link to="/clt-cell-unit">CLTセルユニット</Link></li>
                    <li><Link to="/residence">住まい</Link></li>
                    <li><Link to="/investors">投資家の皆様へ</Link></li>
                    <li><Link to="/guests">宿泊体験</Link></li>
                    <li><Link to="/gallery">ギャラリー</Link></li>
                </ul>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    transition: all 0.4s ease;
                    color: white;
                }

                .navbar.scrolled, .navbar.solid-bg {
                    background-color: rgba(255, 255, 255, 0.95);
                    padding: 1rem 0;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    color: var(--color-text-primary);
                }

                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .navbar-brand {
                    display: flex;
                    align-items: center;
                }

                .navbar-logo {
                    height: 50px; /* Adjust height as needed */
                    width: auto;
                    transition: all 0.4s ease;
                }

                .navbar-links {
                    list-style: none;
                    display: flex;
                    gap: 2rem;
                }

                .navbar-links a {
                    font-family: var(--font-family-sans);
                    font-size: 0.9rem;
                    letter-spacing: 0.05em;
                    font-weight: 500;
                    position: relative;
                }

                .navbar-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -4px;
                    left: 0;
                    background-color: currentColor;
                    transition: width 0.3s ease;
                }

                .navbar-links a:hover::after {
                    width: 100%;
                }

                /* Mobile check - simple hide for now, or stack */
                @media (max-width: 768px) {
                    .navbar-links {
                        display: none; /* TODO: Implement mobile menu if needed */
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
