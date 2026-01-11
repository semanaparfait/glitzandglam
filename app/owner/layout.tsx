import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<div className="flex h-screen overflow-hidden">

  <aside className="w-64 shrink-0">
    <AdminSidebar />
  </aside>

  <div className="flex flex-col flex-1">
    <header >
      <AdminNavbar />
    </header>

    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      {children}
    </main>
  </div>
</div>

  );
}
