import React, { useState, useEffect } from 'react';
import { database, ref, set, get, child } from './firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config'; // Upewnij się, że ścieżka jest poprawna
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import { getDatabase, push } from 'firebase/database';
import { onValue, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';



import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './App.css';
/*logo i flagi*/
import plflag from  './logoandflags/plflag.png';
import usaflag from './logoandflags/usaflag.png';
import dope from './logoandflags/weed.png';
/*chiefkeef*/
import chief1 from './clothes/1_chieef.png';
import chief2 from './clothes/2_chieef.png';
import chief3 from './clothes/3_chieef.png';
import chief4 from './clothes/4_chieef.png';
import chief5 from './clothes/5_chieef.png';
import chief6 from './clothes/6_chieef.png';
import chief7 from './clothes/7_chieef.png';
import chief8 from './clothes/8_chieef.png';
/*jackets*/
import jackets1 from './clothes/1_jacket.png';
import jackets2 from './clothes/2_jacket.png';
import jackets3 from './clothes/3_jacket.png';
import jackets4 from './clothes/4_jacket.png';
import jackets5 from './clothes/5_jacket.png';
import jackets6 from './clothes/6_jacket.png';
import jackets7 from './clothes/7_jacket.png';
import jackets8 from './clothes/8_jacket.png';
import jackets9 from './clothes/9_jacket.png';
import jackets10 from './clothes/10_jacket.png';
/*cap*/
import cap1 from './clothes/1_cap.png';
import cap2 from './clothes/2_cap.png';
import cap3 from './clothes/3_cap.png';
import cap4 from './clothes/4_cap.png';
import cap5 from './clothes/5_cap.png';
import cap6 from './clothes/6_cap.png';
import cap7 from './clothes/7_cap.png';
import cap8 from './clothes/8_cap.png';
import cap9 from './clothes/9_cap.png';
import cap10 from './clothes/10_cap.png';
/*hoodies*/
import hoodies1 from './clothes/1_hoodies.png';
import hoodies2 from './clothes/2_hoodies.png';
import hoodies3 from './clothes/3_hoodies.png';
import hoodies4 from './clothes/4_hoodies.png';
import hoodies5 from './clothes/5_hoodies.png';
import hoodies6 from './clothes/6_hoodies.png';
import hoodies7 from './clothes/7_hoodies.png';
import hoodies8 from './clothes/8_hoodies.png';
import hoodies9 from './clothes/9_hoodies.png';
import hoodies10 from './clothes/10_hoodies.png';
/*tshirts*/
import tshirts1 from './clothes/1_tshirt.png';
import tshirts2 from './clothes/2_tshirt.png';
import tshirts3 from './clothes/3_tshirt.png';
import tshirts4 from './clothes/4_tshirt.png';
import tshirts5 from './clothes/5_tshirt.png';
import tshirts6 from './clothes/6_tshirt.png';
import tshirts7 from './clothes/7_tshirt.png';
import tshirts8 from './clothes/8_tshirt.png';
import tshirts9 from './clothes/9_tshirt.png';
import tshirts10 from './clothes/10_tshirt.png';
/*trousers*/
import trousers1 from './clothes/1_trousers.png';
import trousers2 from './clothes/2_trousers.png';
import trousers3 from './clothes/3_trousers.png';
import trousers4 from './clothes/4_trousers.png';
import trousers5 from './clothes/5_trousers.png';
import trousers6 from './clothes/6_trousers.png';
import trousers7 from './clothes/7_trousers.png';
import trousers8 from './clothes/8_trousers.png';
import trousers9 from './clothes/9_trousers.png';
import trousers10 from './clothes/10_trousers.png';
/*jeanses*/
import jeanses1 from './clothes/1_jeanses.png';
import jeanses2 from './clothes/2_jeanses.png';
import jeanses3 from './clothes/3_jeanses.png';
import jeanses4 from './clothes/4_jeanses.png';
import jeanses5 from './clothes/5_jeanses.png';
import jeanses6 from './clothes/6_jeanses.png';
import jeanses7 from './clothes/7_jeanses.png';
import jeanses8 from './clothes/8_jeanses.png';
import jeanses9 from './clothes/9_jeanses.png';
import jeanses10 from './clothes/10_jeanses.png';
/*shorts*/
import shorts1 from './clothes/1_shorts.png';
import shorts2 from './clothes/2_shorts.png';
import shorts3 from './clothes/3_shorts.png';
import shorts4 from './clothes/4_shorts.png';
import shorts5 from './clothes/5_shorts.png';
import shorts6 from './clothes/6_shorts.png';
import shorts7 from './clothes/7_shorts.png';
import shorts8 from './clothes/8_shorts.png';
import shorts9 from './clothes/9_shorts.png';
import shorts10 from './clothes/10_shorts.png';

/*modele*/
import model1 from './models/model1.jpg';
import model2 from './models/model2.jpg';
import model3 from './models/model5.jpg';
import model4 from './models/model8.jpg';
import model5 from './models/model12.jpg';
import model6 from './models/model9.jpg';
import model7 from './models/model10.jpg';
import model8 from './models/model11.jpg';

const sizes = ['XS','S','M','L','XL'];

const products = [
  // Kategoria: Cap
  {
    id: 1,
    name: "Urban Vibes Cap",
    description: "A snapback cap with a minimalist logo.",
    category: "cap",
    img: cap1,
    price: 29.99,
  },
  {
    id: 2,
    name: "Neon Glow Cap",
    description: "Bright neon cap, perfect for any street style.",
    category: "cap",
    img: cap2,
    price: 34.99,
  },
  {
    id: 3,
    name: "Camo Street Cap",
    description: "Camo design for a rugged, street-ready look.",
    category: "cap",
    img: cap3,
    price: 29.99,
  },
  {
    id: 4,
    name: "Blackout Flex Cap",
    description: "Sleek black cap with an embroidered logo.",
    category: "cap",
    img: cap4,
    price: 32.99,
  },
  {
    id: 5,
    name: "Street Kings Cap",
    description: "For the rulers of the street. Bold and stylish.",
    category: "cap",
    img: cap5,
    price: 35.99,
  },
  {
    id: 6,
    name: "Retro Snapback Cap",
    description: "Old school vibes with a modern twist.",
    category: "cap",
    img: cap6,
    price: 27.99,
  },
  {
    id: 7,
    name: "City Nights Cap",
    description: "Perfect for the night walkers and street lovers.",
    category: "cap",
    img: cap7,
    price: 31.99,
  },
  {
    id: 8,
    name: "Chill Mode Cap",
    description: "Casual and laid-back design for everyday wear.",
    category: "cap",
    img: cap8,
    price: 29.99,
  },
  {
    id: 9,
    name: "Tech Flex Cap",
    description: "Modern and tech-inspired design for a futuristic feel.",
    category: "cap",
    img: cap9,
    price: 33.99,
  },
  {
    id: 10,
    name: "Wild Style Cap",
    description: "For those who like to stand out.",
    category: "cap",
    img: cap10,
    price: 36.99,
  },

  // Kategoria: Jackets
  {
    id: 11,
    name: "Urban Drift Jacket",
    description: "Light jacket, perfect for layering.",
    category: "jackets",
    img: jackets1,
    price: 89.99,
  },
  {
    id: 12,
    name: "Heavy Duty Jacket",
    description: "Designed for the harshest weather conditions.",
    category: "jackets",
    img: jackets2,
    price: 99.99,
  },
  {
    id: 13,
    name: "Tech Street Jacket",
    description: "Futuristic, tech-inspired jacket for modern streetwear.",
    category: "jackets",
    img: jackets3,
    price: 105.99,
  },
  {
    id: 14,
    name: "Streetwear Bomber Jacket",
    description: "Classic bomber style with a street twist.",
    category: "jackets",
    img: jackets4,
    price: 109.99,
  },
  {
    id: 15,
    name: "Camouflage Utility Jacket",
    description: "Military-inspired design with plenty of pockets.",
    category: "jackets",
    img: jackets5,
    price: 112.99,
  },
  {
    id: 16,
    name: "Reflective Jacket",
    description: "Stay visible with this reflective, street-ready jacket.",
    category: "jackets",
    img: jackets6,
    price: 115.99,
  },
  {
    id: 17,
    name: "Storm Rider Jacket",
    description: "Windproof and waterproof, designed for rainy days.",
    category: "jackets",
    img: jackets7,
    price: 124.99,
  },
  {
    id: 18,
    name: "Minimalist Zip Jacket",
    description: "Sleek, minimalist design for every occasion.",
    category: "jackets",
    img: jackets8,
    price: 89.99,
  },
  {
    id: 19,
    name: "High Voltage Jacket",
    description: "Bold and electrifying designs for standout style.",
    category: "jackets",
    img: jackets9,
    price: 119.99,
  },
  {
    id: 20,
    name: "Night Rider Jacket",
    description: "For the night adventurer, with a reflective finish.",
    category: "jackets",
    img: jackets10,
    price: 128.99,
  },

  // Kategoria: Hoodies
  {
    id: 21,
    name: "Street King Hoodie",
    description: "A hoodie for those who rule the streets.",
    category: "hoodies",
    img: hoodies1,
    price: 79.99,
  },
  {
    id: 22,
    name: "Nightlife Hoodie",
    description: "Glow-in-the-dark graphics for the night owls.",
    category: "hoodies",
    img: hoodies2,
    price: 84.99,
  },
  {
    id: 23,
    name: "Rebel Soul Hoodie",
    description: "Embrace your rebellious side in this hoodie.",
    category: "hoodies",
    img: hoodies3,
    price: 74.99,
  },
  {
    id: 24,
    name: "City Lights Hoodie",
    description: "For the urban dreamers and night walkers.",
    category: "hoodies",
    img: hoodies4,
    price: 79.99,
  },
  {
    id: 25,
    name: "Tech Street Hoodie",
    description: "Futuristic design meets street style.",
    category: "hoodies",
    img: hoodies5,
    price: 89.99,
  },
  {
    id: 26,
    name: "Shattered Dreams Hoodie",
    description: "Artistic and distressed design, for the bold.",
    category: "hoodies",
    img: hoodies6,
    price: 84.99,
  },
  {
    id: 27,
    name: "Vibe Check Hoodie",
    description: "Street-inspired hoodie with a message.",
    category: "hoodies",
    img: hoodies7,
    price: 79.99,
  },
  {
    id: 28,
    name: "Retro Pulse Hoodie",
    description: "A blast from the past with a modern twist.",
    category: "hoodies",
    img: hoodies8,
    price: 74.99,
  },
  {
    id: 29,
    name: "Nocturnal Hoodie",
    description: "Dark and mysterious hoodie for the night lovers.",
    category: "hoodies",
    img: hoodies9,
    price: 79.99,
  },
  {
    id: 30,
    name: "Chillwave Hoodie",
    description: "Soft and comfortable, perfect for relaxed vibes.",
    category: "hoodies",
    img: hoodies10,
    price: 69.99,
  },

  // Kategoria: T-Shirts
  {
    id: 31,
    name: "Neon Street Tee",
    description: "Bright neon graphic tee for the bold.",
    category: "tshirts",
    img: tshirts1,
    price: 24.99,
  },
  {
    id: 32,
    name: "Bold Statement Tee",
    description: "A t-shirt that speaks for itself.",
    category: "tshirts",
    img: tshirts2,
    price: 19.99,
  },
  {
    id: 33,
    name: "Retro Vibe Tee",
    description: "Vintage-inspired design with a modern fit.",
    category: "tshirts",
    img: tshirts3,
    price: 22.99,
  },
  {
    id: 34,
    name: "Street Block Tee",
    description: "Streetwear inspired by blocks and grids.",
    category: "tshirts",
    img: tshirts4,
    price: 21.99,
  },
  {
    id: 35,
    name: "Rogue Wave Tee",
    description: "A rebellious design for the trendsetters.",
    category: "tshirts",
    img: tshirts5,
    price: 19.99,
  },
  {
    id: 36,
    name: "Minimal Print Tee",
    description: "Simple and clean design for daily wear.",
    category: "tshirts",
    img: tshirts6,
    price: 18.99,
  },
  {
    id: 37,
    name: "Vibe Shift Tee",
    description: "For the bold individuals who follow their vibe.",
    category: "tshirts",
    img: tshirts7,
    price: 20.99,
  },
  {
    id: 38,
    name: "Pixel Storm Tee",
    description: "Futuristic design with pixelated details.",
    category: "tshirts",
    img: tshirts8,
    price: 23.99,
  },
  {
    id: 39,
    name: "All-Over Print Tee",
    description: "Full print design for the adventurous soul.",
    category: "tshirts",
    img: tshirts9,
    price: 25.99,
  },
  {
    id: 40,
    name: "Signature Logo Tee",
    description: "Bold logo tee, a must-have for every collection.",
    category: "tshirts",
    img: tshirts10,
    price: 29.99,
  },

  // Kategoria: Trousers (10 produktów)
  {
    id: 41,
    name: "Street Pulse Trousers",
    description: "A relaxed fit with subtle detailing.",
    category: "trousers",
    img: trousers1,
    price: 59.99,
  },
  {
    id: 42,
    name: "TechFlex Trousers",
    description: "Sporty design with a futuristic touch.",
    category: "trousers",
    img: trousers2,
    price: 69.99,
  },
  {
    id: 43,
    name: "Urban Drip Trousers",
    description: "Loose fit and street-ready.",
    category: "trousers",
    img: trousers3,
    price: 65.99,
  },
  {
    id: 44,
    name: "Track Master Trousers",
    description: "Perfect for running, moving, and chilling.",
    category: "trousers",
    img: trousers4,
    price: 58.99,
  },
  {
    id: 45,
    name: "City Flow Trousers",
    description: "Perfect for the city wanderers and explorers.",
    category: "trousers",
    img: trousers5,
    price: 62.99,
  },
  {
    id: 46,
    name: "Loose Fit Trousers",
    description: "Comfortable fit for everyday wear.",
    category: "trousers",
    img: trousers6,
    price: 66.99,
  },
  {
    id: 47,
    name: "Chill Mode Trousers",
    description: "Relaxed design for laid-back vibes.",
    category: "trousers",
    img: trousers7,
    price: 59.99,
  },
  {
    id: 48,
    name: "Flex Pro Trousers",
    description: "Professional look with a casual feel.",
    category: "trousers",
    img: trousers8,
    price: 68.99,
  },
  {
    id: 49,
    name: "Speed Stride Trousers",
    description: "Designed for movement, perfect for active wear.",
    category: "trousers",
    img: trousers9,
    price: 72.99,
  },
  {
    id: 50,
    name: "Night Runner Trousers",
    description: "For those who run the streets after dark.",
    category: "trousers",
    img: trousers10,
    price: 75.99,
  },

  // Kategoria: Jeanses (10 produktów)
  {
    id: 51,
    name: "Street Fit Jeans",
    description: "Slim fit with a perfect street vibe.",
    category: "jeanses",
    img: jeanses1,
    price: 69.99,
  },
  {
    id: 52,
    name: "Rugged Denim Jeans",
    description: "Durable and rugged, made for tough wear.",
    category: "jeanses",
    img: jeanses2,
    price: 74.99,
  },
  {
    id: 53,
    name: "Classic Blue Jeans",
    description: "Timeless blue jeans for every occasion.",
    category: "jeanses",
    img: jeanses3,
    price: 69.99,
  },
  {
    id: 54,
    name: "Distressed Denim Jeans",
    description: "For a more casual, distressed look.",
    category: "jeanses",
    img: jeanses4,
    price: 72.99,
  },
  {
    id: 55,
    name: "Skinny Fit Jeans",
    description: "Perfect fit for a sleek, modern look.",
    category: "jeanses",
    img: jeanses5,
    price: 65.99,
  },
  {
    id: 56,
    name: "Loose Fit Jeans",
    description: "Comfortable, relaxed fit for casual days.",
    category: "jeanses",
    img: jeanses6,
    price: 68.99,
  },
  {
    id: 57,
    name: "Vintage Wash Jeans",
    description: "A retro vibe with a modern fit.",
    category: "jeanses",
    img: jeanses7,
    price: 74.99,
  },
  {
    id: 58,
    name: "Blackout Denim Jeans",
    description: "All black design for the bold.",
    category: "jeanses",
    img: jeanses8,
    price: 78.99,
  },
  {
    id: 59,
    name: "Wide Leg Jeans",
    description: "For a relaxed and free-flowing look.",
    category: "jeanses",
    img: jeanses9,
    price: 82.99,
  },
  {
    id: 60,
    name: "Slim Fit Ripped Jeans",
    description: "Ripped style for a street-ready appearance.",
    category: "jeanses",
    img: jeanses10,
    price: 85.99,
  },
    // Kategoria: Shorts (10 produktów)
    {
      id: 51,
      name: "Urban Vibes Shorts",
      description: "Loose fit, perfect for city life.",
      category: "shorts",
      img: shorts1,
      price: 49.99,
    },
    {
      id: 52,
      name: "City Heat Shorts",
      description: "Bold, graphic design for the summer heat.",
      category: "shorts",
      img: shorts2,
      price: 54.99,
    },
    {
      id: 53,
      name: "TechFlex Shorts",
      description: "Sporty design with a sleek finish.",
      category: "shorts",
      img: shorts3,
      price: 59.99,
    },
    {
      id: 54,
      name: "Chill Mode Shorts",
      description: "Perfect for a laid-back summer day.",
      category: "shorts",
      img: shorts4,
      price: 47.99,
    },
    {
      id: 55,
      name: "All Day Comfort Shorts",
      description: "Soft and comfortable for all-day wear.",
      category: "shorts",
      img: shorts5,
      price: 52.99,
    },
    {
      id: 56,
      name: "StreetFlow Shorts",
      description: "Perfect for everyday street style.",
      category: "shorts",
      img: shorts6,
      price: 50.99,
    },
    {
      id: 57,
      name: "Sunset Vibe Shorts",
      description: "Perfect for beach days and sunset views.",
      category: "shorts",
      img: shorts7,
      price: 55.99,
    },
    {
      id: 58,
      name: "Casual Wave Shorts",
      description: "Ideal for casual days and comfort.",
      category: "shorts",
      img: shorts8,
      price: 51.99,
    },
    {
      id: 59,
      name: "TechLuxe Shorts",
      description: "Luxury tech style for ultimate comfort.",
      category: "shorts",
      img: shorts9,
      price: 60.99,
    },
    {
      id: 60,
      name: "StreetLegend Shorts",
      description: "For the legends of the street.",
      category: "shorts",
      img: shorts10,
      price: 48.99,
    }
];

const productspl = [
  // Kategoria: Cap
  {
    id: 1,
    name: "Urban Vibes Cap",
    description: "Czapka snapback z minimalistycznym logo.",
    category: "cap",
    img: cap1,
    price: 29.99,
  },
  {
    id: 2,
    name: "Neon Glow Cap",
    description: "Jaskrawa czapka neonowa, idealna na uliczny styl.",
    category: "cap",
    img: cap2,
    price: 34.99,
  },
  {
    id: 3,
    name: "Camo Street Cap",
    description: "Czapka w kamuflażu na wytrzymały, uliczny look.",
    category: "cap",
    img: cap3,
    price: 29.99,
  },
  {
    id: 4,
    name: "Blackout Flex Cap",
    description: "Elegancka czarna czapka z haftowanym logo.",
    category: "cap",
    img: cap4,
    price: 32.99,
  },
  {
    id: 5,
    name: "Street Kings Cap",
    description: "Dla władców ulic. Odważna i stylowa.",
    category: "cap",
    img: cap5,
    price: 35.99,
  },
  {
    id: 6,
    name: "Retro Snapback Cap",
    description: "Oldschoolowe wibracje z nowoczesnym akcentem.",
    category: "cap",
    img: cap6,
    price: 27.99,
  },
  {
    id: 7,
    name: "City Nights Cap",
    description: "Idealna na nocne spacery po mieście.",
    category: "cap",
    img: cap7,
    price: 31.99,
  },
  {
    id: 8,
    name: "Chill Mode Cap",
    description: "Casualowy i relaksujący design na co dzień.",
    category: "cap",
    img: cap8,
    price: 29.99,
  },
  {
    id: 9,
    name: "Tech Flex Cap",
    description: "Nowoczesny design inspirowany technologią.",
    category: "cap",
    img: cap9,
    price: 33.99,
  },
  {
    id: 10,
    name: "Wild Style Cap",
    description: "Dla tych, którzy chcą wyróżniać się z tłumu.",
    category: "cap",
    img: cap10,
    price: 36.99,
  },

  // Kategoria: Jackets
  {
    id: 11,
    name: "Urban Drift Jacket",
    description: "Lekka kurtka, idealna do noszenia w warstwach.",
    category: "jackets",
    img: jackets1,
    price: 89.99,
  },
  {
    id: 12,
    name: "Heavy Duty Jacket",
    description: "Kurtka zaprojektowana na najcięższe warunki atmosferyczne.",
    category: "jackets",
    img: jackets2,
    price: 99.99,
  },
  {
    id: 13,
    name: "Tech Street Jacket",
    description: "Futurystyczna, inspirowana technologią kurtka do streetwearu.",
    category: "jackets",
    img: jackets3,
    price: 105.99,
  },
  {
    id: 14,
    name: "Streetwear Bomber Jacket",
    description: "Klasyczny bomber w ulicznym wydaniu.",
    category: "jackets",
    img: jackets4,
    price: 109.99,
  },
  {
    id: 15,
    name: "Camouflage Utility Jacket",
    description: "Kurtka inspirowana wojskiem z wieloma kieszeniami.",
    category: "jackets",
    img: jackets5,
    price: 112.99,
  },
  {
    id: 16,
    name: "Reflective Jacket",
    description: "Pozostań widoczny dzięki tej odblaskowej kurtce.",
    category: "jackets",
    img: jackets6,
    price: 115.99,
  },
  {
    id: 17,
    name: "Storm Rider Jacket",
    description: "Kurtka wiatro- i wodoodporna, stworzona na deszczowe dni.",
    category: "jackets",
    img: jackets7,
    price: 124.99,
  },
  {
    id: 18,
    name: "Minimalist Zip Jacket",
    description: "Elegancki, minimalistyczny design na każdą okazję.",
    category: "jackets",
    img: jackets8,
    price: 89.99,
  },
  {
    id: 19,
    name: "High Voltage Jacket",
    description: "Odważne i elektryzujące wzory, które przyciągają uwagę.",
    category: "jackets",
    img: jackets9,
    price: 119.99,
  },
  {
    id: 20,
    name: "Night Rider Jacket",
    description: "Dla nocnych wędrowców, z odblaskowym wykończeniem.",
    category: "jackets",
    img: jackets10,
    price: 128.99,
  },

  // Kategoria: Hoodies
  {
    id: 21,
    name: "Street King Hoodie",
    description: "Bluza dla tych, którzy rządzą ulicami.",
    category: "hoodies",
    img: hoodies1,
    price: 79.99,
  },
  {
    id: 22,
    name: "Nightlife Hoodie",
    description: "Grafika świecąca w ciemności dla nocnych marków.",
    category: "hoodies",
    img: hoodies2,
    price: 84.99,
  },
  {
    id: 23,
    name: "Rebel Soul Hoodie",
    description: "Bluza wyrażająca twój buntowniczy charakter.",
    category: "hoodies",
    img: hoodies3,
    price: 74.99,
  },
  {
    id: 24,
    name: "City Lights Hoodie",
    description: "Dla miejskich marzycieli i nocnych wędrowców.",
    category: "hoodies",
    img: hoodies4,
    price: 79.99,
  },
  {
    id: 25,
    name: "Tech Street Hoodie",
    description: "Futurystyczny design spotyka uliczny styl.",
    category: "hoodies",
    img: hoodies5,
    price: 89.99,
  },
  {
    id: 26,
    name: "Shattered Dreams Hoodie",
    description: "Artystyczny, zniszczony design dla odważnych.",
    category: "hoodies",
    img: hoodies6,
    price: 84.99,
  },
  {
    id: 27,
    name: "Vibe Check Hoodie",
    description: "Bluza inspirowana ulicznym stylem z przekazem.",
    category: "hoodies",
    img: hoodies7,
    price: 79.99,
  },
  {
    id: 28,
    name: "Retro Pulse Hoodie",
    description: "Powrót do przeszłości z nowoczesnym twistem.",
    category: "hoodies",
    img: hoodies8,
    price: 74.99,
  },
  {
    id: 29,
    name: "Nocturnal Hoodie",
    description: "Czarna, tajemnicza bluza dla miłośników nocy.",
    category: "hoodies",
    img: hoodies9,
    price: 79.99,
  },
  {
    id: 30,
    name: "Chillwave Hoodie",
    description: "Miękka i komfortowa, idealna na relaks.",
    category: "hoodies",
    img: hoodies10,
    price: 69.99,
  },

  // Kategoria: T-Shirts
  {
    id: 31,
    name: "Neon Street Tee",
    description: "Jaskrawa, neonowa koszulka dla odważnych.",
    category: "tshirts",
    img: tshirts1,
    price: 24.99,
  },
  {
    id: 32,
    name: "Bold Statement Tee",
    description: "Koszulka, która mówi za siebie.",
    category: "tshirts",
    img: tshirts2,
    price: 19.99,
  },
  {
    id: 33,
    name: "Retro Vibe Tee",
    description: "Design inspirowany latami 90., z nowoczesnym krojem.",
    category: "tshirts",
    img: tshirts3,
    price: 22.99,
  },
  {
    id: 34,
    name: "Street Block Tee",
    description: "Koszulka inspirowana ulicami i blokami.",
    category: "tshirts",
    img: tshirts4,
    price: 21.99,
  },
  {
    id: 35,
    name: "Rogue Wave Tee",
    description: "Buntowniczy design dla liderów trendów.",
    category: "tshirts",
    img: tshirts5,
    price: 19.99,
  },
  {
    id: 36,
    name: "Minimal Print Tee",
    description: "Prosty, czysty design na co dzień.",
    category: "tshirts",
    img: tshirts6,
    price: 18.99,
  },
  {
    id: 37,
    name: "Vibe Shift Tee",
    description: "Dla odważnych, którzy podążają za własnym vibe'em.",
    category: "tshirts",
    img: tshirts7,
    price: 20.99,
  },
  {
    id: 38,
    name: "Pixel Storm Tee",
    description: "Futurystyczny design z pikselowymi detalami.",
    category: "tshirts",
    img: tshirts8,
    price: 23.99,
  },
  {
    id: 39,
    name: "All-Over Print Tee",
    description: "Koszulka z nadrukiem na całej powierzchni dla odważnych.",
    category: "tshirts",
    img: tshirts9,
    price: 25.99,
  },
  {
    id: 40,
    name: "Signature Logo Tee",
    description: "Koszulka z odważnym logo, obowiązkowa w każdej kolekcji.",
    category: "tshirts",
    img: tshirts10,
    price: 29.99,
  },

  // Kategoria: Trousers (10 produktów)
  {
    id: 41,
    name: "Street Pulse Trousers",
    description: "Luźny krój z subtelnymi detalami.",
    category: "trousers",
    img: trousers1,
    price: 59.99,
  },
  {
    id: 42,
    name: "TechFlex Trousers",
    description: "Sportowy design z futurystycznym akcentem.",
    category: "trousers",
    img: trousers2,
    price: 69.99,
  },
  {
    id: 43,
    name: "Urban Drip Trousers",
    description: "Luźny fason, gotowe na uliczny styl.",
    category: "trousers",
    img: trousers3,
    price: 65.99,
  },
  {
    id: 44,
    name: "Track Master Trousers",
    description: "Idealne do biegania, ruchu i relaksu.",
    category: "trousers",
    img: trousers4,
    price: 58.99,
  },
  {
    id: 45,
    name: "City Flow Trousers",
    description: "Idealne dla miejskich wędrowców i odkrywców.",
    category: "trousers",
    img: trousers5,
    price: 62.99,
  },
  {
    id: 46,
    name: "Loose Fit Trousers",
    description: "Wygodny krój na co dzień.",
    category: "trousers",
    img: trousers6,
    price: 66.99,
  },
  {
    id: 47,
    name: "Chill Mode Trousers",
    description: "Relaksujący design na spokojne dni.",
    category: "trousers",
    img: trousers7,
    price: 59.99,
  },
  {
    id: 48,
    name: "Flex Pro Trousers",
    description: "Profesjonalny wygląd z casualowym komfortem.",
    category: "trousers",
    img: trousers8,
    price: 68.99,
  },
  {
    id: 49,
    name: "Speed Stride Trousers",
    description: "Stworzone do ruchu, idealne na aktywność fizyczną.",
    category: "trousers",
    img: trousers9,
    price: 72.99,
  },
  {
    id: 50,
    name: "Night Runner Trousers",
    description: "Dla tych, którzy biegają po ulicach po zmroku.",
    category: "trousers",
    img: trousers10,
    price: 75.99,
  },

  // Kategoria: Jeanses (10 produktów)
  {
    id: 51,
    name: "Street Fit Jeans",
    description: "Slim fit z idealnym, ulicznym vibe'em.",
    category: "jeanses",
    img: jeanses1,
    price: 69.99,
  },
  {
    id: 52,
    name: "Rugged Denim Jeans",
    description: "Wytrzymałe i solidne, stworzone do intensywnego użytkowania.",
    category: "jeanses",
    img: jeanses2,
    price: 74.99,
  },
  {
    id: 53,
    name: "Classic Blue Jeans",
    description: "Ponadczasowe niebieskie jeansy na każdą okazję.",
    category: "jeanses",
    img: jeanses3,
    price: 69.99,
  },
  {
    id: 54,
    name: "Distressed Denim Jeans",
    description: "Dla tych, którzy preferują luźniejszy, postrzępiony look.",
    category: "jeanses",
    img: jeanses4,
    price: 72.99,
  },
  {
    id: 55,
    name: "Skinny Fit Jeans",
    description: "Idealny krój dla nowoczesnego, szczupłego look'u.",
    category: "jeanses",
    img: jeanses5,
    price: 65.99,
  },
  {
    id: 56,
    name: "Loose Fit Jeans",
    description: "Wygodny, luźny krój na codzienne dni.",
    category: "jeanses",
    img: jeanses6,
    price: 68.99,
  },
  {
    id: 57,
    name: "Blackout Jeans",
    description: "Czarne jeansy dla minimalistów.",
    category: "jeanses",
    img: jeanses7,
    price: 70.99,
  },
  {
    id: 58,
    name: "Street Rider Jeans",
    description: "Idealne na ulice, stworzone do przemieszczania się.",
    category: "jeanses",
    img: jeanses8,
    price: 74.99,
  },
  {
    id: 59,
    name: "Vintage Fade Jeans",
    description: "Stary styl z delikatnym wyblakłym efektem.",
    category: "jeanses",
    img: jeanses9,
    price: 72.99,
  },
  {
    id: 60,
    name: "Casual Blue Jeans",
    description: "Wygodne, codzienne jeansy w klasycznym stylu.",
    category: "jeanses",
    img: jeanses10,
    price: 65.99,
  },
    // Kategoria: Shorts (10 produktów)
    {
      id: 61,
      name: "Urban Drift Shorts",
      description: "Krótka wersja miejskiego stylu. Wygodne i luźne.",
      category: "shorts",
      img: shorts1,
      price: 39.99,
    },
    {
      id: 62,
      name: "Tech Flex Shorts",
      description: "Sportowy wygląd z technologicznymi akcentami.",
      category: "shorts",
      img: shorts2,
      price: 44.99,
    },
    {
      id: 63,
      name: "Summer Breeze Shorts",
      description: "Idealne na gorące dni, lekkie i przewiewne.",
      category: "shorts",
      img: shorts3,
      price: 29.99,
    },
    {
      id: 64,
      name: "City Pulse Shorts",
      description: "Miejskie szorty, które podążają za rytmem miasta.",
      category: "shorts",
      img: shorts4,
      price: 36.99,
    },
    {
      id: 65,
      name: "Rebel Shorts",
      description: "Krótka wersja buntu na ulicy.",
      category: "shorts",
      img: shorts5,
      price: 42.99,
    },
    {
      id: 66,
      name: "Casual Fit Shorts",
      description: "Casualowy krój na codzienny luz.",
      category: "shorts",
      img: shorts6,
      price: 38.99,
    },
    {
      id: 67,
      name: "Reflective Shorts",
      description: "Bezpieczne, odblaskowe detale na wieczorne spacery.",
      category: "shorts",
      img: shorts7,
      price: 47.99,
    },
    {
      id: 68,
      name: "Sporty Flex Shorts",
      description: "Szorty stworzone z myślą o aktywności fizycznej.",
      category: "shorts",
      img: shorts8,
      price: 40.99,
    },
    {
      id: 69,
      name: "High Rise Shorts",
      description: "Szorty o wysokim stanie dla wygody i stylu.",
      category: "shorts",
      img: shorts9,
      price: 45.99,
    },
    {
      id: 70,
      name: "Vintage Wash Shorts",
      description: "Szorty w stylu retro z przetarciami.",
      category: "shorts",
      img: shorts10,
      price: 41.99,
    }
];



const productschief = [
  // Kategoria: Chief
  {
    id: 1,
    name: 'Chief Legacy Jacket',
    description: 'Limited edition Jacket with Chief Keef’s iconic street style.',
    category: 'chief',
    img: chief1,
    price: 499.99,
  },
  {
    id: 2,
    name: 'Urban Masterpiece Jacket',
    description: 'Exclusive jacket blending bold fashion with street culture.',
    category: 'chief',
    img: chief2,
    price: 599.99,
  },
  {
    id: 3,
    name: 'Chief Keef Summer Snapback',
    description: 'Limited edition snapback hat for a fresh summer look.',
    category: 'chief',
    img: chief3,
    price: 249.99,
  },
  {
    id: 4,
    name: 'Keef Streets Denim',
    description: 'Street-ready denim jeans with a bold, raw edge.',
    category: 'chief',
    img: chief4,
    price: 549.99,
  },
  {
    id: 5,
    name: 'Chief Rebel Denim',
    description: 'Durable jeans with a rebellious street style.',
    category: 'chief',
    img: chief5,
    price: 549.99,
  },
  {
    id: 6,
    name: 'Street King Denim',
    description: 'Classic denim with modern streetwear flair.',
    category: 'chief',
    img: chief6,
    price: 549.99,
  },
  {
    id: 7,
    name: 'Keef Streets Ripped Denim',
    description: 'Ripped denim for a rugged, urban vibe.',
    category: 'chief',
    img: chief7,
    price: 549.99,
  },
  {
    id: 8,
    name: 'Chief Keef Signature Denim',
    description: 'Exclusive jeans with Chief Keef’s signature street style.',
    category: 'chief',
    img: chief8,
    price: 549.99,
  }
];
const productschiefpl = [
  // Kategoria: Chief
  {
    id: 1,
    name: 'Chief Legacy Jacket',
    description: 'Limitowana edycja kurtki z ikonicznym stylem ulicznym Chief Keefa.',
    category: 'chief',
    img: chief1,
    price: 499.99,
  },
  {
    id: 2,
    name: 'Urban Masterpiece Jacket',
    description: 'Ekskluzywna kurtka łącząca odważną modę z kulturą uliczną.',
    category: 'chief',
    img: chief2,
    price: 599.99,
  },
  {
    id: 3,
    name: 'Chief Keef Summer Snapback',
    description: 'Limitowana edycja koszuli snapback na świeży letni look.',
    category: 'chief',
    img: chief3,
    price: 249.99,
  },
  {
    id: 4,
    name: 'Keef Streets Denim',
    description: 'Koszula gotowa na ulice z wyrazistym, surowym stylem.',
    category: 'chief',
    img: chief4,
    price: 549.99,
  },
  {
    id: 5,
    name: 'Chief Rebel Denim',
    description: 'Trwała koszula z buntowniczym stylem ulicznym.',
    category: 'chief',
    img: chief5,
    price: 549.99,
  },
  {
    id: 6,
    name: 'Street King Denim',
    description: 'Klasyczna koszula z nowoczesnym stylem streetwear.',
    category: 'chief',
    img: chief6,
    price: 549.99,
  },
  {
    id: 7,
    name: 'Keef Streets Ripped Denim',
    description: 'Podarta koszula dla surowego, miejskiego klimatu.',
    category: 'chief',
    img: chief7,
    price: 549.99,
  },
  {
    id: 8,
    name: 'Chief Keef Signature Denim',
    description: 'Ekskluzywna koszula z podpisem stylu Chief Keefa.',
    category: 'chief',
    img: chief8,
    price: 549.99,
  }
];



const RegisterPanelen = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const data = new Date();

  const handleRegister = async () => {
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      await set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
      });

      setRegistered(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="chief-keef-page">
        <div className="collection-header">
          <img src={dope} alt="logo" className="logostrony" />
          <p className="czas">
            {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
            {data.getHours()}:{data.getMinutes()}
          </p>
        </div>

        <div className="login-panel">
          <p className='panel-tekst'>Registration</p>
          {error && <p className='panel-error-logged' style={{ color: 'red' }}>{error}</p>}
          {registered ? (
            <p className='panel-error-logged' style={{ color: 'green' }}>Rejestracja zakończona sukcesem!</p>
          ) : (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                            className='panel-email-password'
                onChange={(e) => setUsername(e.target.value)}
              />               <br />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                            className='panel-email-password'
                onChange={(e) => setEmail(e.target.value)}

              />               <br />
              <input
                type="password"
                placeholder="Password"
                value={haslo}
                            className='panel-email-password'
                onChange={(e) => setHaslo(e.target.value)}

              />               <br />
              <button className='panel-button' onClick={handleRegister} style={{ padding: '10px 20px' }}>Register</button><br />
            </>
          )}
            <Link to="/en/login">
            <button className='panel-button'>Login</button>
            </Link>
        </div>


        <div className="collection-menu">
          <Link to="/en/collection" className="collection-menu-item active">COLLECTION</Link>
          <div className="dropdown-container">
            <button className="collection-menu-item">
              <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
            </button>
            <ul className="dropdown">
              <li>
                <Link to="/pl/register">
                  <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
                </Link>
              </li>
            </ul>
          </div>
          <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
          <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
          <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
        </div>
      </div>
      <p className="collection-menu-copyrights">
          Dopemagazine {data.getFullYear()}®
        </p>
        <Link to="/en/privacypolicy">
          <p className="collection-menu-privacypolicy">PRIVACY POLICY</p>
        </Link>
    </>
  );
};

