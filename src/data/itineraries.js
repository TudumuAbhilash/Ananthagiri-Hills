export const itineraries = [
  {
    id: 'half-day-morning-mist',
    title: 'Half-Day Forest, Temple & Viewpoint Loop',
    durationType: 'half-day',
    durationLabel: '4 – 5 Hours',
    interest: 'Nature & Heritage',
    idealFor: 'Early morning riders, couples, and quick family outings from Hyderabad or Vikarabad',
    transportMode: 'Car / Two-Wheeler / Local Cab',
    summary:
      'Experience the best of Ananthagiri Hills in a single morning — starting with sunrise valley views, a forest trail walk, and darshan at Sri Anantha Padmanabha Swamy Temple.',
    stops: [
      {
        order: 1,
        timeSlot: '7:00 AM – 8:00 AM',
        attractionId: 'ananthagiri-viewpoint',
        title: 'Sunrise at Ananthagiri Hills Viewpoint',
        note: 'Enjoy early morning mist over the ghat road and valley before weekend traffic arrives.'
      },
      {
        order: 2,
        timeSlot: '8:15 AM – 9:45 AM',
        attractionId: 'ananthagiri-forest-trail',
        title: 'Morning Walk on Ananthagiri Forest Trail',
        note: 'Take a shaded walk along the designated forest entry path. Carry water and wear walking shoes.'
      },
      {
        order: 3,
        timeSlot: '10:00 AM – 11:15 AM',
        attractionId: 'anantha-padmanabha-temple',
        title: 'Darshan at Sri Anantha Padmanabha Swamy Temple',
        note: 'Visit the historic hill temple and nearby local breakfast stalls.'
      }
    ],
    travelNote:
      'All 3 stops are within a 3 km radius along the Ananthagiri hill crest. No complex routing required.',
    lastVerified: '2026-10-14'
  },
  {
    id: 'full-day-vikarabad-explorer',
    title: 'Full-Day Hills, Temple & Kotepally Reservoir Circuit',
    durationType: 'full-day',
    durationLabel: '8 – 9 Hours',
    interest: 'Complete Sightseeing',
    idealFor: 'Families and weekend groups travelling for a full day trip',
    transportMode: 'Personal Car or Hired Day Cab recommended',
    summary:
      'Combine the forested slopes and temple heritage of Ananthagiri Hills in the morning with a relaxing afternoon by the waters of Nagasamudram and Kotepally Reservoir.',
    stops: [
      {
        order: 1,
        timeSlot: '8:00 AM – 9:00 AM',
        attractionId: 'ananthagiri-viewpoint',
        title: 'Ananthagiri Ghat Road & Valley Viewpoint',
        note: 'Stop for photos and fresh forest breeze along the ghat ascent.'
      },
      {
        order: 2,
        timeSlot: '9:15 AM – 10:45 AM',
        attractionId: 'anantha-padmanabha-temple',
        title: 'Sri Anantha Padmanabha Swamy Temple',
        note: 'Complete morning darshan and explore the temple stepwell surroundings.'
      },
      {
        order: 3,
        timeSlot: '12:30 PM – 2:00 PM',
        attractionId: 'nagasamudram-lake',
        title: 'Lunch Break & Nagasamudram Lake Drive',
        note: 'Have lunch near Ananthagiri/Vikarabad town and drive past the quiet shoreline of Nagasamudram.'
      },
      {
        order: 4,
        timeSlot: '3:00 PM – 5:15 PM',
        attractionId: 'kotepally-reservoir',
        title: 'Afternoon & Sunset at Kotepally Reservoir',
        note: 'Relax by the reservoir bund (~20 km drive) and begin return journey before dusk.'
      }
    ],
    travelNote:
      'Kotepally Reservoir is ~20 km west of Ananthagiri Hills. Having your own vehicle or a pre-arranged return cab is strongly advised.',
    lastVerified: '2026-10-14'
  }
];