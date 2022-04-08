import { Container, styled } from "@mui/material";
import theme from "@src/theme";

export const CustomContainer = styled(Container)`
  padding: 16px;
  height: 100vh;
`;

export const InnerContainer = styled(Container)`
  border: 2px solid ${theme.palette.grey[600]};
  height: 80vh;
`;
