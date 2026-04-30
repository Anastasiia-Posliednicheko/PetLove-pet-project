import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Header.module.css";

export default function Header({ variant = "default" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerInner}>
          <Logo />

          <div className={css.blokNav}>
            <Nav />
            {!isLoggedIn && <AuthNav />}
          </div>
          <button className={css.burgerBtn} type="button" onClick={openMenu}>
            ☰
          </button>
        </div>
      </Container>
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isLoggedIn={isLoggedIn}
        variant={variant}
      />
    </header>
  );
}
