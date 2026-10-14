/**
 * Generates an external Google Maps directions URL.
 * Works seamlessly on desktop browsers and opens the native maps app on Android/iOS.
 */
export function getDirectionsUrl(coordinates, name, locationText = 'Vikarabad, Telangana') {
  if (coordinates && typeof coordinates.lat === 'number' && typeof coordinates.lng === 'number') {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  }
  const query = encodeURIComponent(`${name}, ${locationText}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

/**
 * Generates an external Google Maps search/view link for a place.
 */
export function getMapSearchUrl(coordinates, name, locationText = 'Vikarabad, Telangana') {
  if (coordinates && typeof coordinates.lat === 'number' && typeof coordinates.lng === 'number') {
    return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  }
  const query = encodeURIComponent(`${name}, ${locationText}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}