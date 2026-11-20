
import video from '../../assets/images/video3.mp4';
import './Welcome.css';

const stats = [
  { n: 'Fresh', l: 'coals lit at your table' },
  { n: 'Majlis', l: 'seating for groups' },
  { n: 'Daily', l: 'cleaned bowls and hoses' },
];

export default function Welcome() {
  return (
    <section className="section welcome">
      <div className="wrap welcome__grid">

        {/* LEFT CONTENT */}
        <div className="welcome__text">

          <h2>
            A proper sheesha lounge,
            {' '}
            <span className="copper-text">
              right on Haldon Street
            </span>
          </h2>

          <p>
            The Smoke Hauz is a relaxed Arabic-style lounge in Lakemba.
            We pair carefully prepared hookahs with comfortable seating,
            warm lighting and unhurried service.
          </p>

          <p>
            Come for a cup of chai and a flavour you like, or bring the
            whole family for a long night. Either way, someone from our
            team will keep your coals fresh.
          </p>

          {/* STATS */}
          <div className="welcome__stats">
            {stats.map((s) => (
              <div
                key={s.n}
                className="welcome__stat card shine"
              >
                <strong className="copper-text">{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE VIDEO */}
        <div className="welcome__media">

          <video
            className="welcome__video reflect"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="The Smoke Hauz lounge experience"
          >
            <source
              src={video}
              type="video/mp4"
            />

            Your browser does not support HTML video.
          </video>

        </div>

      </div>
    </section>
  );
}
