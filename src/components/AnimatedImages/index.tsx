"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedImagesStyles from "./AnimatedImages.module.scss";

const imageData = [
  { src: "/assets/images/sendA.png", alt: "Send A", x: -50, y: -30, rotate: -5 },
  { src: "/assets/images/currency.png", alt: "Currency", x: 40, y: -50, rotate: 3 },
  { src: "/assets/images/shopping.png", alt: "Shopping", x: -30, y: 40, rotate: -2 },
  { src: "/assets/images/eating.png", alt: "Eating", x: 50, y: 30, rotate: 4 },
  { src: "/assets/images/paper-plane.png", alt: "Paper Plane", x: -20, y: -60, rotate: -8 },
  { src: "/assets/images/send.png", alt: "Send", x: 60, y: -20, rotate: 6 },
];

const AnimatedImages = () => {
  return (
    <div className={AnimatedImagesStyles.wrapper}>
      {imageData.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: image.x, y: image.y, rotate: image.rotate }}
          animate={{ 
            opacity: 1,
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
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedImages;