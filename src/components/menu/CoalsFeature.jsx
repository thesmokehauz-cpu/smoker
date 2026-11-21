import { images } from '../../data/siteData.js';
import './CoalsFeature.css';

export default function CoalsFeature() {
  return (
    <section className="section section--alt coals">
      <div className="wrap coals__grid">
        <img className="coals__img reflect" src={images.coalsBowl} alt="Natural coal pieces on a foil-wrapped bowl with a red hookah stem" loading="lazy" />
        <div>
          <span className="kicker">Why it tastes smoother</span>
          <h2>Natural coals, foil-sealed bowls</h2>
          <p>We light coals fully before they reach your table, so there is no sharp, burnt taste. The foil seal spreads the heat gently across the flavour.</p>
          <p>Prefer it lighter or stronger? Say so when you order and we will adjust the bowl.</p>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
