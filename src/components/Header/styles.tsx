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

type MenuListContainerProps = { display?: boolean | string | undefined };

export const MenuListContainer = styled("div")<MenuListContainerProps>`
  width: 100%;
  height: 40vh;
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  display: ${(props) => props.display};
  position: absolute;
  border-top: 2px solid ${theme.palette.grey[600]};
  background-color: white;
  padding: 16px;
`;

export const MenuItems = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 190px;
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

export const DooperLogo = styled("div")`
  background-image: url("/assets/logo-dooper.png");
  width: 155px;
  height: 65px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
