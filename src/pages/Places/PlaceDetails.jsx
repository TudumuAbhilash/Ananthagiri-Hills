import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Navigation,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Flag
} from 'lucide-react';
import { attractions } from '../../data/attractions';
import { getDirectionsUrl, getMapSearchUrl } from '../../services/maps';
import AttractionCard from '../../components/cards/AttractionCard';
import './PlaceDetails.css';

export default function PlaceDetails() {
  const { slug } = useParams();

  const attraction = attractions.find((item) => item.slug === slug || item.id === slug);

  if (!attraction) {
    return (
      <section className="section">
        <div className="container-narrow">
          <div className="card" style={{ padding: 'var(--space-10)', textAlign: 'center' }}>
            <Compass
              size={42}
              color="#2d6a4f"
              style={{ margin: '0 auto var(--space-3)' }}
              aria-hidden="true"
            />
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Attraction Not Found</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              We could not find a verified place matching that link. Browse all curated places in
              Ananthagiri Hills and Vikarabad below.
            </p>
            <Link to="/places" className="btn btn-primary">
              <ArrowLeft size={16} />
              <span>Back to Explore Places</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const directionsUrl = getDirectionsUrl(
    attraction.coordinates,
    attraction.name,
    attraction.locationText
  );
  const mapViewUrl = getMapSearchUrl(
    attraction.coordinates,
    attraction.name,
    attraction.locationText
  );

  const nearbyAttractions = attractions.filter(
    (item) => attraction.nearbyIds && attraction.nearbyIds.includes(item.id)
  );

  return (
    <div className="place-details-page">
      {/* Top Breadcrumb Bar */}
      <div className="place-details-breadcrumb">
        <div className="container place-details-breadcrumb-inner">
          <Link to="/places" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to All Places</span>
          </Link>
          <span className="badge badge-verified">
            <ShieldCheck size={14} />
            <span>Last Verified: {attraction.lastVerified}</span>
          </span>
        </div>
      </div>

      <div className="container">
        {/* Hero Overview Grid */}
        <div className="place-hero-grid">
          {/* Left Column: Image */}
          <div className="place-media-card">
            <img
              src={attraction.image}
              alt={attraction.name}
              className="place-media-img"
            />
            <div className="place-media-caption">
              <span>{attraction.imageCaption || attraction.name}</span>
              {attraction.isPlaceholderImage && (
                <span className="badge badge-warning">Sample Development Photo</span>
              )}
            </div>
          </div>

          {/* Right Column: Core Title, Badges, Quick Facts & Primary Actions */}
          <div className="place-main-info">
            <div className="place-badges-row">
              <span className="badge badge-category">{attraction.category}</span>
              <span className="badge badge-info">
                {attraction.distanceFromVikarabad} from Vikarabad
              </span>
              <span className="badge badge-info">
                {attraction.distanceFromHyderabad} from Hyderabad
              </span>
            </div>

            <h1 className="place-title">{attraction.name}</h1>
            <p className="place-lead">{attraction.shortDescription}</p>

            {/* Primary Action Buttons */}
            <div className="place-action-bar">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>

              <a
                href={mapViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <ExternalLink size={18} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Key Facts Grid */}
            <div className="place-facts-grid">
              <div className="place-fact-box">
                <MapPin size={18} className="place-fact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>{attraction.locationText}</p>
                </div>
              </div>

              <div className="place-fact-box">
                <Clock size={18} className="place-fact-icon" />
                <div>
                  <h3>Opening Hours</h3>
                  <p>{attraction.openingHours}</p>
                </div>
              </div>

              <div className="place-fact-box">
                <Ticket size={18} className="place-fact-icon" />
                <div>
                  <h3>Entry Fee Status</h3>
                  <p>{attraction.entryFee}</p>
                </div>
              </div>

              <div className="place-fact-box">
                <Calendar size={18} className="place-fact-icon" />
                <div>
                  <h3>Suggested Duration</h3>
                  <p>{attraction.bestDuration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Visitor Information & Warnings */}
        <div className="place-content-grid">
          {/* Left Column: Detailed Description & Safety Warnings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <section className="place-detail-card">
              <h2>About This Place</h2>
              <p>{attraction.description}</p>

              <div
                style={{
                  paddingTop: 'var(--space-3)',
                  borderTop: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: 'var(--text-base)', marginBottom: '0.35rem' }}>
                  Best Time to Visit
                </h3>
                <p style={{ fontSize: 'var(--text-sm)' }}>{attraction.bestTimeToVisit}</p>
              </div>
            </section>

            {attraction.warnings && attraction.warnings.length > 0 && (
              <section className="place-warnings-box" aria-label="Important visitor warnings">
                <h3>
                  <AlertTriangle size={19} />
                  <span>Important Restrictions & Safety Warnings</span>
                </h3>
                <ul className="place-warnings-list">
                  {attraction.warnings.map((warn, idx) => (
                    <li key={idx}>{warn}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column: Facilities, Accessibility, Coordinates & Verification Metadata */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div className="place-detail-card">
              <h2 style={{ fontSize: 'var(--text-xl)' }}>Facilities & Accessibility</h2>

              <div>
                <h3 style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                  Available Facilities
                </h3>
                <div className="place-facilities-list">
                  {attraction.facilities.map((facility) => (
                    <span key={facility} className="badge badge-category">
                      <CheckCircle2 size={13} />
                      <span>{facility}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.25rem' }}>
                  Accessibility & Terrain Note
                </h3>
                <p style={{ fontSize: 'var(--text-sm)' }}>{attraction.accessibilityNotes}</p>
              </div>

              {attraction.coordinates && attraction.coordinates.verified && (
                <div
                  style={{
                    paddingTop: 'var(--space-3)',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)'
                  }}
                >
                  <strong>Verified GPS Coordinates:</strong> {attraction.coordinates.lat.toFixed(4)}°
                  N, {attraction.coordinates.lng.toFixed(4)}° E
                </div>
              )}
            </div>

            {/* Trust & Error Reporting Card */}
            <div className="place-detail-card">
              <h2 style={{ fontSize: 'var(--text-lg)' }}>Data Verification</h2>
              <p style={{ fontSize: 'var(--text-xs)' }}>
                <strong>Last Verified:</strong> {attraction.lastVerified}
                <br />
                <strong>Verification Note:</strong> {attraction.verificationNote}
              </p>
              <Link
                to={`/contact?place=${encodeURIComponent(attraction.name)}`}
                className="btn btn-secondary btn-sm"
              >
                <Flag size={14} />
                <span>Report Outdated Info or Closure</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Nearby Attractions Section */}
        {nearbyAttractions.length > 0 && (
          <section
            style={{
              paddingTop: 'var(--space-8)',
              paddingBottom: 'var(--space-16)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <div className="section-header-row">
              <div>
                <span className="section-eyebrow">Combine Your Stops</span>
                <h2 className="section-title">Nearby Places to Visit Next</h2>
              </div>
              <Link to="/places" className="btn btn-secondary btn-sm">
                View All Places
              </Link>
            </div>

            <div className="grid-3">
              {nearbyAttractions.map((nearItem) => (
                <AttractionCard key={nearItem.id} attraction={nearItem} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}