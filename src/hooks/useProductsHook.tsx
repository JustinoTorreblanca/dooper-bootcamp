import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { User, useUser } from "@supabase/supabase-auth-helpers/react";
import { useQuery } from "react-query";
import { Product } from "@src/components/ProductsWrapper/ProductCard/ProductCard";

interface UseGetProductsResult {
  products: Product | undefined;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const buildQuery = ({ products }: UseGetProductsResult, user: User) => {
  let query = supabaseClient.from("products").select("*").eq("id", user?.id);

  return query;
};
function useProductsHook() {
  const { user, error } = useUser();

  const getProducts = async (): Promise<Product | undefined> => {
    if (error) {
      throw error.message;
    }

    console.log(user);
    if (user) {
      const query: any = buildQuery({ products }, user);

      const { data, error } = await query;

      console.log(data);
      if (error) {
        throw error;
      }

      return data;
    }
  };

  const {
    data: products,
    isLoading,
    isError,
    isSuccess
  } = useQuery(["products", user?.role], () => getProducts());

  return { products, isLoading, isError, isSuccess };
}

export default useProductsHook;
