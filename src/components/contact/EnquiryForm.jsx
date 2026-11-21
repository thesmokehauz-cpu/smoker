import { useState } from 'react';
import { business, packages } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import './EnquiryForm.css';

const empty = { name: '', phone: '', date: '', time: '', guests: '2', session: packages[0].name, message: '' };

export default function EnquiryForm() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      setErr('Please enter your name and phone number so we can reply.');
      return;
    }
    setErr('');
    const lines = [
      'Hello The Smoke Hauz, I would like to enquire.',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.date && `Date: ${f.date}`,
      f.time && `Time: ${f.time}`,
      `Guests: ${f.guests}`,
      `Session: ${f.session}`,
      f.message && `Message: ${f.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  return (
    <section className="section enquiry">
      <div className="wrap enquiry__grid">
        <div>
          <h2>Reserve or ask a question</h2>
          <p>Fill in the form and press the button. WhatsApp will open with your message ready to send.</p>
        </div>
        <form className="enquiry__form card" onSubmit={submit} noValidate>
          <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" required /></label>
          <label>Phone<input value={f.phone} onChange={set('phone')} type="tel" autoComplete="tel" required /></label>
          <div className="enquiry__row">
            <label>Date<input value={f.date} onChange={set('date')} type="date" /></label>
            <label>Time<input value={f.time} onChange={set('time')} type="time" /></label>
          </div>
          <div className="enquiry__row">
            <label>Guests<input value={f.guests} onChange={set('guests')} type="number" min="1" max="40" /></label>
            <label>Session
              <select value={f.session} onChange={set('session')}>
                {packages.map((p) => <option key={p.id}>{p.name}</option>)}
              </select>
            </label>
          </div>
          <label>Message<textarea rows="4" value={f.message} onChange={set('message')} placeholder="Flavours, occasion, seating wishes" /></label>
          {err && <p className="enquiry__err" role="alert">{err}</p>}
          <Button type="submit">Send on WhatsApp</Button>
        </form>
      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
