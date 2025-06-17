"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedImagesStyles from "./AnimatedImages.module.scss";
import cloudinaryLoader from "@/lib/cloudinaryLoader";
import { imageData } from "@/data/imageData";

interface AnimatedImagesProps {
  count?: number;
  startIndex?: number;
}

const AnimatedImages = ({ count = 6, startIndex = 0 }: AnimatedImagesProps) => {
  const imagesToShow = imageData.slice(startIndex, startIndex + count);

  return (
    <div className={AnimatedImagesStyles.wrapper}>
      {imagesToShow.map((image, index) => (
        <motion.div
          key={index}
          initial={{ x: image.x, y: image.y, rotate: image.rotate }}
          animate={{
            x: [image.x, image.x + 5, image.x],
            y: [image.y, image.y + 5, image.y],
            rotate: [image.rotate, image.rotate + 2, image.rotate],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          style={{
            position: "absolute",
            zIndex: 10,
          }}
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
      ))}
    </div>
  );
};

export default AnimatedImages;