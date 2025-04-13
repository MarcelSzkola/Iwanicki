import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import ChiefKeefImage from './Chief-Keef-Computer-Wallpaper.png';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <nav className="nav-menu">
        <div className="nav-item dropdown-container">
          <button onClick={() => handleDropdownToggle('women')} className="nav-button">
            KOBIETA ▼
          </button>
          {openDropdown === 'women' && (
            <ul className="dropdown">
              <li><Link to="/woman/buty" onClick={() => setOpenDropdown(null)}>Buty</Link></li>
              <li><Link to="/woman/bluzy" onClick={() => setOpenDropdown(null)}>Bluzy</Link></li>
              <li><Link to="/woman/koszulki" onClick={() => setOpenDropdown(null)}>Koszulki</Link></li>
              <li><Link to="/woman/spodnie" onClick={() => setOpenDropdown(null)}>Spodnie</Link></li>
            </ul>
          )}
        </div>
        <div className="nav-item dropdown-container">
          <button onClick={() => handleDropdownToggle('men')} className="nav-button">
            MĘŻCZYZNA ▼
          </button>
          {openDropdown === 'men' && (
            <ul className="dropdown">
              <li><Link to="/man/buty" onClick={() => setOpenDropdown(null)}>Buty</Link></li>
              <li><Link to="/man/bluzy" onClick={() => setOpenDropdown(null)}>Bluzy</Link></li>
              <li><Link to="/man/koszulki" onClick={() => setOpenDropdown(null)}>Koszulki</Link></li>
              <li><Link to="/man/spodnie" onClick={() => setOpenDropdown(null)}>Spodnie</Link></li>
            </ul>
          )}
        </div>
        <Link to="/zimbabwexchiefkeef" className="nav-item">ZIMBABWE x CHIEF KEEF</Link>
      </nav>
      <Link to="/" className="logo-link">
        <h1 className="logo">ZIMBABWE</h1>
      </Link>
      <div className="right-section">
        <div className="search-box">
          <FaSearch className="icon" />
          <input type="text" placeholder="Szukaj" />
        </div>
        <FaUser className="icon" />
        <FaShoppingBag className="icon" />
      </div>
    </header>
  );
}

function FeaturedImage() {
  return (
    <div className="featured-image">
      <img src={ChiefKeefImage} alt="Chief Keef" className="background-image" />
      <div className="news-ticker">
        <p>NOWOŚCI!!! NOWOŚCI!!! NOWOŚCI!!! NOWOŚCI!!! NOWOŚCI!!!</p>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <FeaturedImage />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
