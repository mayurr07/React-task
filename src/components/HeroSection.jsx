import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/homeimg1.webp";
import img2 from "../assets/homeimg2.webp";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const HeroSection = () => {
  const slides = [
    {
      img: img1,
      alt: "Godrej Horizon View 1",
      id: 0,
    },
    {
      img: img2,
      alt: "Godrej Horizon View 2",
      id: 1,
    },
  ];

  const [[current, direction], setCurrent] = React.useState([0, 1]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const swipeToImage = (swipeDirection) => {
    setCurrent([
      (current + swipeDirection + slides.length) % slides.length,
      swipeDirection,
    ]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const InfoBox = () => (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-sm  space-y-3 sm:space-y-4">
      {/* Promo Text */}
      <div className="text-left space-y-1">
        <p className="text-gray-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
          BOOKING OPEN: LIMITED TIME ONLY
        </p>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Godrej Horizon Wadala
        </h1>
        <p className="text-gray-700 text-xs sm:text-sm">
          At Wadala <span className="mx-1">•</span> By Godrej Properties
        </p>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 text-left text-xs sm:text-sm">
        <div>
          <p className="text-gray-500">Land Parcel</p>
          <p className="font-medium">5 Acres</p>
        </div>
        <div>
          <p className="text-gray-500">Floors</p>
          <p className="font-medium">44 Storeys</p>
        </div>
        <div>
          <p className="text-gray-500">Possession</p>
          <p className="font-medium">Dec 2026</p>
        </div>
      </div>

      {/* Offer Box */}
      <div className="text-white text-xs sm:text-sm p-3 rounded bg-[length:400%_400%] animate-gradientX bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        <ul className="space-y-1 list-none pl-0">
          <li>- Get 1% Monthly Payment Plan Benefit</li>
          <li>- 30:30:30:10 Payment Plan Available</li>
          <li>- Exclusive Flexi Payment Plan</li>
        </ul>
      </div>

      {/* Price */}
      <div className="text-left space-y-1">
        <p className="text-green-700 font-bold text-sm sm:text-base">
          Luxurious 2 & 3 BHK Starts At
        </p>
        <p className="text-green-700 text-xl sm:text-2xl font-extrabold">
          ₹ 2.91 Cr{" "}
          <span className="text-sm sm:text-base font-semibold">Onwards</span>
        </p>
      </div>

      {/* CTA Button */}
      <button className="w-full py-2 text-xs sm:text-sm bg-green-600 hover:bg-green-700 text-white font-medium rounded transition duration-300">
        Download Brochure
      </button>
    </div>
  );

  return (
    <>
      {/* Image Carousel */}
      <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-2xl">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].img})` }}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          />
        </AnimatePresence>

        {/* Overlay Info Box (for desktop/tablet only) */}
        <div className="absolute z-20 left-0 top-0 w-full h-full hidden md:flex items-center justify-start px-4 sm:px-8 md:px-12">
          <InfoBox />
        </div>
      </div>

      {/* Info Box below image (for mobile only) */}
      <div className="md:hidden w-full px-4 mt-4">
        <InfoBox />
      </div>
    </>
  );
};

export default HeroSection;
