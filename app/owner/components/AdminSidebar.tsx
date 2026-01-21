"use client"
import Link from "next/link";
import { Home, Package, ShoppingCart, Users, Settings, BarChart3 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const menuItems = [
    { name: "Dashboard", href: "/owner", icon: Home },
    { name: "Products", href: "/owner/products", icon: Package },
    { name: "Orders", href: "/owner/orders", icon: ShoppingCart },
    { name: "Users", href: "/owner/users", icon: Users },
    {name: "Categories", href: "/owner/categories", icon: Package },
    { name: "Analytics", href: "/owner/analytics", icon: BarChart3 },
    { name: "Settings", href: "/owner/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-amber-950">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                href={item.href}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-[#C5A367] hover:text-white transition-colors duration-200 rounded-r-lg
                  ${pathname===item.href
                    ? "bg-[var(--bg-adminpathname)] text-white "
                    :""
                  }
                  `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}