import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildAuthLinkClass = ({ isActive }) =>
  isActive ? "authLink authLinkActive" : "authLink";

export default function Authnav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/login" className={buildAuthLinkClass}>
        Log In
      </NavLink>
      <NavLink to="/registration" className={buildAuthLinkClass}>
        Registration
      </NavLink>
    </div>
  );
}
