import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './App.css';
import ChiefKeef1 from './1_chieefkeef.jpg';
import ChiefKeef2 from './2_chieefkeef.jpg';
import ChiefKeef3 from './3_chieefkeef.jpg';
import ChiefKeef4 from './4_chieefkeef.jpg';
import { FaGlobeAmericas } from 'react-icons/fa';
import plflag from './plflag.png';
import usaflag from './usaflag.png';
import dope from './weed.png';
/*modele*/
import model1 from './model1.jpg';
import model2 from './model2.jpg';
import model3 from './model5.jpg';
import model4 from './model8.jpg';
import model5 from './model12.jpg';
import model6 from './model9.jpg';
import model7 from './model10.jpg';
import model8 from './model11.jpg';



const Mainsiteen = () => {
    const data = new Date();
    const [selectedSizes, setSelectedSizes] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const models = [
      { id: 1, img: model1, name: "MODEL 1" },
      { id: 2, img: model2, name: "MODEL 2" },
      { id: 3, img: model3, name: "MODEL 3" },
      { id: 4, img: model4, name: "MODEL 4" },
      { id: 5, img: model5, name: "MODEL 5" },
      { id: 6, img: model6, name: "MODEL 6" },
      { id: 7, img: model7, name: "MODEL 7" },
      { id: 8, img: model8, name: "MODEL 8" }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % models.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [models.length]);
  
  
      return (
        <div className="chief-keef-page">
          <div className="collection-header">
                    <img src={dope} alt='logo' className='logostrony'></img>
          <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        {/* Dodaj tę sekcję pod czasem */}
        <div className="about-us-container">
  <div className="models-slideshow">
    <div className="model-slide">
      <img className='model' src={models[currentSlide].img} alt={models[currentSlide].name} />
    </div>
  </div>
  <span className='collection-onas'><h2>About Us</h2>
  DopeMagazine is more than just a clothing store — it’s a story rooted in the concrete of urban neighborhoods, the rhythm of MPC drums, and the soul of street culture that shaped entire generations.<br /> We were founded in the 90s, when hip-hop was not yet global mainstream, but a raw, authentic voice of young people from the blocks. That’s when our mission was born: to create and promote fashion that carries a true message.<br /> The beginnings were simple. A handful of ideas, a love for culture, and a few t-shirts sold from the trunk of an old Golf. Today, DopeMagazine is a brand with soul and history — with its own style, loyal community, and energy that has been alive for decades.<br /> We draw inspiration from everything that’s true and urban — from classic Bronx beats, to California skateparks, to Warsaw’s courtyards and underground clubs. Our collections are a mix of vintage streetwear, bold cuts, high-quality materials, and limited drops that capture the spirit of those times, yet are firmly grounded in today’s world.<br /> At DopeMagazine, you won’t find random designs. Every hoodie, every snapback, every detail has its meaning. Because for us, clothes are a form of expression — a manifesto of lifestyle, rebellion, and independence.<br /> We’re here for those who feel the vibe — for fans of classic boombap, for the young wolves of the new school, for skaters, DJs, graffiti artists, and everyone who lives the city and its energy. You create this culture with us.<br /> DopeMagazine is not just fashion.<br /> It’s movement, family, and lifestyle.<br /> From the streets — for the streets. Since 199X.<br /></span>
</div>     <div className="announcement-bar">
        <span className='announcement-bar-text'>New arrival • </span><span id="limited"><Link to="/dopemagazinexchiefkeef" className="collab-link">LIMITED EDITION</Link></span><span className='announcement-bar-text'> • NEWEST COLLABORATION ALREADY IN STOCK</span>
      </div>
      <p>&nbsp;</p>
            <div className="collection-menu">
              <Link to="/en/collection" className="collection-menu-item active">COLLECTION</Link>
              <div className="dropdown-container">
    <button className="collection-menu-item">
      <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
    </button>
    <ul className="dropdown">
      <li>
        <Link to="/pl">
          <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
        </Link>
        </li>
    </ul>
  </div>
  <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
              <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
              <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
            </div>
          </div>
          <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
          <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
    </div>
  );
};

