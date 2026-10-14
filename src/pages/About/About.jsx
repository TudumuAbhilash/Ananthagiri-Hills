import { ShieldCheck, Trees, Lock, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <Trees size={14} />
            <span>Independent Local Tourism Platform</span>
          </span>
          <h1>About Ananthagiri Hills & Vikarabad Guide</h1>
          <p>
            Built by a local development team as a dedicated discovery platform for visitors exploring
            Ananthagiri Hills, Vikarabad, and surrounding nature spots in Telangana.
          </p>
        </div>
      </header>

      <div className="container" style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {/* Mission */}
          <section className="card" style={{ padding: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>
              Our Objective & Product Vision
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              While major mapping and booking apps list generic business pins, they often lack local
              context regarding forest reserve boundaries, weekend parking congestion near Sri Anantha
              Padmanabha Swamy Temple, water safety advisories at Kotepally Reservoir, and hilltop food
              delivery options like <strong>Home Pot Cloud Kitchen</strong>.
            </p>
            <p>
              This platform bridges that gap by providing a fast, mobile-friendly, locally curated guide
              that answers travelers' questions without ads, clutter, or misleading information.
            </p>
          </section>

          {/* Data Verification Standards */}
          <section className="card" style={{ padding: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>
              <ShieldCheck size={24} color="#137333" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Data Verification & Trust
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              We adhere to strict data integrity standards:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingLeft: 'var(--space-4)' }}>
              <li>
                <strong>Last-Verified Timestamps:</strong> Every attraction, restaurant, and stay listing
                includes a verification date so visitors know when information was last checked.
              </li>
              <li>
                <strong>No Hallucinated Data:</strong> We do not invent phone numbers, ticket prices, or
                unconfirmed business hours. If exact timings vary by season, they are explicitly noted.
              </li>
              <li>
                <strong>Official Portals:</strong> Official links (such as <code>tourism.telangana.gov.in</code> or{' '}
                <code>homepot.in</code>) are provided directly without third-party commission markups.
              </li>
            </ul>
          </section>

          {/* Reserve Forest & Visitor Safety */}
          <section id="safety" className="card" style={{ padding: 'var(--space-8)', borderLeft: '4px solid var(--color-accent-amber)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>
              <AlertTriangle size={24} color="#b06000" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Reserve Forest Rules & Visitor Safety
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Ananthagiri Hills is part of a protected Reserve Forest zone under the Telangana Forest
              Department. Visitors are required to follow local environmental regulations:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingLeft: 'var(--space-4)' }}>
              <li>Strictly plastic-free zone — do not litter bottles, wrappers, or plastics.</li>
              <li>Lighting campfires, smoking, or consuming alcohol inside reserve forest blocks is illegal.</li>
              <li>Swimming or wading in Kotepally and Nagasamudram reservoirs is strictly prohibited due to deep silt.</li>
            </ul>
          </section>

          {/* Privacy & Data Policy */}
          <section id="privacy" className="card" style={{ padding: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>
              <Lock size={24} color="#2d6a4f" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Privacy & Location Policy
            </h2>
            <p>
              We respect your privacy. The platform runs entirely as a responsive web application. Any
              geolocation requests (such as "Find My GPS Location" on the map) are processed locally in your
              browser; we never store, track, or transmit your personal location data.
            </p>
          </section>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Report an Error or Submit Local Info</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}