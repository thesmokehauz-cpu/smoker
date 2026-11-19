import { collections, business } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './SheeshaCollection.css';

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13M19 12v9H5v-9" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
  </svg>
);

export default function SheeshaCollection() {
  return (
    <section className="section sheesha">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Sheesha collection</span>
          <h2>Premium flavours, smooth sessions</h2>
          <p>Pick a collection, then pick your flavour. Flavour availability changes, so message us to check what is in stock today.</p>
        </div>

        <div className="sheesha__list">
          {collections.map((c) => (
            <article key={c.id} className="tier card shine" style={{ '--tone': c.tone }}>
              <header className="tier__head">
                <div>
                  <h3 className="tier__name">{c.name}</h3>
                  <p className="tier__tag">{c.tagline}</p>
                </div>
                <span className="tier__price copper-text">${c.price}</span>
              </header>

              <ul className="tier__flavours">
                {c.flavours.map((f) => (
                  <li key={f}><span aria-hidden="true">✦</span>{f}</li>
                ))}
              </ul>

              <footer className="tier__foot">
                {c.perk && (
                  <span className="tier__perk"><GiftIcon />{c.perk}</span>
                )}
                <Button
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi, I would like to order the ${c.name}.`)}`}
                  variant="ghost"
                >
                  Order on WhatsApp
                </Button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
