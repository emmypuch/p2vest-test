import React from "react";
import Image from "next/image";
import ShopImagesStyles from "./ShopImages.module.scss";

const ShopImages = () => {
  return (
    <div className={ShopImagesStyles.wrapper}>
      <div className={ShopImagesStyles.wrapper__iphone}>
        <Image
          src="/assets/images/shopping-iphone.png"
          alt="Shopping iPhone"
          width={432}
          height={836}
          priority
        />
      </div>
      <div className={ShopImagesStyles.wrapper__items}>
        <div className={ShopImagesStyles.wrapper__item}>
          <Image
            src="/assets/images/shopping-perfume.png"
            alt="Perfume"
            width={120}
            height={792}
          />
        </div>
        <div className={ShopImagesStyles.wrapper__item}>
          <Image
            src="/assets/images/shopping-girl.png"
            alt="Fashion Girl"
            width={120}
            height={792}
          />
        </div>
        <div className={ShopImagesStyles.wrapper__item}>
          <Image
            src="/assets/images/shopping-shoe.png"
            alt="Shoe"
            width={256}
            height={792}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopImages;