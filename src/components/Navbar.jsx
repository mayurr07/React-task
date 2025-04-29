import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMoneyBill,
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaImages,
  FaDownload,
  FaRegEye,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { MdEventSeat, MdOutlineLocationOn } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import Logo from '../assets/logo_hb_new.svg';
import GodrejHorizonLogo from '../assets/logo1.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { icon: <FaMoneyBill />, text: 'Price' },
    { icon: <MdEventSeat />, text: 'Site & Floor Plan' },
    { icon: <GiHomeGarage />, text: 'Amenities' },
    { icon: <FaImages />, text: 'Gallery' },
    { icon: <MdOutlineLocationOn />, text: 'Location' },
    { icon: <FaRegEye />, text: 'Virtual Site Visit' },
    { icon: <FaDownload />, text: 'Download Brochure' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { y: 20, opacity: 0 }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img src={Logo} alt="Godrej Logo" className="w-7 h-7" />
          <img 
            src={GodrejHorizonLogo} 
            alt="Godrej Horizon" 
            className="h-8 object-contain" 
          />
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-4 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, color: '#047857' }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-green-700 cursor-pointer flex items-center gap-1"
            >
              {link.icon} {link.text}
            </motion.li>
          ))}
        </ul>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col text-right">
            <span className="text-gray-700 font-semibold text-sm">Pre Register</span>
            <a
              href="tel:+912248970339"
              className="text-black font-medium hover:text-green-700 text-sm"
            >
              +91 224 897 0339
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-700 hover:bg-teal-800 transition text-white text-sm px-4 py-2 rounded-md flex items-center"
          >
            <FaPhoneAlt className="mr-2" />
            Instant Call Back
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-gray-700 focus:outline-none button-menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black lg:hidden z-40"
                onClick={toggleMenu}
              />
              
              {/* Menu Content */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Godrej Logo" className="w-7 h-7" />
                    <img 
                      src={GodrejHorizonLogo} 
                      alt="Godrej Horizon" 
                      className="h-8 object-contain" 
                    />
                  </div>
                  <button onClick={toggleMenu} className="text-gray-500">
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <motion.ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="border-b border-gray-100 pb-3"
                    >
                      <a
                        href="#"
                        className="flex items-center text-gray-800 hover:text-green-700 text-lg"
                        onClick={toggleMenu}
                      >
                        <span className="mr-3">{link.icon}</span>
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div 
                  variants={itemVariants}
                  className="mt-8 pt-4 border-t border-gray-200"
                >
                  <div className="mb-4">
                    <span className="block text-gray-700 font-semibold mb-1">
                      Pre Register
                    </span>
                    <a
                      href="tel:+912248970339"
                      className="text-black font-medium hover:text-green-700"
                    >
                      +91 224 897 0339
                    </a>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-teal-700 hover:bg-teal-800 transition text-white py-3 rounded-md flex items-center justify-center"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Instant Call Back
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;