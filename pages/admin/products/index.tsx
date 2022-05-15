import { Box, Typography } from "@mui/material";
import AdminProducts from "@src/components/Admin/AdminProducts";
import theme from "@src/theme";

export default function AdminProductsPage() {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Typography
        component="h4"
        variant="h5"
        align="center"
        marginBottom="15px"
        color={theme?.palette?.primary.dark}
      >
        Click on the product you want to delete
      </Typography>
      <AdminProducts />;
    </Box>
  );
}
