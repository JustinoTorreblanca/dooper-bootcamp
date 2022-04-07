import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@src/theme";
import * as Styles from "./styles";
import { MainContainerProps } from "./styles";

function MainContainer({ children }: MainContainerProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styles.CustomContainer>
        <Styles.InnerContainer>
          <Box>{children}</Box>
        </Styles.InnerContainer>
      </Styles.CustomContainer>
    </ThemeProvider>
  );
}

export default MainContainer;
