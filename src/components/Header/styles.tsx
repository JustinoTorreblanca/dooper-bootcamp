import { Button, styled } from "@mui/material";

export const HeaderContainer = styled("div")`
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  width: 100%;
  padding: 16px;
  min-height: 76px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
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
  border-top: 2px solid #9c9c9c;
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

export const CustomButton = styled(Button)`
  border-bottom: 2px solid gray;
  width: 256px;
  border-radius: 0;
  :hover {
    background-color: rgba(43, 52, 69, 0.04);
  }
`;

export const DooperLogo = styled("div")`
  background-image: url("/_next/image?url=%2Fassets%2Flogo-dooper.png&w=384&q=75");
  width: 155px;
  height: 65px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
