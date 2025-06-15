"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeFaqStyles from "./HomeFaqSection.module.scss";
import FaqContents from "@/components/FaqContents";
import DownloadButton from "@/components/DownloadButton";
import DownloadAppModal from "@/components/DownloadAppModal";

const HomeFaqSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("contact-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={HomeFaqStyles.container}>
      <div className={HomeFaqStyles.container__info}>
        <h1 className={HomeFaqStyles.container__title}>FAQs</h1>

        <div className={HomeFaqStyles.container__faqIntro}>
          <p className={HomeFaqStyles.container__description}>
            Here are some basic questions <br /> and answers to help you get
            started.
          </p>
        </div>

        <div className={HomeFaqStyles.container__download}>
          <p className={HomeFaqStyles.container__downloadText}>
            Get Revve on your phone
          </p>
          <DownloadButton
            style={{
              background: "#fff",
              color: "#000",
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Download the app
          </DownloadButton>
        </div>

        <motion.div
          className={HomeFaqStyles.container__scrollHint}
          onClick={handleScrollToNextSection}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/images/faq-mouse.svg"
              alt="Scroll down"
              width={20}
              height={20}
            />
          </motion.div>
          <p>
            Point your mouse cursor <br /> here to continue scrolling
          </p>
        </motion.div>
      </div>

      <div className={HomeFaqStyles.container__faq}>
        <FaqContents />
      </div>

      <DownloadAppModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default HomeFaqSection;