const RegisterPanelpl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const data = new Date();

  const handleRegister = async () => {
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      await set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
      });

      setRegistered(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="chief-keef-page">
        <div className="collection-header">
          <img src={dope} alt="logo" className="logostrony" />
          <p className="czas">
            {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
            {data.getHours()}:{data.getMinutes()}
          </p>
        </div>

        <div className="login-panel">
          <p className='panel-tekst'>Registration</p>
          {error && <p className='panel-error-logged' style={{ color: 'red' }}>{error}</p>}
          {registered ? (
            <p className='panel-error-logged' style={{ color: 'green' }}>Rejestracja zakończona sukcesem!</p>
          ) : (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                            className='panel-email-password'
                onChange={(e) => setUsername(e.target.value)}
              />               <br />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                            className='panel-email-password'
                onChange={(e) => setEmail(e.target.value)}

              />               <br />
              <input
                type="password"
                placeholder="Password"
                value={haslo}
                            className='panel-email-password'
                onChange={(e) => setHaslo(e.target.value)}

              />               <br />
              <button className='panel-button' onClick={handleRegister} style={{ padding: '10px 20px' }}>Register</button><br />

            </>
          )}
             <Link to="/pl/login">
            <button className='panel-button'>Login</button>
            </Link>
        </div>

        <div className="collection-menu">
        <Link to="/pl/collection" className="collection-menu-item active">KOLEKCJA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/register">
        <img src={usaflag} alt="Usa flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
  </div>
          <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
        </div>
      </div>
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </>
  );
};

