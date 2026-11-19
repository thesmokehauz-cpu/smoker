import hookahDetail from '../assets/images/1.png';
import coalsBowl from '../assets/images/4.png';
import hookahRed from '../assets/images/3.png';
import torchLight from '../assets/images/2.png';
import streetSign from '../assets/images/street-sign.png';
import lounge from '../assets/images/4.png';
import logo from '../assets/images/logo.png';

// ---------- EDIT YOUR BUSINESS DETAILS HERE ----------
export const business = {
  name: 'The Smoke Hauz',
  tagline: 'Sheesha Lounge',
  address: '83 Haldon Street, Lakemba NSW 2195',
  phoneDisplay: '+61 415 694 109',
  phoneTel: '+61415694109',
  whatsapp: '61415694109', // country code + number, no + or spaces
  hours: 'Opening hours: please message us on WhatsApp to confirm today\u2019s time.', // TODO: replace with real hours
  mapQuery: '83 Haldon Street, Lakemba NSW 2195',
  instagram: '#', // TODO: add your Instagram link
};

export const images = { hookahDetail, coalsBowl, hookahRed, torchLight, streetSign, lounge, logo };

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/menu', label: 'Sheesha & Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Visit Us' },
];

// ============================================================
//  SHEESHA COLLECTION  (single source of truth for the menu)
//  Change a price or flavour here and every page updates.
// ============================================================
export const collections = [
  {
    id: 'classic',
    name: 'Classic Collection',
    price: 35,
    tagline: 'Simple. Smooth. Timeless.',
    tone: '#7fc6b4',
    flavours: [
      'Mint',
      'Grape',
      'Watermelon',
      'Melon',
      'Rose',
      'Mint with Cream',
      'Gum',
      'Kiwi',
      'Two Apples',
      'Blueberry with Mint',
      'Orange with Mint',
      'Lemon with Mint',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Collection',
    price: 45,
    tagline: 'Richer taste. Longer lasting.',
    tone: '#e0a52c',
    flavours: [
      'Orange Pineapple',
      'Passion Fruit',
      'Berlin Nights',
      'Sheik Money',
      'Mango Orange',
      'Lady Killer',
      'Love 66',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 50,
    tagline: 'Our house specials.',
    tone: '#b3263a',
    perk: 'Includes free can of Coke',
    flavours: ['Exotica Banarasi Paan', 'Commissioner'],
  },
];

// ============================================================
//  CAFE MENU
//  price: number  -> shown as $N
//  price: null    -> shown as "Soon"
//  note: small text shown next to the item name
// ============================================================
export const cafeMenu = [
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Authentic Hyderabadi Chai', price: 5 },
      { name: 'Masala Coke', price: 5 },
      { name: 'Cold Coffee', note: 'with ice cream', price: 9 },
      { name: 'Chocolate Milkshake', price: 10 },
      { name: 'Oreo Milkshake', price: 10 },
      { name: 'Mojitos', price: null },
    ],
  },
  {
    id: 'bites',
    title: 'Bites',
    items: [
      { name: 'Fries', price: 6 },
      { name: 'Egg Puffs', price: 5 },
      { name: 'Chicken Puffs', price: 5 },
      { name: 'Garlic Bread', price: 7 },
      { name: 'Fajita Sandwich', price: 9 },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Midnight Brownie', price: 15 },
      { name: 'Melt & Indulge Matilda Cake', price: 15 },
    ],
  },
];

// Used by the Home page "Experiences" cards and the Contact form dropdown.
export const packages = [
  { id: 'classic', name: 'Classic Collection', price: '$35', note: 'Simple, smooth and timeless. Twelve easy favourites like Mint, Grape and Watermelon.', who: '12 flavours to choose from', img: hookahRed },
  { id: 'premium', name: 'Premium Collection', price: '$45', note: 'Richer taste and a longer lasting session. Try Berlin Nights or Passion Fruit.', who: '7 flavours to choose from', img: hookahDetail },
  { id: 'signature', name: 'Signature', price: '$50', note: 'Exotica Banarasi Paan or Commissioner, served with a free can of Coke.', who: 'Includes free can of Coke', img: lounge },
  { id: 'private', name: 'Private Booking', price: null, note: 'Reserve the lounge for birthdays, farewells and family nights.', who: 'Ask us for a quote', img: torchLight },
];

// SAMPLE TEXT ONLY: replace with real customer reviews before going live.
export const reviews = [
  { name: 'Guest review', text: 'Comfortable majlis seating, a clean hookah and staff who actually check on your coals. A proper lounge.', rating: 5 },
  { name: 'Guest review', text: 'We booked a table for a family night. Easy to arrange on WhatsApp and the table was ready on time.', rating: 5 },
  { name: 'Guest review', text: 'The lighting and the copper details make it feel like a different city. The mint blend was perfect.', rating: 5 },
];
