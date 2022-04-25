/* import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import * as Styles from "./styles";

type HamburguerMenuProps = {
  handleToggle: () => void;
  open: boolean;
  PAGES: [{ name: string; href: string }];
  name: string;
};

function HamburguerMenu({ handleToggle, open, PAGES }: HamburguerMenuProps) {
  return (
    <>
      <Box display={{ sm: "block", md: "none" }}>
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
      </Box>
    </>
  );
}

export default HamburguerMenu;
 */