const Loginen = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };

  return (
    <>

      <div className="chief-keef-page">
        <div className="collection-header">
          <img src={dope} alt="logo" className="logostrony" />
          <p className="czas">
            {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
            {data.getHours()}:{data.getMinutes()}
          </p>
          <div className="login-panel">
        {error && <p className='panel-error-logged' style={{ color: 'red' }}>{error}</p>}
        {logged ? (
          <p className='panel-error-logged' style={{ color: 'green' }}>logged in successfully</p>
        ) : (
          <>
                  <p className='panel-tekst'>Login Panel</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className='panel-email-password'
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <input
              type="password"
              placeholder="Hasło"
              value={haslo}
              className='panel-email-password'
              onChange={(e) => setHaslo(e.target.value)}
            /><br/>
            <button className='panel-button' onClick={handleLogin}>Login In</button><br />
            <Link to="/en/register">
            <button className='panel-button'>Register</button><br />
            </Link>
            <button className='panel-button' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Logaut
          </button>
          </>
        )}
            <br/><Link to="/">
            <button className='panel-button'>MAIN SITE</button>
            </Link>
      </div>
          <div className="collection-menu">
            <Link to="/en/collection" className="collection-menu-item active">COLLECTION</Link>
            <div className="dropdown-container">
              <button className="collection-menu-item">
                <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
              </button>
              <ul className="dropdown">
                <li>
                  <Link to="/pl/login">
                    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
                  </Link>
                </li>
              </ul>
            </div>
            <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        {username && (
          <>
        <span className='collection-menu-welcome'>Witaj, </span> <span className='collection-menu-welcome-active'>{username}</span>
        </>
      )}
        <p className="collection-menu-copyrights">
          Dopemagazine {data.getFullYear()}®
        </p>
        <Link to="/en/privacypolicy">
          <p className="collection-menu-privacypolicy">PRIVACY POLICY</p>
        </Link>
      </div>
    </>
  );
};
const Loginpl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };

  return (
    <>

      <div className="chief-keef-page">
        <div className="collection-header">
          <img src={dope} alt="logo" className="logostrony" />
          <p className="czas">
            {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
            {data.getHours()}:{data.getMinutes()}
          </p>
          <div className="login-panel">

        {error && <p className='panel-error-logged' style={{ color: 'red' }}>{error}</p>}
        {logged ? (
          <p className='panel-error-logged' style={{ color: 'green' }}>Zalogowano pomyślnie</p>

        ) : (
          <>
                  <p className='panel-tekst'>Panel Logowania</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className='panel-email-password'
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <input
              type="password"
              placeholder="Hasło"
              value={haslo}
              className='panel-email-password'
              onChange={(e) => setHaslo(e.target.value)}
            /><br/>
            <button className='panel-button' onClick={handleLogin}>Zaloguj się</button><br />
            <Link to="/en/register">
            <button className='panel-button'>Rejestracja</button><br />
        </Link>
        <button className='panel-button' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Wyloguj
          </button>
          </>
        )}
                    <br/><Link to="/pl">
            <button className='panel-button'>Strona główna</button>
            </Link>
      </div>
      <div className="collection-menu">
            <Link to="/pl/collection" className="collection-menu-item active">KOLEKCJA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/login">
        <img src={usaflag} alt="Usa flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
            <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        {username && (
          <>
        <span className='collection-menu-welcome'>Witaj, </span> <span className='collection-menu-welcome-active'>{username}</span>
        </>
      )}
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
  </div>
    </>
  );
};

