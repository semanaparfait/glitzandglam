"use client"
import { List, ShoppingBag, ShoppingCart, User, X, LogOut, Package, LayoutDashboard, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";



interface NavLink {
  linkName: string;
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setDropdownOpen(false);
    toast.success('Logged out successfully');
    router.push('/');
  };

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

        <div className="flex gap-3 mr-5 items-center">
            {isClient && user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2   py-1 px-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-[var(--hover-nav)] rounded-full flex items-center justify-center text-white font-semibold">
                    {user.fullname?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="hidden md:inline text-sm font-medium">{user.fullname?.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-20">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user.fullname}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      
                      <Link 
                        href="/owner/orders" 
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Package className="w-4 h-4" />
                        My Orders
                      </Link>
                      
                      {user.role === 'ADMIN' && (
                        <Link 
                          href="/owner/dashboard" 
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </Link>
                      )}
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 mt-1"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link href='/account' className="border py-0.5 px-2 hover:bg-gray-50 transition-colors">Sign Up</Link>
            )}
            <ShoppingCart className="cursor-pointer hover:text-[var(--hover-nav)] transition-colors"/>
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
