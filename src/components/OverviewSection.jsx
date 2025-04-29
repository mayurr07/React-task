import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OverviewSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section 
      id="overview" 
      className="bg-white shadow-md py-8 px-4 my-3 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-2xl"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-green-700 capitalize mb-6"
      >
        Welcome to Godrej Horizon Wadala
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4 text-gray-700"
      >
        <p className="text-base sm:text-lg leading-relaxed">
          A residential address at the premium locale of Wadala, Signature Tower at Godrej Horizon offers a world of grandeur in the heart of Mumbai. Its modern 2 and 3-BHK residences with balcony offer views of the breathtaking sunrise at Eastern bay and the unique Mumbai skyline. Amenities include a 5-storeyed clubhouse, steam room, sky lounge, and an infinity pool - all crafted to provide a luxurious, almost regal lifestyle.
        </p>

        <div className="space-y-4">
          {showMore && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-base sm:text-lg leading-relaxed"
            >
              These luxuries become only more enhanced by the beautiful locale of the property! One of the most high-end neighbourhoods of the city, you get access to reputed landmarks such as Don Bosco High School, Poddar college, Tata Memorial Hospital, and the iconic 5 Gardens. The property is also close to the Wadala Railway Station, Wadala Bridge, Monorail station, Dadar TT Circle, & the Eastern Express Highway. With such an appealing locale and dazzling cityscape views - Signature Tower at Godrej Horizon offers a lifestyle where you can enjoy the transitioning hues of the city from sunrise to sunset to the fullest!
            </motion.p>
          )}

          <button
            onClick={toggleReadMore}
            className="text-green-600 hover:text-green-800 font-medium text-sm sm:text-base transition-colors"
          >
            {showMore ? 'Read less' : 'Read more'}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8"
      >
        <button className="bg-gradient-to-r from-teal-600 to-green-700 hover:from-teal-700 hover:to-green-800 text-white px-6 py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
          <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Brochure
        </button>
      </motion.div>
    </section>
  );
};

export default OverviewSection;