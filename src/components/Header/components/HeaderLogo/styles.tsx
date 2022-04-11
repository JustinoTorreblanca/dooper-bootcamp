import { Box, styled } from "@mui/material";

export const Element = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const DooperLogo = styled("div")`
  background-image: url("/assets/logo-dooper.png");
  width: 155px;
  height: 65px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
