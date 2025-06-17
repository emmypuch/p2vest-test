import TransactionCard from "@/components/TransactionCard";
import React from "react";

interface HomeHeroSectionProps {
  currentIndex: number;
  direction: "left" | "right";
  nextSlide: () => void;
  prevSlide: () => void;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({
  currentIndex,
  direction,
  nextSlide,
  prevSlide,
}) => {
  return (
    <div>
      <TransactionCard
        currentIndex={currentIndex}
        direction={direction}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};

export default HomeHeroSection;
