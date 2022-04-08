import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Hidden, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import * as Styles from "./styles";
import { DooperLogo } from "./styles";

type PageProps = { name: string; href: string };

const PAGES: PageProps[] = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Profile", href: "/profile" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Styles.HeaderContainer>
      <Link href={"/"}>
        <a>
          <DooperLogo onClick={() => setOpen(false)} />
        </a>
      </Link>
      <Box>
        <Hidden mdDown>
          {PAGES.map((page) => (
            <Button key={page.name}>
              <Link href={page.href} passHref>
                <a>
                  <Typography variant="h5" component="h2">
                    {page.name}
                  </Typography>
                </a>
              </Link>
            </Button>
          ))}
        </Hidden>
      </Box>
      <Hidden mdUp>
        <IconButton
          edge="end"
          color="primary"
          aria-label="menu"
          onClick={handleToggle}
        >
          <MenuIcon color="primary" fontSize="large" />
        </IconButton>
        <Backdrop open={open} onClick={handleToggle}>
          <Styles.MenuListContainer display={open === false ? "none" : "block"}>
            <Styles.MenuItems>
              {PAGES.map((page) => (
                <Styles.ButtonContainer key={page.name}>
                  <Button>
                    <Link href={page.href} passHref>
                      <a>
                        <Typography variant="h5" component="h2">
                          {page.name}
                        </Typography>
                      </a>
                    </Link>
                  </Button>
                </Styles.ButtonContainer>
              ))}
            </Styles.MenuItems>
          </Styles.MenuListContainer>
        </Backdrop>
      </Hidden>
    </Styles.HeaderContainer>
  );
}
