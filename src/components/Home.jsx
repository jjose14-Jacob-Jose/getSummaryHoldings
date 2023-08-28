"use client";

import HeroSection from "./static/Home/HeroSection";
import GoodbyeToTaxingCalSection from "./static/Home/GoodbyeToTaxingCalSection";
import WorkFasterSection from "./static/Home/WorkFasterSection";
import CheckoutTheProductPrototypeSection from "./static/Home/CheckoutTheProductPrototypeSection";
import ContactUsSection from "./static/Home/ContactUsSection";
import FeaturesSection from "./static/Home/FeaturesSection";

/**
 * Home page component of the site. Describes the tool's purpose, features, etc.
 *
 * @author pdoddi
 */
export default function Home() {
  function scrollToLearnMore() {
    const element = document.getElementById("learnMoreSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="items-center align-middle justify-center text-center lg:text-left">
      {/* Hero section */}
      <HeroSection />

      {/* Learn More */}
      <div id="learnMoreSection">
        {/* Goodbye to taxing calculations section */}
        <GoodbyeToTaxingCalSection />

        {/* Work faster section */}
        <WorkFasterSection />

        {/* Features section */}
        <FeaturesSection />

        {/* Check out the product prototype section*/}
        <CheckoutTheProductPrototypeSection />

        {/* Contact section */}
        <ContactUsSection />
      </div>
    </div>
  );
}
