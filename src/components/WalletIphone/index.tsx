"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WalletIphoneStyles from "./WalletIphone.module.scss";
import { walletImages } from "@/data/walletImages";

const WalletIphone = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define transforms based on scroll progress
  const transform1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const transform2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const transform3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const transform4 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const transforms = [transform1, transform2, transform3, transform4];

  return (
    <div className={WalletIphoneStyles.wrapper} ref={ref}>
      <div className={WalletIphoneStyles.wrapper__iphone}>
        <Image
          src="/assets/images/iphone.png"
          alt="Iphone"
          width={432}
          height={836}
          unoptimized
        />
      </div>

      <div className={WalletIphoneStyles.wrapper__iphoneWallets}>
        {walletImages.map((wallet, index) => (
          <motion.div
            key={index}
            className={WalletIphoneStyles.walletImage}
            style={{
              top: `${index * 50}px`,
              y: transforms[index],
              zIndex: walletImages.length - index,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.5,
              ease: [0.16, 0.77, 0.47, 0.97],
            }}
            whileHover={{
              y: -30,
              scale: 1.08,
              rotate: index % 2 === 0 ? -3 : 3,
              zIndex: walletImages.length + 1,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                duration: 0.3,
              },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
          >
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={wallet.src}
                alt={wallet.alt}
                width={wallet.width}
                height={wallet.height}
                unoptimized
                style={{
                  filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transformStyle: "preserve-3d",
                }}
              />
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "16px",
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%)",
                  opacity: 0,
                  pointerEvents: "none",
                }}
                whileHover={{
                  opacity: 0.6,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WalletIphone;
