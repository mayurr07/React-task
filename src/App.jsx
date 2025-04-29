import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import ProjectHighlights from "./components/ProjectHighlights";
import PricingPlans from "./components/PricingPlans";
import ImageGallery from "./components/ImageGallery";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import './index.css'
import OverviewSection from "./components/OverviewSection";
import PricingSection from "./components/PricingSection";
import FloorPlanSection from "./components/FloorPlanSection";
import SiteFloorPlan from "./components/SiteFloorPlan";
import AmenitiesSection from "./components/AmenitiesSection";
import GallerySection from "./components/GallerySection";
import AddressSection from "./components/AddressSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_22vw] gap-4 p-4">
        <div className="space-y-8"> {/* Added space-y-8 for consistent spacing between sections */}
          <HeroSection />
          <OverviewSection/>
          <PricingSection/>
          {/* <FloorPlanSection/> */}
          <SiteFloorPlan/>
          <AmenitiesSection/> 
          <GallerySection/>
          <AddressSection/>
          {/* Add other sections here as needed */}
        </div>
        <div className="sticky top-4 h-fit">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;