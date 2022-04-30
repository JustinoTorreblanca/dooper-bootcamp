import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { PAGES } from "../../Header";

function DesktopMenu() {
  return (
    <Box>
      <Box display={{ sm: "none", md: "block" }}>
        {PAGES.map((page) => (
          /* if onlyAuth true and user render  */
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
      </Box>
    </Box>
  );
}

export default DesktopMenu;
