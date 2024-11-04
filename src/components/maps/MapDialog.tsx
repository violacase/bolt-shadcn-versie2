import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GoogleMap } from "./GoogleMap";
import { GOOGLE_MAPS_API_KEY } from "@/lib/config/maps";

interface MapDialogProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    lat: number;
    lng: number;
  };
  title: string;
}

export function MapDialog({ isOpen, onClose, location, title }: MapDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <div className="h-[500px] w-full">
          <GoogleMap
            apiKey={GOOGLE_MAPS_API_KEY}
            center={location}
            markers={[{ position: location, title }]}
            zoom={15}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}