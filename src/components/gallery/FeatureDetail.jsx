import { images } from '../../data/siteData.js';
import './FeatureDetail.css';

export default function FeatureDetail() {
  return (
    <section className="section section--alt feature-detail">
      <div className="wrap feature-detail__grid">
        <img className="feature-detail__img reflect" src={images.hookahDetail} alt="Close-up of a red and steel hookah stem with fine engraved lines" loading="lazy" />
        <div>
          <span className="kicker">Up close</span>
          <h2>Engraved steel, ruby accents</h2>
          <p>Our hookahs are chosen for how they look as much as how they smoke. Fine engraved lines catch the lounge lights and the red anodised rings echo the cushions around you.</p>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
