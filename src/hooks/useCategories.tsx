import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useQuery } from "react-query";

type useCategoriesHookProps = {
  userId?: string;
  category_id?: string;
};

function useCategoriesHook(props: useCategoriesHookProps) {
  const {
    data: categories,
    isLoading,
    isError
  } = useQuery(["categories", props.userId, props.category_id], async () => {
    const query = supabaseClient.from("categories").select("*");

    if (props.category_id) {
      query.eq("id", props.category_id);
    }

    const { data, error } = await query;

    if (error) {
      throw error.message;
    }

    return data;
  });
  return { categories, isLoading, isError };
}

export default useCategoriesHook;