const Mainsiteen = () => {

  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
  
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
              <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
            </div>
          </div>
          {username ? (
        <>
                <span className='collection-menu-welcome'>Welcome, </span> <span className='collection-menu-welcome-active'>{username}</span> 
        <button className='panel-button-logout' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Logout
          </button>     
        </>
      ) : (
        <>
          <Link to="/en/login"><p className='collection-menu-login'>LOGIN IN</p></Link>
        </>
      )}
          <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
          <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
    </div>
  );
};

const Mainsitepl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };

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
      <span className='announcement-bar-text'>nowość • </span><span id="limited"><Link to="/pl/dopemagazinexchiefkeef" className="collab-link">limitowana edycja</Link></span><span className='announcement-bar-text'> • nowa kolaboracja juz w sprzedaży</span>
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        {username ? (
        <>
                <span className='collection-menu-welcome'>Witaj, </span> <span className='collection-menu-welcome-active'>{username}</span>
        <button className='panel-button-logout' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Wyloguj
          </button>  
        </>
      ) : (
        <>
          <Link to="/pl/login"><p className='collection-menu-login'>Zaloguj Się</p></Link>
        </>
      )}
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
  </div>
);
};
const Privacypolicyen = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };

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
          <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
        </div>
      </div>
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
      <Link to="/en/collection"><p className='collection-menu-privacypolicy'>BACK TO COLLECTION</p></Link>
  </div>
  );
};

