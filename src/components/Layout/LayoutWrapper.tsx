import React from "react";
import Header from "../Header";
import * as Styles from "./styles";

export type LayoutProps = { children?: React.ReactNode | HTMLElement };

function LayoutWrapper({ children }: LayoutProps) {
  return (
    <Styles.Element>
      <Header />
      {children}
    </Styles.Element>
  );
}

export default LayoutWrapper;
