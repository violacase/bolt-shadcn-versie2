import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Camera, MapPin } from "lucide-react";
import { Photo } from "@/types/gallery";

interface PhotoDialogProps {
  photo: Photo | null;
  onClose: () => void;
}

export function PhotoDialog({ photo, onClose }: PhotoDialogProps) {
  if (!photo) return null;

  return (
    <Dialog open={!!photo} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{photo.title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Camera className="h-4 w-4" />
          <span>{photo.photographer}</span>
          <MapPin className="h-4 w-4 ml-2" />
          <span>{photo.location}</span>
        </div>
        <AspectRatio ratio={16 / 9}>
          <img
            src={photo.fullSize}
            alt={photo.title}
            className="object-cover w-full h-full rounded-md"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2">
          {photo.description}
        </p>
      </DialogContent>
    </Dialog>
  );
}