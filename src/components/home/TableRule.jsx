import './TableRule.css';

const TwoGuestsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="22" cy="22" r="8" />
    <path d="M7 50c0-9 7-15 15-15s15 6 15 15" />
    <circle cx="44" cy="24" r="7" />
    <path d="M40 36c8-2 17 3 17 14" />
  </svg>
);

const perks = [
  'Maximum two guests per hookah',
  'Purer flavour and smoother airflow',
  'Groups welcome: one hookah for every pair',
];

export default function TableRule() {
  return (
    <section className="section table-rule">
      <div className="wrap">
        <div className="table-rule__box card shine">
          <div className="table-rule__icon">
            <TwoGuestsIcon />
          </div>

          <div className="table-rule__body">
            <span className="kicker">House etiquette</span>

            <h2>
              One hookah,{' '}
              <span className="copper-text">two guests</span>
            </h2>

            <p>
              To protect the flavour, the airflow and the calm of every table,
              each hookah is reserved for a maximum of two guests. It is a
              small rule that keeps every session clean, smooth and
              unhurried, exactly the way a proper sheesha should be enjoyed.
            </p>

            <p>
              Coming with a group? Simply order one hookah for every two
              guests and settle in together.
            </p>

            <p className="table-rule__hinglish">
              Ek hookah, sirf do mehmaan. Har hookah ke saath maximum 2 log
              allowed hain, taaki flavour, smoke aur hygiene hamesha top-class
              rahe.
            </p>

            <ul className="table-rule__perks">
              {perks.map((p) => (
                <li key={p}>
                  <span aria-hidden="true">✦</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}