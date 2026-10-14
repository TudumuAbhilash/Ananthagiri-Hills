import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Compass,
  Utensils,
  BedDouble,
  Bus,
  CalendarRange,
  MapPin,
  Clock,
  ShieldAlert,
  Trees,
  Navigation,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Map
} from 'lucide-react';
import { attractions } from '../../data/attractions';
import { itineraries } from '../../data/itineraries';
import { homepageHighlights } from '../../data/staysAndFood';
import { getDirectionsUrl } from '../../services/maps';
import AttractionCard from '../../components/cards/AttractionCard';
import './Home.css';

const CATEGORY_SHORTCUTS = [
  {
    to: '/places',
    title: 'Places',
    subtitle: 'Viewpoints, temples & lakes',
    icon: Compass
  },
  {
    to: '/food',
    title: 'Food',
    subtitle: 'Local dining & hill snacks',
    icon: Utensils
  },
  {
    to: '/stays',
    title: 'Stays',
    subtitle: 'Resorts & verified stays',
    icon: BedDouble
  },
  {
    to: '/transport',
    title: 'Transport',
    subtitle: 'Trains, buses & local cabs',
    icon: Bus
  },
  {
    to: '/trip-planner',
    title: 'Trip Planner',
    subtitle: 'Half-day & full-day plans',
    icon: CalendarRange
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const featuredAttractions = attractions.filter((item) => item.featured);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/places?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/places');
    }
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <Trees size={15} />
            <span>Vikarabad District • ~75 km from Hyderabad</span>
          </div>

          <h1 className="hero-title">
            Discover the Forest Trails, Temples & Scenic Lakes of Ananthagiri Hills
          </h1>

          <p className="hero-subtitle">
            Plan your trip with locally curated viewpoints, verified visitor timings, practical
            transport guidance, and ready-to-use half-day or full-day itineraries.
          </p>

          {/* Search Bar */}
          <form className="hero-search-form" onSubmit={handleSearchSubmit} role="search">
            <div className="hero-search-input-wrap">
              <Search size={20} color="#40916c" aria-hidden="true" />
              <input
                type="search"
                className="hero-search-input"
                placeholder="Search viewpoints, Padmanabha Temple, Kotepally, Haritha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search places and services in Ananthagiri Hills and Vikarabad"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              <span>Search Guide</span>
            </button>
          </form>

          {/* Primary Actions (Fixed redundancy: Explore Places + Interactive Map) */}
          <div className="hero-cta-row">
            <Link to="/places" className="btn btn-primary btn-lg">
              <Compass size={18} />
              <span>Explore Places</span>
            </Link>
            <Link to="/map" className="btn btn-outline-light btn-lg">
              <Map size={18} />
              <span>Interactive Map</span>
            </Link>
            <Link to="/trip-planner" className="btn btn-outline-light btn-lg">
              <CalendarRange size={18} />
              <span>Trip Planner</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Category Shortcuts */}
      <section className="category-strip-section" aria-label="Quick Category Shortcuts">
        <div className="container">
          <div className="category-shortcuts-grid">
            {CATEGORY_SHORTCUTS.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.to} to={item.to} className="category-shortcut-card">
                  <div className="category-shortcut-icon" aria-hidden="true">
                    <IconComponent size={22} />
                  </div>
                  <div className="category-shortcut-text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Attractions */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Curated Sightseeing</span>
              <h2 className="section-title">Featured Places Around Ananthagiri</h2>
              <p className="section-subtitle">
                Key viewpoints, historic temples, forest walks, and reservoirs verified with
                distances and visitor safety notes.
              </p>
            </div>
            <Link to="/places" className="btn btn-secondary">
              <span>View All {attractions.length} Places</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recommended Itineraries */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Practical Trip Grouping</span>
              <h2 className="section-title">Recommended Half-Day & Full-Day Itineraries</h2>
              <p className="section-subtitle">
                Not sure how to group nearby stops? Start with these practical routes designed
                around realistic driving distances.
              </p>
            </div>
            <Link to="/trip-planner" className="btn btn-primary">
              <CalendarRange size={16} />
              <span>Open Interactive Planner</span>
            </Link>
          </div>

          <div className="itinerary-grid">
            {itineraries.map((plan) => (
              <article key={plan.id} className="card itinerary-card">
                <div className="itinerary-header-badges">
                  <span className="badge badge-category">{plan.durationLabel}</span>
                  <span className="badge badge-info">{plan.interest}</span>
                  <span className="badge badge-verified">Verified {plan.lastVerified}</span>
                </div>

                <h3>{plan.title}</h3>
                <p>{plan.summary}</p>

                <div className="itinerary-stops-list">
                  {plan.stops.map((stop) => (
                    <div key={stop.order} className="itinerary-stop-item">
                      <span className="itinerary-stop-number">{stop.order}</span>
                      <div className="itinerary-stop-details">
                        <strong>
                          {stop.timeSlot} — {stop.title}
                        </strong>
                        <span>{stop.note}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: 'var(--text-xs)' }}>
                  <strong>Transport Tip:</strong> {plan.travelNote}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <Link to="/trip-planner" className="btn btn-secondary btn-sm">
                    <span>Customize in Trip Planner</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Food & Accommodation Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Where to Eat & Stay</span>
              <h2 className="section-title">Food & Accommodation Zones</h2>
              <p className="section-subtitle">
                Honest, verified guidance on cloud kitchen delivery, official tourism resorts, and
                Vikarabad town dining hubs.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/food" className="btn btn-secondary btn-sm">
                <Utensils size={15} />
                <span>Food Guide</span>
              </Link>
              <Link to="/stays" className="btn btn-secondary btn-sm">
                <BedDouble size={15} />
                <span>Stays Guide</span>
              </Link>
            </div>
          </div>

          <div className="grid-3">
            {homepageHighlights.map((item) => {
              const directionsUrl = getDirectionsUrl(
                item.coordinates,
                item.name,
                item.locationText
              );
              return (
                <article key={item.id} className="card highlight-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span className="badge badge-category">{item.type}</span>
                    <span className="badge badge-verified">Verified {item.lastVerified}</span>
                  </div>

                  <h3>{item.name}</h3>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{item.verificationNote}</p>

                  <div className="highlight-list">
                    {item.highlights.map((tag) => (
                      <span key={tag} className="highlight-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="attraction-card-meta">
                    <div className="attraction-card-meta-item">
                      <MapPin size={14} />
                      <span>{item.locationText}</span>
                    </div>
                    <div className="attraction-card-meta-item">
                      <Clock size={14} />
                      <span>{item.dietaryInfo}</span>
                    </div>
                  </div>

                  <div className="attraction-card-actions">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Navigation size={14} />
                      <span>Map Directions</span>
                    </a>
                    {item.officialLink && (
                      <a
                        href={item.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Official Portal</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Visitor Safety, Forest Rules & Travel Tips */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Responsible Tourism & Safety</span>
            <h2 className="section-title">Essential Visitor Guidelines</h2>
            <p className="section-subtitle">
              Read these verified local advisories before heading into Ananthagiri Reserve Forest
              or nearby reservoirs.
            </p>
          </div>

          <div className="safety-grid">
            <div className="safety-card warning">
              <ShieldAlert size={24} className="safety-card-icon" />
              <div>
                <h3>Strict Reserve Forest Regulations</h3>
                <p>
                  Ananthagiri is a protected forest zone. Single-use plastics, littering, lighting
                  campfires, alcohol consumption, and unauthorized night camping or trekking inside
                  the forest are prohibited by the Forest Department.
                </p>
              </div>
            </div>

            <div className="safety-card warning">
              <ShieldAlert size={24} className="safety-card-icon" />
              <div>
                <h3>Water Safety at Kotepally & Nagasamudram</h3>
                <p>
                  Never enter reservoir waters for swimming or wading. Underwater rocks and deep
                  silt banks are extremely hazardous. Use only authorized boating facilities with
                  proper life jackets.
                </p>
              </div>
            </div>

            <div className="safety-card">
              <CheckCircle2 size={24} className="safety-card-icon" />
              <div>
                <h3>Last-Mile Transport & Return Planning</h3>
                <p>
                  If travelling by train or bus to Vikarabad Junction, pre-arrange your return auto
                  or local cab before heading up the ghat road or out to Kotepally Reservoir, as
                  evening public transport from hilltop points is sparse.
                </p>
              </div>
            </div>

            <div className="safety-card">
              <CheckCircle2 size={24} className="safety-card-icon" />
              <div>
                <h3>Daylight Hours & Mobile Connectivity</h3>
                <p>
                  Plan sightseeing between 6:30 AM and 5:30 PM. Mobile data signals can drop in
                  lower valley pockets, so save offline map directions and carry cash alongside
                  UPI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}