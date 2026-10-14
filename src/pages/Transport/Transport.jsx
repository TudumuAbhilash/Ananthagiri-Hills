import {
  Bus,
  Train,
  Car,
  Navigation,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { transportOptions } from '../../data/transport';
import { getDirectionsUrl } from '../../services/maps';

export default function Transport() {
  return (
    <div className="transport-page">
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <Bus size={14} />
            <span>Road, Rail, Bus & Local Last-Mile Guide</span>
          </span>
          <h1>How to Reach & Travel Around Ananthagiri Hills</h1>
          <p>
            Practical travel distances, railway junction details (VKB), TGSRTC bus routes from
            Hyderabad, and essential tips for hiring local autos or cabs up the ghat road.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
        {/* Distance Quick Summary Strip */}
        <div
          className="grid-3"
          style={{ marginBottom: 'var(--space-8)' }}
        >
          <div className="card" style={{ padding: 'var(--space-5)' }}>
            <span className="section-eyebrow">From Hyderabad</span>
            <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0.25rem 0' }}>~75 km</h2>
            <p style={{ fontSize: 'var(--text-xs)' }}>
              Via Appa Junction – Moinabad – Chevella – Vikarabad Highway (1.5 to 2 hrs drive).
            </p>
          </div>

          <div className="card" style={{ padding: 'var(--space-5)' }}>
            <span className="section-eyebrow">From Vikarabad Junction (VKB)</span>
            <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0.25rem 0' }}>~6.5 km</h2>
            <p style={{ fontSize: 'var(--text-xs)' }}>
              10–15 mins climb up the scenic Ananthagiri ghat road to the viewpoint and temple.
            </p>
          </div>

          <div className="card" style={{ padding: 'var(--space-5)' }}>
            <span className="section-eyebrow">Ananthagiri to Kotepally</span>
            <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0.25rem 0' }}>~20 km</h2>
            <p style={{ fontSize: 'var(--text-xs)' }}>
              30–35 mins rural road drive west towards Dharur Mandal. Personal vehicle or round-trip
              cab advised.
            </p>
          </div>
        </div>

        {/* Detailed Transport Modes */}
        <div className="itinerary-grid">
          {transportOptions.map((item) => {
            const directionsUrl = getDirectionsUrl(
              item.coordinates,
              item.title,
              'Vikarabad, Telangana'
            );

            return (
              <article key={item.id} className="card itinerary-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-category">{item.mode}</span>
                  <span className="badge badge-verified">
                    <ShieldCheck size={13} />
                    <span>Verified {item.lastVerified}</span>
                  </span>
                </div>

                <div>
                  <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h2>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary-700)' }}>
                    <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {item.distanceInfo}
                  </p>
                </div>

                <p style={{ fontSize: 'var(--text-sm)' }}>
                  <strong>Route Overview:</strong> {item.routeSummary}
                </p>

                <div className="itinerary-stops-list">
                  <strong style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-primary-800)' }}>
                    Practical Travel Tips:
                  </strong>
                  {item.practicalTips.map((tip, idx) => (
                    <div key={idx} className="itinerary-stop-item">
                      <CheckCircle2
                        size={16}
                        color="#2d6a4f"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-main)' }}>
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-warning-bg)',
                    color: 'var(--color-warning-text)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                  <span>{item.scheduleWarning}</span>
                </div>

                <div className="attraction-card-actions" style={{ marginTop: 'auto' }}>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Navigation size={14} />
                    <span>Open Hub in Google Maps</span>
                  </a>

                  {item.officialLink && (
                    <a
                      href={item.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>{item.officialLinkLabel}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}