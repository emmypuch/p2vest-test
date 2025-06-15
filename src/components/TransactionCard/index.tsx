"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import Image from "next/image";
import TransactionCardStyles from "./TransactionCard.module.scss";
import DownloadButton from "../DownloadButton";
import { TRANSACTION_DATA } from "@/data/transactionCardData";
import DownloadAppModal from "../DownloadAppModal";

const TransactionCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const cardVariants: Variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5,
      } as Transition,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      } as Transition,
    }),
  };

  const countryVariants: Variants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      } as Transition,
    },
    tap: {
      scale: 0.9,
    },
  };

  const backgroundVariants: Variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === TRANSACTION_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TRANSACTION_DATA.length - 1 : prevIndex - 1
    );
  };

  const currentData = TRANSACTION_DATA[currentIndex];

  const BACKGROUND_IMAGES = [
    "/assets/images/hero-canada.png",
    "/assets/images/hero-cad.png",
    "/assets/images/hero-ngn.png",
    "/assets/images/hero-gha.png",
  ];

  return (
    <div className={TransactionCardStyles["transaction-card"]}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={TransactionCardStyles["background-container"]}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGES[currentIndex]})`,
          }}
        />
      </AnimatePresence>

      <header className={TransactionCardStyles["transaction-card__header"]}>
        <div className={TransactionCardStyles["transaction-card__logo"]}>
          <Image
            src="/assets/images/home-hero-logo.svg"
            alt="Revve Logo"
            width={120}
            height={120}
          />
        </div>
        <h1 className={TransactionCardStyles["transaction-card__title"]}>
          Send. Shop. Spend
        </h1>
        <div
          className={TransactionCardStyles["transaction-card__social-icons"]}
        >
          <Image
            src="/assets/images/home-hero-control.svg"
            alt="Icons"
            width={76}
            height={48}
          />
        </div>
      </header>

      <main className={TransactionCardStyles["transaction-card__main-content"]}>
        <motion.div
          className={TransactionCardStyles["transaction-card__country-left"]}
          onClick={prevSlide}
          variants={countryVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ cursor: "pointer", zIndex: 10 }}
        >
          <span>{currentData.leftCountry}</span>
          <Image
            src="/assets/images/home-hero-right-arrow.svg"
            alt="right arrow"
            width={50}
            height={50}
          />
        </motion.div>

        <div
          className={
            TransactionCardStyles["transaction-card__phone-card-container"]
          }
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={TransactionCardStyles["transaction-card__phone-card"]}
              style={{
                borderColor: currentData.textColor,
                boxShadow: `0 10px 30px rgba(0,0,0,0.2)`,
              }}
            >
              <div
                className={
                  TransactionCardStyles["transaction-card__overlay-card"]
                }
              >
                <div
                  className={TransactionCardStyles["transaction-card__flag"]}
                >
                  <Image
                    src={currentData.flag}
                    alt={`${currentData.leftCountry} Flag`}
                    width={52}
                    height={52}
                  />
                </div>
                <div
                  className={TransactionCardStyles["transaction-card__value"]}
                >
                  <span
                    className={
                      TransactionCardStyles["transaction-card__amount"]
                    }
                  >
                    {currentData.amount}
                  </span>
                </div>
              </div>

              <div
                className={
                  TransactionCardStyles["transaction-card__transaction-info"]
                }
              >
                <div>
                  <Image
                    src={currentData.bankLogo}
                    alt="bank logo"
                    width={32}
                    height={32}
                  />
                  <span>{currentData.date}</span>
                  <span
                    className={
                      TransactionCardStyles["transaction-card__transfer-text"]
                    }
                  >
                    {currentData.description}
                  </span>
                </div>
                <div>
                  <span
                    className={
                      TransactionCardStyles["transaction-card__transfer-amount"]
                    }
                  >
                    {currentData.transferAmount}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className={TransactionCardStyles["transaction-card__country-right"]}
          onClick={nextSlide}
          variants={countryVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ cursor: "pointer", zIndex: 10 }}
        >
          <span>{currentData.rightCountry}</span>
          <Image
            src="/assets/images/home-hero-left-arrow.svg"
            alt="left arrow"
            width={50}
            height={50}
          />
        </motion.div>
      </main>

      <footer className={TransactionCardStyles["transaction-card__footer"]}>
        <div>
          <p>
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </p>
        </div>
        <div className={TransactionCardStyles["transaction-card__download"]}>
          <span>Get Revve on your phone</span>
          <DownloadButton
            style={{
              background: "transparent",
              color: currentData.textColor,
              border: `1px solid ${currentData.textColor}`,
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Download the app
          </DownloadButton>
        </div>
      </footer>

      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TransactionCard;