const Mainsitepl = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const models = [
    { id: 1, img: model1, name: "MODEL 1" },
    { id: 2, img: model2, name: "MODEL 2" },
    { id: 3, img: model3, name: "MODEL 3" },
    { id: 4, img: model4, name: "MODEL 4" },
    { id: 5, img: model5, name: "MODEL 5" },
    { id: 6, img: model6, name: "MODEL 6" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % models.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [models.length]);


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
      {/* Dodaj tę sekcję pod czasem */}
      <div className="about-us-container">
<div className="models-slideshow">
  <div className="model-slide">
    <img className='model' src={models[currentSlide].img} alt={models[currentSlide].name} />
  </div>
</div>
<span className='collection-onas'><h2>O nas</h2>
DopeMagazine to coś więcej niż tylko sklep z ciuchami — to historia zakorzeniona w betonie miejskich osiedli, rytmie bębnów MPC i duszy ulicznej kultury, która kształtowała całe pokolenia.<br /> Powstaliśmy w latach 90., kiedy hip-hop nie był jeszcze światowym mainstreamem, tylko surowym, autentycznym głosem młodych ludzi z blokowisk. To właśnie wtedy narodziła się nasza misja: tworzyć i promować modę, która niesie za sobą prawdziwy przekaz.<br /> Początki były proste. Garść pomysłów, miłość do kultury i kilka koszulek sprzedawanych z bagażnika starego Golfa. Dziś DopeMagazine to marka z duszą i historią — z własnym stylem, lojalną społecznością i energią, która nie gaśnie od dekad.<br /> Inspirujemy się wszystkim, co szczere i uliczne — od klasycznych beatów z Bronxu, przez skateparki Kalifornii, po warszawskie podwórka i undergroundowe kluby. Nasze kolekcje to połączenie vintage’owego streetwearu, odważnych krojów, wysokiej jakości materiałów i limitowanych dropów, które oddają ducha tamtych czasów, ale są osadzone w dzisiejszym świecie.<br /> W DopeMagazine nie znajdziesz przypadkowych projektów. Każda bluza, każda czapka z daszkiem, każdy detal ma swoje znaczenie. Bo dla nas ciuchy to forma ekspresji — manifest stylu życia, buntu i niezależności.<br /> Jesteśmy tu dla tych, którzy czują klimat — dla fanów klasycznych boombapów, dla młodych wilków z nowej szkoły, dla skejtów, DJ-ów, artystów graffiti i wszystkich, którzy żyją miastem i jego energią. To Ty tworzysz tę kulturę razem z nami.<br /> DopeMagazine to nie moda.<br /> To ruch, rodzina i styl życia.<br /> Z ulicy — dla ulicy. Od 199X.<br /></span>
</div>     
       <div className="announcement-bar">
      <span className='announcement-bar-text'>nowość • </span><span id="limited"><Link to="/dopemagazinexchiefkeef" className="collab-link">limitowana edycja</Link></span><span className='announcement-bar-text'> • nowa kolaboracja juz w sprzedaży</span>
    </div>
    <p>&nbsp;</p>
    <div className="collection-menu">
            <Link to="/pl/collection" className="collection-menu-item active">KOLEKCJA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/">
        <img src={usaflag} alt="Usa flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
            <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
  </div>
);
};
const Privacypolicyen = () => {
  const data = new Date();

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
                <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <p className='collection-menu-privacy'>Privacy Policy of Dope Magazine Online Store<br />
Effective date: April 24, 2025<br /><br />

1. Data Controller<br />
The data controller is Dope Magazine Sp. z o.o., registered at Stylowa Street 12, 00-123 Warsaw, Poland, KRS: 0000123456, VAT ID: PL5211234567, REGON: 146789012.<br />
Contact: kontakt@dopemagazine.pl.<br /><br />

2. Scope of Personal Data<br />
We process the following personal data:<br />

full name,<br />

e-mail address,<br />

phone number,<br />

shipping address,<br />

billing data (company name, VAT ID),<br />

IP address and technical data (cookies, browser info).<br /><br />

3. Purpose of Processing<br />
Your data is processed to:<br />

fulfill orders placed on our site,<br />

contact customers,<br />

issue invoices and manage payments,<br />

manage user accounts,<br />

send newsletters (with consent),<br />

provide security and prevent fraud.<br /><br />

4. Legal Basis<br />
Data is processed under:<br />

Art. 6(1)(b) GDPR – contract performance,<br />

Art. 6(1)(c) GDPR – legal obligations,<br />

Art. 6(1)(a) GDPR – consent (e.g., newsletters),<br />

Art. 6(1)(f) GDPR – legitimate interests (e.g., marketing).<br /><br />

5. Data Recipients<br />
We may share data with:<br />

courier companies,<br />

payment operators (e.g., PayU, Przelewy24),<br />

hosting and IT providers,<br />

accounting office.<br /><br />

6. Your Rights<br />
You have the right to:<br />

access your data,<br />

rectify or delete it,<br />

restrict processing,<br />

object to processing,<br />

data portability,<br />

lodge a complaint with the Data Protection Authority.<br /><br />

7. Cookies<br />
We use cookies for:<br />

proper functioning of the website,<br />

analytics (Google Analytics),<br />

marketing (remarketing, social media).<br />
You can change your cookie preferences in your browser settings.<br /><br />

8. Data Retention<br />
We retain data for the duration necessary to achieve the processing purposes, and as required by law (e.g., for tax purposes).<br /><br /></p>
        <div className="collection-menu">
          <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
          <div className="dropdown-container">
<button className="collection-menu-item">
  <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
</button>
<ul className="dropdown">
  <li>
    <Link to="/pl/privacypolicy">
      <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
    </Link>
    </li>
</ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
          <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
          <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
        </div>
      </div>
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
      <Link to="/en/collection"><p className='collection-menu-privacypolicy'>BACK TO COLLECTION</p></Link>
  </div>
  );
};

