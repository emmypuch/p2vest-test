import React from "react";
import HomeShopStyles from "./HomeShopSection.module.scss";
import ShopImages from "@/components/ShopImages";
import DownloadButton from "@/components/DownloadButton";

const HomeShopSection = () => {
  return (
    <div className={HomeShopStyles.container}>
      <div className={HomeShopStyles.container__content}>
        <h1 className={HomeShopStyles.container__title}>Shop Online</h1>
        <p className={HomeShopStyles.container__description}>
          Experience the world at your fingertips with our seamless online
          shopping platform.
        </p>
        <p className={HomeShopStyles.container__description}>
          From the latest fashion trends to must-have gadgets, shop the
          world&apos;s best brands and products from the comfort of your own
          home.
        </p>
        <div className={HomeShopStyles.container__app}>
          <p className={HomeShopStyles.container__appText}>
            Get Revve on your phone
          </p>
          <DownloadButton
            style={{
              background: "#000",
              color: "white",
            }}
          >
            Download the app
          </DownloadButton>
        </div>
      </div>

      <div className={HomeShopStyles.container__images}>
        <ShopImages />
      </div>
    </div>
  );
};

export default HomeShopSection;
