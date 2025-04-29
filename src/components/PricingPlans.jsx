import React from 'react';

const plans = [
  { type: '2 BHK', area: '750 - 850 Sq.Ft.', price: '₹2.45 Cr*' },
  { type: '3 BHK', area: '1050 - 1250 Sq.Ft.', price: '₹3.60 Cr*' },
];

const PricingPlans = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pricing</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-gray-200 bg-gray-50 rounded-xl p-8 w-full max-w-sm text-center shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">{plan.type}</h3>
            <p className="text-gray-600 mb-1">{plan.area}</p>
            <p className="text-lg font-bold text-gray-800">{plan.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
