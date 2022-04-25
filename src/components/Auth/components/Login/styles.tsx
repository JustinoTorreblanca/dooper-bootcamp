import { Box, Button, TextField, styled } from "@mui/material";
import theme from "@src/theme";

export const LoginWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  max-width: ${theme.breakpoints.values.sm}px;
`;

export const CustomTextField = styled(TextField)`
  margin: 0 0 15px;
`;

export const CustomForm = styled("form")`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`;

export const CustomButton = styled(Button)`
  width: 110px;
  height: 37px;
`;
