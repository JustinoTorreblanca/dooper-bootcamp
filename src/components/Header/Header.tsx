import * as React from "react";
import { useState } from "react";
import DesktopMenu from "./components/DesktopMenu";
import HamburguerMenu from "./components/HamburguerMenu/HamburguerMenu";
import HeaderLogo from "./components/HeaderLogo";
import * as Styles from "./styles";

type PageProps = { name: string; href: string; onlyAuthenticated: boolean };

export type HamburguerMenuProps = {
  handleToggle: () => void;
  open: () => void;
};
/*  */
export const PAGES: PageProps[] = [
  { name: "Login", href: "/login", onlyAuthenticated: false },
  { name: "Register", href: "/register", onlyAuthenticated: false },
  { name: "Profile", href: "/profile", onlyAuthenticated: true }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Styles.HeaderContainer>
      <HeaderLogo />
      <DesktopMenu />
      <HamburguerMenu handleToggle={handleToggle} open={open} />
    </Styles.HeaderContainer>
  );
}
