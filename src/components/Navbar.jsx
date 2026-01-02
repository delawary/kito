import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/global.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto'; // Reset scroll lock
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.body.style.overflow = 'auto'; // Unlock scroll
        }
    };

    // Check if we actally need a solid background (e.g. not on home page)
    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'solid-bg' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="KITO" className="navbar-logo" />
                </Link>

                {/* Hamburger Toggle */}
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <ul className={`navbar-links ${isMenuOpen ? 'mobile-show' : ''}`}>
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

                .navbar.scrolled, .navbar.solid-bg, .navbar.menu-open {
                    background-color: rgba(255, 255, 255, 0.98);
                    padding: 1rem 0;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    color: var(--color-text-primary);
                }

                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }

                .navbar-brand {
                    display: flex;
                    align-items: center;
                    z-index: 1100;
                }

                .navbar-logo {
                    height: 50px;
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

                /* Hamburger Styles */
                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    z-index: 1100;
                    padding: 0;
                }

                .bar {
                    width: 100%;
                    height: 2px;
                    background-color: currentColor;
                    transition: all 0.3s ease;
                }

                .bar.open:nth-child(1) { transform: translateY(9.5px) rotate(45deg); }
                .bar.open:nth-child(2) { opacity: 0; }
                .bar.open:nth-child(3) { transform: translateY(-9.5px) rotate(-45deg); }

                @media (max-width: 960px) {
                    .navbar-links {
                        gap: 1.5rem;
                    }
                }

                @media (max-width: 820px) {
                    .menu-toggle {
                        display: flex;
                    }

                    .navbar-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 100%;
                        height: 100vh;
                        background: white;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        transition: right 0.4s cubic-bezier(0.45, 0, 0.55, 1);
                        z-index: 1050;
                        gap: 3rem;
                    }

                    .navbar-links.mobile-show {
                        right: 0;
                    }

                    .navbar-links a {
                        font-size: 1.5rem;
                        color: var(--color-text-primary);
                        font-family: var(--font-family-serif);
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
