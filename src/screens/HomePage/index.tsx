import React from "react";

import HomeHeroSection from "./_partials/HomeHeroSection";
import HomeAnimationSection from "./_partials/HomeAnimationSection";
import HomeWalletSection from "./_partials/HomeWalletSection";
import HomeShopSection from "./_partials/HomeShopSection";
import HomeBillsSection from "./_partials/HomeBillsSection";
import HomeFaqSection from "./_partials/HomeFaqSection";
import HomeContactSection from "./_partials/HomeContactSection";
import HomeFooterSection from "./_partials/HomeFooterSection";

function HomePage() {
  return (
    <div>
      <div id="hero-section">
        <HomeHeroSection />
      </div>
      <HomeAnimationSection />
      <div id="wallet-section">
        <HomeWalletSection />
      </div>
      <HomeShopSection />
      <HomeBillsSection />
      <HomeFaqSection />
      <div id="contact-section">
        <HomeContactSection />
      </div>
      <HomeFooterSection />
    </div>
  );
}

export default HomePage;
