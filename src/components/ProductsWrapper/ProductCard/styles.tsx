import { Box, Button, styled } from "@mui/material";
import theme from "@src/theme";

export const ProductCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 456px;
  max-height: 512px;
  max-width: 300px;
  padding: 10px;
  border: 1px solid ${theme.palette.grey[900]};
  border-radius: 8px;
  height: 100%;
`;

export const CustomBox = styled(Box)`
  min-height: 250px;
  min-width: 250px;
`;

export const CustomButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
