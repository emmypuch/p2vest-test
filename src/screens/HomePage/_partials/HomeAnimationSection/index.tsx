"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HomeAnimationStyles from "./HomeAnimationSection.module.scss";

const HomeAnimationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showText, setShowText] = useState(false);

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
              />
            </button>
            <button onClick={() => scrollTo("wallet-section")}>
              <Image
                src="/assets/images/scroll-down.svg"
                alt="Scroll Down"
                width={120}
                height={20}
              />
            </button>
          </div>
        )}
        {!showText && <p>please wait...</p>}
      </div>

      <div className={HomeAnimationStyles.container__image}>
        <Image
          src="/assets/images/animation-lady.png"
          alt="lady"
          layout="fill"
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
            Send and Receive Money
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeAnimationSection;
