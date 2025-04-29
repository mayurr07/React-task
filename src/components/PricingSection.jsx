import React from "react";
import costingImg from "../assets/costing.jpg"; // Adjust path as needed

const PricingSection = () => {
  const pricingData = [
    { type: "2 BHK Premier", carpet: "745 Sq. ft.", price: "2.91 Cr Onwards" },
    { type: "2 BHK Luxe", carpet: "733 Sq. ft.", price: "2.94 Cr Onwards" },
    { type: "2 BHK Premier", carpet: "745 Sq. ft.", price: "2.99 Cr Onwards" },
    { type: "3 BHK Premier", carpet: "1053/1059/1070 Sq. ft.", price: "4.26 Cr Onwards" },
    { type: "3 BHK Royal", carpet: "1240 Sq. ft.", price: "4.99 Cr Onwards" }
  ];

  return (
    <section id="pricing" className="py-12 shadow-sm bg-white px-4 shadows-lg rounded-2xl my-4">
      <span className="block text-2xl font-semibold mb-6 capitalize">Price</span>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 overflow-x-auto">
          <table className="table-auto w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left border">Type</th>
                <th className="p-4 text-left border">Carpet Area</th>
                <th className="p-4 text-left border">Price</th>
                <th className="p-4 text-left border"></th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-4 border-t border-l">{item.type}</td>
                  <td className="p-4 border-t">{item.carpet}</td>
                  <td className="p-4 border-t">₹ {item.price}</td>
                  <td className="p-4 border-t">
                    <button
                      className="text-white bg-[#007bff] hover:bg-[#0056b3] px-4 py-2 text-sm rounded"
                      data-form="lg"
                      data-title="Send me costing details"
                      data-btn="Send now"
                      data-enquiry="Price Breakup"
                      data-redirect="floorplan"
                    >
                      Price Breakup
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="block w-full text-center border rounded overflow-hidden shadow hover:shadow-md"
            data-form="lg"
            data-title="Send me costing details"
            data-btn="Send now"
            data-enquiry="Complete Costing Details"
          >
            <div className="relative">
              <img
                src={costingImg}
                alt="Complete Costing Details"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-gradient-to-r from-[#066f48] to-[#024e6d] px-4 py-2 text-white font-medium rounded">Enquire Now</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#066f48] to-[#024e6d] text-white text-center p-4">
              <h5 className="text-lg font-semibold">Complete Costing Details</h5>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
