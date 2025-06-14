import React from "react";
import { Toaster } from "sonner";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
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
