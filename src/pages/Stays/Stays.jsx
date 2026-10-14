import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BedDouble,
  MapPin,
  ShieldCheck,
  Navigation,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Flag
} from 'lucide-react';
import { stays, STAY_CATEGORIES } from '../../data/stays';
import { getDirectionsUrl } from '../../services/maps';
import './Stays.css'; // Optional or use existing food/card styles

export default function Stays() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStays =
    selectedCategory === 'all'
      ? stays
      : stays.filter((item) => item.category === selectedCategory);

  return (
    <div className="stays-page">
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <BedDouble size={14} />
            <span>Government Resorts, Town Lodges & Forest Stays</span>
          </span>
          <h1>Accommodation & Stays in Ananthagiri & Vikarabad</h1>
          <p>
            Explore verified government hill resorts, Vikarabad town stay options (including Chaya
            Inn, R Banquets, NMBH, and Shiva Keshava), and nature farmstays.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-16)' }}>
        {/* Important Booking Safety Banner */}
        <div
          className="safety-card warning"
          style={{ marginBottom: 'var(--space-6)' }}
          role="region"
          aria-label="Booking safety notice"
        >
          <AlertTriangle size={24} className="safety-card-icon" />
          <div>
            <h3>Important Booking & Camping Safety Notice</h3>
            <p>
              1. <strong>No Online Payment on This Guide:</strong> We never collect booking payments
              here. When visiting external links or Google Maps, verify official property credentials.{' '}
              <br />
              2. <strong>Camping Rules:</strong> Unauthorized pitching of tents inside the core
              Ananthagiri Reserve Forest is prohibited. Camp only within permitted private resort
              boundaries.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div
          className="explore-categories-list"
          style={{ marginBottom: 'var(--space-6)' }}
          role="group"
          aria-label="Filter accommodation by type"
        >
          {STAY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stays Grid */}
        <div className="grid-3">
          {filteredStays.map((stay) => {
            const directionsUrl = stay.mapLink
              ? stay.mapLink
              : getDirectionsUrl(stay.coordinates, stay.name, stay.locationText);

            return (
              <article key={stay.id} className="card attraction-card">
                <div className="attraction-card-media">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="attraction-card-img"
                    loading="lazy"
                  />
                  <div className="attraction-card-badges">
                    <span className="badge badge-category">{stay.category}</span>
                    <span className="badge badge-verified">Verified {stay.lastVerified}</span>
                  </div>
                  {stay.isPlaceholderImage && (
                    <span className="attraction-card-sample-tag">Sample Photo</span>
                  )}
                </div>

                <div className="food-card" style={{ padding: 'var(--space-5)' }}>
                  <div>
                    <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.25rem' }}>
                      {stay.name}
                    </h2>
                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-primary-700)',
                        fontWeight: 600
                      }}
                    >
                      {stay.distanceNote}
                    </p>
                  </div>

                  <p style={{ fontSize: 'var(--text-sm)' }}>{stay.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {stay.amenities.map((amenity) => (
                      <span key={amenity} className="highlight-pill">
                        <CheckCircle2
                          size={11}
                          style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}
                        />
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="food-delivery-highlight-box">
                    <strong>Booking Note:</strong> {stay.bookingNote}
                  </div>

                  <div className="food-meta-list">
                    <div className="food-meta-row">
                      <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{stay.locationText}</span>
                    </div>
                    <div className="food-meta-row">
                      <ShieldCheck size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        <strong>Tariff:</strong> {stay.priceRange}
                      </span>
                    </div>
                  </div>

                  <div className="attraction-card-actions" style={{ flexWrap: 'wrap' }}>
                    {stay.officialUrl ? (
                      <a
                        href={stay.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Official Booking Portal</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        to={`/contact?place=${encodeURIComponent(stay.name)}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <Flag size={13} />
                        <span>Update Info</span>
                      </Link>
                    )}

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Navigation size={14} />
                      <span>Google Maps Location</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}