import { packages } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './Experiences.css';

export default function Experiences() {
  return (
    <section className="section section--alt experiences">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">How you can enjoy it</span>
          <h2>Pick the session that fits your night</h2>
          <p>From simple and smooth to rich and long lasting, there is a collection for every taste.</p>
        </div>
        <div className="grid grid-4">
          {packages.map((p) => (
            <article key={p.id} className="experience card shine">
              <div className="experience__img"><img src={p.img} alt={p.name} loading="lazy" /></div>
              <div className="experience__body">
                <div className="experience__top">
                  <h3>{p.name}</h3>
                  {p.price && <span className="experience__price copper-text">{p.price}</span>}
                </div>
                <p>{p.note}</p>
                <span className="experience__who">{p.who}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="experiences__more"><Button to="/menu" variant="ghost">See full menu</Button></div>
      </div>
    </section>
  );
}
