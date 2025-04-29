import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import locmap from '../assets/locationmap.webp'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const nearbyPlaces = [
  "Reach Wadala Railway Station within 5 mins",
  "10 mins from Tata Memorial and Kem Hospital",
  "ITC Grand Central - 15 mins",
  "Get to St Joseph High School in 3 min",
  "VJTI College is 4 mins drive away",
  "Reach Five Gardens in 5 mins",
];

const AddressSection = () => {
  return (
    <motion.section
      id="address_section"
      className="py-10 px-4 shadow-lg bg-white rounded-2xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <span className="hidden" id="location"></span>

      <motion.h2
        variants={fadeInUp}
        className="text-2xl font-semibold capitalize mb-6"
      >
        Address of Godrej Horizon Wadala
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <motion.div variants={fadeInUp} className="w-full md:w-7/12">
          <span className="block text-lg font-medium capitalize mb-2">
            Map View
          </span>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3560.440695829495!2d72.85487965717117!3d19.012876786562064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdf57eef5f4e8637!2sGodrej%20Wadala!5e0!3m2!1sen!2sin!4v1651050041898!5m2!1sen!2sin"
              className="w-full h-[450px] rounded-md border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Godrej Horizon Wadala Map"
            ></iframe>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full md:w-5/12 text-center">
          <span className="block text-lg font-medium capitalize mb-3">
            Location Map
          </span>
          <a
            href="#"
            className="inline-block"
            data-form="lg"
            data-title="Download Location Map"
            data-btn="Download now"
            data-enquiry="View Location Map"
            data-toggle="modal"
            data-target="#enqModal"
          >
            <div className="relative shadow-sm border border-gray-300 rounded overflow-hidden w-fit mx-auto">
              <img
                src={locmap}
                alt="Location Map"
                className="w-[255px] h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold">
                  Download Location Map
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Nearby Places with icons */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-sm"
      >
        {nearbyPlaces.map((text, i) => (
          <motion.div
            variants={fadeIn}
            key={i}
            className="flex items-start gap-2"
          >
            <MapPin className="text-green-600 mt-0.5" size={18} />
            <span>{text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AddressSection;
