import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './App.css';
import ChiefKeefBanner from './Chief-Keef-Computer-Wallpaper.png';
import ChiefKeef1 from './1_chieefkeef.jpg';
import ChiefKeef2 from './2_chieefkeef.jpg';
import ChiefKeef3 from './3_chieefkeef.jpg';
import ChiefKeef4 from './4_chieefkeef.jpg';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const categories = {
    women: ['Buty', 'Bluzy', 'Koszulki', 'Spodnie'],
    men: ['Buty', 'Bluzy', 'Koszulki', 'Spodnie']
  };

  return (
    <header className="header">
      <nav className="nav-menu">
        {Object.entries(categories).map(([gender, items]) => (
          <div key={gender} className="nav-item dropdown-container">
            <button 
              onClick={() => toggleDropdown(gender)} 
              className="nav-button"
            >
              {gender === 'women' ? 'KOBIETA' : 'MĘŻCZYZNA'} ▼
            </button>
            
            {activeDropdown === gender && (
              <ul className="dropdown">
                {items.map(item => (
                  <li key={item}>
                    <Link 
                      to={`/${gender}/${item.toLowerCase()}`} 
                      onClick={closeDropdowns}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        
        <Link to="/zimbabwexchiefkeef" className="nav-item collab-link">
          ZIMBABWE x CHIEF KEEF
        </Link>
      </nav>

      <Link to="/" className="logo-link">
        <h1 className="logo">ZIMBABWE</h1>
      </Link>

      <div className="header-icons">
        <div className="search-container">
          <FaSearch className="icon search-icon" />
          <input type="text" placeholder="Szukaj..." className="search-input" />
        </div>
        <FaUser className="icon profile-icon" />
        <FaShoppingBag className="icon cart-icon" />
      </div>
    </header>
  );
};

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img 
        src={ChiefKeefBanner} 
        alt="Limited Edition: Zimbabwe x Chief Keef Collection" 
        className="banner-image"
      />
      <div className="announcement-bar">
        <span>NOWOŚCI!!! • </span><span id="limited">LIMITED EDITION</span><span> • DOSTĘPNE TYLKO TERAZ!!!</span>
      </div>
    </div>
  );
};

const ChiefKeefCollection = () => {
  const products = [
    {
      id: 1,
      name: 'ZIMBABWE x CHIEF KEEF HOODIE',
      img : ChiefKeef1,
      price: '499 PLN',
      description: 'Limitowana edycja bluzy z kolaboracja z Chief Keef'
    },
    {
      id: 2,
      name: 'ZIMBABWE x CHIEF KEEF T-SHIRT',
      img : ChiefKeef2,
      price: '299 PLN',
      description: 'Limitowana edycja koszulki z kolaboracja z Chief Keef'
    },
    {
      id: 3,
      name: 'ZIMBABWE x CHIEF KEEF CAP',
      img : ChiefKeef3,
      price: '249 PLN',
      description: 'Limitowana edycja czapki z kolaboracja z Chief Keef'
    },
    {
      id: 4,
      name: 'ZIMBABWE x CHIEF KEEF JEANS',
      img : ChiefKeef4,
      price: '549 PLN',
      description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
    },
  ];

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
        <h1>ZIMBABWE x CHIEF KEEF</h1>
        <p className="subtitle">LIMITED EDITION COLLECTION</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
          </div>
        ))}
      </div>
      <Link to="/" className="powrotdomenu">
      <button className="powrot">POWROT DO STRONY GLOWNEJ</button>
      </Link>
      
      <div className="collab-description">
        <h2>O KOLEKCJI</h2>
        <p>
          Ekskluzywna kolekcja stworzona we współpracy z legendarnym Chief Keef. 
          Każdy element został zaprojektowany z najwyższą dbałością o detal, 
          łącząc streetwearową estetykę Zimbabwe z unikalnym stylem artysty.
        </p>
      </div>
    </div>
  );
};

const MainContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="app-content">
      <Header />
      {pathname === '/' && <HeroBanner />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/zimbabwexchiefkeef" element={<ChiefKeefCollection />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;