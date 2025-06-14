"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import Image from "next/image";
import TransactionCardStyles from "./TransactionCard.module.scss";
import DownloadButton from "../DownloadButton";
import { TRANSACTION_DATA } from "@/data/transactionCardData";

const TransactionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Animation variants
  const cardVariants: Variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      } as Transition,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      } as Transition,
    }),
  };

  const countryVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 } as Transition,
    },
    tap: {
      scale: 0.95,
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

  const getBackgroundStyle = () => {
    if (typeof currentData.backgroundColor === "string") {
      return { backgroundColor: currentData.backgroundColor };
    } else {
      return {
        background: `linear-gradient(90deg, ${currentData.backgroundColor.gradient[0]}, ${currentData.backgroundColor.gradient[1]})`,
      };
    }
  };

  return (
    <div
      className={TransactionCardStyles["transaction-card"]}
      style={{
        ...getBackgroundStyle(),
        color: currentData.textColor,
      }}
    >
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
          style={{ cursor: "pointer" }}
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
            >
              <div
                className={
                  TransactionCardStyles["transaction-card__lady-image"]
                }
              >
                <Image
                  src={currentData.image}
                  alt="transaction visual"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
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
          style={{ cursor: "pointer" }}
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
          >
            Download the app
          </DownloadButton>
        </div>
      </footer>
    </div>
  );
};

export default TransactionCard;
