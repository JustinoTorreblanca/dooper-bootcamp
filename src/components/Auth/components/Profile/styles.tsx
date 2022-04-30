import { Box, TextField, styled } from "@mui/material";
import theme from "@src/theme";

export const Element = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
  max-width: ${theme.breakpoints.values.md}px;
`;

export const CustomTextField = styled(TextField)`
  margin: 0 0 10px;
`;

export const ProfilePhoto = styled(Box)`
  background-color: #362ad4;
  height: 100px;
  width: 130px;
  border-radius: 50%;
  margin: 0px 0px 20px;
`;

export const CustomForm = styled("form")`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
`;
