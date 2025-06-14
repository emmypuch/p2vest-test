"use client"

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  rotate?: number;
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  easing?: string | number[];
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoom' | 'flipX' | 'flipY' | 'parallax';
  staggerChildren?: number;
  staggerDirection?: 1 | -1;
  className?: string;
}

const RevealOnScroll = ({ 
  children, 
  delay = 0.2, 
  yOffset = 30, 
  xOffset = 30,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scale = 0.95,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rotate = 0,
  duration = 1,
  once = true,
  amount = 0.2,
//   easing = [0.16, 1, 0.3, 1], 
  animationType = 'fade',
  staggerChildren = 0,
  staggerDirection = 1,
  className = ""
}: RevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [inView, controls, once]);

  const getVariants = (): Variants => {
    const base = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay,
        //   ease: easing,
          staggerChildren: staggerChildren > 0 ? staggerChildren * 0.1 : undefined,
          when: staggerChildren > 0 ? "beforeChildren" : undefined
        }
      }
    };

    const animations = {
      fade: {
        hidden: { ...base.hidden },
        visible: { ...base.visible }
      },
      slideUp: {
        hidden: { ...base.hidden, y: yOffset },
        visible: { ...base.visible, y: 0 }
      },
      slideLeft: {
        hidden: { ...base.hidden, x: xOffset },
        visible: { ...base.visible, x: 0 }
      },
      slideRight: {
        hidden: { ...base.hidden, x: -xOffset },
        visible: { ...base.visible, x: 0 }
      },
      zoom: {
        hidden: { ...base.hidden, scale: 0.85 },
        visible: { ...base.visible, scale: 1 }
      },
      flipX: {
        hidden: { ...base.hidden, rotateX: 90 },
        visible: { ...base.visible, rotateX: 0 }
      },
      flipY: {
        hidden: { ...base.hidden, rotateY: 90 },
        visible: { ...base.visible, rotateY: 0 }
      },
      parallax: {
        hidden: { ...base.hidden, y: yOffset * 1.5 },
        visible: { ...base.visible, y: yOffset * -0.5 }
      }
    };

    return animations[animationType] as Variants; 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren * 0.1 * staggerDirection,
        when: "beforeChildren"
      }
    }
  };

  return staggerChildren > 0 ? (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      style={{ 
        transformOrigin: 'center',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;