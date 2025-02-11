import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mambagram",
  description: "Best way to share your memories with your friends and family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
