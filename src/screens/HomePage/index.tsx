import React from "react";
import HomeHeroSection from "./_partials/HomeHeroSection";
import HomeAnimationSection from "./_partials/HomeAnimationSection";
import HomeWalletSection from "./_partials/HomeWalletSection";
import HomeShopSection from "./_partials/HomeShopSection";
import HomeBillsSection from "./_partials/HomeBillsSection";
import HomeFaqSection from "./_partials/HomeFaqSection";
import HomeContactSection from "./_partials/HomeContactSection";
import HomeFooterSection from "./_partials/HomeFooterSection";
import RevealOnScroll from "@/components/RevealOnScroll";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero with parallax effect */}
      <RevealOnScroll 
        animationType="parallax" 
        duration={1.2} 
        delay={0.1}
        yOffset={80}
        className="will-change-transform"
      >
        <div id="hero-section">
          <HomeHeroSection />
        </div>
      </RevealOnScroll>

      {/* Animation section with staggered children */}
      <RevealOnScroll 
        animationType="slideUp" 
        delay={0.2} 
        yOffset={60}
        staggerChildren={0.5}
        duration={0.8}
        easing="cubic-bezier(0.22, 1, 0.36, 1)"
      >
        <HomeAnimationSection />
      </RevealOnScroll>

      {/* Wallet section with 3D flip */}
      <RevealOnScroll 
        animationType="flipY" 
        delay={0.3} 
        duration={1}
        easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
        className="perspective-1000"
      >
        <div id="wallet-section">
          <HomeWalletSection />
        </div>
      </RevealOnScroll>

      {/* Shop section with zoom and slight rotation */}
      <RevealOnScroll 
        animationType="zoom" 
        delay={0.2} 
        duration={1.1}
        scale={0.88}
        easing="cubic-bezier(0.32, 0, 0.67, 0)"
        className="origin-center"
      >
        <HomeShopSection />
      </RevealOnScroll>

      {/* Bills section with horizontal slide */}
      <RevealOnScroll 
        animationType="slideRight" 
        delay={0.3} 
        xOffset={120}
        duration={0.9}
        easing="cubic-bezier(0.65, 0, 0.35, 1)"
      >
        <HomeBillsSection />
      </RevealOnScroll>

      {/* FAQ with staggered items */}
      <RevealOnScroll 
        animationType="fade" 
        delay={0.1}
        staggerChildren={0.15}
        staggerDirection={-1}
        duration={0.7}
      >
        <HomeFaqSection />
      </RevealOnScroll>

      {/* Contact with dramatic slide up */}
      <RevealOnScroll 
        animationType="slideUp" 
        delay={0.2} 
        yOffset={100}
        duration={1.2}
        easing="cubic-bezier(0.12, 0, 0.39, 0)"
      >
        <div id="contact-section">
          <HomeContactSection />
        </div>
      </RevealOnScroll>

      {/* Footer with simple but elegant fade */}
      <RevealOnScroll 
        animationType="fade" 
        delay={0.4}
        duration={1.5}
        easing="cubic-bezier(0.22, 1, 0.36, 1)"
      >
        <HomeFooterSection />
      </RevealOnScroll>
    </div>
  );
}

export default HomePage;
