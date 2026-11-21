import { images } from '../../data/siteData.js';
import './Story.css';

export default function Story() {
  return (
    <section className="section story">
      <div className="wrap story__grid">
        <img className="story__img reflect" src={images.lounge} alt="Inside The Smoke Hauz lounge with red majlis sofas" loading="lazy" />
        <div>
          <h2>Built around one simple idea: sit down and stay a while</h2>
          <p>The Smoke Hauz started with a lounge that felt like a living room: deep cushions, timber frames, soft light and a hookah that is prepared the right way.</p>
          <p>We chose rich red Arabic fabrics, black steel walls and copper accents so the room feels warm and a little dramatic, whether you drop in at sunset or late at night.</p>
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
