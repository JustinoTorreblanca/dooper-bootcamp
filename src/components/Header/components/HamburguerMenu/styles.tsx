import { styled } from "@mui/material";
import theme from "@src/theme";

type MenuListContainerProps = { display?: boolean | string | undefined };

export const MenuListContainer = styled("div")<MenuListContainerProps>`
  width: 100%;
  height: 40vh;
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  display: ${(props) => props.display};
  border-top: 2px solid ${theme.palette.grey[600]};
  background-color: white;
  padding: 16px;
`;

export const ButtonContainer = styled("div")`
  border-bottom: 2px solid ${theme.palette.grey[600]};
  display: flex;
  justify-content: space-evenly;
  width: 256px;
  border-radius: 0;

  :hover {
    background-color: ${theme.palette.action.hover};
  }
`;

export const MenuItems = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 190px;
`;
