import { useSelector } from "react-redux";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Header.module.css";

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerInner}>
          <Logo />
          <div className={css.blokNav}>
            <Nav />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </div>
        </div>
      </Container>
    </header>
  );
}
