"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeBillsStyles from "./HomeBillsSection.module.scss";

const HomeBillsSection = () => {
  return (
    <section className={HomeBillsStyles.wrapper}>
      <div className={HomeBillsStyles.wrapper__content}>
        <div className={HomeBillsStyles.wrapper__info}>
          <h1 className={HomeBillsStyles.wrapper__title}>Pay Bills</h1>
          <p className={HomeBillsStyles.wrapper__description}>
            Say goodbye to long queues and endless processes—our platform offers
            a seamless solution for paying bills instantly without any hiccups.
          </p>
          <div className={HomeBillsStyles.wrapper__app}>
            <p className={HomeBillsStyles.wrapper__appText}>
              Get Revve on your phone
            </p>
            <button className={HomeBillsStyles.wrapper__appButton}>
              Coming soon
            </button>
          </div>
        </div>

        <motion.div
          className={HomeBillsStyles.wrapper__calendar}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/images/bills-calendar.png"
            alt="Calendar"
            width={340}
            height={588}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBillsSection;
