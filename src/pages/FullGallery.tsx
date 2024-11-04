import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/data/photos";
import { useEffect, useRef, useState } from "react";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function FullGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setCurrentSection(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    container.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (currentSection < photos.length - 1) {
          setDirection(1);
          const nextSection = document.querySelector(
            `[data-index="${currentSection + 1}"]`
          );
          nextSection?.scrollIntoView({ behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (currentSection > 0) {
          setDirection(-1);
          const prevSection = document.querySelector(
            `[data-index="${currentSection - 1}"]`
          );
          prevSection?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);

  const scrollToNext = () => {
    if (currentSection < photos.length - 1) {
      setDirection(1);
      const nextSection = document.querySelector(
        `[data-index="${currentSection + 1}"]`
      );
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    if (currentSection > 0) {
      setDirection(-1);
      const prevSection = document.querySelector(
        `[data-index="${currentSection - 1}"]`
      );
      prevSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.y, velocity.y);

    if (swipe < -swipeConfidenceThreshold) {
      scrollToNext();
    } else if (swipe > swipeConfidenceThreshold) {
      scrollToPrevious();
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar"
    >
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Navigation Buttons */}
      <div className="fixed top-1/2 left-4 z-50 -translate-y-1/2 space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-sm text-white ${
            currentSection === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollToPrevious}
          disabled={currentSection === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="fixed top-1/2 right-4 z-50 -translate-y-1/2 space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-sm text-white ${
            currentSection === photos.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollToNext}
          disabled={currentSection === photos.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          data-index={index}
          className="section h-screen w-full snap-start relative"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={photo.fullSize}
              alt={photo.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
            >
              <h2 className="text-4xl font-bold mb-4">{photo.title}</h2>
              <p className="text-xl mb-2">{photo.location}</p>
              <p className="text-lg mb-4">By {photo.photographer}</p>
              <p className="max-w-2xl text-center text-gray-200">
                {photo.description}
              </p>
            </motion.div>
          </motion.div>
          {index < photos.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
              onClick={scrollToNext}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}