"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeContactStyles from "./HomeContactSection.module.scss";
import ContactForm from "@/components/ContactForm";
import { contactDetails } from "@/data/contactDetails";

const HomeContactSection = () => {
  return (
    <div className={HomeContactStyles.contact}>
      <div className={HomeContactStyles.contact__content}>
        <div className={HomeContactStyles.contact__info}>
          <h1 className={HomeContactStyles.contact__title}>Get in touch</h1>

          <div className={HomeContactStyles.contact__contentWrapper}>
            <p className={HomeContactStyles.contact__description}>
              Do you have any questions or feedback?
              <br />
              We&apos;d love to hear from you.
            </p>

            <div className={HomeContactStyles.contact__details}>
              {contactDetails.map((detail) => (
                <Link
                  key={detail.id}
                  href={detail.href}
                  className={HomeContactStyles.contact__detailItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={detail.icon}
                    alt={detail.alt}
                    width={16}
                    height={16}
                    className={HomeContactStyles.contact__icon}
                  />
                  <span className={HomeContactStyles.contact__text}>
                    {detail.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={HomeContactStyles.contact__form}>
          <ContactForm />
        </div>
      </div>

      <div className={HomeContactStyles.contact__graphics}>
        <div className={HomeContactStyles.contact__graphicsLeft}>
          <Image
            src="/assets/images/contact-mail.png"
            alt="Mail"
            width={297}
            height={238}
            unoptimized
            className={HomeContactStyles.contact__graphic}
          />
        </div>
        <div className={HomeContactStyles.contact__graphicsRight}>
          <Image
            src="/assets/images/contact-msg.png"
            alt="Message"
            width={270}
            height={286}
            unoptimized
            className={HomeContactStyles.contact__graphic}
          />
          <Image
            src="/assets/images/contact-phone.png"
            alt="Phone"
            width={288}
            height={286}
            unoptimized
            className={HomeContactStyles.contact__graphic}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContactSection;
