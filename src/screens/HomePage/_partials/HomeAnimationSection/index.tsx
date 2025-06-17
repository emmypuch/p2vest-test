"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HomeAnimationStyles from "./HomeAnimationSection.module.scss";

interface HomeAnimationSectionProps {
  currentIndex: number;
}

const HomeAnimationSection: React.FC<HomeAnimationSectionProps> = ({
  currentIndex,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showText, setShowText] = useState(false);

  const ANIMATION_IMAGES = [
    "/assets/images/animation-lady.png",
    "/assets/images/sub-bg1.png",
    "/assets/images/sub-bg4.png",
    "/assets/images/sub-bg3.png",
  ];

  // Scroll to top or next section
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div
      className={HomeAnimationStyles.container}
      ref={ref}
      id="animation-section"
    >
      <div className={HomeAnimationStyles.container__hourGlass}>
        {!showText ? (
          <motion.div
            animate={{ rotateX: [0, 180, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/images/hour-glass.svg"
              alt="Hour Glass"
              width={20}
              height={20}
              unoptimized
            />
          </motion.div>
        ) : (
          <div className={HomeAnimationStyles.container__scrollIcons}>
            <button onClick={() => scrollTo("hero-section")}>
              <Image
                src="/assets/images/scroll-up.svg"
                alt="Scroll Up"
                width={120}
                height={20}
                unoptimized
              />
            </button>
            <button onClick={() => scrollTo("wallet-section")}>
              <Image
                src="/assets/images/scroll-down.svg"
                alt="Scroll Down"
                width={120}
                height={20}
                unoptimized
              />
            </button>
          </div>
        )}
        {!showText && <p>please wait...</p>}
      </div>

      <div className={HomeAnimationStyles.container__image}>
        {/* sub images that would switch as the hero background images is in view */}
        <Image
          src={ANIMATION_IMAGES[currentIndex]}
          alt="Animation content"
          layout="fill"
          objectFit="contain"
          unoptimized
        />

        {showText && (
          <div className={HomeAnimationStyles.container__textBottom}>
            <p>
              Seamlessly bridge distances with our effortless remittance
              service. Send support, and financial care to your loved ones back
              home.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showText && (
          <motion.h2
            className={HomeAnimationStyles.container__title}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 40 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.5,
            }}
          >
            Send and Receive <br /> Money
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeAnimationSection;
