import { Container, styled } from "@mui/material";

export const CustomContainer = styled(Container)`
  padding: 16px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled(Container)`
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: self-start;
`;
