import { Box, styled } from "@mui/material";

export type LayoutProps = { children?: React.ReactNode | HTMLElement };

export const Element = styled(Box)<LayoutProps>`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
