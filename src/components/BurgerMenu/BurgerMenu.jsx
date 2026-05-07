import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import css from "./BurgerMenu.module.css";

export default function BurgerMenu({
  isOpen,
  onClose,
  isLoggedIn,
  variant = "default",
}) {
  const isHome = variant === "home";

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={`${css.menu} ${isHome ? css.menuHome : css.menuDefault}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={css.closeBtn} type="button" onClick={onClose}>
          ✕
        </button>

        <div className={css.navBox} onClick={onClose}>
          <Nav />
        </div>

        {!isLoggedIn && (
          <div className={css.authBox} onClick={onClose}>
            <AuthNav />
          </div>
        )}

        {isLoggedIn && (
          <NavLink className={css.profileLink} to="/profile" onClick={onClose}>
            Profile
          </NavLink>
        )}
      </div>
    </div>
  );
}
