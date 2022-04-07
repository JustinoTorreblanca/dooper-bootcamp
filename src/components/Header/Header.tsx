import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Hidden, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@src/theme";
import * as Styles from "./styles";
import { DooperLogo } from "./styles";

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
          <Button color="inherit">
            <Link href={"/login"}>
              <a>
                <Typography variant="h5" component="h2">
                  Login
                </Typography>
              </a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href={"/register"}>
              <a>
                <Typography variant="h5" component="h2">
                  Register
                </Typography>
              </a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href={"/profile"}>
              <a>
                <Typography variant="h5" component="h2">
                  Profile
                </Typography>
              </a>
            </Link>
          </Button>
        </Hidden>
      </Box>
      <Hidden mdUp>
        <ThemeProvider theme={theme}>
          <IconButton
            edge="end"
            color="primary"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon color="primary" fontSize="large" />
          </IconButton>
          <Backdrop open={open} onClick={handleToggle}>
            <Styles.MenuListContainer
              display={open === false ? "none" : "block"}
            >
              <Styles.MenuItems>
                <Styles.CustomButton color="inherit">
                  <Link href={"/login"}>
                    <a>
                      <Typography variant="h5" component="h2">
                        Login
                      </Typography>
                    </a>
                  </Link>
                </Styles.CustomButton>
                <Styles.CustomButton color="inherit">
                  <Link href={"/register"}>
                    <a>
                      <Typography variant="h5" component="h2">
                        Register
                      </Typography>
                    </a>
                  </Link>
                </Styles.CustomButton>
                <Styles.CustomButton color="inherit">
                  <Link href={"/profile"}>
                    <a>
                      <Typography variant="h5" component="h2">
                        Profile
                      </Typography>
                    </a>
                  </Link>
                </Styles.CustomButton>
              </Styles.MenuItems>
            </Styles.MenuListContainer>
          </Backdrop>
        </ThemeProvider>
      </Hidden>
    </Styles.HeaderContainer>
  );
}
