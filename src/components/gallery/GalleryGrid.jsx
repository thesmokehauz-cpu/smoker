import { useState, useEffect } from 'react';
import { images } from '../../data/siteData.js';
import './GalleryGrid.css';

const items = [
  { src: images.hookahDetail, cat: 'Hookah', alt: 'Engraved steel hookah stem with red accents and smoke' },
  { src: images.lounge, cat: 'Lounge', alt: 'Lounge with red majlis sofas and Sydney artwork' },
  { src: images.torchLight, cat: 'Hookah', alt: 'Torch lighter lighting coals on a hookah bowl' },
  { src: images.hookahRed, cat: 'Hookah', alt: 'Full hookah with red hose on a wooden table' },
  { src: images.coalsBowl, cat: 'Hookah', alt: 'Coals on a foil bowl' },
  { src: images.streetSign, cat: 'Lounge', alt: 'Now open street sign for The Smoke Hauz' },
];
const cats = ['All', 'Hookah', 'Lounge'];

export default function GalleryGrid() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const shown = items.filter((i) => cat === 'All' || i.cat === cat);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className="section gallery-grid">
      <div className="wrap">
        <div className="gallery-grid__filters">
          {cats.map((c) => (
            <button key={c} className={`gallery-grid__filter shine ${c === cat ? 'is-active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="gallery-grid__masonry">
          {shown.map((it) => (
            <button key={it.src} className="gallery-grid__item shine" onClick={() => setOpen(it)} aria-label={`Enlarge: ${it.alt}`}>
              <img src={it.src} alt={it.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="gallery-grid__lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <img src={open.src} alt={open.alt} />
          <button className="gallery-grid__close" aria-label="Close">&times;</button>
        </div>
      )}
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
