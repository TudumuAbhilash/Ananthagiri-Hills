import { Link } from 'react-router-dom';
import { MapPin, Clock, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';
import { getDirectionsUrl } from '../../services/maps';
import './AttractionCard.css';

export default function AttractionCard({ attraction }) {
  const directionsUrl = getDirectionsUrl(
    attraction.coordinates,
    attraction.name,
    attraction.locationText
  );

  return (
    <article className="card attraction-card">
      <div className="attraction-card-media">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="attraction-card-img"
          loading="lazy"
        />
        <div className="attraction-card-badges">
          <span className="badge badge-category">{attraction.category}</span>
          {attraction.distanceFromVikarabad && (
            <span className="attraction-card-distance">
              {attraction.distanceFromVikarabad} from Vikarabad
            </span>
          )}
        </div>
        {attraction.isPlaceholderImage && (
          <span className="attraction-card-sample-tag" title={attraction.imageCaption}>
            Sample Photo
          </span>
        )}
      </div>

      <div className="attraction-card-body">
        <h3 className="attraction-card-title">
          <Link to={`/places/${attraction.slug}`}>{attraction.name}</Link>
        </h3>

        <p className="attraction-card-desc">{attraction.shortDescription}</p>

        <div className="attraction-card-meta">
          <div className="attraction-card-meta-item">
            <MapPin size={14} aria-hidden="true" />
            <span>{attraction.locationText}</span>
          </div>
          <div className="attraction-card-meta-item">
            <Clock size={14} aria-hidden="true" />
            <span>Suggested visit: {attraction.bestDuration}</span>
          </div>
          <div className="attraction-card-meta-item">
            <ShieldCheck size={14} aria-hidden="true" />
            <span>Verified: {attraction.lastVerified}</span>
          </div>
        </div>

        <div className="attraction-card-actions">
          <Link to={`/places/${attraction.slug}`} className="btn btn-primary btn-sm">
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`Get Google Maps directions to ${attraction.name}`}
          >
            <Navigation size={14} />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </article>
  );
}