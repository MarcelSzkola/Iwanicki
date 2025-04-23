import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './App.css';
import ChiefKeefBanner from './Chief-Keef-Computer-Wallpaper.gif';
import ChiefKeef1 from './1_chieefkeef.jpg';
import ChiefKeef2 from './2_chieefkeef.jpg';
import ChiefKeef3 from './3_chieefkeef.jpg';
import ChiefKeef4 from './4_chieefkeef.jpg';

/*man buty*/
import man_buty1 from './man_buty_1.png';
import man_buty2 from './man_buty_2.png';
import man_buty3 from './man_buty_3.png';
import man_buty4 from './man_buty_4.png';
import man_buty5 from './man_buty_5.png';
import man_buty6 from './man_buty_6.png';
import man_buty7 from './man_buty_7.png';
import man_buty8 from './man_buty_8.png';


/*man bluzy*/
import man_bluzy1 from './man_bluzy_1.png';
import man_bluzy2 from './man_bluzy_2.png';
import man_bluzy3 from './man_bluzy_3.png';
import man_bluzy4 from './man_bluzy_4.png';
import man_bluzy5 from './man_bluzy_5.png';
import man_bluzy6 from './man_bluzy_6.png';

/*man koszulki*/
import man_koszulki1 from './man_koszulki_1.png';
import man_koszulki2 from './man_koszulki_2.png';
import man_koszulki3 from './man_koszulki_3.png';
import man_koszulki4 from './man_koszulki_4.png';
import man_koszulki5 from './man_koszulki_5.png';
import man_koszulki6 from './man_koszulki_6.png';


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
        
        <Link to="/dopemagazinexchiefkeef" className="nav-item collab-link">
          DOPEMAGAZINE x CHIEF KEEF
        </Link>
      </nav>

      <Link to="/" className="logo-link">
        <h1 className="logo">DOPEMAGAZINE</h1>
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
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };
  const products = [
    {
      id: 1,
      name: 'DOPEMAGAZINE x CHIEF KEEF HOODIE',
      img : ChiefKeef1,
      price: '499 PLN',
      description: 'Limitowana edycja bluzy z kolaboracja z Chief Keef'
    },
    {
      id: 2,
      name: 'DOPEMAGAZINE x CHIEF KEEF T-SHIRT',
      img : ChiefKeef2,
      price: '299 PLN',
      description: 'Limitowana edycja koszulki z kolaboracja z Chief Keef'
    },
    {
      id: 3,
      name: 'DOPEMAGAZINE x CHIEF KEEF CAP FOR A SUMMER',
      img : ChiefKeef3,
      price: '249 PLN',
      description: 'Limitowana edycja czapki z kolaboracja z Chief Keef'
    },
    {
      id: 4,
      name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
      img : ChiefKeef4,
      price: '549 PLN',
      description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
    },
  ];

  // Generowanie rozmiarów od 36 do 46
  const sizes = ['XS','S','M','L','XL'];

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
        <h1>DOPEMAGAZINE X CHIEEF KEEF COLLECTION</h1>
        <p className="subtitle">
          Ekskluzywna kolekcja stworzona we współpracy z legendarnym Chief Keef. 
          Każdy element został zaprojektowany z najwyższą dbałością o detal, 
          łącząc streetwearową estetykę Zimbabwe z unikalnym stylem artysty.
        </p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <label htmlFor={`size-${product.id}`}>Rozmiar:</label>
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="">Wybierz rozmiar</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
          </div>
        ))}
      </div>
      <Link to="/" className="powrotdomenu">
      <button className="powrot">POWROT DO STRONY GLOWNEJ</button>
      </Link>
      
      <div className="collab-description">
      </div>
    </div>
  );
};

