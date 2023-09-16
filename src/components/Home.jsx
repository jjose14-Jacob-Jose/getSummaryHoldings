"use client";

import HeroSection from "./static/home/HeroSection";
import GoodbyeToTaxingCalSection from "./static/home/GoodbyeToTaxingCalSection";
import WorkFasterSection from "./static/home/WorkFasterSection";
import ContactUsSection from "./static/home/ContactUsSection";
import FeaturesSection from "./static/home/FeaturesSection";
import CheckoutTheProductSection from "./static/home/CheckoutTheProductSection";

/**
 * Home page component of the site. Describes the tool's purpose, features, etc.
 *
 * @author pdoddi
 */
export default function Home() {

  return (
    <div className="items-center align-middle justify-center text-center lg:text-left">
      <HeroSection />
      {/* Learn More */}
      <div id="learnMoreSection">
        <GoodbyeToTaxingCalSection />
        <WorkFasterSection />
        <FeaturesSection />
        <CheckoutTheProductSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
