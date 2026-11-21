import './CraftSteps.css';

// This content is a real sequence, so numbered steps are appropriate here.
const steps = [
  { t: 'Choose your base', d: 'We pick a clean hookah and fill the base with fresh water.' },
  { t: 'Pack the bowl', d: 'Your flavour is loosely packed and sealed under foil for even heat.' },
  { t: 'Light the coals', d: 'Coals are lit with a torch lighter until they glow orange all the way through.' },
  { t: 'Serve and refresh', d: 'We bring it to your table and swap in fresh coals when they fade.' },
];

export default function CraftSteps() {
  return (
    <section className="section craft">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Our craft</span>
          <h2>From empty bowl to your table</h2>
        </div>
        <ol className="craft__list">
          {steps.map((s, i) => (
            <li key={s.t} className="craft__step card shine">
              <span className="craft__num">{i + 1}</span>
              <div><h3>{s.t}</h3><p>{s.d}</p></div>
            </li>
          ))}
        </ol>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
