"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HomeAnimationStyles from "./HomeAnimationSection.module.scss";

const HomeAnimationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div className={HomeAnimationStyles.container} ref={ref}>
      <div className={HomeAnimationStyles.container__hourGlass}>
        <motion.div
          animate={!showText ? { rotateX: [0, 180, 0] } : {}}
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
        <p>please wait...</p>
      </div>

      <div className={HomeAnimationStyles.container__image}>
        <Image
          src="/assets/images/animation-lady.png"
          alt="lady"
          layout="fill"
        />
        {showText && (
          <div className={HomeAnimationStyles.container__textOverlay}>
            <p>
              Seamlessly bridge distances with our effortless remittance
              service. Send support, and financial care to your loved ones
              back home.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showText && (
          <motion.h2
            className={HomeAnimationStyles.container__title}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 100 }}
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