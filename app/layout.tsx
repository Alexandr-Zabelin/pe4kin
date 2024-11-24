import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pe4kin",
  description: "Beautiful Online Messanger App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}