const Privacypolicypl = () => {
  const data = new Date();

  return (
    <div className="chief-keef-page">
      <div className="collection-header">
                <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <p className='collection-menu-privacy'>Polityka Prywatności Sklepu Internetowego Dope Magazine<br />
Data wejścia w życie: 24 kwietnia 2025 r.<br /><br />

1. Administrator danych osobowych<br />
Administratorem danych osobowych jest Dope Magazine Sp. z o.o. z siedzibą przy ul. Stylowa 12, 00-123 Warszawa, wpisana do Krajowego Rejestru Sądowego pod numerem KRS 0000123456, NIP: 521-123-45-67, REGON: 146789012.<br />
Kontakt: kontakt@dopemagazine.pl.<br /><br />

2. Zakres przetwarzanych danych<br />
Przetwarzamy dane osobowe użytkowników w następującym zakresie:<br />

imię i nazwisko,<br />

adres e-mail,<br />

numer telefonu,<br />

adres dostawy,<br />

dane do faktury (nazwa firmy, NIP),<br />

adres IP oraz dane techniczne (cookies, dane przeglądarki).<br /><br />

3. Cele przetwarzania danych<br />
Dane osobowe są wykorzystywane w celu:<br />

realizacji zamówień złożonych w sklepie,<br />

kontaktu z klientem,<br />

wystawienia faktury i obsługi płatności,<br />

prowadzenia konta użytkownika,<br />

wysyłki newslettera (za zgodą użytkownika),<br />

zapewnienia bezpieczeństwa oraz zapobiegania nadużyciom.<br /><br />

4. Podstawa prawna przetwarzania<br />
Dane przetwarzane są zgodnie z:<br />

art. 6 ust. 1 lit. b RODO – realizacja umowy,<br />

art. 6 ust. 1 lit. c RODO – obowiązki prawne,<br />

art. 6 ust. 1 lit. a RODO – zgoda (np. na newsletter),<br />

art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora (np. marketing własny).<br /><br />

5. Odbiorcy danych<br />
Dane mogą być przekazywane podmiotom wspierającym nas w obsłudze sklepu, np.:<br />

firmom kurierskim,<br />

operatorom płatności (np. PayU, Przelewy24),<br />

firmom hostingowym i IT,<br />

biuru rachunkowemu.<br /><br />

6. Prawa użytkownika<br />
Masz prawo do:<br />

dostępu do swoich danych,<br />

ich sprostowania, usunięcia lub ograniczenia przetwarzania,<br />

wniesienia sprzeciwu,<br />

przenoszenia danych,<br />

wniesienia skargi do Prezesa UODO.<br /><br />

7. Pliki cookies<br />
Nasz sklep wykorzystuje pliki cookies w celach:<br />

poprawnego działania strony,<br />

analizy statystyk (Google Analytics),<br />

działań marketingowych (remarketing, social media).<br />
Możesz zmienić ustawienia cookies w swojej przeglądarce.<br /><br />

8. Okres przechowywania danych<br />
Dane są przechowywane przez okres niezbędny do realizacji celów, a następnie przez czas wymagany przepisami prawa (np. podatkowymi).<br /><br /></p>
<div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">GŁÓWNA STRONA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/privacypolicy">
        <img src={usaflag} alt="Usa flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
            <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">KOLEKCJA CHIEF KEEF</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
      <Link to="/pl/collection"><p className='collection-menu-privacypolicy'>POWRÓT DO KOLEKCJI</p></Link>
  </div>
  );
};

