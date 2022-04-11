import { styled } from "@mui/material";
import theme from "@src/theme";

export const HeaderContainer = styled("div")`
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.palette.common.white};
  align-items: center;
  width: 100%;
  padding: 16px;
  min-height: 76px;
  position: relative;
  box-shadow: ${theme.shadows[1]};
`;
