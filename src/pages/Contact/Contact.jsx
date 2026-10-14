import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Flag, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledPlace = searchParams.get('place') || searchParams.get('q') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledPlace ? `Correction/Update for: ${prefilledPlace}` : 'General Inquiry / Error Report',
    message: prefilledPlace ? `I would like to report an update regarding ${prefilledPlace}: ` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For MVP frontend prototype, record submission state successfully
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <Flag size={14} />
            <span>Community Verification & Support</span>
          </span>
          <h1>Report an Error or Contribute Local Info</h1>
          <p>
            Found a closed trail, changed timing, or want to suggest a verified local business in
            Vikarabad? Let us know below.
          </p>
        </div>
      </header>

      <div className="container" style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="container-narrow">
          {submitted ? (
            <div className="card" style={{ padding: 'var(--space-12)', textAlign: 'center' }}>
              <CheckCircle2
                size={48}
                color="#137333"
                style={{ margin: '0 auto var(--space-4)' }}
              />
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
                Thank You for Your Contribution!
              </h2>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                Your feedback has been recorded. Our editorial team verifies community submissions
                against local guidelines before updating live listings.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '0.25rem' }}>
                  Send a Correction or Local Update
                </h2>
                <p style={{ fontSize: 'var(--text-sm)' }}>
                  We review every submission to ensure this guide remains accurate for all travellers.
                </p>
              </div>

              {prefilledPlace && (
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-50)',
                    border: '1px solid var(--color-primary-100)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-primary-900)'
                  }}
                >
                  <strong>Context:</strong> Reporting regarding <strong>{prefilledPlace}</strong>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <label htmlFor="name" style={{ fontSize: 'var(--text-xs', fontWeight: 700, textTransform: 'uppercase' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  style={{ padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-bg-main)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <label htmlFor="email" style={{ fontSize: 'var(--text-xs', fontWeight: 700, textTransform: 'uppercase' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  style={{ padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-bg-main)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <label htmlFor="subject" style={{ fontSize: 'var(--text-xs', fontWeight: 700, textTransform: 'uppercase' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Outdated timing for Padmanabha Temple"
                  style={{ padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-bg-main)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <label htmlFor="message" style={{ fontSize: 'var(--text-xs', fontWeight: 700, textTransform: 'uppercase' }}>
                  Message / Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide details about the correction, closure, or local business..."
                  style={{ padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: 'var(--color-bg-main)', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} />
                <span>Send Message to Editorial Team</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}