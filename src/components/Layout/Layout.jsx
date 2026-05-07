import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  return (
    <>
      <Header variant={isHomePage ? "home" : "default"} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
