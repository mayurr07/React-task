import { motion } from "framer-motion";
import masterPlanImg from "../assets/masterplan.webp";
import plan2BHK from "../assets/2bhk_734.webp";
import plan3BHK1 from "../assets/3bhk_1053.webp";
import plan3BHK2 from "../assets/3bhk_1240.webp";

const SiteFloorPlan = () => {
  const floorPlans = [
    { label: "2 BHK 733 Sq.ft.", img: plan2BHK },
    { label: "3 BHK 1053 Sq.ft.", img: plan3BHK1 },
    { label: "3 BHK 1240 Sq.ft.", img: plan3BHK2 },
  ];

  return (
    <section
      id="sitefloorplan"
      className="my-12 px-4 py-4 bg-white shadows-lg rounded-2xl"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-1">
        Site & Floor Plan of Godrej Horizon Wadala
      </h2>

      <motion.span
        className="block text-center font-medium text-white text-base sm:text-lg py-2 rounded mb-4 bg-gradient-moving bg-200 animate-gradientX"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Master Plan
      </motion.span>

      <div className="flex justify-center mb-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="max-w-md shadow-md border border-gray-300 rounded overflow-hidden"
        >
          <img
            src={masterPlanImg}
            alt="Master Plan"
            className="w-full object-cover"
          />
          <div className="p-2 bg-black bg-opacity-40 text-white text-center font-medium">
            View Master Plan
          </div>
        </motion.div>
      </div>

      <motion.span
        className="block text-center font-medium text-white text-base sm:text-lg py-2 rounded mb-4 bg-gradient-moving bg-200 animate-gradientX"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Floor Plan
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {floorPlans.map(({ label, img }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="shadow-md border border-gray-300 rounded overflow-hidden"
          >
            <img
              src={img}
              alt={label}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
            <div className="p-3 text-center font-semibold">
              <p className="bg-gradient-moving bg-clip-text text-transparent animate-gradientX">
                {label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SiteFloorPlan;
