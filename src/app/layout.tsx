import React from "react";
import { Toaster } from "sonner";
import { DM_Sans } from "next/font/google";
import { Paytone_One } from "next/font/google";

import "./globals.scss";
import { BackgroundProvider } from "@/components/BackgroundContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
  display: "swap",
});

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${paytoneOne.variable}`}>
      <body>
        {/* <div>{children}</div> */}
        <BackgroundProvider>
          {children}
        </BackgroundProvider>
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "#4F0172",
              color: "#fff",
              border: "1px solid #CA92E3",
            },
          }}
        />
      </body>
    </html>
  );
}