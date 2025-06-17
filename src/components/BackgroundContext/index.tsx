"use client";

import React, { createContext, useState, useContext } from "react";

interface BackgroundContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <BackgroundContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};