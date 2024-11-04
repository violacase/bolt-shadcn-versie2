import { useState } from 'react';
import { GoogleMap } from './GoogleMap';
import { GOOGLE_MAPS_API_KEY } from '@/lib/config/maps';
import type { MapMarker } from '@/types/maps';

interface LocationMapProps {
  initialCenter: google.maps.LatLngLiteral;
  initialMarkers?: MapMarker[];
  height?: string | number;
}

export function LocationMap({ 
  initialCenter,
  initialMarkers = [],
  height = '400px'
}: LocationMapProps) {
  const [markers] = useState<MapMarker[]>(initialMarkers);

  return (
    <GoogleMap
      apiKey={GOOGLE_MAPS_API_KEY}
      center={initialCenter}
      markers={markers}
      height={height}
      onMarkerClick={(marker) => {
        console.log('Marker clicked:', marker);
      }}
    />
  );
}