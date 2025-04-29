import React from 'react';

const highlights = [
  { label: 'Location', value: 'Wadala, Mumbai' },
  { label: 'Configuration', value: '2 & 3 BHK' },
  { label: 'Starting Price', value: '₹2.45 Cr*' },
  { label: 'Possession', value: 'June 2028' },
  { label: 'Project Size', value: '5 Acres' },
  { label: 'Towers', value: '2 Towers' },
  { label: 'Floors', value: '41 Storeys' },
  { label: 'RERA No.', value: 'P51900034850' },
];

const ProjectHighlights = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Project Highlights
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50"
          >
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <h3 className="text-lg font-semibold text-gray-800">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectHighlights;
