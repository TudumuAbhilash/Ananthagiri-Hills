export const STAY_CATEGORIES = [
  { id: 'all', label: 'All Stays' },
  { id: 'Government Resort', label: 'Government Tourism Resort' },
  { id: 'Hill & Forest Border Resorts', label: 'Hill & Forest Border Resorts' },
  { id: 'Vikarabad Town Stays', label: 'Vikarabad Town Stays & Lodges' }
];

export const stays = [
  {
    id: 'tgtdc-haritha-ananthagiri',
    name: 'TGTDC Haritha Resort Ananthagiri, Vikarabad',
    category: 'Government Resort',
    locationText: 'Ananthagiri Hills Main Road, Vikarabad Mandal, Telangana',
    distanceNote: 'Located right on top of Ananthagiri Hills (~6.5 km from Vikarabad)',
    coordinates: {
      lat: 17.3112,
      lng: 77.8635
    },
    priceRange: 'Check live government tariff on official TGTDC portal',
    amenities: [
      'AC & Non-AC Rooms',
      'On-site Restaurant',
      'Parking Space',
      'Walkable to Viewpoint & Temple',
      'Surrounded by Reserve Forest'
    ],
    bookingNote:
      'Book exclusively through the official Telangana Tourism Development Corporation (TGTDC) website.',
    officialUrl: 'https://tourism.telangana.gov.in/',
    mapLink: 'https://maps.app.goo.gl/UW8H7UCSn4ixcHcR9',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'The flagship government hill resort situated right inside the Ananthagiri forest crest, offering the most convenient location for early morning forest trails and temple visits.',
    lastVerified: '2026-10-14',
    verificationNote: 'Official state tourism property and Google Maps link verified.'
  },
  {
    id: 'trance-veechika-resort',
    name: 'Trance Veechika Resort',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Ananthagiri / Vikarabad Forest Border Belt, Telangana',
    distanceNote: 'Surrounded by greenery near Ananthagiri Hills',
    coordinates: {
      lat: 17.3050,
      lng: 77.8590
    },
    priceRange: 'Resort Tariff (Verify directly)',
    amenities: [
      'Scenic Nature Views',
      'Cottages & Lawns',
      'Peaceful Retreat Setting',
      'Accepts Food Delivery from Vikarabad (e.g., Home Pot)'
    ],
    bookingNote: 'Verify availability and package details directly before booking.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/QfbL12CRvNV9zGjj8',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Trance Veechika Resort offers a serene nature getaway nestled near the green expanses of the Ananthagiri forest border, popular for weekend relaxation and family outings.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'the-wilderness-campsite',
    name: 'The Wilderness Campsite',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Ananthagiri Hills Outskirts, Vikarabad District',
    distanceNote: 'Set amidst rural woodland and open air near Ananthagiri',
    coordinates: {
      lat: 17.3180,
      lng: 77.8720
    },
    priceRange: 'Campsite / Outdoor Package',
    amenities: [
      'Outdoor Camping Experience',
      'Nature Trails & Open Air',
      'Bonfire Spaces (Where Permitted)',
      'Star Gazing'
    ],
    bookingNote: 'Strictly follow authorized campsite and forest department guidelines.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/zh3farzPsoRQFCL39',
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'The Wilderness Campsite provides an outdoor nature and camping experience close to the natural landscape of Ananthagiri Hills.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'wildstay-luxury-resort',
    name: 'Wildstay Luxury Resort',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Near Ananthagiri Hills & Kotepally Road, Vikarabad',
    distanceNote: 'Short drive from Ananthagiri hilltop and reservoir',
    coordinates: {
      lat: 17.3250,
      lng: 77.8100
    },
    priceRange: 'Luxury Stay Tariff',
    amenities: [
      'Luxury Rooms & Cottages',
      'Swimming Pool',
      'Recreational Lawns',
      'Fine Dining & Room Service'
    ],
    bookingNote: 'Verify booking terms and amenities directly with management.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/e6eDUECd2MYksC3j8',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Wildstay Luxury Resort combines upscale hospitality with proximity to the scenic forests and reservoirs of the Vikarabad district.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'harivillu-resorts',
    name: 'Harivillu Resorts',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Vikarabad – Ananthagiri Region, Telangana',
    distanceNote: 'Accessible via main district roads',
    coordinates: {
      lat: 17.3200,
      lng: 77.8900
    },
    priceRange: 'Mid to High Range',
    amenities: [
      'Family Cottages',
      'Swimming Pool',
      'Open Party Lawns',
      'Indoor & Outdoor Games'
    ],
    bookingNote: 'Popular for day outings, family gatherings, and weekend stays.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/2QAd7UfGJhnvVruaA',
    image:
      'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Harivillu Resorts is a well-established weekend resort destination in the Vikarabad region featuring lawns, cottages, and recreational amenities.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'aranya-retreat',
    name: 'Aranya Retreat',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Ananthagiri Forest Outskirts, Vikarabad',
    distanceNote: 'Immersed in forest greenery',
    coordinates: {
      lat: 17.3150,
      lng: 77.8500
    },
    priceRange: 'Retreat Tariff',
    amenities: [
      'Forest-facing Rooms',
      'Peaceful Environment',
      'Nature Walks & Birdwatching'
    ],
    bookingNote: 'Ideal for travelers seeking quiet surroundings close to nature.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/2fbqHiQpxM27P3FR8',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Aranya Retreat offers a peaceful, forest-immersed stay experience designed for nature lovers visiting the Ananthagiri woodland belt.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'anantha-resorts',
    name: 'Anantha Resorts',
    category: 'Hill & Forest Border Resorts',
    locationText: 'Near Ananthagiri Hills Foothills / Approach',
    distanceNote: 'Close to hill ascent road',
    coordinates: {
      lat: 17.3130,
      lng: 77.8750
    },
    priceRange: 'Moderate Tariff',
    amenities: [
      'Comfortable Rooms',
      'Dining Facility',
      'Easy Access to Ghat Road'
    ],
    bookingNote: 'Conveniently situated near the approach to Ananthagiri Hills.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/w1XYUBpbxGaTv1H77',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Anantha Resorts provides accessible resort accommodation near the Ananthagiri hill approach road for families and road-trippers.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'heavens-luxury-lakeview-resorts',
    name: "Heaven's Luxury Lakeview Resorts",
    category: 'Hill & Forest Border Resorts',
    locationText: 'Near Reservoir / Lake View Belt, Vikarabad District',
    distanceNote: 'Scenic water-facing location',
    coordinates: {
      lat: 17.3300,
      lng: 77.7600
    },
    priceRange: 'Luxury Tariff',
    amenities: [
      'Lakeview Rooms & Suites',
      'Swimming Pool',
      'Open Air Dining',
      'Water Sunset Views'
    ],
    bookingNote: 'Verify lakeview room availability in advance.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/L2FqCT7LYNSE6TeN6',
    image:
      'https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      "Heaven's Luxury Lakeview Resorts offers panoramic water views and premium resort amenities in the scenic lake belt of Vikarabad district.",
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'chaya-inn-banquets-rooms',
    name: 'Chaya Inn Banquets & Rooms',
    category: 'Vikarabad Town Stays',
    locationText: 'Opposite Vishal Mart, Hyderabad–Vikarabad Highway, Shivareddypet, Vikarabad – 501101',
    distanceNote: '~6 km from Ananthagiri Hills (10–12 mins drive)',
    coordinates: {
      lat: 17.3375,
      lng: 77.9045
    },
    priceRange: 'Moderate',
    amenities: [
      '19 Air-Conditioned Rooms',
      'Banquet Hall',
      'Ample Car Parking',
      'Wi-Fi & Power Backup'
    ],
    bookingNote: 'Located on the main highway opposite Vishal Mart in Vikarabad.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/bJAUgVdtDsK4yDV99',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Chaya Inn offers air-conditioned guest rooms and banquet facilities in Vikarabad town, ideal for families and event guests.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'r-banquets-ac-rooms',
    name: 'R Banquets AC Rooms & Lodge',
    category: 'Vikarabad Town Stays',
    locationText: 'Kamala Nagar, Vikarabad Road, Vikarabad, Telangana – 501101',
    distanceNote: '~6.5 km from Ananthagiri Hills',
    coordinates: {
      lat: 17.3368,
      lng: 77.9058
    },
    priceRange: 'Budget to Moderate',
    amenities: [
      '12 AC Rooms',
      'Lift Access',
      'Event Halls',
      'Generator Power Backup'
    ],
    bookingNote: 'Located in Kamala Nagar with easy access to town markets.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/t471eRP5vUS7eeKHA',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'R Banquets & AC Rooms provides comfortable air-conditioned lodging and banquet halls in Kamala Nagar, Vikarabad.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'new-meenakshi-banquet-hall-lodge',
    name: 'New Meenakshi Banquet Hall & Lodge (NMBH)',
    category: 'Vikarabad Town Stays',
    locationText: 'Tandur Road Corridor, Vikarabad Town, Telangana – 501101',
    distanceNote: '~6 km from Ananthagiri Hills',
    coordinates: {
      lat: 17.3355,
      lng: 77.9032
    },
    priceRange: 'Budget Friendly',
    amenities: [
      'Lodge Rooms',
      'Function Hall',
      'Close to Bus & Railway Station'
    ],
    bookingNote: 'Practical budget lodge along the Vikarabad-Tandur corridor.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/hxSEiVN9F3CPCTAu6',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'New Meenakshi Banquet Hall & Lodge offers practical lodging and event spaces in Vikarabad town close to local transit.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'shiva-keshava-rooms',
    name: 'Shiva Keshava Rooms & Rest House',
    category: 'Vikarabad Town Stays',
    locationText: 'Near Gangawaram / Town Center, Vikarabad – 501101',
    distanceNote: '~6.5 km from Ananthagiri Hills',
    coordinates: {
      lat: 17.3382,
      lng: 77.9040
    },
    priceRange: 'Budget Friendly',
    amenities: [
      'Standard Rest Rooms',
      'Pilgrim & Family Friendly',
      'Close to Town Dining'
    ],
    bookingNote: 'Accessible accommodation in Vikarabad town center.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/8NoCeA6BinPLotiV8',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Shiva Keshava rooms provide accessible accommodation in Vikarabad town close to regional temples and dining.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  },
  {
    id: 'ananthagiri-hills-staying-rooms',
    name: 'Ananthagiri Hills Staying Rooms',
    category: 'Vikarabad Town Stays',
    locationText: 'Vikarabad / Ananthagiri Approach Road',
    distanceNote: 'Positioned between town and hill approach',
    coordinates: {
      lat: 17.3210,
      lng: 77.8820
    },
    priceRange: 'Standard Tariff',
    amenities: [
      'Rooms near Hill Approach',
      'Quiet Surroundings',
      'Easy Ghat Access'
    ],
    bookingNote: 'Verify details locally before arrival.',
    officialUrl: null,
    mapLink: 'https://maps.app.goo.gl/iNh1yduEgPNrhQ8B7',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    isPlaceholderImage: true,
    description:
      'Designated staying rooms situated along the transition between Vikarabad town and the Ananthagiri hill slope.',
    lastVerified: '2026-10-14',
    verificationNote: 'Verified via Google Maps location link.'
  }
];