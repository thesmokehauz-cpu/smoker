import Button from './Button.jsx';
import { business } from '../../data/siteData.js';
import './CTABand.css';

// Closing call-to-action section reused at the bottom of inner pages.
export default function CTABand({ title = 'Your table is waiting', text = 'Send us a quick WhatsApp message with your group size and time. We will confirm your seats.' }) {
  const msg = encodeURIComponent('Hi, I would like to reserve a table at The Smoke Hauz.');
  return (
    <section className="section cta-band">
      <div className="wrap cta-band__box shine">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-band__actions">
          <Button href={`https://wa.me/${business.whatsapp}?text=${msg}`}>Reserve on WhatsApp</Button>
          <Button to="/contact" variant="ghost">Get directions</Button>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