const ChiefKeefCollection = () => {
  const data = new Date();
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
        <h1>DOPEMAGAZINE X CHIEF KEEF COLLECTION</h1>
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

const sizes = ['XS','S','M','L','XL'];

const products = [
  {
    id: 1,
    category: 'cap',
    name: 'DOPEMAGAZINE x CHIEF KEEF HOODIE',
    img : ChiefKeef1,
    price: '499 PLN',
    description: 'Limitowana edycja bluzy z kolaboracja z Chief Keef'
  },
  {
    id: 2,
    category: 'jackets',
    name: 'DOPEMAGAZINE x CHIEF KEEF T-SHIRT',
    img : ChiefKeef2,
    price: '299 PLN',
    description: 'Limitowana edycja koszulki z kolaboracja z Chief Keef'
  },
  {
    id: 3,
    category: 'hoodies',
    name: 'DOPEMAGAZINE x CHIEF KEEF CAP FOR A SUMMER',
    img : ChiefKeef3,
    price: '249 PLN',
    description: 'Limitowana edycja czapki z kolaboracja z Chief Keef'
  },
  {
    id: 4,
    category: 'tshirts',
    name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
    img : ChiefKeef4,
    price: '549 PLN',
    description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
  },
  {
  id: 5,
  category: 'trousers',
  name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
  img : ChiefKeef4,
  price: '549 PLN',
  description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
  },
  {
  id: 6,
  category: 'jeanses',
  name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
  img : ChiefKeef4,
  price: '549 PLN',
  description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
   },
   {
   id: 7,
   category: 'shoes',
   name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
   img : ChiefKeef4,
   price: '549 PLN',
   description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
   }
];
const productspl = [
  {
    id: 1,
    category: 'cap',
    name: 'DOPEMAGAZINE x CHIEF KEEF HOODIE',
    img : ChiefKeef1,
    price: '499 PLN',
    description: 'Limitowana edycja bluzy z kolaboracja z Chief Keef'
  },
  {
    id: 2,
    category: 'jackets',
    name: 'DOPEMAGAZINE x CHIEF KEEF T-SHIRT',
    img : ChiefKeef2,
    price: '299 PLN',
    description: 'Limitowana edycja koszulki z kolaboracja z Chief Keef'
  },
  {
    id: 3,
    category: 'hoodies',
    name: 'DOPEMAGAZINE x CHIEF KEEF CAP FOR A SUMMER',
    img : ChiefKeef3,
    price: '249 PLN',
    description: 'Limitowana edycja czapki z kolaboracja z Chief Keef'
  },
  {
    id: 4,
    category: 'tshirts',
    name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
    img : ChiefKeef4,
    price: '549 PLN',
    description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
  },
  {
  id: 5,
  category: 'trousers',
  name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
  img : ChiefKeef4,
  price: '549 PLN',
  description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
  },
  {
  id: 6,
  category: 'jeanses',
  name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
  img : ChiefKeef4,
  price: '549 PLN',
  description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
   },
   {
   id: 7,
   category: 'shoes',
   name: 'DOPEMAGAZINE x CHIEF KEEF JEANS',
   img : ChiefKeef4,
   price: '549 PLN',
   description: 'Limitowana edycja jeansow z kolaboracjow Chief Keef'
   }
];

const Collectionen = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/en/collection"><p className='collection-categories2'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
      
    </div>
  );
};

const Collectionpl = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories2'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {productspl.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};

const Koszykpl = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
/*miejsce na gowna z koszyka*/








/*miejsce na gowna z koszyka*/
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/buycart">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Koszyken = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        /*miejsce na gowna z koszyka*/








/*miejsce na gowna z koszyka*/
      <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/buycart">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
      
    </div>
  );
};


/*kategoryczny shit*/
/*en*/

