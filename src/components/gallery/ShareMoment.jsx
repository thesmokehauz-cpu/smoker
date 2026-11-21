import { business } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './ShareMoment.css';

export default function ShareMoment() {
  return (
    <section className="section section--alt share">
      <div className="wrap share__box">
        <div>
          <h2>Took a great photo at the lounge?</h2>
          <p>Send it to us on WhatsApp. With your permission, we would love to feature it.</p>
        </div>
        <Button href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like to share a photo from The Smoke Hauz.')}`}>Send a photo</Button>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
