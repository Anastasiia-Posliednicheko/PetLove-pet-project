import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

const buildLinkClass = ({ isActive }) =>
  `${css.navLink} ${isActive ? css.navLinkActive : ""}`;

export default function Nav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/news" className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" className={buildLinkClass}>
        Notices
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        Our friends
      </NavLink>
    </nav>
  );
}
