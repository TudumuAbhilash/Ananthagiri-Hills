import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Trees, Menu, X, Compass } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/food', label: 'Food' },
  { to: '/stays', label: 'Stays' },
  { to: '/transport', label: 'Transport' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container navbar-container">
        {/* Brand Identity */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <span className="navbar-logo-badge" aria-hidden="true">
            <Trees size={22} />
          </span>
          <span className="navbar-brand-text">
            <span className="navbar-brand-title">Ananthagiri Hills</span>
            <span className="navbar-brand-subtitle">Vikarabad • Telangana</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav-desktop" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="navbar-actions-desktop">
          <Link to="/places" className="btn btn-primary btn-sm">
            <Compass size={16} />
            <span>Explore Places</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          className="navbar-mobile-drawer"
          aria-label="Mobile Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMobileMenu}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
          <div className="navbar-mobile-footer">
            <Link to="/places" className="btn btn-primary" onClick={closeMobileMenu}>
              <Compass size={16} />
              <span>Explore Places</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}