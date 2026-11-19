import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, images, business } from '../../data/siteData.js';
import './Header.css';

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu khula ho to page scroll lock + badi screen par band
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const bookingHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hi, I would like to book a table at ${business.name}.`
  )}`;

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header__bar">
        {/* Logo (glass pill ke andar) */}
        <Link
          to="/"
          className="site-header__logo"
          onClick={() => setOpen(false)}
          aria-label={`${business.name} home`}
        >
          <img src={images.logo} alt={`${business.name} ${business.tagline}`} />
        </Link>

        {/* Center pill nav */}
        <nav className={`site-header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `site-header__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}

          {/* Mobile menu ke andar wala button */}
          <a
            className="site-header__cta site-header__cta--mobile"
            href={bookingHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <CalendarIcon />
            <span>Book a Table</span>
            <ArrowIcon />
          </a>
        </nav>

        {/* Right side */}
        <div className="site-header__right">
          <a
            className="site-header__cta site-header__cta--desktop"
            href={bookingHref}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarIcon />
            <span>Book a Table</span>
            <ArrowIcon />
          </a>

          <button
            className={`site-header__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile overlay: bahar click karne par menu band */}
      <div className={`site-header__overlay ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
    </header>
  );
}