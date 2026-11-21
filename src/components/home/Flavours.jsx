import { collections } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './Flavours.css';

// One icon per collection: Classic, Premium, Signature
const icons = {
  classic: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M25 14C23 7 29 5 34 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M25 14C15 8 6 16 9 27C11 36 18 41 25 39C33 42 40 34 40 25C40 17 33 11 25 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M25 14C29 9 34 10 37 12C34 17 29 18 25 14Z" fill="currentColor"/>
    </svg>
  ),
  premium: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M13 8H35L43 19L24 42L5 19L13 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M5 19H43M17 19L24 42L31 19M17 19L13 8M31 19L35 8M17 19L24 8L31 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  signature: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M25 5C27 13 39 18 38 29C37 38 31 43 23 42C14 41 9 34 11 26C12 19 19 15 20 9C24 14 24 18 23 22C29 18 29 12 25 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 25C28 30 32 34 27 39C22 43 16 38 18 33C19 30 22 28 24 25Z" fill="currentColor"/>
    </svg>
  ),
};

export default function Flavours() {
  return (
    <section className="section flavours">
      <div className="wrap">

        {/* SECTION HEADING */}
        <div className="section-head">
          <span className="kicker">Sheesha collection</span>
          <h2>Three collections, endless flavour</h2>
          <p>
            Not sure what to pick? Tell us what you usually enjoy
            and we will point you to the right flavour.
          </p>
        </div>

        {/* COLLECTION CARDS */}
        <div className="flavours__grid">
          {collections.map((c) => (
            <article
              key={c.id}
              className="flavour card shine"
              style={{ '--tone': c.tone }}
            >
              <div className="flavour__top">
                <div className="flavour__icon">{icons[c.id]}</div>
                <span className="flavour__price copper-text">${c.price}</span>
              </div>

              <h3>{c.name}</h3>
              <p className="flavour__tag">{c.tagline}</p>

              <ul className={c.flavours.length > 8 ? 'flavour__list--two' : ''}>
                {c.flavours.map((item) => (
                  <li key={item}>
                    <span className="flavour__bullet">✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              {c.perk && <p className="flavour__perk">{c.perk}</p>}
            </article>
          ))}
        </div>

        <div className="flavours__more">
          <Button to="/menu" variant="ghost">See full menu</Button>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
