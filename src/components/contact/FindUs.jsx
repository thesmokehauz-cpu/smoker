import { business, images } from '../../data/siteData.js';
import './FindUs.css';

export default function FindUs() {
  return (
    <section className="section section--alt find-us">
      <div className="wrap find-us__grid">
        <div className="find-us__info">
          <h2>Find us</h2>
          <div className="find-us__item card shine"><h3>Address</h3><p>{business.address}<br />We are inside the cafe. Follow the black and gold sign.</p></div>
          <div className="find-us__item card shine"><h3>Phone & WhatsApp</h3><p><a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a></p></div>
          <div className="find-us__item card shine"><h3>Hours</h3><p>{business.hours}</p></div>
          <img className="find-us__sign" src={images.streetSign} alt="Street sign pointing inside the cafe" loading="lazy" />
        </div>
        <div className="find-us__map">
          <iframe title="Map to The Smoke Hauz" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`} />
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