const Collectionencaps = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories2'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'cap').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenjackets = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories2'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'jackets').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenhoodies = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories2'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'hoodies').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionentshirts = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories2'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'tshirts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionentrousers = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories2'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'trousers').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenjeanses = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories2'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'jeanses').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenshoes = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };


    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>
        <div className="linki">
        <Link to="/en/collection"><p className='collection-categories'>all</p></Link>
       <Link to="/en/collection/capsbeanies"><p className='collection-categories'>caps/beanies</p></Link>
       <Link to="/en/collection/jackets"><p className='collection-categories'>jackets</p></Link>
       <Link to="/en/collection/hoodies"><p className='collection-categories'>hoodies</p></Link>
       <Link to="/en/collection/tshirts"><p className='collection-categories'>tshirts</p></Link>
       <Link to="/en/collection/trousers"><p className='collection-categories'>trousers</p></Link>
       <Link to="/en/collection/jeanses"><p className='collection-categories'>jeanses</p></Link>
       <Link to="/en/collection/shoes"><p className='collection-categories2'>shoes</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'shoes').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">CHOOSE SIZE</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/" className="collection-menu-item active">MAIN SITE</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/pl/collection">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/collection" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};

/*pl*/
const Collectionplcaps = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories2'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'cap').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpljackets = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories2'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'jackets').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionplhoodies = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories2'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'hoodies').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpltshirts = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories2'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'tshirts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpltrousers = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories2'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'trousers').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpljeanses = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories2'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'jeanses').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionplshoes = () => {
  const data = new Date();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

    return (
      <div className="chief-keef-page">
        <div className="collection-header">
                  <img src={dope} alt='logo' className='logostrony'></img>
        <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>


<div className="linki">
        <Link to="/pl/collection"><p className='collection-categories'>wszystko</p></Link>
       <Link to="/pl/collection/capsbeanies"><p className='collection-categories'>czapki</p></Link>
       <Link to="/pl/collection/jackets"><p className='collection-categories'>kurtki</p></Link>
       <Link to="/pl/collection/hoodies"><p className='collection-categories'>bluzy</p></Link>
       <Link to="/pl/collection/tshirts"><p className='collection-categories'>koszulki</p></Link>
       <Link to="/pl/collection/trousers"><p className='collection-categories'>dresy</p></Link>
       <Link to="/pl/collection/jeanses"><p className='collection-categories'>jeansy</p></Link>
       <Link to="/pl/collection/shoes"><p className='collection-categories2'>buty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'shoes').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chieefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">DODAJ DO KOSZYKA</button>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
              <select 
                id={`size-${product.id}`}
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                
                <option value="">WYBIERZ ROZMIAR</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
      </div>
      </div>
          <div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">STRONA GŁÓWNA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/collection">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/collection" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};

const MainContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="app-content">
      {pathname === '/' && <Mainsiteen />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/pl" element={<Mainsitepl />} />
        <Route path="/dopemagazinexchiefkeef" element={<ChiefKeefCollection />} />
        <Route path="/en/collection" element={<Collectionen />} />
        <Route path="/pl/collection" element={<Collectionpl />} />
        <Route path="/en/buycart" element={<Koszyken />} />
        <Route path="/pl/buycart" element={<Koszykpl />} />
        /*kategoryczny shit*/
        <Route path="/en/collection/capsbeanies" element={<Collectionencaps />} />
        <Route path="/en/collection/hoodies" element={<Collectionenhoodies />} />
        <Route path="/en/collection/jackets" element={<Collectionenjackets />} />
        <Route path="/en/collection/jeanses" element={<Collectionenjeanses />} />
        <Route path="/en/collection/shoes" element={<Collectionenshoes />} />
        <Route path="/en/collection/trousers" element={<Collectionentrousers />} />
        <Route path="/en/collection/tshirts" element={<Collectionentshirts />} />
        
        <Route path="/pl/collection/capsbeanies" element={<Collectionplcaps />} />
        <Route path="/pl/collection/hoodies" element={<Collectionplhoodies />} />
        <Route path="/pl/collection/jackets" element={<Collectionpljackets />} />
        <Route path="/pl/collection/jeanses" element={<Collectionpljeanses />} />
        <Route path="/pl/collection/shoes" element={<Collectionplshoes />} />
        <Route path="/pl/collection/trousers" element={<Collectionpltrousers />} />
        <Route path="/pl/collection/tshirts" element={<Collectionpltshirts />} />

        <Route path="/en/privacypolicy" element={<Privacypolicyen />} />
        <Route path="/pl/privacypolicy" element={<Privacypolicypl />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;