import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Virtual } from 'swiper/modules';
import { photos } from "@/data/photos";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SwipeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Thumbnails Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Swipe Gallery
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Interactive Photo Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click any image to start the slideshow. Swipe or use arrow keys to navigate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer group relative overflow-hidden rounded-lg bg-muted aspect-square"
            >
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Swiper */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            onClick={() => setActiveIndex(0)}
            className="absolute top-4 right-4 text-white z-10 p-2"
          >
            ✕
          </button>
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Virtual]}
            spaceBetween={0}
            slidesPerView={1}
            initialSlide={activeIndex}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            virtual
            className="w-full h-screen"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={photo.id} virtualIndex={index}>
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <img
                    src={photo.fullSize}
                    alt={photo.title}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                  <div className="text-white text-center mt-4">
                    <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
                    <p className="text-gray-300">
                      {photo.location} - By {photo.photographer}
                    </p>
                    <p className="mt-2 max-w-2xl mx-auto text-gray-400">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}