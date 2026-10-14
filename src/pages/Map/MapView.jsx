import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Compass, Navigation, MapPin, LocateFixed, ShieldCheck, ArrowRight } from 'lucide-react';
import { attractions, ATTRACTION_CATEGORIES } from '../../data/attractions';
import { getDirectionsUrl } from '../../services/maps';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Fix Leaflet default icon path issue in Vite builds
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

/**
 * Helper component to pan map when user clicks location button
 */
function MapController({ center }) {
  const map = useMap();
  if (center) {
    map.setView(center, 14, { animate: true });
  }
  return null;
}

export default function MapView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mapCenter, setMapCenter] = useState([17.3106, 77.8614]); // Ananthagiri Hills Center
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');

  const filteredAttractions =
    selectedCategory === 'all'
      ? attractions
      : attractions.filter(
          (item) =>
            item.category === selectedCategory ||
            (item.tags && item.tags.includes(selectedCategory))
        );

  const handleRequestLocation = () => {
    setLocationError('');
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation([lat, lng]);
        setMapCenter([lat, lng]);
      },
      (error) => {
        console.warn('Geolocation error:', error);
        setLocationError('Unable to retrieve your location. Permission may have been denied.');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="map-view-page">
      <header className="map-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <Compass size={14} />
            <span>Interactive OpenStreetMap Guide</span>
          </span>
          <h1>Ananthagiri Hills & Vikarabad Interactive Map</h1>
          <p>
            Explore verified attractions on an interactive map. Click any marker for details or
            request your current location to check proximity.
          </p>
        </div>
      </header>

      <div className="container map-layout-container">
        {/* Controls Toolbar */}
        <div className="map-controls-row">
          <div
            className="explore-categories-list"
            role="group"
            aria-label="Filter map markers by category"
            style={{ margin: 0 }}
          >
            {ATTRACTION_CATEGORIES.map((cat) => (
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleRequestLocation}
            >
              <LocateFixed size={15} />
              <span>Find My GPS Location</span>
            </button>
          </div>
        </div>

        {locationError && (
          <div
            style={{
              backgroundColor: 'var(--color-warning-bg)',
              color: 'var(--color-warning-text)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--text-xs)'
            }}
          >
            {locationError}
          </div>
        )}

        {/* Leaflet Map Card */}
        <div className="map-wrapper-card">
          <MapContainer
            center={mapCenter}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <MapController center={mapCenter} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Attraction Markers */}
            {filteredAttractions.map((place) => {
              if (!place.coordinates || typeof place.coordinates.lat !== 'number') return null;
              const directionsUrl = getDirectionsUrl(
                place.coordinates,
                place.name,
                place.locationText
              );

              return (
                <Marker
                  key={place.id}
                  position={[place.coordinates.lat, place.coordinates.lng]}
                >
                  <Popup>
                    <div className="map-popup-card">
                      <span className="badge badge-category" style={{ width: 'fit-content' }}>
                        {place.category}
                      </span>
                      <h3 className="map-popup-title">{place.name}</h3>
                      <p className="map-popup-desc">{place.shortDescription}</p>

                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem' }}>
                        <Link to={`/places/${place.slug}`} className="btn btn-primary btn-sm" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                          <span>Details</span>
                          <ArrowRight size={12} />
                        </Link>
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                        >
                          <Navigation size={12} />
                          <span>Directions</span>
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

            {/* User GPS Location Marker if available */}
            {userLocation && (
              <Marker position={userLocation}>
                <Popup>
                  <div className="map-popup-card">
                    <h3 className="map-popup-title">Your Current Location</h3>
                    <p className="map-popup-desc">GPS coordinates successfully acquired.</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        {/* Map Legend & Privacy Note */}
        <div
          className="card"
          style={{
            padding: 'var(--space-5)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <ShieldCheck size={16} color="#137333" />
            <span>
              Map tiles powered by OpenStreetMap contributors. Coordinates verified for Ananthagiri Hills
              & Vikarabad.
            </span>
          </div>
          <div>
            Location requests are processed entirely in your browser. We never store or transmit your
            GPS location.
          </div>
        </div>
      </div>
    </div>
  );
}