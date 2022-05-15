import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CustomAlert from "@src/components/CustomAlert";
import ProductCard from "@src/components/ProductsWrapper/ProductCard";
import { Product } from "@src/components/ProductsWrapper/ProductCard/ProductCard";
import useProductsHook from "@src/hooks/useProductsHook";
import { supabase } from "@src/utils/supabaseClient";

export default function AdminSingleProductPage(props: Product) {
  const router = useRouter();

  const { product_id } = router.query;
  const { products } = useProductsHook({
    product_id: product_id as string
  });

  if (products?.length === 0 || products === undefined) {
    return (
      <>
        <CustomAlert
          severity="error"
          message="This product does not exist, please try again."
        />
        <Button onClick={router.back} variant="contained">
          Go back
        </Button>
      </>
    );
  }
  if (products?.length !== 0) {
    <CustomAlert severity="success" message="Loading..." />;
  }
  const [{ title, description, image, price, id }] = products;

  const handleProductDelete = async (values: any) => {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", products?.[0].id)
      .maybeSingle();

    await router.reload();
    if (product_id === undefined) {
      <CustomAlert
        severity="success"
        message="Success! you have deleted this product"
      />;
    }
  };

  const onClick = (product_id: any) => {
    handleProductDelete(product_id);
  };

  return (
    <Box rowGap="20px" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center">
        <Button color="error" variant="contained" onClick={onClick}>
          Delete product
        </Button>
      </Box>

      <ProductCard
        title={title}
        image={image}
        price={price}
        description={description}
      />
    </Box>
  );
}
