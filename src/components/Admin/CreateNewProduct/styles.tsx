import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  styled
} from "@mui/material";
import theme from "@src/theme";

export const RegisterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  max-width: ${theme.breakpoints.values.sm}px;
`;

export const CustomTextField = styled(TextField)`
  margin: 0 0 15px;
`;

export const CustomTextArea = styled(TextareaAutosize)`
  margin: 15px 0;
  width: 260px;
  resize: none;
  padding: 10px;
`;

export const CustomForm = styled("form")`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 300px;
`;

export const CustomButton = styled(Button)`
  width: 260px;
  height: 40px;
`;
