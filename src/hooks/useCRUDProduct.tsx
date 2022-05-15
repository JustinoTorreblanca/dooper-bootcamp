import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "@src/contexts/AuthContext";

function useCRUDProduct() {
  const { user, error: authError } = useAuth();

  const queryClient = useQueryClient();

  const upsertNewProduct = async (values: any) => {
    if (authError || !user) {
      throw new Error("error auth");
    }

    const { id, title, description, price, image } = values;

    const { data: newProduct, error: newProductError } = await supabaseClient
      .from("products")
      .upsert({ id, title, description, price, image, created_by: user.id })
      .maybeSingle();

    if (newProductError) {
      throw new Error("Error creating a new product");
    }

    return {
      ...newProduct,
      image,
      id,
      title,
      description,
      price
    };
  };

  const deleteProduct = async (values: any) => {
    if (authError || !user) throw authError;

    const { data, error } = await supabaseClient
      .from("products")
      .delete()
      .eq("id", values.id);

    if (error) throw error;
    return data;
  };

  const productMutate = useMutation(upsertNewProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    }
  });

  const productDelete = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    }
  });

  return { productMutate, productDelete };
}

export default useCRUDProduct;
