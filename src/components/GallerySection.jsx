import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.webp";

const images = [g1, g2, g3, g4];

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

const GallerySection = () => {
  const [showGallery, setShowGallery] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (activeImageIndex !== null) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveImageIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!showGallery) return null;

  return (
    <motion.section
      id="gallery"
      className="py-12 px-4 bg-white relative z-0 rounded-2xl shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Close Gallery Button */}
      {/* <button
        onClick={() => setShowGallery(false)}
        className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
        aria-label="Close Gallery"
      >
        &times;
      </button> */}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gallery of Godrej Horizon Wadala
        </motion.h2>
        <motion.button
          className="hidden lg:inline-block effetMoveGradient effectScale animated text-white px-5 py-2 rounded-lg shadow-md"
          data-form="lg"
          data-title="Download Gallery"
          data-btn="Send Now"
          data-enquiry="Download Gallery"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Gallery
        </motion.button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="mb-2 cursor-pointer"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            onClick={() => setActiveImageIndex(idx)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-auto object-cover rounded shadow-md transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Download Button */}
      <div className="mt-6 text-center lg:hidden">
        <motion.button
          className="effetMoveGradient effectScale animated text-white px-5 py-2 rounded-lg shadow-md"
          data-form="lg"
          data-title="Download Gallery"
          data-btn="Send Now"
          data-enquiry="Download Gallery"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Gallery
        </motion.button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-100 flex items-center justify-center p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              key={activeImageIndex}
              className="relative bg-white p-4 rounded-lg shadow-xl max-w-[90vw] max-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={images[activeImageIndex]}
                  alt={`Full Preview ${activeImageIndex + 1}`}
                  className="w-full h-full max-h-[70vh] object-contain rounded"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </AnimatePresence>

              {/* Top-right Close Button */}
              <button
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 shadow"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close Preview"
              >
                &times;
              </button>

              {/* Previous Button */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                ❮
              </button>

              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800"
                onClick={handleNext}
                aria-label="Next Image"
              >
                ❯
              </button>

              {/* Bottom-centered Close Button */}
              <div className="mt-4">
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition-all"
                  onClick={() => setActiveImageIndex(null)}
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GallerySection;
