import { Box, TextField, styled } from "@mui/material";
import theme from "@src/theme";

export const Element = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  max-width: ${theme.breakpoints.values.sm}px;
`;

export const CustomTextField = styled(TextField)`
  margin: 0 0 15px;
`;
