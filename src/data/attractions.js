export const ATTRACTION_CATEGORIES = [
  { id: 'all', label: 'All Places' },
  { id: 'Viewpoints & Nature', label: 'Nature & Viewpoints' },
  { id: 'Temples & Heritage', label: 'Temples & Cultural' },
  { id: 'Lakes & Reservoirs', label: 'Lakes & Scenic Spots' },
  { id: 'Trekking & Trails', label: 'Trekking & Outdoor' },
  { id: 'Family Friendly', label: 'Family Friendly' }
];

export const attractions = [
  {
    id: 'ananthagiri-viewpoint',
    slug: 'ananthagiri-hills-viewpoint',
    name: 'Ananthagiri Hills Forest Viewpoint',
    category: 'Viewpoints & Nature',
    tags: ['Viewpoints & Nature', 'Family Friendly'],
    shortDescription:
      'Panoramic valley viewpoint overlooking the dense Eastern Ghats forest canopy along the Vikarabad–Tandur road.',
    description:
      'Located inside the Ananthagiri reserve forest belt near Vikarabad, this scenic viewpoint offers sweeping vistas of rolling hills, winding ghat roads, and mist-covered valleys during the monsoon and winter mornings. It is one of the primary stops for day visitors travelling from Hyderabad.',
    locationText: 'Ananthagiri Ghat Road, ~6 km from Vikarabad Town, Telangana',
    distanceFromVikarabad: '~6 km',
    distanceFromHyderabad: '~75 km',
    coordinates: {
      lat: 17.3106,
      lng: 77.8614,
      verified: true
    },
    openingHours: 'Daylight hours recommended (6:00 AM – 6:00 PM)',
    entryFee: 'No entry fee confirmed (Roadside parking may vary on weekends)',
    bestDuration: '45 – 60 mins',
    bestTimeToVisit: 'Early morning (6:30 AM – 9:00 AM) or late afternoon before sunset',
    facilities: ['Roadside parking space', 'Seasonal tea/corn stalls nearby'],
    accessibilityNotes:
      'Accessible by car and two-wheeler via paved ghat road; uneven natural ground near viewing edges.',
    warnings: [
      'Avoid staying on isolated ghat stretches after dark.',
      'Strict plastic-free reserve forest zone — do not litter or light campfires.'
    ],
    nearbyIds: ['anantha-padmanabha-temple', 'ananthagiri-forest-trail', 'nagasamudram-lake'],
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative hill forest landscape (Replace with local Ananthagiri photo)',
    featured: true,
    lastVerified: '2026-10-14',
    verificationNote: 'Geographic location verified; check local forest department signage on-site.'
  },
  {
    id: 'anantha-padmanabha-temple',
    slug: 'sri-anantha-padmanabha-swamy-temple',
    name: 'Sri Anantha Padmanabha Swamy Temple',
    category: 'Temples & Heritage',
    tags: ['Temples & Heritage', 'Family Friendly'],
    shortDescription:
      'Historic hillside shrine dedicated to Lord Vishnu, nestled amidst the serene wooded slopes of Ananthagiri.',
    description:
      'One of the spiritual landmarks that gives Ananthagiri Hills its name, Sri Anantha Padmanabha Swamy Temple attracts devotees and nature lovers alike. Situated near the Musi River origin belt, the temple surroundings offer a peaceful atmosphere, traditional temple architecture, and stepwell views.',
    locationText: 'Ananthagiri Hills, Vikarabad Mandal, Telangana 501101',
    distanceFromVikarabad: '~7 km',
    distanceFromHyderabad: '~76 km',
    coordinates: {
      lat: 17.3125,
      lng: 77.8661,
      verified: true
    },
    openingHours: 'Morning & Evening darshan hours (Confirm exact break timings at temple notice board)',
    entryFee: 'Free general darshan (Special pooja tickets available at official temple counter)',
    bestDuration: '45 – 90 mins',
    bestTimeToVisit: 'Morning hours or festival days (expect higher crowds on weekends)',
    facilities: ['Shoe stand', 'Drinking water', 'Parking area outside temple complex'],
    accessibilityNotes: 'Steps are required to access sections of the temple premises.',
    warnings: [
      'Follow traditional dress decorum inside the sanctum.',
      'Weekend parking near the temple entrance can fill up quickly between 10:00 AM and 2:00 PM.'
    ],
    nearbyIds: ['ananthagiri-viewpoint', 'ananthagiri-forest-trail'],
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative South Indian temple architecture (Replace with local photo)',
    featured: true,
    lastVerified: '2026-10-14',
    verificationNote: 'Location verified; darshan timings vary during Kartika Masam and festivals.'
  },
  {
    id: 'kotepally-reservoir',
    slug: 'kotepally-reservoir-lake',
    name: 'Kotepally Reservoir',
    category: 'Lakes & Reservoirs',
    tags: ['Lakes & Reservoirs', 'Family Friendly'],
    shortDescription:
      'Expansive reservoir surrounded by quiet countryside and greenery, popular for calm waterside views and kayaking.',
    description:
      'Located about 18–20 km from Ananthagiri Hills in Dharur Mandal, Kotepally Reservoir is a major weekend stop for families and road-trippers. Visitors come for the wide water vistas, sunset reflections, and recreational boating/kayaking activities when operated by local authorities.',
    locationText: 'Kotepally, Dharur Mandal, Vikarabad District, Telangana',
    distanceFromVikarabad: '~20 km',
    distanceFromHyderabad: '~92 km',
    coordinates: {
      lat: 17.3347,
      lng: 77.7442,
      verified: true
    },
    openingHours: '6:00 AM – 5:30 PM (Boating operations depend on weather and water levels)',
    entryFee: 'Dam viewing is generally free; boating/kayaking charges apply on-site when active',
    bestDuration: '1 – 2 hours',
    bestTimeToVisit: 'Post-monsoon and winter (August to February) during late afternoon',
    facilities: ['Open parking area', 'Small local snack vendors on weekends'],
    accessibilityNotes: 'Earthen bund and sloped approaches near the water edge.',
    warnings: [
      'Do not enter the water for swimming — submerged rocks and deep silt pose severe drowning hazards.',
      'Wear life jackets at all times if participating in authorized kayaking/boating.'
    ],
    nearbyIds: ['nagasamudram-lake', 'ananthagiri-viewpoint'],
    image:
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative calm reservoir view (Replace with local Kotepally photo)',
    featured: true,
    lastVerified: '2026-10-14',
    verificationNote: 'Reservoir coordinates verified; kayaking availability is weather-dependent.'
  },
  {
    id: 'ananthagiri-forest-trail',
    slug: 'ananthagiri-forest-trekking-trail',
    name: 'Ananthagiri Reserve Forest Nature Trail',
    category: 'Trekking & Trails',
    tags: ['Trekking & Trails', 'Viewpoints & Nature'],
    shortDescription:
      'Marked forest Entry points and shaded walking paths through deciduous woodland rich in birdlife and flora.',
    description:
      'The Ananthagiri Reserve Forest is one of the largest dense forest patches near Hyderabad. Designated entry zones near the temple and Haritha Resort road allow nature enthusiasts and hikers to experience red-soil forest paths, bamboo groves, and seasonal streams.',
    locationText: 'Ananthagiri Forest Block, Vikarabad, Telangana',
    distanceFromVikarabad: '~6.5 km',
    distanceFromHyderabad: '~75 km',
    coordinates: {
      lat: 17.3089,
      lng: 77.8645,
      verified: true
    },
    openingHours: 'Daylight hours only (6:30 AM – 5:00 PM)',
    entryFee: 'Check Telangana Forest Department checkpost for any current eco-trekking entry fee',
    bestDuration: '1.5 – 3 hours',
    bestTimeToVisit: 'Early morning for birdwatching and cooler temperatures',
    facilities: ['Basic trailheads near main road'],
    accessibilityNotes: 'Natural uneven dirt and rock trails; sturdy closed-toe footwear required.',
    warnings: [
      'Respect Telangana Forest Department boundaries and restricted core zones.',
      'Night trekking, unauthorized camping, alcohol, and smoking inside the reserve forest are strictly prohibited.',
      'Carry drinking water and download offline maps as mobile signal can drop inside valleys.'
    ],
    nearbyIds: ['anantha-padmanabha-temple', 'ananthagiri-viewpoint'],
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative forest trail (Replace with local Ananthagiri trail photo)',
    featured: true,
    lastVerified: '2026-10-14',
    verificationNote: 'Forest restrictions verified per standard Reserve Forest guidelines.'
  },
  {
    id: 'nagasamudram-lake',
    slug: 'nagasamudram-lake-sarpanpally',
    name: 'Nagasamudram Lake (Sarpanpally Project)',
    category: 'Lakes & Reservoirs',
    tags: ['Lakes & Reservoirs', 'Viewpoints & Nature'],
    shortDescription:
      'Tranquil irrigation lake set against low hills near Godamguda, ideal for peaceful photography away from heavy crowds.',
    description:
      'Often referred to locally alongside the Sarpanpally lake belt, Nagasamudram Lake sits a short drive from the Ananthagiri hill crest. Its quiet shoreline and open sky views make it a relaxing stop for visitors seeking calm waterside scenery.',
    locationText: 'Near Godamguda / Sarpanpally road, Vikarabad District, Telangana',
    distanceFromVikarabad: '~11 km',
    distanceFromHyderabad: '~82 km',
    coordinates: {
      lat: 17.2912,
      lng: 77.8415,
      verified: true
    },
    openingHours: 'Daylight hours (6:00 AM – 6:00 PM)',
    entryFee: 'No public entry fee on public approach roads',
    bestDuration: '45 – 60 mins',
    bestTimeToVisit: 'Sunrise or late afternoon',
    facilities: ['Limited roadside facilities — carry your own water and snacks'],
    accessibilityNotes: 'Rural approach roads; last stretch may have uneven surfaces.',
    warnings: [
      'Respect private resort/farmhouse boundaries bordering parts of the lake.',
      'Avoid venturing into deep water or muddy banks.'
    ],
    nearbyIds: ['ananthagiri-viewpoint', 'kotepally-reservoir'],
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative scenic lake (Replace with local Nagasamudram photo)',
    featured: false,
    lastVerified: '2026-10-14',
    verificationNote: 'Location verified; rural road conditions may vary during heavy monsoon.'
  },
  {
    id: 'bugga-rameshwaram-temple',
    slug: 'bugga-rameshwaram-temple-vikarabad',
    name: 'Sri Bugga Rameshwaram Temple',
    category: 'Temples & Heritage',
    tags: ['Temples & Heritage', 'Family Friendly'],
    shortDescription:
      'Ancient Shiva temple known for its natural perennial spring water flowing beside the Shiva Lingam.',
    description:
      'Located near Madgul Chittempally in Vikarabad district, Bugga Rameshwaram is revered for its natural underground water spring ("Bugga") and tranquil rural surroundings. It is frequently combined with an Ananthagiri spiritual and nature day trip.',
    locationText: 'Bugga Rameshwaram, Vikarabad Mandal, Telangana',
    distanceFromVikarabad: '~9 km',
    distanceFromHyderabad: '~78 km',
    coordinates: {
      lat: 17.3584,
      lng: 77.9328,
      verified: true
    },
    openingHours: 'Morning and evening temple hours (Confirm festival schedules locally)',
    entryFee: 'Free general entry',
    bestDuration: '45 – 60 mins',
    bestTimeToVisit: 'Morning hours; Mahashivaratri and Kartika Masam attract large crowds',
    facilities: ['Temple courtyard', 'Basic parking'],
    accessibilityNotes: 'Stepped access near the natural water spring area.',
    warnings: ['Surfaces near the natural spring can be wet and slippery.'],
    nearbyIds: ['anantha-padmanabha-temple'],
    image:
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80',
    isPlaceholderImage: true,
    imageCaption: 'Representative heritage temple (Replace with local Bugga Rameshwaram photo)',
    featured: false,
    lastVerified: '2026-10-14',
    verificationNote: 'Regional heritage site verified; verify festival timings locally.'
  }
];