import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useQuery } from "react-query";
import { Product } from "@src/components/ProductsWrapper/ProductCard/ProductCard";

interface UseGetProductsResult {
  products: Product | undefined;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

type useProductHookProps = {
  userId?: string;
  product_id?: string;
};

function useProductsHook(props: useProductHookProps) {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess
  } = useQuery(["products", props.userId, props.product_id], async () => {
    const query = supabaseClient.from("products").select("*");

    if (props.userId) {
      query.eq("created_by", props.userId);
    }

    if (props.product_id) {
      query.eq("id", props.product_id);
    }

    const { data, error } = await query;

    if (error) {
      throw error.message;
    }

    return data;
  });
  return { products, isLoading, isError, isSuccess };
}

export default useProductsHook;
