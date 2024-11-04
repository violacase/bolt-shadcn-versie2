import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/data/photos";
import { cn } from "@/lib/utils";

export function LightboxGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showLightbox = selectedIndex !== null;
  const currentPhoto = showLightbox ? photos[selectedIndex] : null;

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  const previous = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  const close = () => setSelectedIndex(null);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Lightbox Gallery
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Custom Lightbox Experience
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any image to view it in our custom lightbox with smooth transitions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer overflow-hidden rounded-lg bg-muted"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showLightbox && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={close}
          >
            <div className="fixed inset-x-4 inset-y-8 md:inset-16 z-50">
              <div className="relative w-full h-full flex items-center justify-center">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-4 z-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    close();
                  }}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2",
                    selectedIndex === 0 && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    previous();
                  }}
                  disabled={selectedIndex === 0}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2",
                    selectedIndex === photos.length - 1 && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  disabled={selectedIndex === photos.length - 1}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <motion.div
                  key={currentPhoto.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4 p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={currentPhoto.fullSize}
                    alt={currentPhoto.title}
                    className="max-h-[calc(100vh-200px)] w-auto object-contain rounded-lg"
                  />
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{currentPhoto.title}</h2>
                    <p className="text-muted-foreground">
                      {currentPhoto.location} - By {currentPhoto.photographer}
                    </p>
                    <p className="mt-2 max-w-2xl mx-auto">
                      {currentPhoto.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}