import { Link } from 'react-router-dom';
import { Trees, ShieldCheck, AlertTriangle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Mission */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-title">
              <Trees size={22} />
              <span>Ananthagiri Hills</span>
            </Link>
            <p className="footer-desc">
              A locally curated tourism discovery guide for Ananthagiri Hills and Vikarabad,
              Telangana — helping visitors find verified viewpoints, temples, dining, stays, and
              practical travel information.
            </p>
            <div className="footer-trust-note">
              <ShieldCheck size={15} />
              <span>Every listing displays its last-verified date</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="footer-col-title">Discover</h3>
            <ul className="footer-links">
              <li><Link to="/places">Explore Places</Link></li>
              <li><Link to="/food">Food & Dining</Link></li>
              <li><Link to="/stays">Accommodation & Stays</Link></li>
              <li><Link to="/transport">Transport Guide</Link></li>
              <li><Link to="/trip-planner">Trip Planner</Link></li>
            </ul>
          </div>

          {/* Column 3: Information & Trust */}
          <div>
            <h3 className="footer-col-title">Platform & Trust</h3>
            <ul className="footer-links">
              <li><Link to="/about">About This Guide</Link></li>
              <li><Link to="/contact">Report an Error / Contribute</Link></li>
              <li><Link to="/about#privacy">Privacy & Data Policy</Link></li>
              <li><Link to="/about#safety">Forest Rules & Visitor Safety</Link></li>
            </ul>
          </div>

          {/* Column 4: Emergency & Visitor Notice */}
          <div>
            <h3 className="footer-col-title">Visitor Safety Note</h3>
            <p className="footer-desc">
              Ananthagiri is a protected Reserve Forest area. Plastic littering, unauthorized night
              camping, and entering deep reservoir waters are strictly prohibited.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <Link to="/contact" className="btn btn-outline-light btn-sm">
                <AlertTriangle size={14} />
                <span>Report Outdated Info</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Ananthagiri Hills Discovery Platform (Vikarabad, Telangana). Independent
            community tourism resource.
          </span>
          <span>
            Sample development photographs are marked and will be replaced with licensed local media
            prior to launch.
          </span>
        </div>
      </div>
    </footer>
  );
}