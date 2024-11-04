import { useCallback, useEffect, useState } from 'react';
import { GoogleMap as GoogleMapComponent, Marker, useLoadScript } from '@react-google-maps/api';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { MapProps, MapStyles, Libraries } from '@/types/maps';

const libraries: Libraries = ['places'];

const defaultMapStyles: MapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#242f3e' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#242f3e' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#746855' }],
  },
];

export function GoogleMap({
  apiKey,
  center,
  zoom = 14,
  markers = [],
  width = '100%',
  height = '400px',
  styles = defaultMapStyles,
  onClick,
  onMarkerClick,
}: MapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || '',
    libraries,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      map.setOptions({ styles });
    }
  }, [map, styles]);

  if (loadError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {loadError.message.includes('BillingNotEnabled') 
            ? 'Google Maps billing must be enabled. Please check your API key configuration.'
            : 'Error loading Google Maps. Please check your API key.'}
        </AlertDescription>
      </Alert>
    );
  }

  if (!isLoaded) {
    return <Skeleton className="w-full" style={{ height }} />;
  }

  return (
    <GoogleMapComponent
      mapContainerStyle={{ width, height }}
      center={center}
      zoom={zoom}
      options={{ 
        styles,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
      }}
      onClick={onClick}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker, index) => (
        <Marker
          key={`${marker.position.lat}-${marker.position.lng}-${index}`}
          position={marker.position}
          title={marker.title}
          onClick={() => onMarkerClick?.(marker)}
        />
      ))}
    </GoogleMapComponent>
  );
}