import { Container, styled } from "@mui/material";

export type MainContainerProps = { children?: React.ReactNode | HTMLElement };

export const CustomContainer = styled(Container)<MainContainerProps>`
  padding: 16px;
  height: 100vh;
`;

export const InnerContainer = styled(Container)`
  border: 2px solid gray;
  height: 80vh;
`;