const Privacypolicypl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };

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
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
      <Link to="/pl/collection"><p className='collection-menu-privacypolicy'>POWRÓT DO KOLEKCJI</p></Link>
  </div>
  );
};
const Contactusen = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const data = new Date();

  const handleSubmit = async () => {
      if (title.trim() === '') {
        alert('Title cannot be empty');
        return;
      }
      if (description.trim() === '') {
        alert('Description cannot be empty');
        return;
      }
    try {
      const db = getDatabase();
      const newPostRef = push(ref(db, 'posts'));
      await set(newPostRef, {
        username,
        title,
        description,
        
      });
      alert("Sent!");
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
  

  
      return (
        <div className="chief-keef-page">
          <div className="collection-header">
                    <img src={dope} alt='logo' className='logostrony'></img>
          <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>

          {username ? (
        <>
<p className='collection-menu-item'>Title</p><textarea className="contactus-title" maxlength="200" placeholder="..." onChange={(e) => setTitle(e.target.value)}name='Title' rows="2" cols="100"required></textarea><br />
<p className='collection-menu-item'>Description</p><textarea className="contactus-title" maxlength="200" placeholder="..." onChange={(e) => setDescription(e.target.value)} name='Description' rows="10" cols="100" required></textarea>
<br /><button onClick={handleSubmit} className='panel-button'>Send</button><br />
        </>
      ) : (
        <>
          <p className='panel-tekst'>To be able to contact us please log in</p>
          <Link to="/en/login">
            <button className='panel-button'>Login</button><br />
          </Link>
        </>
      )}






            <div className="collection-menu">
              <Link to="/en/collection" className="collection-menu-item active">COLLECTION</Link>
              <div className="dropdown-container">
    <button className="collection-menu-item">
      <img src={usaflag} alt="USA flag" className="flag-icon" /> EN <span className="dropdown-arrow">▼</span>
    </button>
    <ul className="dropdown">
      <li>
        <Link to="/pl/contactus">
          <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
        </Link>
        </li>
    </ul>
  </div>
  <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
              <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
              <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
            </div>
          </div>
                {username ? (
        <>
                <span className='collection-menu-welcome'>Welcome, </span> <span className='collection-menu-welcome-active'>{username}</span>
        <button className='panel-button-logout' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Logout
          </button>      
        </>
      ) : (
        <>
        </>
      )}
          <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
          <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
    </div>
  );
};
const Contactuspl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const data = new Date();

  const handleSubmit = async () => {
    if (title.trim() === '') {
      alert('Pole tytułu nie może być puste!');
      return;
    }
    if (description.trim() === '') {
      alert('Pole opisu nie może być puste!');
      return;
    }
    try {
      const db = getDatabase();
      const newPostRef = push(ref(db, 'posts'));
      await set(newPostRef, {
        username,
        title,
        description,
        
      });
      alert("Wysłane!");
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
  

  
      return (
        <div className="chief-keef-page">
          <div className="collection-header">
                    <img src={dope} alt='logo' className='logostrony'></img>
          <p className='czas'>{data.getFullYear()}/{data.getMonth()+1}/{data.getDate()}&nbsp;&nbsp;{data.getHours()}/{data.getMinutes()}</p>

          {username ? (
        <>
<p className='collection-menu-item'>Tytuł</p><textarea className="contactus-title" maxlength="200" placeholder="..." onChange={(e) => setTitle(e.target.value)}name='Title' rows="2" cols="100" required></textarea><br />
<p className='collection-menu-item'>Opis</p><textarea className="contactus-title" maxlength="200" placeholder="..." onChange={(e) => setDescription(e.target.value)} name='Description' rows="10" cols="100" required></textarea>
<br /><button onClick={handleSubmit} className='panel-button'>Wyślij</button><br />
        </>
      ) : (
        <>
          <p className='panel-tekst'>Aby się z nami skontaktować proszę się najpierw zalogować</p>
          <Link to="/en/login">
            <button className='panel-button'>Zaloguj się</button><br />
          </Link>
        </>
      )}






<div className="collection-menu">
            <Link to="/pl" className="collection-menu-item active">GŁÓWNA STRONA</Link>
            <div className="dropdown-container">
  <button className="collection-menu-item">
    <img src={plflag} alt="Poland flag" className="flag-icon" /> PL <span className="dropdown-arrow">▼</span>
  </button>
  <ul className="dropdown">
    <li>
      <Link to="/en/contactus">
        <img src={usaflag} alt="Usa flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
            <span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">KOLEKCJA CHIEF KEEF</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        {username ? (
        <>
        <span className='collection-menu-welcome'>Witaj, </span> <span className='collection-menu-welcome-active'>{username}</span>
        <button className='panel-button-logout' onClick={() => {
            Cookies.remove('username');
            setUsername(null);
            Cookies.remove('email');
            setEmail(null);
            Cookies.remove('haslo');
            setHaslo(null);
            setLogged(false);
          }}>
            Wyloguj się
          </button>      
        </>
      ) : (
        <>
        </>
      )}
      <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
      <Link to="/pl/collection"><p className='collection-menu-privacypolicy'>POWRÓT DO KOLEKCJI</p></Link>
  </div>
  );
};


