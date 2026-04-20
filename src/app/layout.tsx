import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Velora | AI Automation Agency for Leaner Operations",
  description: "Done-for-you AI automation systems for customer intake, follow-up, scheduling, CRM updates, reporting, and team handoffs. Launch in 48 hours.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} antialiased relative`}
      >
        <div className="stars-container">
          <div className="nebula" />
          <div className="stars" />
          <div className="stars-near" />
        </div>
        <div className="grain" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
