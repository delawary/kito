import React, { useState } from 'react';
import { Reveal } from '../components/animations/Reveal.jsx';
import { StaggerText } from '../components/animations/StaggerText.jsx';
import '../styles/global.css';

// Import all images
import heroBg from '../assets/hero_bg_premium.png';
import heroBgOld from '../assets/hero-bg.png'; // Legacy
import cltDetail from '../assets/clt_detail.png';
import cltDetailOld from '../assets/clt-detail.png'; // Legacy
import hotelExterior from '../assets/hotel_exterior_roadside.png';
import guestRoom from '../assets/guest_room_interior.png';
import lobbyWrapper from '../assets/kito_lobby.png';
import terrace from '../assets/kito_terrace.png';

const Gallery = () => {
    // Image data array
    const images = [
        // Original Set
        { id: 1, src: heroBg, alt: "Exterior Architecture", category: "Architecture", size: "large", style: {} },
        { id: 2, src: lobbyWrapper, alt: "Lobby Lounge", category: "Interior", size: "medium", style: {} },
        { id: 3, src: guestRoom, alt: "Guest Room", category: "Interior", size: "medium", style: {} },
        { id: 4, src: terrace, alt: "Evening Terrace", category: "Exterior", size: "wide", style: {} },
        { id: 5, src: cltDetail, alt: "CLT Detail", category: "Detail", size: "small", style: {} },
        { id: 6, src: hotelExterior, alt: "Roadside View", category: "Exterior", size: "medium", style: {} },

        // New Additions (Legacy & Variations)
        { id: 7, src: heroBgOld, alt: "Original Concept", category: "Architecture", size: "medium", style: { filter: "sepia(0.2) contrast(1.1)" } },
        { id: 8, src: cltDetailOld, alt: "Structural Prototype", category: "Detail", size: "small", style: {} },

        // CSS Variations to add variety without new generation
        { id: 9, src: hotelExterior, alt: "Exterior (Night)", category: "Exterior", size: "medium", style: { filter: "brightness(0.6) contrast(1.2) hue-rotate(200deg) saturate(0.8)" } },
        { id: 10, src: lobbyWrapper, alt: "Lobby (Monochrome)", category: "Interior", size: "tall", style: { filter: "grayscale(100%) contrast(1.2)" } },
        { id: 11, src: guestRoom, alt: "Morning Light", category: "Interior", size: "medium", style: { filter: "brightness(1.1) saturate(1.1)", transform: "scale(1.1)" } }, // Zoomed slightly
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter(img => img.category === selectedCategory);

    return (
        <div className="page-container">
            <header className="page-header-simple">
                <div className="container">
                    <h1 className="page-title"><StaggerText text="Visual Journal" /></h1>
                    <p className="page-subtitle">KITOの世界観を彩る、シーンの断片</p>
                </div>
            </header>

            <section className="section container">
                <div className="filter-bar">
                    {['All', 'Architecture', 'Interior', 'Exterior', 'Detail'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredImages.map((img) => (
                        <Reveal key={img.id}>
                            <div className={`gallery-card ${img.size}`}>
                                <div className="img-wrapper">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        style={img.style} // Apply custom styles/filters
                                    />
                                    <div className="img-overlay">
                                        <span className="img-category">{img.category}</span>
                                        <span className="img-title">{img.alt}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <style>{`
                .page-header-simple {
                    padding: 8rem 0 4rem;
                    text-align: center;
                    background-color: var(--color-background-off-white);
                }
                .page-title { font-family: var(--font-family-serif); font-size: 3rem; margin-bottom: 1rem; color: var(--color-wood-dark); }
                .page-subtitle { font-size: 1rem; letter-spacing: 0.1em; color: var(--color-text-secondary); opacity: 0.8; }

                .filter-bar {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    flex-wrap: wrap;
                }

                .filter-btn {
                    background: none;
                    border: none;
                    font-family: var(--font-family-sans);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    color: var(--color-text-secondary);
                    padding-bottom: 0.2rem;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s;
                }

                .filter-btn:hover, .filter-btn.active {
                    color: var(--color-wood-dark);
                    border-color: var(--color-accent);
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-auto-rows: 250px;
                    gap: 1.5rem;
                    grid-auto-flow: dense;
                }

                .gallery-card {
                    height: 100%;
                    width: 100%;
                    position: relative;
                }

                /* Grid Spans for "Masonry-like" feel */
                @media (min-width: 768px) {
                    .gallery-card.large { grid-row: span 2; grid-column: span 2; }
                    .gallery-card.wide { grid-column: span 2; }
                    .gallery-card.tall { grid-row: span 2; }
                }

                .img-wrapper {
                    width: 100%; height: 100%;
                    position: relative;
                    overflow: hidden;
                    border-radius: 2px;
                }

                .img-wrapper img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .img-wrapper:hover img {
                    transform: scale(1.05); /* Zoom effect on hover */
                }

                .img-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.3);
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: opacity 0.3s ease;
                }

                .img-wrapper:hover .img-overlay { opacity: 1; }

                .img-category {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 0.5rem;
                }
                .img-title {
                    font-family: var(--font-family-serif);
                    font-size: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default Gallery;
