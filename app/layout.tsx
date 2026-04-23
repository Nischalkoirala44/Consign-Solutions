import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import React from "react"; // Explicit import helps in some TS environments

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins", // Using CSS variables is more stable
});

export const metadata = {
  title: "Consign Solutions | IT Excellence",
  description: "Next-Generation IT Solutions for Modern Business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased text-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}