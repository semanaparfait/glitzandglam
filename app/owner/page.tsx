import { User, ShoppingCart, Box, Users, Book } from "lucide-react";

export default function AdminPageDashboard() {
  const dashboardStats = [
    {
      icon: <User className="w-6 h-6 text-[#461901]" />,
      count: 135,
      title: "NEW CUSTOMERS",
      desc: "Customers registered today",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#461901]" />,
      count: 58,
      title: "ORDERS TODAY",
      desc: "Jewelry orders placed today",
    },
    {
      icon: <Box className="w-6 h-6 text-[#461901]" />,
      count: 412,
      title: "JEWELRY ITEMS",
      desc: "Available jewelry products",
    },
    {
      icon: <Users className="w-6 h-6 text-[#461901]" />,
      count: 3280,
      title: "TOTAL CUSTOMERS",
      desc: "All registered customers",
    },
    {
      icon: <Book className="w-6 h-6 text-[#461901]" />,
      count: 96,
      title: "COLLECTIONS",
      desc: "Jewelry collections listed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-bold text-2xl">
          Dashboard <span className="text-[#461901]">Overview</span>
        </h1>
        <p className="font-medium text-gray-600">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dashboardStats.map((stats, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2">
              {stats.icon}
            </div>
              <h2 className="text-sm font-semibold text-gray-700">
                {stats.title}
              </h2>

            <p className="font-bold text-2xl">{stats.count}</p>
            <p className="text-sm text-gray-500">{stats.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
