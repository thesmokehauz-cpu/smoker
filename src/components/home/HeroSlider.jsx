import { useState, useEffect, useCallback, useRef } from 'react';
import { images } from '../../data/siteData.js';
import './HeroSlider.css';

const slides = [
  { img: images.hookahDetail, alt: 'Premium hookah experience' },
  { img: images.coalsBowl, alt: 'Fresh hookah coals' },
  { img: images.hookahRed, alt: 'Red hookah experience' },
  { img: images.torchLight, alt: 'Warm lounge atmosphere' },
  { img: images.lounge, alt: 'Luxury lounge interior' },
];

const SWIPE_MIN = 45; // px

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const touchY = useRef(null);

  const next = useCallback(() => {
    setActive((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide: arrow/swipe ke baad timer reset hota hai
  useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [active, next]);

  // Mobile swipe
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    const dy = e.changedTouches[0].clientY - touchY.current;
    touchX.current = null;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <section
      className="hero"
      aria-label="The Smoke Hauz image slider"
      aria-roledescription="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero__slide ${active === index ? 'is-active' : ''}`}
          style={{ '--slide-img': `url("${slide.img}")` }}
          aria-hidden={active !== index}
        >
          <img
            className="hero__bg"
            src={slide.img}
            alt={slide.alt}
            draggable="false"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className="hero__dots" role="tablist" aria-label="Choose slide">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Slide ${i + 1}`}
            className={`hero__dot ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}