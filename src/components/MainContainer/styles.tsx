import { Container, styled } from "@mui/material";

export const CustomContainer = styled(Container)`
  padding: 60px 16px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InnerContainer = styled(Container)`
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: self-start;
`;
