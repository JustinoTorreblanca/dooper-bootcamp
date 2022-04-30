import * as Styles from "./styles";

type MainContainerProps = { children?: React.ReactNode | HTMLElement };

function MainContainer({ children }: MainContainerProps) {
  return (
    <Styles.CustomContainer>
      <Styles.InnerContainer>{children}</Styles.InnerContainer>
    </Styles.CustomContainer>
  );
}

export default MainContainer;
