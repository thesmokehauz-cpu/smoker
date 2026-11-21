import './PageBanner.css';

// Used as the first section of every inner page.
export default function PageBanner({ title, text, image }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `linear-gradient(180deg, rgba(11,9,8,.55), rgba(11,9,8,.95)), url(${image})` }}>
      <div className="wrap page-banner__inner">
        <h1 className="copper-text">{title}</h1>
        <p>{text}</p>
      </div>
      <span className="page-banner__smoke" aria-hidden="true" />
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
