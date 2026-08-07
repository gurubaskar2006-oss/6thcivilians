import type { Metadata, Viewport } from "next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Grain from "@/components/ui/Grain";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Building Trust That Lasts — PR Team",
  description:
    "A private team of public relations pillars building trust that lasts for the institutions we serve.",
  metadataBase: new URL("https://pr-partners.example"),
  openGraph: {
    title: "Building Trust That Lasts — PR Team",
    description:
      "A private team of public relations pillars building trust that lasts for the institutions we serve.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base font-sans text-primary antialiased">
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            <Grain />
            <Loader />
            <Nav />
            {children}
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
