import { useAuth } from "@src/contexts/AuthContext";
import useProductsHook from "@src/hooks/useProductsHook";
import PrivateComponent from "@src/utils/PrivateComponent";
import CustomAlert from "../CustomAlert";
import ProductCard from "./ProductCard";
import * as Styles from "./styles";

const ProductsWrapper = () => {
  const { products, isLoading, isError } = useProductsHook();
  const { user } = useAuth();
  if (isError) {
    return <CustomAlert severity="error" message="An error occurred." />;
  }

  if (isLoading) {
    return <CustomAlert severity="success" message="Loading..." />;
  }

  return (
    <PrivateComponent requiredPermission={user}>
      <Styles.ProductsFlexWrapper>
        {products &&
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Styles.ProductsFlexWrapper>
    </PrivateComponent>
  );
};

export default ProductsWrapper;
