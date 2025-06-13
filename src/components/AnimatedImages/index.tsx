import React from "react";

import Image from "next/image";

const imageData = [
  { src: "/assets/images/sendA.png", alt: "Send A" },
  { src: "/assets/images/currency.png", alt: "Naira Currency" },
  { src: "/assets/images/shopping.png", alt: "Lady Shopping" },
  { src: "/assets/images/eating.png", alt: "Lady Eating" },
  { src: "/assets/images/paper-plane.png", alt: "Paper Plane" },
  { src: "/assets/images/send.png", alt: "Send" },
];

const AnimatedImages = () => {
  return (
    <div>
      {imageData.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={152}
          height={152}
        />
      ))}
    </div>
  );
};

export default AnimatedImages;
