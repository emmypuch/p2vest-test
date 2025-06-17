"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import Image from "next/image";
import TransactionCardStyles from "./TransactionCard.module.scss";
import DownloadButton from "../DownloadButton";
import { TRANSACTION_DATA } from "@/data/transactionCardData";
import DownloadAppModal from "../DownloadAppModal";
import Link from "next/link";

interface TransactionCardProps {
  currentIndex: number;
  direction: "left" | "right";
  nextSlide: () => void;
  prevSlide: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  currentIndex,
  direction,
  nextSlide,
  prevSlide,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, nextSlide]);

  const cardVariants: Variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      rotateY: direction === "right" ? 10 : -10,
      opacity: 0,
      scale: 0.92,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
        mass: 0.4,
        duration: 0.6,
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      rotateY: direction === "right" ? -10 : 10,
      opacity: 0,
      scale: 0.92,
      filter: "blur(4px)",
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
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
    enter: { opacity: 0, scale: 1.05 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const currentData = TRANSACTION_DATA[currentIndex];

  const BACKGROUND_IMAGES = [
    "p2vest/k6pwg8yypccuuyn5eeiz.png",
    "p2vest/mpihxbhd7onm3y3ishpk.png",
    "p2vest/meszn7rsaqqyn3xivi57.png",
    "p2vest/ea1gdchh9tjyvgncn7ze.png",
  ];

  const cloudinaryUrl = (path: string) =>
    `https://res.cloudinary.com/karenify/image/upload/f_auto,q_auto/${path}`;

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
            backgroundImage: `url(${cloudinaryUrl(
              BACKGROUND_IMAGES[currentIndex]
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      <header className={TransactionCardStyles["transaction-card__header"]}>
        <Link href="/">
          <Image
            src="/assets/images/home-hero-logo.svg"
            alt="Revve Logo"
            width={120}
            height={120}
            unoptimized
            className={TransactionCardStyles["transaction-card__logo"]}
            style={{ cursor: "pointer" }}
          />
        </Link>

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
            unoptimized
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
            unoptimized
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
                    unoptimized
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
                <div
                  className={
                    TransactionCardStyles["transaction-card__info-group"]
                  }
                >
                  <Image
                    src={currentData.bankLogo}
                    alt="bank logo"
                    width={32}
                    height={32}
                    unoptimized
                    className={
                      TransactionCardStyles["transaction-card__bank-logo"]
                    }
                  />
                  <div
                    className={
                      TransactionCardStyles["transaction-card__text-group"]
                    }
                  >
                    <span>{currentData.date}</span>
                    <span
                      className={
                        TransactionCardStyles["transaction-card__transfer-text"]
                      }
                    >
                      {currentData.description}
                    </span>
                  </div>
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
            unoptimized
          />
        </motion.div>
      </main>

      <footer className={TransactionCardStyles["transaction-card__footer"]}>
        <div>
          <p className={TransactionCardStyles["transaction-card__footer-text"]}>
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
