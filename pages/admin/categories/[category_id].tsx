import { useRouter } from "next/router";
import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UpdateCategory from "@src/components/Admin/Categories/UpdateCategory";
import CustomAlert from "@src/components/CustomAlert";
import useCategoriesHook from "@src/hooks/useCategories";
import { supabase } from "@src/utils/supabaseClient";

type CategoryProps = {
  category_id: string;
  title: string;
  description: string;
};
const DeleteCategory = (props: CategoryProps) => {
  const router = useRouter();
  const { category_id } = router.query;
  const { categories } = useCategoriesHook({
    category_id: category_id as string
  });

  if (categories?.length === 0 || categories === undefined) {
    return (
      <Box display="flex" flexDirection="column" gap="30px">
        <CustomAlert
          severity="error"
          message="This category does not exist, please try again."
        />
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          gap="10px"
        >
          <Box>
            <Button onClick={router.back} variant="contained" color="primary">
              Go back
            </Button>
          </Box>
          or
          <Box>
            <Button
              onClick={() => router.push("/admin/categories/new")}
              variant="contained"
              color="success"
            >
              Create new category
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  if (categories?.length !== 0) {
    <CustomAlert severity="success" message="Loading..." />;
  }

  const handleCategoryDelete = async (values: any) => {
    const { data, error } = await supabase
      .from("categories")
      .delete()
      .eq("id", categories?.[0].id)
      .maybeSingle();

    await router.reload();
    if (category_id === undefined) {
      <CustomAlert
        severity="success"
        message="Success! you have deleted this category"
      />;
    }
  };

  const onClick = (category_id: any) => {
    handleCategoryDelete(category_id);
  };

  return (
    <Box rowGap="20px" display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
      >
        <Typography variant="h5">{`Title: ${categories?.[0].title}`}</Typography>
        <span>{`Description: ${categories?.[0].description}`}</span>
        <Button color="error" variant="contained" onClick={onClick}>
          Delete category
        </Button>
        or
        <Box marginBottom="30px">
          <Button
            onClick={() => router.push("/admin/categories/new")}
            variant="contained"
            color="success"
          >
            Create new category
          </Button>
        </Box>
        <UpdateCategory />
      </Box>
    </Box>
  );
};

export default DeleteCategory;
