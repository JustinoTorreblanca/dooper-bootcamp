import { useEffect, useState } from "react";
import { useAuth } from "@src/contexts/AuthContext";
import useProductsHook from "@src/hooks/useProductsHook";
import PrivateComponent from "@src/utils/PrivateComponent";
import { supabase } from "@src/utils/supabaseClient";
import ProductCard from "./ProductCard";
import { Product } from "./ProductCard/ProductCard";
import * as Styles from "./styles";

const ProductsWrapper = () => {
  const [productsData, setProductsData] = useState<Product[]>();
  const { products } = useProductsHook();

  const { user } = useAuth();

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      //setGetProfileError(error.message);
      return;
    }

    return data;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProductsData(products);
    };

    fetchProducts();
  }, []);

  return (
    <PrivateComponent requiredPermission={user}>
      <Styles.ProductsFlexWrapper>
        {productsData &&
          productsData?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Styles.ProductsFlexWrapper>
    </PrivateComponent>
  );
};

export default ProductsWrapper;