const ChiefKeefCollection = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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

       <div className="productschief">
       <div className="products-grid">
        {productschief.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
      <Link to="/pl/dopemagazinexchiefkeef">
        <img src={plflag} alt="Poland flag" className="flag-icon" /> PL
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/en/buycart" className="collection-menu-item">BUY CART</Link>
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
      
    </div>
  );
};
const ChiefKeefCollectionpl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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

        <div className="productschief">
       <div className="products-grid">
        {productschiefpl.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
      <Link to="/dopemagazinexchiefkeef">
        <img src={usaflag} alt="USA flag" className="flag-icon" /> EN
      </Link>
      </li>
  </ul>
</div>
<span className="menu-separator">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};



const Collectionen = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button>
            
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
      
    </div>
  );
};

const Collectionpl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };
  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {productspl.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};

const Koszykpl = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const cartRef = ref(database, `carts/${user.uid}`);
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.entries(data).map(([key, val]) => ({
          id: key,
          ...val,
        }));
        setCartItems(items);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const removeItem = async (id) => {
    const user = auth.currentUser;
    if (!user) return;

    await remove(ref(database, `carts/${user.uid}/${id}`));
  };

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
        <img src={dope} alt='logo' className='logostrony' />
        <p className='czas'>
          {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
          {data.getHours()}/{data.getMinutes()}
        </p>
  
        <div>
          {cartItems.length === 0 ? (
            <p className='collection-menu-item-buycart'>Twój koszyk jest pusty</p>
          ) : (
            <>
              {!username ? (
                <>
                  <p className='panel-tekst'>Aby posiadać koszyk musisz być zalogowany</p>
                  <Link to="/en/login">
                    <button className='panel-button'>Zaloguj</button><br />
                  </Link>
                </>
              ) : (
                <>
                  <span className='collection-menu-item-buycart'>Koszyk Użytkownika:</span>
                  <span className='collection-menu-item-buycart2'>{username}</span>
                  <div className="cart-items-container">
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-item">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="cart-thumbnail" 
                        />
                        <div>
                          <p className='collection-menu-item-buycart3'>{item.name}</p>
                          <p className='collection-menu-item-buycart'>ROZMIAR: {item.size}</p>
                          <p className='collection-menu-item-buycart'>CENA: {item.price} PLN</p>
                          <button className='delete-button' onClick={() => removeItem(item.id)}>USUŃ</button>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
  
  
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Koszyken = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const cartRef = ref(database, `carts/${user.uid}`);
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.entries(data).map(([key, val]) => ({
          id: key,
          ...val,
        }));
        setCartItems(items);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const removeItem = async (id) => {
    const user = auth.currentUser;
    if (!user) return;

    await remove(ref(database, `carts/${user.uid}/${id}`));
  };

  const data = new Date();

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
        <img src={dope} alt='logo' className='logostrony' />
        <p className='czas'>
          {data.getFullYear()}/{data.getMonth() + 1}/{data.getDate()}&nbsp;&nbsp;
          {data.getHours()}/{data.getMinutes()}
        </p>
  
        <div>
          {cartItems.length === 0 ? (
            <p className='collection-menu-item-buycart'>Your buycart is empty.</p>
          ) : (
            <>
              {!username ? (
                <>
                  <p className='panel-tekst'>To have your buycart u must be logged</p>
                  <Link to="/en/login">
                    <button className='panel-button'>Login</button><br />
                  </Link>
                </>
              ) : (
                <>
                  <span className='collection-menu-item-buycart'>Buycart user:</span>
                  <span className='collection-menu-item-buycart2'>{username}</span>
                  <div className="cart-items-container">
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-item">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="cart-thumbnail" 
                        />
                        <div>
                          <p className='collection-menu-item-buycart3'>{item.name}</p>
                          <p className='collection-menu-item-buycart'>SIZE: {item.size}</p>
                          <p className='collection-menu-item-buycart'>PRICE: {item.price} PLN</p>
                          <button className='delete-button' onClick={() => removeItem(item.id)}>DELETE</button>
                          <p>&nbsp;</p>
                        </div>
                        
                      </div>
                      
                    ))}
<div className="checkout-section">
  <p className="collection-menu-item-buycart4">Total: {totalPrice.toFixed(2)} PLN</p><br />
  <button className="panel-button-checkout" onClick={() => navigate('/checkout')}>
    GO TO CHECKOUT
  </button>
</div>
                  </div>
                </>
              )}
            </>
      
          )}
        </div>
  
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
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
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'cap').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenjackets = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'jackets').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenhoodies = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'hoodies').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionentshirts = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'tshirts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionentrousers = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'trousers').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenjeanses = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'jeanses').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};
const Collectionenshorts = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('U must be logged in.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Choose a size before u add to cart.');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Product addded to cart');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/en/collection/shorts"><p className='collection-categories2'>shorts</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
        {products.filter(product => product.category === 'shorts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">CHOOSE SIZE</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
  ADD TO CART
</button></div>
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
            <Link to="/en/contactus" className="collection-menu-item">CONTACT US</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/en/privacypolicy"><p className='collection-menu-privacypolicy'>PRIVACY POLICY</p></Link>
  
    </div>
  );
};

