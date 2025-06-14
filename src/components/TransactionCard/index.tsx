/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import TransactionCardStyles from "./TransactionCard.module.scss";
import DownloadButton from "../DownloadButton";

const TransactionCard = () => {
  return (
    <div className={TransactionCardStyles["transaction-card"]}>
      <header className={TransactionCardStyles["transaction-card__header"]}>
        <div className={TransactionCardStyles["transaction-card__logo"]}>
          {/* <Image
            src="/assets/images/home-hero-logo.svg"
            alt="Revve Logo"
            width={120}
            height={120}
          /> */}
          <img src="/assets/images/home-hero-logo.svg" alt="test logo" />

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
        <div
          className={TransactionCardStyles["transaction-card__country-left"]}
        >
          <span>Canada</span>
          <Image
            src="/assets/images/home-hero-right-arrow.svg"
            alt="right arrow"
            width={50}
            height={50}
          />
        </div>

        <div className={TransactionCardStyles["transaction-card__phone-card"]}>
          <div
            className={TransactionCardStyles["transaction-card__lady-image"]}
          >
            <Image
              src="/assets/images/home-hero-lady.png"
              alt="lady"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={TransactionCardStyles["transaction-card__overlay-card"]}
          >
            <div className={TransactionCardStyles["transaction-card__flag"]}>
              <Image
                src="/assets/images/canada.svg"
                alt="Canada Flag"
                width={52}
                height={52}
              />
            </div>
            <div className={TransactionCardStyles["transaction-card__value"]}>
              <span
                className={TransactionCardStyles["transaction-card__amount"]}
              >
                +C$750
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
                src="/assets/images/gtb.svg"
                alt="gtbank logo"
                width={32}
                height={32}
              />
              <span>Yesterday, 1:28 AM</span>
              <span
                className={
                  TransactionCardStyles["transaction-card__transfer-text"]
                }
              >
                Transfer to Lil Sis
              </span>
            </div>
            <div>
              <span
                className={
                  TransactionCardStyles["transaction-card__transfer-amount"]
                }
              >
                -₦862,912.94
              </span>
            </div>
          </div>
        </div>

        <div
          className={TransactionCardStyles["transaction-card__country-right"]}
        >
          <span>Nigeria</span>
          <Image
            src="/assets/images/home-hero-left-arrow.svg"
            alt="left arrow"
            width={50}
            height={50}
          />
        </div>
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
              color: "white",
              border: "1px solid #fff",
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
