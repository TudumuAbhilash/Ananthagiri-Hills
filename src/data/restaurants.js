export const FOOD_CATEGORIES = [
  { id: 'all', label: 'All Restaurants (8)' },
  { id: 'Hilltop Delivery', label: 'Delivers to Ananthagiri Hills' },
  { id: 'Vikarabad Town Dining', label: 'Vikarabad Family Restaurants' },
  { id: 'Hilltop Dine-In & Stalls', label: 'On the Hilltop' }
];

export const restaurants = [
  {
    id: 'homepot-cloud-kitchen',
    name: 'Home Pot Cloud Kitchen',
    category: 'Hilltop Delivery',
    tags: ['Hilltop Delivery', 'Homely Meals', 'Direct Online Ordering'],
    cuisine: 'Homely North & South Indian Meals, Comfort Food & Combos',
    dietaryType: 'Veg & Non-Veg Homely Options (Check live menu on website)',
    deliversToAnanthagiri: true,
    deliveryNote:
      'Specializes in direct food delivery from Vikarabad up to Ananthagiri Hills resorts, guesthouses, and viewpoints.',
    priceRange: 'Moderate (See live menu on website)',
    openingHours: 'Check website for active lunch & dinner delivery slots',
    locationText: 'Vikarabad Cloud Kitchen (Direct Delivery to Ananthagiri Hills)',
    coordinates: {
      lat: 17.3381,
      lng: 77.9048
    },
    phone: null,
    websiteUrl: 'https://www.homepot.in/',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: [
      'Direct Web Ordering',
      'Delivers to Ananthagiri Hills',
      'Fresh Homely Preparation',
      'Family & Group Meal Packs'
    ],
    description:
      'Home Pot ("Ghar Jaisa Swaad, Har Bite Mein Pyaar") is a dedicated Vikarabad cloud kitchen that delivers freshly cooked, home-style meals directly to visitors and resort guests in Ananthagiri Hills.',
    lastVerified: '2026-10-14',
    verificationNote: 'Official ordering portal verified. Confirm your hilltop drop point when ordering.'
  },
  {
    id: 'ananthagiri-ruchulu',
    name: 'Ananthagiri Ruchulu Multicuisine Family Restaurant',
    category: 'Vikarabad Town Dining',
    tags: ['Vikarabad Town Dining', 'Hilltop Delivery', 'Family Dining'],
    cuisine: 'Telangana Regional, North Indian, Biryani, Chinese & Tandoori',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: true,
    deliveryNote:
      'Offers town food delivery and bulk takeaway parcels for groups heading up to Ananthagiri Hills.',
    priceRange: 'Moderate',
    openingHours: '11:00 AM – 10:30 PM (Confirm holiday hours locally)',
    locationText: 'Vikarabad Town, Telangana 501101 (~6 km from Ananthagiri Hills)',
    coordinates: {
      lat: 17.3372,
      lng: 77.9055
    },
    phone: null,
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: [
      'Family AC Dining',
      'Takeaway Parcels for Hill Trips',
      'Local Delivery Available',
      'Group Seating'
    ],
    description:
      'One of Vikarabad’s highest-rated multicuisine family restaurants, popular with both local families and Hyderabad road-trippers stopping for lunch or dinner before or after visiting Ananthagiri Hills.',
    lastVerified: '2026-10-14',
    verificationNote: 'Public business listing verified in Vikarabad.'
  },
  {
    id: 'wah-biryani-waah',
    name: 'Wah Biryani Waah! Family Restaurant',
    category: 'Vikarabad Town Dining',
    tags: ['Vikarabad Town Dining', 'Hilltop Delivery', 'Biryani'],
    cuisine: 'Hyderabadi Dum Biryani, Chicken Majestic, North Indian & Chinese',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: true,
    deliveryNote:
      'Popular for family biryani packs and takeaway/delivery orders for Ananthagiri resort guests.',
    priceRange: 'Budget to Moderate',
    openingHours: '11:30 AM – 10:30 PM',
    locationText: 'KNR Complex, NTR Chowrasta, Gangawaram, Vikarabad – 501101',
    coordinates: {
      lat: 17.3394,
      lng: 77.9042
    },
    phone: '+917569857839',
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: [
      'Family Dining Section',
      'Biryani Family Packs',
      'Takeaway & Local Delivery',
      'Near NTR Chowrasta Hub'
    ],
    description:
      'Located centrally at NTR Chowrasta in Vikarabad, Wah Biryani Waah! is a well-known stop for Hyderabadi biryani and family meals, just a 10-minute drive from the base of Ananthagiri ghat road.',
    lastVerified: '2026-10-14',
    verificationNote: 'Address (KNR Complex, NTR Chowrasta) and public contact number verified.'
  },
  {
    id: 'zeeshan-restaurant-vikarabad',
    name: 'Zeeshan Restaurant – Apna Hyderabadi Food',
    category: 'Vikarabad Town Dining',
    tags: ['Vikarabad Town Dining', 'Hilltop Delivery', 'Late Evening Dining'],
    cuisine: 'Hyderabadi Biryani, Kebabs, Mughlai & Tandoori Roti',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: true,
    deliveryNote:
      'Available on local food delivery platforms in Vikarabad and convenient for takeaway parcels.',
    priceRange: 'Budget to Moderate',
    openingHours: '11:30 AM – 11:30 PM',
    locationText: 'Near NTR X Road, Gangawaram, Vikarabad – 501101',
    coordinates: {
      lat: 17.3391,
      lng: 77.9045
    },
    phone: null,
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: [
      'Open Late (Until 11:30 PM)',
      'Quick Takeaway Counter',
      'Dine-In Seating',
      'Central Town Location'
    ],
    description:
      'A bustling restaurant near NTR X Road known for authentic Hyderabadi flavors and late-evening dining after returning from sunset viewpoints.',
    lastVerified: '2026-10-14',
    verificationNote: 'Location near NTR X Road, Vikarabad verified.'
  },
  {
    id: 'garden-spice-kitchen-gsk',
    name: 'Garden Spice Kitchen (GSK Family Restaurant)',
    category: 'Vikarabad Town Dining',
    tags: ['Vikarabad Town Dining', 'Family Dining'],
    cuisine: 'Indian, Chinese, Mandi & Tandoori',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: false,
    deliveryNote: 'Dine-in and takeaway in Rajiv Nagar Colony, Vikarabad; local delivery via town apps.',
    priceRange: 'Moderate',
    openingHours: '12:00 PM – 10:30 PM',
    locationText: 'Rajiv Nagar Colony, Vikarabad – 501101',
    coordinates: {
      lat: 17.3350,
      lng: 77.9080
    },
    phone: null,
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: ['Calm Ambience', 'Family Friendly', 'Takeaway Available'],
    description:
      'Situated in Rajiv Nagar Colony, Garden Spice Kitchen (GSK) is appreciated by visitors for its pleasant family ambience, Indian curries, Chinese starters, and Arabian/Mandi options.',
    lastVerified: '2026-10-14',
    verificationNote: 'Public listing in Rajiv Nagar Colony, Vikarabad verified.'
  },
  {
    id: 'the-food-villa-vikarabad',
    name: 'The Food Villa Family Restaurant',
    category: 'Vikarabad Town Dining',
    tags: ['Vikarabad Town Dining', 'Takeaway'],
    cuisine: 'North & South Indian Meals, Chinese & Biryanis',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: false,
    deliveryNote: 'Convenient takeaway stop on SAP Road before driving towards Ananthagiri.',
    priceRange: 'Budget to Moderate',
    openingHours: '11:30 AM – 10:30 PM',
    locationText: 'SAP Road, Gangawaram, Vikarabad – 501101',
    coordinates: {
      lat: 17.3362,
      lng: 77.9018
    },
    phone: null,
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: ['Quick Takeaway Service', 'Family Seating', 'Reasonable Pricing'],
    description:
      'Located along SAP Road in Gangawaram, Vikarabad, The Food Villa is a practical stop for family dine-in or packing lunch parcels on your way to Ananthagiri Hills or Kotepally Reservoir.',
    lastVerified: '2026-10-14',
    verificationNote: 'Location on SAP Road, Gangawaram verified.'
  },
  {
    id: 'haritha-resort-restaurant',
    name: 'Haritha Resort Dining Hall (Telangana Tourism)',
    category: 'Hilltop Dine-In & Stalls',
    tags: ['Hilltop Dine-In & Stalls'],
    cuisine: 'South Indian Breakfast, Telangana Thali, North Indian & Tea/Snacks',
    dietaryType: 'Vegetarian & Non-Vegetarian',
    deliversToAnanthagiri: false,
    deliveryNote: 'On-site dine-in located directly on top of Ananthagiri Hills.',
    priceRange: 'Moderate (Official TGTDC tariff)',
    openingHours: 'Breakfast, Lunch & Dinner windows (Confirm timings at reception)',
    locationText: 'TGTDC Haritha Resort Premises, Ananthagiri Hills, Vikarabad',
    coordinates: {
      lat: 17.3112,
      lng: 77.8635
    },
    phone: null,
    websiteUrl: 'https://tourism.telangana.gov.in/',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: ['Hilltop Sit-Down Dining', 'Restrooms', 'Parking on Premises'],
    description:
      'Operated inside the Telangana Tourism Haritha Resort complex on the Ananthagiri hill crest, this is the main permanent sit-down dining hall inside the forest zone.',
    lastVerified: '2026-10-14',
    verificationNote: 'Official TGTDC facility verified.'
  },
  {
    id: 'temple-road-breakfast-stalls',
    name: 'Ananthagiri Temple Road Tiffin & Refreshment Stalls',
    category: 'Hilltop Dine-In & Stalls',
    tags: ['Hilltop Dine-In & Stalls', 'Pure Veg Options'],
    cuisine: 'South Indian Tiffins (Idli, Dosa, Vada, Maggi, Roasted Corn, Chai)',
    dietaryType: 'Primarily Vegetarian',
    deliversToAnanthagiri: false,
    deliveryNote: 'Walk-up stalls located near the temple and main viewpoint road.',
    priceRange: 'Budget Friendly',
    openingHours: '7:00 AM – 6:00 PM (Most active on weekends & festivals)',
    locationText: 'Near Sri Anantha Padmanabha Swamy Temple Entrance, Ananthagiri Hills',
    coordinates: {
      lat: 17.3125,
      lng: 77.8661
    },
    phone: null,
    websiteUrl: null,
    image:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    facilities: ['Quick Outdoor Seating', 'Hot Tea & Filter Coffee', 'UPI & Cash Accepted'],
    description:
      'Local family-run stalls outside Sri Anantha Padmanabha Swamy Temple serving hot morning breakfast, tea, roasted corn, and snacks right after your morning trek or darshan.',
    lastVerified: '2026-10-14',
    verificationNote: 'Local vendor cluster verified.'
  }
];