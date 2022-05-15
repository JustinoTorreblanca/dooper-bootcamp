import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "@src/contexts/AuthContext";

function useCRUDCategories() {
  const { user, error: authError } = useAuth();

  const queryClient = useQueryClient();

  const upsertNewCategory = async (values: any) => {
    if (authError || !user) {
      throw new Error("error auth");
    }

    const { id, title, description, price, image } = values;

    const { data: newCategory, error: newCategoryError } = await supabaseClient
      .from("categories")
      .upsert({ id, title, description })
      .maybeSingle();

    if (newCategoryError) {
      throw new Error("Error creating a new category");
    }

    return {
      ...newCategory,
      image,
      id,
      title,
      description,
      price
    };
  };

  const deleteCategory = async (values: any) => {
    if (authError || !user) throw authError;

    const { data, error } = await supabaseClient
      .from("categories")
      .delete()
      .eq("id", values.id);

    if (error) throw error;
    return data;
  };

  const categoryMutate = useMutation(upsertNewCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    }
  });

  const categoryDelete = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    }
  });

  return { categoryMutate, categoryDelete };
}

export default useCRUDCategories;
