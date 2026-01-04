import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Glitz & Glam",
  description: "Timeless jewelry crafted with elegance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
