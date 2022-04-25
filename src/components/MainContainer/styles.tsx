import { Container, styled } from "@mui/material";
import theme from "@src/theme";

export const CustomContainer = styled(Container)`
  padding: 16px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled(Container)`
  border: 2px solid ${theme.palette.grey[600]};
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: self-start;
`;
