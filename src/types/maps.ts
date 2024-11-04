import { Libraries } from '@react-google-maps/api';

export type { Libraries };

export interface MapMarker {
  position: google.maps.LatLngLiteral;
  title?: string;
}

export interface MapProps {
  apiKey: string;
  center: google.maps.LatLngLiteral;
  zoom?: number;
  markers?: MapMarker[];
  width?: string | number;
  height?: string | number;
  styles?: MapStyles;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onMarkerClick?: (marker: MapMarker) => void;
}

export type MapStyles = google.maps.MapTypeStyle[];