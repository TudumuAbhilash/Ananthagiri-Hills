import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import PlaceDetails from './pages/Places/PlaceDetails';
import MapView from './pages/Map/MapView';
import Food from './pages/Food/Food';
import Stays from './pages/Stays/Stays';
import Transport from './pages/Transport/Transport';
import TripPlanner from './pages/TripPlanner/TripPlanner';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

/**
 * Automatically scrolls to the top of the page when switching routes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * 404 Not Found fallback component.
 */
function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card" style={{ padding: 'var(--space-12)', textAlign: 'center' }}>
          <span className="badge badge-warning" style={{ marginBottom: 'var(--space-3)' }}>
            Page Not Found
          </span>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>404 — Page Does Not Exist</h1>
          <p style={{ marginBottom: 'var(--space-6)', maxWidth: '480px', marginInline: 'auto' }}>
            The page you are looking for may have moved or no longer exists.
          </p>
          <a href="/" className="btn btn-primary">
            Return to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Explore />} />
          <Route path="/places/:slug" element={<PlaceDetails />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/food" element={<Food />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}