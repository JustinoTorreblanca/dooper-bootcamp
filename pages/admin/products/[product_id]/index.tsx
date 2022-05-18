import { useRouter } from "next/router";
import { useState } from "react";
import { Box } from "@mui/material";
import useProductsHook from "@src/hooks/useProductsHook";

export default function EditProductPage() {
  const router = useRouter();
  const { product_id } = router.query;
  const [productId, setProductsId] = useState(undefined);
  const { products, isLoading, isError } = useProductsHook({
    product_id: productId
  });

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      gap="20px"
    >
      {products && products?.filter((product) => product.id === product_id)}
    </Box>
  );
}
