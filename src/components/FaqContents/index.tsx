"use client";

import React, { useState } from "react";
import Image from "next/image";
import FaqContentsStyles from "./FaqContents.module.scss";
import { faqItems } from "@/data/faqData";

const FaqContents = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={FaqContentsStyles.wrapper}>
      {faqItems.map((item, index) => (
        <div key={index} className={FaqContentsStyles.faqItem}>
          <div
            className={FaqContentsStyles.faqHeader}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className={FaqContentsStyles.faqQuestion}>{item.question}</h3>
            <button
              className={FaqContentsStyles.faqToggle}
              aria-expanded={activeIndex === index}
            >
              <Image
                src="/assets/images/faq-plus.svg"
                alt={activeIndex === index ? "Collapse" : "Expand"}
                width={60}
                height={60}
                className={`${FaqContentsStyles.faqIcon} ${
                  activeIndex === index ? FaqContentsStyles.rotateIcon : ""
                }`}
              />
            </button>
          </div>
          <div
            className={FaqContentsStyles.faqAnswer}
            style={{
              maxHeight: activeIndex === index ? "500px" : "0",
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqContents;
