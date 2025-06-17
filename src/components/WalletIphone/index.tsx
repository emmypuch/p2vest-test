"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WalletIphoneStyles from "./WalletIphone.module.scss";

const walletImages = [
  {
    src: "/assets/images/ngn-wallet.png",
    alt: "NGN Wallet",
    width: 328,
    height: 180,
  },
  {
    src: "/assets/images/gha-wallet.png",
    alt: "GHA Wallet",
    width: 328,
    height: 180,
  },
  {
    src: "/assets/images/cad-wallet.png",
    alt: "CAD Wallet",
    width: 328,
    height: 180,
  },
  {
    src: "/assets/images/usd-wallet.png",
    alt: "USD Wallet",
    width: 328,
    height: 180,
  },
];

const WalletIphone = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transforms = walletImages.map((_, index) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(scrollYProgress, [0, 1], [0, -(index + 1) * 20])
  );

  return (
    <div className={WalletIphoneStyles.wrapper} ref={ref}>
      <div className={WalletIphoneStyles.wrapper__iphone}>
        <Image
          src="/assets/images/iphone.png"
          alt="Iphone"
          width={432}
          height={836}
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
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={wallet.src}
              alt={wallet.alt}
              width={wallet.width}
              height={wallet.height}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WalletIphone;
