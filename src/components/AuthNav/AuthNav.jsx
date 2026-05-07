import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function Authnav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/login" className={css.authLinkLogin}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.authLinkRegister}>
        Registration
      </NavLink>
    </div>
  );
}
