import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeFooterStyles from "./HomeFooterSection.module.scss";

type SocialLink = {
  href: string;
  src: string;
  alt: string;
};

type FooterLink = {
  href: string;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: "#", src: "/assets/images/linkedin-logo.svg", alt: "LinkedIn" },
  { href: "#", src: "/assets/images/facebook.svg", alt: "Facebook" },
  { href: "#", src: "/assets/images/twitter.svg", alt: "Twitter" },
  { href: "#", src: "/assets/images/instagram.svg", alt: "Instagram" },
];

const footerLinks: FooterLink[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

const SocialLink = ({ href, src, alt }: SocialLink) => (
  <Link href={href} className={HomeFooterStyles.footer__socialLink}>
    <Image
      src={src}
      alt={alt}
      width={20}
      height={20}
      className={HomeFooterStyles.footer__socialIcon}
    />
  </Link>
);

const FooterLink = ({ href, label }: FooterLink) => (
  <Link href={href} className={HomeFooterStyles.footer__link}>
    {label}
  </Link>
);

const HomeFooterSection = () => {
  return (
    <footer className={HomeFooterStyles.footer}>
      <div className={HomeFooterStyles.footer__container}>
        <div className={HomeFooterStyles.footer__socials}>
          {socialLinks.map((link, index) => (
            <SocialLink key={`social-${index}`} {...link} />
          ))}
        </div>

        <div className={HomeFooterStyles.footer__links}>
          {footerLinks.map((link, index) => (
            <React.Fragment key={`nav-${index}`}>
              <FooterLink {...link} />
              {index < footerLinks.length - 1}
            </React.Fragment>
          ))}
        </div>

        <div className={HomeFooterStyles.footer__copyright}>
          ©2025 Revve. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default HomeFooterSection;
