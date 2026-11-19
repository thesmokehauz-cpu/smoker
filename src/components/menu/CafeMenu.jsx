import { cafeMenu } from '../../data/siteData.js';
import './CafeMenu.css';

export default function CafeMenu() {
  return (
    <section className="section section--alt cafe">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Cafe menu</span>
          <h2>Something to sip while the coals glow</h2>
          <p>Good vibes, bigger clouds. Order from the cafe counter any time during your session.</p>
        </div>

        <div className="grid grid-3 cafe__grid">
          {cafeMenu.map((cat) => (
            <article key={cat.id} className="cafe__cat card shine">
              <h3 className="cafe__title copper-text">{cat.title}</h3>
              <ul className="cafe__items">
                {cat.items.map((it) => (
                  <li key={it.name} className="cafe__item">
                    <span className="cafe__name">
                      {it.name}
                      {it.note && <small> ({it.note})</small>}
                    </span>
                    <span className="cafe__dots" aria-hidden="true" />
                    {it.price === null
                      ? <span className="cafe__soon">Soon</span>
                      : <span className="cafe__price">${it.price}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
