"use client"
import { ShoppingBag, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface NavLink {
  linkName: string;
  path: string;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { linkName: "Home", path: "/" },
    { linkName: "Shop", path: "/shop" },
    { linkName: "About us", path: "/about" },
    { linkName: "Contact us", path: "/contact" },
    // { linkName: "Cart", path: "/cart" },
    // { linkName: "Login", path: "/login" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-center md:gap-56 p-4">
        {/* Logo */}
        <Link href="/">
        <img src="/logo.png" alt="logo" width={90}/>
          {/* <Image
            src="/logo.png" // make sure logo exists in /public/logo.png
            alt="Logo"
            width={120}
            height={40}
            className="object-contain cursor-pointer"
          /> */}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.linkName} className="capitalize hover:text-green-500">
              <Link href={link.path}>{link.linkName}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mr-5">
            <User/>
            <ShoppingCart/>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Links */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 p-4">
          {links.map((link) => (
            <li key={link.linkName} className="capitalize hover:text-green-500">
              <Link href={link.path}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
