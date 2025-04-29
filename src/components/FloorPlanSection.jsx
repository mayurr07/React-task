import React from "react";
import masterPlan from "../assets/masterplan.webp";
import floor2BHK from "../assets/2bhk_734.webp";
import floor3BHK1 from "../assets/3bhk_1053.webp";
import floor3BHK2 from "../assets/3bhk_1240.webp";

const FloorPlanSection = () => {
  return (
    <section className="shadow-sm py-10 px-4 bg-white shadows-lg rounded-2xl" id="sitefloorplan">
      <h2 className="text-3xl font-bold mb-2">Site & Floor Plan of Godrej Horizon Wadala</h2>
      <p className="text-lg mb-4">Master Plan</p>

      <div className="mb-8">
        <a href="#" className="block max-w-md mx-auto">
          <div className="rounded overflow-hidden shadow-lg border border-white">
            <div className="text-center">
              <img src={masterPlan} alt="Master Plan" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="bg-white text-[#024e6d] px-4 py-2 font-bold rounded">View Master Plan</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <p className="text-lg mb-4">Floor Plan</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          src: floor2BHK,
          alt: "2 BHK 733",
          label: "2 BHK 733 Sq.ft."
        }, {
          src: floor3BHK1,
          alt: "3 BHK 1053",
          label: "3 BHK 1053 Sq.ft."
        }, {
          src: floor3BHK2,
          alt: "3 BHK 1240",
          label: "3 BHK 1240 Sq.ft."
        }].map((plan, i) => (
          <a href="#" key={i} className="block">
            <div className="rounded overflow-hidden shadow-lg border border-white">
              <div className="relative">
                <img src={plan.src} alt={plan.alt} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-teal-600 to-green-700 text-white px-4 py-2 font-bold rounded">Enquire Now</span>
                </div>
              </div>
              <div className="text-center bg-white text-[#024e6d] py-2 font-semibold">
                {plan.label}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FloorPlanSection;
