import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box } from "@mui/material";
import { useAuth } from "@src/contexts/AuthContext";
import useProductsHook from "@src/hooks/useProductsHook";
import PrivateComponent from "@src/utils/PrivateComponent";
import CustomAlert from "../../CustomAlert";
import ProductCard from "../../ProductsWrapper/ProductCard";

const AdminProducts = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { products, isLoading, isError } = useProductsHook({});
  const [itemId, setItemId] = useState(0);
  const [isSelected, setIsSelected] = useState({
    isSelected: false,
    item_Id: 0
  });

  if (isError) {
    return <CustomAlert severity="error" message="An error occurred." />;
  }

  if (isLoading) {
    return <CustomAlert severity="success" message="Loading..." />;
  }

  return (
    <PrivateComponent requiredPermission={user}>
      <Box
        display="flex"
        flexWrap="wrap"
        width="100%"
        justifyContent="center"
        gap="20px"
        paddingBottom="40px"
      >
        {products &&
          products?.map((product) => (
            <Link
              href={`/admin/products/${product?.id}`}
              passHref={true}
              key={product.id}
            >
              <a>
                <ProductCard product={product} key={product.id} />
              </a>
            </Link>
          ))}
      </Box>
    </PrivateComponent>
  );
};

export default AdminProducts;
