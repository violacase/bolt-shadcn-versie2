import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LocationMap } from './LocationMap';
import { useState } from 'react';
import type { MapMarker } from '@/types/maps';

const OFFICE_LOCATION = {
//Latitude (Breedtegraad): 52.160114
//Longitude (Lengtegraad): 4.497010

  
  // hieronder Violacase, vrouwenkersteeg 59
  lat: 52.16168367502662,
  lng:  4.489597260074398
//52.16168367502662, 4.489597260074398
 //   lat: 37.7749,
//  lng: -122.4194
};

const OFFICE_MARKER: MapMarker = {
  position: OFFICE_LOCATION,
  title: 'Violacase Webdesign'
};

export function ContactMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <Button variant="link" className="p-0 h-auto" onClick={() => setShowMap(true)}>
        Vrouwenkerksteeg 59 2312WS Leiden
      </Button>

      <Dialog open={showMap} onOpenChange={setShowMap}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Company Location</DialogTitle>
          </DialogHeader>
          <div className="h-[400px] w-full">
            <LocationMap
              initialCenter={OFFICE_LOCATION}
              initialMarkers={[OFFICE_MARKER]}
              height={400}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}