/*pl*/
const Collectionplcaps = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'cap').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpljackets = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'jackets').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionplhoodies = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'hoodies').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpltshirts = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'tshirts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpltrousers = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'trousers').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionpljeanses = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'jeanses').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
          </div>
        </div>
        <p className='collection-menu-copyrights'>Dopemagazine {data.getFullYear()}®</p>
        <Link to="/pl/privacypolicy"><p className='collection-menu-privacypolicy'>PRYWATNOŚĆ I POLITYKA</p></Link>
      
    </div>
  );
};
const Collectionplshorts = () => {
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  const data = new Date();
  
  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) {
      alert('Musisz byc zalogowany.');
      return;
    }
  
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert('Wybierz rozmiar przed dodaniem do koszyka');
      return;
    }
  
    const cartRef = ref(database, `carts/${user.uid}`);
await push(cartRef, {
  name: product.name,
  price: product.price,
  size: selectedSize,
  productId: product.id,
  image: product.img, // ← dodaj to pole
});

  
    alert('Produkt dodany do koszyka');
  };

  // Pobierz username z cookies jeśli istnieje
  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, haslo);
      const user = userCredential.user;

      // Pobierz username z bazy danych
      const snapshot = await get(ref(database, 'users/' + user.uid));
      const userData = snapshot.val();

      if (userData && userData.username) {
        Cookies.set('username', userData.username, { expires: 7 });
        setUsername(userData.username);
      }
    } catch (err) {
      console.error(err);
      setError('Nieprawidłowy email lub hasło');
    }
    try {
      await signInWithEmailAndPassword(auth, email, haslo);
      console.log("Zalogowano pomyślnie!");
      setLogged(true);
      setError(null);
    } catch (err) {
      console.error("Błąd logowania:", err.message);
      setError("Incorrect email or password");
    }
  };
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
       <Link to="/pl/collection/shorts"><p className='collection-categories2'>szorty</p></Link>
       </div>
       <div className="products">
       <div className="products-grid">
       {productspl.filter(product => product.category === 'shorts').map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder"><img id="chiefkeefclothes" src={product.img}></img></div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}pln</p>
            
            {/* Selektor rozmiaru */}
            <div className="size-selector">
  <select
    id={`size-${product.id}`}
    value={selectedSizes[product.id] || ''}
    onChange={(e) => handleSizeChange(product.id, e.target.value)}
  >
    <option value="">Wybierz rozmiar</option>
    {sizes.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
</div>

<button onClick={() => addToCart(product)} className="add-to-cart">
 Dodaj do koszyka
</button>
            
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
            <Link to="/pl/dopemagazinexchiefkeef" className="collection-menu-item active">CHIEF KEEF X DOPEMAGAZINE</Link>
            <Link to="/pl/buycart" className="collection-menu-item">KOSZYK</Link>
            <Link to="/pl/contactus" className="collection-menu-item">KONTAKT DO NAS</Link>
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
      <Route path="/en/login" element={<Loginen />} />
      <Route path="/pl/login" element={<Loginpl />} />
      <Route path="/en/register" element={<RegisterPanelen />} />
      <Route path="/pl/register" element={<RegisterPanelpl />} />
      <Route path="/en/contactus" element={<Contactusen />} />
      <Route path="/pl/contactus" element={<Contactuspl />} />
        <Route path="/dopemagazinexchiefkeef" element={<ChiefKeefCollection />} />
        <Route path="/pl/dopemagazinexchiefkeef" element={<ChiefKeefCollectionpl />} />
        <Route path="/en/collection" element={<Collectionen />} />
        <Route path="/pl/collection" element={<Collectionpl />} />
        <Route path="/en/buycart" element={<Koszyken />} />
        <Route path="/pl/buycart" element={<Koszykpl />} />
        /*kategoryczny shit*/
        <Route path="/en/collection/capsbeanies" element={<Collectionencaps />} />
        <Route path="/en/collection/hoodies" element={<Collectionenhoodies />} />
        <Route path="/en/collection/jackets" element={<Collectionenjackets />} />
        <Route path="/en/collection/jeanses" element={<Collectionenjeanses />} />
        <Route path="/en/collection/shorts" element={<Collectionenshorts />} />
        <Route path="/en/collection/trousers" element={<Collectionentrousers />} />
        <Route path="/en/collection/tshirts" element={<Collectionentshirts />} />
        
        <Route path="/pl/collection/capsbeanies" element={<Collectionplcaps />} />
        <Route path="/pl/collection/hoodies" element={<Collectionplhoodies />} />
        <Route path="/pl/collection/jackets" element={<Collectionpljackets />} />
        <Route path="/pl/collection/jeanses" element={<Collectionpljeanses />} />
        <Route path="/pl/collection/shorts" element={<Collectionplshorts />} />
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