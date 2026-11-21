
import { images } from '../../data/siteData.js';
import './Ambience.css';

const tiles = [
  { img: images.lounge, cap: 'The main lounge', cls: 'big' },
  { img: images.torchLight, cap: 'Coals lit fresh', cls: 'tall' },
  { img: images.coalsBowl, cap: 'Foil-sealed bowls', cls: '' },
  { img: images.hookahDetail, cap: 'Engraved steel detail', cls: '' },
];

export default function Ambience() {
  return (
    <section className="section section--alt ambience">
      <div className="wrap">

        <div className="section-head center">
          <span className="kicker">The atmosphere</span>
          <h2>Warm light, deep colour, slow smoke</h2>
        </div>

        <div className="ambience__mosaic">
          {tiles.map((t) => (
            <figure
              key={t.cap}
              className={`ambience__tile ${t.cls} shine`}
            >
              <img
                src={t.img}
                alt={t.cap}
                loading="lazy"
              />

              <figcaption>{t.cap}</figcaption>
            </figure>
          ))}
        </div>

      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
