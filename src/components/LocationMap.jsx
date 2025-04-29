import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Location</h2>
      </div>
      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Godrej Horizon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.280659098535!2d72.86236267520342!3d19.140735082079744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b0c0123dd1%3A0x95f2273899d9b464!2sGodrej%20Horizon%2C%20Wadala%20East!5e0!3m2!1sen!2sin!4v1713783721897!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
