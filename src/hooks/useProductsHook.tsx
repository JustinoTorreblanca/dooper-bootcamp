import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useQuery } from "react-query";
import { Product } from "@src/components/ProductsWrapper/ProductCard/ProductCard";

interface UseGetProductsResult {
  products: Product | undefined;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}
function useProductsHook() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery(["products"], async () => {
    const { data, error } = await supabaseClient.from("products").select("*");

    if (error) {
      throw error.message;
    }

    return data;
  });

  return { products, isLoading, isError };
}

export default useProductsHook;
