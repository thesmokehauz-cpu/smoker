import { images, business } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './VisitCTA.css';

export default function VisitCTA() {
  return (
    <section className="section section--alt visit">
      <div className="wrap visit__grid">
        <img className="visit__img reflect" src={images.streetSign} alt="The Smoke Hauz street sign: now open, inside the cafe" loading="lazy" />
        <div>
          <span className="kicker">Now open</span>
          <h2>Find us inside the cafe</h2>
          <p>Look for the black and gold sign on Haldon Street and follow the arrow. The lounge is at the back of the cafe.</p>
          <p className="visit__addr"><strong>{business.address}</strong><br />{business.phoneDisplay}</p>
          <div className="visit__actions">
            <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`}>Open in Maps</Button>
            <Button href={`https://wa.me/${business.whatsapp}`} variant="ghost">WhatsApp us</Button>
          </div>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
