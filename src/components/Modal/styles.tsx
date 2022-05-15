import { styled } from "@mui/material";
import theme from "@src/theme";

export const ModalWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: "translate(-50%, -50%)";
  width: 400px;
  bgcolor: "background.paper";
  border: "2px solid #000";
  boxshadow: ${theme.shadows[19]};
  padding: 4px;
`;
