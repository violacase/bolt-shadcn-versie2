import { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Badge } from "@/components/ui/badge";
import { photos } from "@/data/photos";

// Convert our photos to the format expected by Yet Another React Lightbox
const slides = photos.map(photo => ({
  src: photo.fullSize,
  alt: photo.title,
  title: photo.title,
  description: `${photo.location} - By ${photo.photographer}\n${photo.description}`,
}));

export function YALightboxGallery() {
  const [index, setIndex] = useState(-1);

  const handleClick = useCallback((index: number) => {
    setIndex(index);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Yet Another React Lightbox
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Advanced Photo Gallery
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feature-rich gallery with zoom, fullscreen, slideshow, and thumbnails.
          Click any image to start.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => handleClick(idx)}
            className="cursor-pointer group relative overflow-hidden rounded-lg bg-muted aspect-square"
          >
            <img
              src={photo.thumbnail}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="font-semibold mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-200">{photo.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        captions={{ showToggle: true, descriptionTextAlign: "center" }}
        thumbnails={{ position: "bottom" }}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </div>
  );
}