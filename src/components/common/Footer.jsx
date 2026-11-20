
import { Link } from 'react-router-dom';
import { navLinks, images, business } from '../../data/siteData.js';
import './Footer.css';

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const instagramUrl = 'https://www.instagram.com/p/Dft8L8HCrx4/';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">

        <div>
          <img
            className="site-footer__logo"
            src={images.logo}
            alt={business.name}
          />

          <p>
            A warm Arabic-style sheesha lounge in the heart of Lakemba.
            Slow evenings, fresh coals, good company.
          </p>

          <a
            className="site-footer__instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Instagram"
          >
            <InstagramIcon />
            <span>Follow us on Instagram</span>
          </a>
        </div>

        <div>
          <h4>Explore</h4>

          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Find us</h4>

          <p>{business.address}</p>

          <a href={`tel:${business.phoneTel}`}>
            {business.phoneDisplay}
          </a>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>

      </div>

      <div className="wrap site-footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} {business.name}.
          All rights reserved.
        </span>

        <span>
          Sheesha is for adults only. Smoking harms your health.
        </span>
      </div>
    </footer>
  );
}
