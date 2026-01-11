import { List,Menu,Sun,User,Bell,Settings } from "lucide-react";
import Link from "next/link";

export default function AdminNavbar(){
    return(
        <header>
            <nav className="border border-b-gray-300 flex justify-between items-center w-full bg-white p-5 shadow-sm">
      <div className="flex items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
          <Menu className="w-4 h-4" />
        </button>
        <div>
          <h1 className="font-bold text-lg text-gray-900">Dashboard</h1>
          <p className="text-gray-600 text-sm">
            Welcome Back, Admin
          </p>
        </div>
      </div>

            <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-5">
          <button>
            <Sun className="cursor-pointer text-gray-500" size={24} />
          </button>
          <button>
            <Bell className="cursor-pointer text-gray-500" size={24} />
          </button>

          <hr className="w-0 h-7 border-l border-gray-300 mx-3" />

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
              <User />
            </div>
            <span className="font-semibold">SEMANA</span>
          </div>
        </div>

        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
            </nav>
        </header>
    )
}