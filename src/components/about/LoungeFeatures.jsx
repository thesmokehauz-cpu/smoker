import { images } from '../../data/siteData.js';
import './LoungeFeatures.css';

const feats = ['Majlis-style sofas with Arabic fabrics', 'Black steel walls and warm lighting', 'Large screen for calm background visuals', 'Ready-to-use cafe counter for drinks', 'Space for large groups and families', 'Original artwork of Sydney in smoke and flame'];

export default function LoungeFeatures() {
  return (
    <section className="section section--alt lounge-feat">
      <div className="wrap lounge-feat__grid">
        <div>
          <span className="kicker">The space</span>
          <h2>Details you will notice when you walk in</h2>
          <ul className="lounge-feat__list">
            {feats.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="lounge-feat__media">
          <img src={images.hookahDetail} alt="Engraved steel hookah stem with red accents and rising smoke" loading="lazy" className="shine" />
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
