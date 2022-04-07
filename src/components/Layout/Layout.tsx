import React from "react";
import Header from "../Header";
import * as Styles from "./styles";
import { LayoutProps } from "./styles";

function Layout({ children }: LayoutProps) {
  return (
    <Styles.Element>
      <Header />
      {/* <Box>{children}</Box> */}
    </Styles.Element>
  );
}

export default Layout;
