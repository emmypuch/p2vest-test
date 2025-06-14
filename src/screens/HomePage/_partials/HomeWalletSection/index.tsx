import React from "react";

import Image from "next/image";

import HomeWalletStyles from "./HomeWalletSection.module.scss";
import WalletIphone from "@/components/WalletIphone";

const HomeWalletSection = () => {
  return (
    <>
      <div className={HomeWalletStyles.container}>
        <div className={HomeWalletStyles.container__info}>
          <h2>Multi-currency Wallets</h2>
          <p>
            Facilitate effortless management of multiple wallets, each dedicated
            to a specific currency, streamlining transactions and storage across
            various currencies.
          </p>
          <p>
            Enhance user experience with tailored wallets for different
            currencies, empowering efficient financial management and
            flexibility in global transactions
          </p>
        </div>
        
        <div className={HomeWalletStyles.container__walletImage}>
          <WalletIphone />
        </div>

        <div className={HomeWalletStyles.container__iphoneLadyImage}>
          <Image
            src="/assets/images/iphone-girl.png"
            alt="Girl with iPhone"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default HomeWalletSection;
