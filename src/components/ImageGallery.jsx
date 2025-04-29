import React from 'react';

const images = [
  'https://www.housebazaar.com/godrej-horizon/images/gallery/1.webp',
  'https://www.housebazaar.com/godrej-horizon/images/gallery/2.webp',
  'https://www.housebazaar.com/godrej-horizon/images/gallery/3.webp',
  'https://www.housebazaar.com/godrej-horizon/images/gallery/4.webp',
  'https://www.housebazaar.com/godrej-horizon/images/gallery/5.webp',
  'https://www.housebazaar.com/godrej-horizon/images/gallery/6.webp',
];

const ImageGallery = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
