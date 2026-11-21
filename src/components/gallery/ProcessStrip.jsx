import { images } from '../../data/siteData.js';
import './ProcessStrip.css';

const frames = [
  { img: images.coalsBowl, t: 'Packed and sealed' },
  { img: images.torchLight, t: 'Lit with a torch' },
  { img: images.hookahRed, t: 'Served to the table' },
];

export default function ProcessStrip() {
  return (
    <section className="section process-strip">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Behind the counter</span>
          <h2>Three moments of every session</h2>
        </div>
        <div className="grid grid-3">
          {frames.map((f) => (
            <figure key={f.t} className="process-strip__frame card shine">
              <img src={f.img} alt={f.t} loading="lazy" />
              <figcaption>{f.t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
