import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Bike,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Search,
  X,
  Flag
} from 'lucide-react';
import { restaurants, FOOD_CATEGORIES } from '../../data/restaurants';
import { getDirectionsUrl } from '../../services/maps';
import './Food.css';

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return restaurants.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category === selectedCategory ||
        (selectedCategory === 'Hilltop Delivery' && item.deliversToAnanthagiri);

      if (!matchesCategory) return false;
      if (!q) return true;

      const searchable = [
        item.name,
        item.cuisine,
        item.description,
        item.locationText,
        item.dietaryType,
        ...(item.tags || [])
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="food-page">
      {/* Header */}
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <Utensils size={14} />
            <span>{restaurants.length} Curated Cloud Kitchens, Restaurants & Hilltop Stalls</span>
          </span>
          <h1>Food, Hilltop Delivery & Restaurants in Vikarabad</h1>
          <p>
            Order fresh homely food delivered directly to Ananthagiri Hills via{' '}
            <strong>Home Pot</strong>, dine at top-rated family restaurants in Vikarabad town (~6 km
            away), or grab morning tiffins near the hilltop temple.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
        {/* Hilltop Food Delivery Spotlight Banner */}
        <section className="food-delivery-spotlight" aria-label="Ananthagiri Food Delivery Tip">
          <div>
            <span
              className="badge badge-warning"
              style={{ marginBottom: 'var(--space-2)', display: 'inline-flex' }}
            >
              <Bike size={14} />
              <span>Direct Food Delivery to Ananthagiri Hills</span>
            </span>
            <h2>Staying at a Hill Resort or Viewpoint? Get Food Delivered!</h2>
            <p>
              You don’t need to drive back down the ghat road for lunch or dinner.{' '}
              <strong>Home Pot Cloud Kitchen</strong> and selected Vikarabad family restaurants
              provide food delivery and group meal parcels to Ananthagiri Hills.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flexShrink: 0 }}>
            <a
              href="https://www.homepot.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#ffffff', color: 'var(--color-primary-900)' }}
            >
              <span>Order on HomePot.in</span>
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => setSelectedCategory('Hilltop Delivery')}
            >
              <Bike size={16} />
              <span>Show Delivery Options ({restaurants.filter((r) => r.deliversToAnanthagiri).length})</span>
            </button>
          </div>
        </section>

        {/* Search & Category Filter Toolbar */}
        <section
          className="explore-toolbar"
          style={{ marginTop: 0 }}
          aria-label="Search and filter restaurants"
        >
          <div className="explore-search-row">
            <div className="explore-search-input-box">
              <Search size={19} color="#2d6a4f" aria-hidden="true" />
              <input
                type="search"
                className="explore-search-input"
                placeholder="Search restaurants by name or dish (e.g., Home Pot, Biryani, Ruchulu, Tiffin, Veg)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search restaurants"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="explore-clear-btn"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={14} />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          <div
            className="explore-categories-list"
            role="group"
            aria-label="Filter dining options by category"
          >
            {FOOD_CATEGORIES.map((cat) => (
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
        </section>

        {/* Restaurant Cards Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid-3">
            {filteredRestaurants.map((place) => {
              const directionsUrl = getDirectionsUrl(
                place.coordinates,
                place.name,
                place.locationText
              );

              return (
                <article key={place.id} className="card attraction-card">
                  {/* Restaurant Image Header */}
                  <div className="attraction-card-media">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="attraction-card-img"
                      loading="lazy"
                    />
                    <div className="attraction-card-badges">
                      <span className="badge badge-category">{place.category}</span>
                      {place.deliversToAnanthagiri && (
                        <span className="badge badge-verified">
                          <Bike size={12} />
                          <span>Delivers to Hills</span>
                        </span>
                      )}
                    </div>
                    {place.isPlaceholderImage && (
                      <span className="attraction-card-sample-tag">Sample Photo</span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="food-card" style={{ padding: 'var(--space-5)' }}>
                    <div>
                      <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.25rem' }}>
                        {place.name}
                      </h2>
                      <p
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 600,
                          color: 'var(--color-primary-700)'
                        }}
                      >
                        {place.cuisine}
                      </p>
                    </div>

                    <p style={{ fontSize: 'var(--text-sm)' }}>{place.description}</p>

                    {place.deliveryNote && (
                      <div className="food-delivery-highlight-box">
                        <strong>Delivery / Takeaway Note:</strong> {place.deliveryNote}
                      </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {place.facilities.map((fac) => (
                        <span key={fac} className="highlight-pill">
                          <CheckCircle2
                            size={11}
                            style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}
                          />
                          {fac}
                        </span>
                      ))}
                    </div>

                    <div className="food-meta-list">
                      <div className="food-meta-row">
                        <Utensils size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>
                          <strong>Dietary:</strong> {place.dietaryType}
                        </span>
                      </div>
                      <div className="food-meta-row">
                        <Clock size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>
                          <strong>Hours:</strong> {place.openingHours}
                        </span>
                      </div>
                      <div className="food-meta-row">
                        <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{place.locationText}</span>
                      </div>
                      <div className="food-meta-row">
                        <ShieldCheck size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>Verified: {place.lastVerified}</span>
                      </div>
                    </div>

                    <div className="attraction-card-actions" style={{ flexWrap: 'wrap' }}>
                      {place.websiteUrl && (
                        <a
                          href={place.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <span>Order Online</span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {place.phone && (
                        <a href={`tel:${place.phone}`} className="btn btn-primary btn-sm">
                          <Phone size={14} />
                          <span>Call</span>
                        </a>
                      )}

                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <Navigation size={14} />
                        <span>Directions</span>
                      </a>

                      {!place.websiteUrl && !place.phone && (
                        <Link
                          to={`/contact?place=${encodeURIComponent(place.name)}`}
                          className="btn btn-secondary btn-sm"
                        >
                          <Flag size={13} />
                          <span>Add Contact</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="explore-empty-state">
            <h3>No matching restaurants found</h3>
            <p>Try clearing your search or switching the category filter.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Show All 8 Food Listings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}