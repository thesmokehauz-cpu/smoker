import { images } from '../../data/siteData.js';
import './Interior.css';

export default function Interior() {
  return (
    <section className="interior" style={{ backgroundImage: `linear-gradient(0deg, rgba(11,9,8,.85), rgba(11,9,8,.35)), url(${images.lounge})` }}>
      <div className="wrap interior__inner">
        <h2 className="copper-text">The whole room, one glance</h2>
        <p>Red majlis sofas on one side, black steel and glowing Sydney art on the other.</p>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
