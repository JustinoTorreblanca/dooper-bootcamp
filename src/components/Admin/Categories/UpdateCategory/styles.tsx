import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const CustomForm = styled("form")`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
`;
export const CustomTextField = styled(TextField)`
  margin: 0 0 10px;
`;
export const CustomButton = styled(Button)`
  width: 200px;
`;
