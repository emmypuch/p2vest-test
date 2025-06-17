"use client";

import React, { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  return (
    <div className="overflow-x-hidden">
      <RevealOnScroll
        animationType="parallax"
        duration={1.2}
        delay={0.1}
        yOffset={80}
        className="will-change-transform"
      >
        <div id="hero-section">
          <HomeHeroSection
            currentIndex={currentIndex}
            direction={direction}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </div>
      </RevealOnScroll>

      <RevealOnScroll animationType="slideUp" delay={0.2}>
        <HomeAnimationSection currentIndex={currentIndex} />
      </RevealOnScroll>

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

      <RevealOnScroll
        animationType="slideRight"
        delay={0.3}
        xOffset={120}
        duration={0.9}
        easing="cubic-bezier(0.65, 0, 0.35, 1)"
      >
        <HomeBillsSection />
      </RevealOnScroll>

      <RevealOnScroll
        animationType="fade"
        delay={0.1}
        staggerChildren={0.15}
        staggerDirection={-1}
        duration={0.7}
      >
        <HomeFaqSection />
      </RevealOnScroll>

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
