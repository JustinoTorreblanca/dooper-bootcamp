import { Box, styled } from "@mui/material";
import theme from "@src/theme";

export const ProductCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 300px;
  max-width: 300px;
  padding: 10px;
  border: 1px solid ${theme.palette.grey[900]};
  border-radius: 8px;
`;

export const CustomBox = styled(Box)`
  min-height: 250px;
  min-width: 250px;
`;
