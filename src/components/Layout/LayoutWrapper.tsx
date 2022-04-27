import Header from "../Header";
import MainContainer from "../MainContainer";
import * as Styles from "./styles";

export type LayoutProps = { children?: React.ReactNode | HTMLElement };

function LayoutWrapper({ children }: LayoutProps) {
  return (
    <Styles.Element>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Styles.Element>
  );
}

export default LayoutWrapper;
