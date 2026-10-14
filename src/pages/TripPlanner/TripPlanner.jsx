import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarRange,
  Clock,
  Compass,
  Navigation,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { attractions } from '../../data/attractions';
import { itineraries } from '../../data/itineraries';
import { getDirectionsUrl } from '../../services/maps';
import './TripPlanner.css';

export default function TripPlanner() {
  const [duration, setDuration] = useState('half-day'); // 'half-day' | 'full-day'
  const [interest, setInterest] = useState('mixed'); // 'mixed' | 'nature' | 'temple' | 'reservoir'

  // Select appropriate base template or construct dynamic view
  const currentItinerary = useMemo(() => {
    if (duration === 'half-day') {
      return itineraries[0]; // Half-Day Forest, Temple & Viewpoint Loop
    }
    return itineraries[1]; // Full-Day Hills & Kotepally Reservoir Circuit
  }, [duration]);

  // Filter stops based on interest if desired
  const resolvedStops = useMemo(() => {
    return currentItinerary.stops.map((stop) => {
      const matchedAttraction = attractions.find((a) => a.id === stop.attractionId);
      return {
        ...stop,
        attraction: matchedAttraction
      };
    });
  }, [currentItinerary]);

  return (
    <div className="trip-planner-page">
      <header className="planner-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <CalendarRange size={14} />
            <span>Smart Itinerary Builder</span>
          </span>
          <h1>Interactive Trip Planner</h1>
          <p>
            Choose your trip duration and preferred pace. We will generate an ordered, practical
            itinerary with verified stops, recommended visit times, and direct map navigation.
          </p>
        </div>
      </header>

      <div className="container planner-layout">
        {/* Controls Card */}
        <section className="planner-controls-card" aria-label="Trip planner controls">
          {/* 1. Duration Selector */}
          <div className="planner-control-group">
            <span className="planner-control-label">1. Select Trip Duration</span>
            <div className="planner-options-row" role="group">
              <button
                type="button"
                className={`planner-option-pill ${duration === 'half-day' ? 'active' : ''}`}
                onClick={() => setDuration('half-day')}
              >
                Half-Day Trip (4 – 5 Hours)
              </button>
              <button
                type="button"
                className={`planner-option-pill ${duration === 'full-day' ? 'active' : ''}`}
                onClick={() => setDuration('full-day')}
              >
                Full-Day Trip (8 – 9 Hours)
              </button>
            </div>
          </div>

          {/* 2. Interest Focus */}
          <div className="planner-control-group">
            <span className="planner-control-label">2. Primary Interest</span>
            <div className="planner-options-row" role="group">
              <button
                type="button"
                className={`planner-option-pill ${interest === 'mixed' ? 'active' : ''}`}
                onClick={() => setInterest('mixed')}
              >
                Mixed Sightseeing (Viewpoints + Temples + Lakes)
              </button>
              <button
                type="button"
                className={`planner-option-pill ${interest === 'nature' ? 'active' : ''}`}
                onClick={() => setInterest('nature')}
              >
                Forest Trails & Viewpoints
              </button>
              <button
                type="button"
                className={`planner-option-pill ${interest === 'temple' ? 'active' : ''}`}
                onClick={() => setInterest('temple')}
              >
                Temples & Heritage
              </button>
            </div>
          </div>
        </section>

        {/* Generated Itinerary Output */}
        <section className="itinerary-output-box" aria-label="Generated itinerary">
          <div className="itinerary-output-header">
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-category">{currentItinerary.durationLabel}</span>
                <span className="badge badge-info">{currentItinerary.interest}</span>
                <span className="badge badge-verified">
                  <ShieldCheck size={13} />
                  <span>Verified {currentItinerary.lastVerified}</span>
                </span>
              </div>
              <h2 style={{ fontSize: 'var(--text-2xl)' }}>{currentItinerary.title}</h2>
              <p style={{ fontSize: 'var(--text-sm)', marginTop: '0.25rem' }}>
                {currentItinerary.summary}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-main)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                minWidth: '220px'
              }}
            >
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-primary-800)' }}>
                Recommended Transport:
              </span>
              <p style={{ fontSize: 'var(--text-xs)', marginTop: '2px' }}>
                {currentItinerary.transportMode}
              </p>
            </div>
          </div>

          {/* Ordered Stops Timeline */}
          <div className="itinerary-steps-timeline">
            <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '-0.5rem' }}>
              Ordered Visit Schedule ({resolvedStops.length} Stops)
            </h3>

            {resolvedStops.map((stop) => {
              const attraction = stop.attraction;
              const directionsUrl = attraction
                ? getDirectionsUrl(attraction.coordinates, attraction.name, attraction.locationText)
                : '#';

              return (
                <div key={stop.order} className="itinerary-step-card">
                  <span className="itinerary-step-number">{stop.order}</span>
                  <div className="itinerary-step-body">
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem'
                      }}
                    >
                      <h3 style={{ fontSize: 'var(--text-lg)' }}>{stop.title}</h3>
                      <span className="badge badge-info">
                        <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {stop.timeSlot}
                      </span>
                    </div>

                    <p style={{ fontSize: 'var(--text-sm)' }}>{stop.note}</p>

                    {attraction && (
                      <div
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <MapPin size={13} />
                        <span>{attraction.locationText}</span>
                      </div>
                    )}

                    <div className="itinerary-step-actions">
                      {attraction && (
                        <Link
                          to={`/places/${attraction.slug}`}
                          className="btn btn-secondary btn-sm"
                        >
                          <span>View Place Details</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}

                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <Navigation size={14} />
                        <span>Google Maps Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Travel Note Box */}
          <div
            style={{
              backgroundColor: 'var(--color-primary-50)',
              border: '1px solid var(--color-primary-100)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-4)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)'
            }}
          >
            <CheckCircle2 size={20} color="#2d6a4f" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary-900)' }}>
                Planning Tip:
              </strong>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                {currentItinerary.travelNote} Always check official weather conditions and maintain
                reserve fuel before starting your trip.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}