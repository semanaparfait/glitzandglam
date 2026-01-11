import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(user)/components/Navbar";
import Footer from "./(user)/components/Footer";



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
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
