"use client"
import { List, ShoppingBag, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



interface NavLink {
  linkName: string;
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { linkName: "Home", path: "/" },
    { linkName: "Shop", path: "/shop" },
    { linkName: "About us", path: "/about" },
    { linkName: "Contact us", path: "/contactus" },
    // { linkName: "Cart", path: "/cart" },
    // { linkName: "Login", path: "/login" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center md:justify-center justify-between md:gap-56 p-4">
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
            <li key={link.linkName} className="capitalize">
              <Link
                href={link.path}
                className={`transition-colors ${
                  pathname === link.path
                    ? "text-[var(--hover-nav)] font-semibold border-b-2 border-[var(--hover-nav)]"
                    : " hover:[var(--hover-nav)]"
                }`}
              >
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mr-5">
            <Link href='/account' className="border py-0.5 px-2">Sign Up</Link>
            <ShoppingCart/>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <X/> : <List/>}
        </button>
      </nav>

      {/* Mobile Links */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 p-4">
          {links.map((link) => (
            <li key={link.linkName} className="capitalize w-full text-center">
              <Link
                href={link.path}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  pathname === link.path
                    ? "bg-amber-100 text-amber-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
