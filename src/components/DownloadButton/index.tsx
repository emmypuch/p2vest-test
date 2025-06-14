"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./DownloadButton.module.scss";

interface DownloadButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  style = {},
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      style={style}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
};

export default DownloadButton;