const Man_Buty_Collection = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const products = [
    {
      id: 1,
      name: 'DOPEMAGAZINE x DC SHOES FOR A SUMMER',
      img : man_buty1,
      price: '399 PLN',
      description: 'Letnie buty'
    },
    {
      id: 2,
      name: 'DOPEMAGAZINE x DC SHOES FOR RUNNERS',
      img : man_buty2,
      price: '299 PLN',
      description: 'Buty w sam raz do biegania'
    },
    {
      id: 3,
      name: 'DOPEMAGAZINE x ASICS FOR RUNNERS',
      img : man_buty3,
      price: '249 PLN',
      description: 'Buty do biegania'
    },
    {
      id: 4,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_buty4,
      price: '549 PLN',
      description: 'Buty do latania'
    },
    {
      id: 5,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_buty5,
      price: '499 PLN',
      description: 'Buty do Latania'
    },
    {
      id: 6,
      name: 'DOPEMAGAZINE x ADIDAS FOR RUNNERS',
      img : man_buty6,
      price: '299 PLN',
      description: 'Buty do biegania'
    },
    {
      id: 7,
      name: 'DOPEMAGAZINE x VANS FOR A PROFESSIONAL RUNNERS',
      img : man_buty7,
      price: '249 PLN',
      description: 'Buty do Biegania'
    },
    {
      id: 8,
      name: 'DOPEMAGAZINE x VANS FOR A PROFESSIONAL RUNNERS',
      img : man_buty8,
      price: '549 PLN',
      description: 'Buty do Biegania'
    },
  ];

  // Generowanie rozmiarów od 36 do 46
  const sizes = Array.from({length: 11}, (_, i) => 36 + i);

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
        <h1>DOPEMAGAZINE SHOES COLLECTION</h1>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <label htmlFor={`size-${product.id}`}>Rozmiar:</label>
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="">Wybierz rozmiar</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
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
          Każdy element został zaprojektowany z najwyższą dbałością o detal, 
          łącząc streetwearową estetykę Zimbabwe
        </p>
      </div>
    </div>
  );
};

const Man_Bluzy_Collection = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const products = [
    {
      id: 1,
      name: 'DOPEMAGAZINE x DC SHOES FOR A SUMMER',
      img : man_bluzy1,
      price: '399 PLN',
      description: 'Letnie buty'
    },
    {
      id: 2,
      name: 'DOPEMAGAZINE x DC SHOES FOR RUNNERS',
      img : man_bluzy2,
      price: '299 PLN',
      description: 'Buty w sam raz do biegania'
    },
    {
      id: 3,
      name: 'DOPEMAGAZINE x ASICS FOR RUNNERS',
      img : man_bluzy3,
      price: '249 PLN',
      description: 'Buty do biegania'
    },
    {
      id: 4,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_bluzy4,
      price: '549 PLN',
      description: 'Buty do latania'
    },
    {
      id: 5,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_bluzy5,
      price: '499 PLN',
      description: 'Buty do Latania'
    },
    {
      id: 6,
      name: 'DOPEMAGAZINE x ADIDAS FOR RUNNERS',
      img : man_bluzy6,
      price: '299 PLN',
      description: 'Buty do biegania'
    },
  ];

  // Generowanie rozmiarów od 36 do 46
  const sizes = ['XS','S','M','L','XL'];

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
        <h1>DOPEMAGAZINE SHOES COLLECTION</h1>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <label htmlFor={`size-${product.id}`}>Rozmiar:</label>
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="">Wybierz rozmiar</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
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
          Każdy element został zaprojektowany z najwyższą dbałością o detal, 
          łącząc streetwearową estetykę Zimbabwe
        </p>
      </div>
    </div>
  );
};

const Man_Koszulki_Collection = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const products = [
    {
      id: 1,
      name: 'DOPEMAGAZINE x DC SHOES FOR A SUMMER',
      img : man_koszulki1,
      price: '399 PLN',
      description: 'Letnie buty'
    },
    {
      id: 2,
      name: 'DOPEMAGAZINE x DC SHOES FOR RUNNERS',
      img : man_koszulki2,
      price: '299 PLN',
      description: 'Buty w sam raz do biegania'
    },
    {
      id: 3,
      name: 'DOPEMAGAZINE x ASICS FOR RUNNERS',
      img : man_koszulki3,
      price: '249 PLN',
      description: 'Buty do biegania'
    },
    {
      id: 4,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_koszulki4,
      price: '549 PLN',
      description: 'Buty do latania'
    },
    {
      id: 5,
      name: 'DOPEMAGAZINE x ADIDAS FOR FLYERS',
      img : man_koszulki5,
      price: '499 PLN',
      description: 'Buty do Latania'
    },
    {
      id: 6,
      name: 'DOPEMAGAZINE x ADIDAS FOR RUNNERS',
      img : man_koszulki6,
      price: '299 PLN',
      description: 'Buty do biegania'
    },
  ];

  // Generowanie rozmiarów od 36 do 46
  const sizes = ['XS','S','M','L','XL'];

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
        <h1>DOPEMAGAZINE SHOES COLLECTION</h1>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <label htmlFor={`size-${product.id}`}>Rozmiar:</label>
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="">Wybierz rozmiar</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
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
          Każdy element został zaprojektowany z najwyższą dbałością o detal, 
          łącząc streetwearową estetykę Zimbabwe
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
        <Route path="/dopemagazinexchiefkeef" element={<ChiefKeefCollection />} />
        <Route path="/men/buty" element={<Man_Buty_Collection />} />
        <Route path="/men/bluzy" element={<Man_Bluzy_Collection />} />
        <Route path="/men/koszulki" element={<Man_Koszulki_Collection />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;