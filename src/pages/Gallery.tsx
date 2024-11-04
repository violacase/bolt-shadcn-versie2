import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PhotoCard } from "@/components/PhotoCard";
import { PhotoDialog } from "@/components/PhotoDialog";
import { photos } from "@/data/photos";
import type { Photo } from "@/types/gallery";

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Gallery
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Stunning Landscapes
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of breathtaking photographs from around the world,
          captured by talented photographers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={setSelectedPhoto}
          />
        ))}
      </div>

      <PhotoDialog
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}