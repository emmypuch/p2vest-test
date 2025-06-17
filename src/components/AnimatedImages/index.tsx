"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cloudinaryLoader from "@/lib/cloudinaryLoader";
import { imageData } from "@/data/imageData";
import styles from "./AnimatedImages.module.scss";

const POSITION_OVERRIDES = [
  { x: -300, y: -150, rotate: -5 },
  { x: -80, y: 80, rotate: 2 },
  { x: -310, y: 250, rotate: -8 },
  { x: 30, y: 10, rotate: 5 },
  { x: 100, y: -10, rotate: -3 },
  { x: 180, y: 15, rotate: 7 },
];

interface AnimatedImagesProps {
  count?: number;
  startIndex?: number;
}

const AnimatedImages = ({ count = 6, startIndex = 0 }: AnimatedImagesProps) => {
  const imagesToShow = imageData.slice(startIndex, startIndex + count);

  return (
    <div className={styles.wrapper}>
      {imagesToShow.map((image, index) => {
        const position = POSITION_OVERRIDES[index] || { x: 0, y: 0, rotate: 0 };

        return (
          <motion.div
            key={index}
            initial={{
              x: position.x,
              y: position.y,
              rotate: position.rotate,
            }}
            animate={{
              x: [position.x, position.x + 5, position.x],
              y: [position.y, position.y + 5, position.y],
              rotate: [position.rotate, position.rotate + 2, position.rotate],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={styles.imageContainer}
          >
            <Image
              loader={cloudinaryLoader}
              src={image.src}
              alt={image.alt}
              width={152}
              height={152}
              unoptimized
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedImages;
