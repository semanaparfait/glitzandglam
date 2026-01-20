import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
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
        {/* <Navbar /> */}

        {children}
        {/* <Footer /> */}

        {/* React Hot Toast */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#4BB543",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#FF3333",
                color: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
