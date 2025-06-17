"use client";

import React from "react";
import HomeAnimationSection from "@/screens/HomePage/_partials/HomeAnimationSection";
import AnimatedImages from "../AnimatedImages";
import CombinedSectionStyles from "./CombinedSection.module.scss";

interface CombinedSectionProps {
  currentIndex: number;
}

const CombinedSection: React.FC<CombinedSectionProps> = ({ currentIndex }) => {
  return (
    <div className={CombinedSectionStyles["combined-section"]}>
      <div className={CombinedSectionStyles["combined-section__images--left"]}>
        <AnimatedImages count={3} startIndex={0} />
      </div>

      <div className={CombinedSectionStyles["combined-section__center"]}>
        <HomeAnimationSection currentIndex={currentIndex} />
      </div>

      <div className={CombinedSectionStyles["combined-section__images--right"]}>
        <AnimatedImages count={3} startIndex={3} />
      </div>
    </div>
  );
};

export default CombinedSection;
