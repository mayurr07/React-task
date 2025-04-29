import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import st5club from '../assets/st5club.webp';
import banquet from '../assets/banquet.webp';
import gym from '../assets/gym.webp';
import indoorgame from '../assets/indoorgame.webp';
import infiswimming from '../assets/infiswimming.webp';
import libraryg from '../assets/libraryg.webp';
import minigolf from '../assets/minigolf.webp';
import roofjogging from '../assets/roofjogging.webp';
import skylounge from '../assets/skylounge.webp';
import squash from '../assets/squash.webp';
import steamroom from '../assets/steamroom.webp';
import swimming from '../assets/swimming.webp';

const amenities = [
  { src: st5club, label: '5 STOREYED CLUBHOUSE' },
  { src: banquet, label: 'BANQUET HALL' },
  { src: gym, label: 'GYMNASIUM' },
  { src: indoorgame, label: 'INDOOR GAMES ROOM' },
  { src: infiswimming, label: 'INFINITY EDGE SWIMMING POOL' },
  { src: libraryg, label: 'LIBRARY' },
  { src: minigolf, label: 'MINI GOLF' },
  { src: roofjogging, label: 'ROOF TOP JOGGING TRACK' },
  { src: skylounge, label: 'SKY LOUNGE' },
  { src: squash, label: 'SQUASH COURT' },
  { src: steamroom, label: 'STEAM & MASSAGE ROOM' },
  { src: swimming, label: 'SWIMMING POOL' },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const AmenitiesSection = () => {
  const slides = chunkArray(amenities, 6); // 3 rows, 2 cols
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="amenities" className="py-12 px-4 shadow-lg rounded-2xl bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Amenities of Godrej Horizon Wadala</h2>
        <button
          className="hidden lg:inline-block text-white px-5 py-2 rounded-lg shadow-md effetMoveGradient effectScale animated"
          data-form="lg"
          data-title="Download Amenities"
          data-btn="Send Now"
          data-enquiry="Download Amenities"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
        >
          Download Amenities
        </button>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-6"
          >
            {slides[currentSlide].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={item.src} alt={item.label} className="w-full h-48 object-cover rounded shadow" />
                <p className="mt-2 font-medium text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="text-white px-4 py-2 rounded-lg shadow-md effetMoveGradient effectScale animated"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="text-white px-4 py-2 rounded-lg shadow-md effetMoveGradient effectScale animated"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-8 text-center lg:hidden">
        <button
          className="text-white px-5 py-2 rounded-lg shadow-md effetMoveGradient effectScale animated"
          data-form="lg"
          data-title="Download Amenities"
          data-btn="Send Now"
          data-enquiry="Download Amenities"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
        >
          Download Amenities
        </button>
      </div>
    </section>
  );
};

export default AmenitiesSection;
