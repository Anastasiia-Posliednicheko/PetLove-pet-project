import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  return (
    <>
      {!isHomePage && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
