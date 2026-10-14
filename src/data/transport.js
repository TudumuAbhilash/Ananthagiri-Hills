export const transportOptions = [
  {
    id: 'personal-vehicle-hyderabad',
    mode: 'By Road (Car / Two-Wheeler)',
    title: 'Driving from Hyderabad to Ananthagiri Hills',
    distanceInfo: '~70 – 80 km from Hyderabad (Approx. 1.5 to 2 hours depending on starting point)',
    routeSummary:
      'Hyderabad (ORR Exit 17 / Appa Junction / Langer House) → Moinabad → Chevella → Mannanur/Vikarabad Highway → Vikarabad → Ananthagiri Ghat Road.',
    coordinates: {
      lat: 17.3106,
      lng: 77.8614
    },
    practicalTips: [
      'Having your own car or bike is the most flexible way to combine Ananthagiri Hills, Padmanabha Swamy Temple, and Kotepally Reservoir (~20 km further).',
      'Drive carefully on the winding Ananthagiri ghat hairpin bends — do not overtake on blind curves.',
      'Fuel up in Vikarabad town or along the Chevella highway before ascending the hills.'
    ],
    scheduleWarning: 'Best driven during daylight hours (6:00 AM – 6:00 PM).',
    lastVerified: '2026-10-14'
  },
  {
    id: 'train-vikarabad-junction',
    mode: 'By Train (Indian Railways)',
    title: 'Vikarabad Railway Junction (Station Code: VKB)',
    distanceInfo: 'Vikarabad Junction is ~6 to 7 km from Ananthagiri Hills viewpoint & temple',
    routeSummary:
      'Direct passenger and express trains connect Secunderabad (SC), Lingampalli (LPI), and Begumpet (BMT) to Vikarabad Junction (VKB).',
    coordinates: {
      lat: 17.3338,
      lng: 77.9041
    },
    officialLink: 'https://www.indianrail.gov.in/',
    officialLinkLabel: 'Check Official Indian Railways / NTES Timings',
    practicalTips: [
      'Confirm live train schedules and platform numbers on the official Indian Railways NTES portal or IRCTC before departure.',
      'Outside Vikarabad Railway Station, local auto-rickshaws and cabs are available to take you up to Ananthagiri Hills (~15 minutes).'
    ],
    scheduleWarning:
      'Do not rely on static third-party blogs for train timings — always verify live schedules on official railway channels.',
    lastVerified: '2026-10-14'
  },
  {
    id: 'tsrtc-bus-service',
    mode: 'By Bus (TGSRTC / TSRTC)',
    title: 'State Road Transport Buses to Vikarabad Bus Stand',
    distanceInfo: 'Regular buses from MGBS, Mehdipatnam & Langer House to Vikarabad Bus Stand (~6.5 km from hills)',
    routeSummary:
      'Board a TGSRTC bus heading towards Vikarabad, Tandur, or Parigi. Alight at Vikarabad Bus Stand for autos/local transport, or ask the conductor if the specific Tandur-bound bus stops near the Ananthagiri ghat junction.',
    coordinates: {
      lat: 17.3389,
      lng: 77.9052
    },
    officialLink: 'https://www.tgsrtc.telangana.gov.in/',
    officialLinkLabel: 'Official TGSRTC Website',
    practicalTips: [
      'Mehdipatnam and MGBS in Hyderabad have the highest frequency of buses towards Chevella and Vikarabad.',
      'From Vikarabad Bus Stand, hire a local auto or cab for the 6.5 km climb to Ananthagiri Hills.'
    ],
    scheduleWarning:
      'Return buses from the hilltop road are infrequent in the evening — return to Vikarabad town bus stand before dusk.',
    lastVerified: '2026-10-14'
  },
  {
    id: 'local-autos-and-cabs',
    mode: 'Last-Mile Transport (Autos & Local Cabs)',
    title: 'Getting Around Between Vikarabad, Ananthagiri & Kotepally',
    distanceInfo: 'Vikarabad to Ananthagiri: ~6.5 km | Ananthagiri to Kotepally Reservoir: ~20 km',
    routeSummary:
      'Auto-rickshaws and local taxis operate from Vikarabad Railway Station and Vikarabad Bus Stand.',
    coordinates: {
      lat: 17.3365,
      lng: 77.9048
    },
    practicalTips: [
      'Crucial Tip: If you take an auto or cab from Vikarabad town up to Ananthagiri Hills or out to Kotepally Reservoir, negotiate a round-trip waiting package and take the driver’s phone number.',
      'App-based ride-hailing (Uber/Ola) cannot be relied upon for instant pickup inside the Ananthagiri forest zone or at Kotepally Reservoir.',
      'Agree on the total fare, waiting time, and number of stops clearly before starting the trip.'
    ],
    scheduleWarning:
      'No live vehicle tracking is available for local autos; always book return transport in advance.',
    lastVerified: '2026-10-14'
  }
];