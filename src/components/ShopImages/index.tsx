import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";
import ShopImagesStyles from "./ShopImages.module.scss";

const ShopImages = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      } as Transition
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      } as Transition
    },
    hover: {
      y: -20,
      transition: { 
        type: "spring", 
        stiffness: 300 
      } as Transition
    }
  };

  const iphoneVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10
      } as Transition
    },
    hover: {
      rotate: -5,
      transition: { duration: 0.3 } as Transition
    }
  };

  return (
    <motion.div 
      className={ShopImagesStyles.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={ShopImagesStyles.wrapper__iphone}
        variants={iphoneVariants}
        whileHover="hover"
      >
        <Image
          src="/assets/images/shopping-iphone.png"
          alt="Shopping iPhone"
          width={432}
          height={836}
          priority
          unoptimized
          className={ShopImagesStyles.wrapper__image}
        />
      </motion.div>

      <div className={ShopImagesStyles.wrapper__items}>
        <motion.div 
          className={ShopImagesStyles.wrapper__item}
          variants={itemVariants}
          whileHover="hover"
        >
          <Image
            src="/assets/images/shopping-perfume.png"
            alt="Perfume"
            width={120}
            height={792}
            unoptimized
            className={ShopImagesStyles.wrapper__image}
          />
        </motion.div>

        <motion.div 
          className={ShopImagesStyles.wrapper__item}
          variants={itemVariants}
          whileHover="hover"
        >
          <Image
            src="/assets/images/shopping-girl.png"
            alt="Fashion Girl"
            width={120}
            height={792}
            unoptimized
            className={ShopImagesStyles.wrapper__image}
          />
        </motion.div>

        <motion.div 
          className={ShopImagesStyles.wrapper__item}
          variants={itemVariants}
          whileHover="hover"
        >
          <Image
            src="/assets/images/shopping-shoe.png"
            alt="Shoe"
            width={256}
            height={792}
            unoptimized
            className={ShopImagesStyles.wrapper__image}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ShopImages;