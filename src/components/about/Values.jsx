import './Values.css';

const values = [
  { t: 'Clean every time', d: 'Bowls, hoses and bases are washed between sessions so every hookah tastes the way it should.' },
  { t: 'Comfort first', d: 'Carved timber sofas, thick cushions and enough space between tables to talk properly.' },
  { t: 'Attentive, not hovering', d: 'We check coals and refresh drinks without interrupting your conversation.' },
  { t: 'Welcome for everyone', d: 'Friends, families and groups are all part of the room. Just ask if you need a quieter corner.' },
];

export default function Values() {
  return (
    <section className="section section--alt values">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">What we stand for</span>
          <h2>Four promises behind every table</h2>
        </div>
        <div className="grid grid-4">
          {values.map((v) => (
            <article key={v.t} className="value card shine">
              <span className="value__mark" aria-hidden="true" />
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
