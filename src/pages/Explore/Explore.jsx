import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, ShieldCheck, Compass, CalendarRange } from 'lucide-react';
import { attractions, ATTRACTION_CATEGORIES } from '../../data/attractions';
import AttractionCard from '../../components/cards/AttractionCard';
import './Explore.css';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync local state if URL search params change externally
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const updateUrlParams = (newQuery, newCategory) => {
    const params = {};
    if (newQuery.trim()) params.q = newQuery.trim();
    if (newCategory && newCategory !== 'all') params.category = newCategory;
    setSearchParams(params, { replace: true });
  };

  const handleQueryChange = (event) => {
    const val = event.target.value;
    setSearchQuery(val);
    updateUrlParams(val, selectedCategory);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    updateUrlParams(searchQuery, categoryId);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSearchParams({}, { replace: true });
  };

  const filteredAttractions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return attractions.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category === selectedCategory ||
        (item.tags && item.tags.includes(selectedCategory));

      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const searchableText = [
        item.name,
        item.shortDescription,
        item.description,
        item.locationText,
        item.category,
        ...(item.tags || [])
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="explore-page">
      {/* Page Header */}
      <header className="explore-page-header">
        <div className="container">
          <span
            className="badge badge-verified"
            style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}
          >
            <ShieldCheck size={14} />
            <span>Locally Curated & Verified Sightseeing</span>
          </span>
          <h1>Explore Places in Ananthagiri Hills & Vikarabad</h1>
          <p>
            Discover scenic forest viewpoints, historic temples, reservoirs, and walking trails.
            Filter by interest or open any place for verified timings, safety warnings, and Google
            Maps directions.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: 'var(--space-16)' }}>
        {/* Search & Filter Toolbar */}
        <section className="explore-toolbar" aria-label="Search and filter attractions">
          <div className="explore-search-row">
            <div className="explore-search-input-box">
              <Search size={19} color="#2d6a4f" aria-hidden="true" />
              <input
                type="search"
                className="explore-search-input"
                placeholder="Search by place name, keyword (e.g., temple, lake, kayaking, viewpoint)..."
                value={searchQuery}
                onChange={handleQueryChange}
                aria-label="Search attractions by name or keyword"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="explore-clear-btn"
                  onClick={() => {
                    setSearchQuery('');
                    updateUrlParams('', selectedCategory);
                  }}
                  aria-label="Clear search query"
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
            aria-label="Filter attractions by category"
          >
            {ATTRACTION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
                aria-pressed={selectedCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Results Meta Row */}
        <div className="explore-results-meta">
          <div>
            Showing <strong>{filteredAttractions.length}</strong> of{' '}
            <strong>{attractions.length}</strong> verified places
            {selectedCategory !== 'all' && (
              <span>
                {' '}
                in <strong>{selectedCategory}</strong>
              </span>
            )}
            {searchQuery.trim() && (
              <span>
                {' '}
                matching <strong>"{searchQuery.trim()}"</strong>
              </span>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleResetFilters}>
              <X size={14} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Attraction Cards Grid or Empty State */}
        {filteredAttractions.length > 0 ? (
          <div className="grid-3">
            {filteredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        ) : (
          <div className="explore-empty-state">
            <Compass
              size={36}
              color="#2d6a4f"
              style={{ margin: '0 auto var(--space-3)' }}
              aria-hidden="true"
            />
            <h3>No matching places found</h3>
            <p>
              We couldn't find any verified attractions matching your current search or category
              filter. Try clearing your filters or searching for a broader term like "temple",
              "lake", or "forest".
            </p>
            <button type="button" className="btn btn-primary" onClick={handleResetFilters}>
              Show All Verified Places
            </button>
          </div>
        )}

        {/* Bottom Trip Planner Callout */}
        <div
          className="card"
          style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-6)',
            backgroundColor: 'var(--color-primary-50)',
            borderColor: 'var(--color-primary-100)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)'
          }}
        >
          <div>
            <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.25rem' }}>
              Want to combine these places into a single day trip?
            </h2>
            <p style={{ fontSize: 'var(--text-sm)' }}>
              Use our Trip Planner to group nearby attractions in practical order with travel notes.
            </p>
          </div>
          <Link to="/trip-planner" className="btn btn-primary">
            <CalendarRange size={16} />
            <span>Open Trip Planner</span>
          </Link>
        </div>
      </div>
    </div>
  );
}