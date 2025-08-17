import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="container mx-auto p-2 border border-white h-screen ">
      <Outlet />
    </main>
  );
}
