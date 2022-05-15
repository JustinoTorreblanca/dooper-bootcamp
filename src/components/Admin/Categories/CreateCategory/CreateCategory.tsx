import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import CustomAlert from "@src/components/CustomAlert";
import { useAuth } from "@src/contexts/AuthContext";
import useCRUDCategories from "@src/hooks/useCrudCategories";
import PrivateComponent from "@src/utils/PrivateComponent";
import * as Styles from "./styles";

type CreateCategoryPrps = {
  id: string;
  title: string;
  description: string;
};
const ValidateFormSchema = Yup.object().shape({
  id: Yup.number()
    .min(1, "Category id must contain at least one number")
    .required("Id is required and must contain numbers"),
  title: Yup.string()
    .matches(new RegExp(/^[a-z ,.'-]+$/i), "Title should only contain letters")
    .required(),
  description: Yup.string()
    .matches(
      new RegExp(/^[a-z ,.'-]+$/i),
      "Description should only contain letters"
    )
    .required()
});

const CreateCategory = () => {
  const { user } = useAuth();
  const [category, setCategory] = useState<CreateCategoryPrps>();
  const [handleNewCategoryError, setHandleNewCategoryError] =
    useState<string>();
  const [newCategoryUploadSuccess, setNewCategoryUploadSuccess] =
    useState(false);
  const { categoryMutate } = useCRUDCategories();

  const handleCreateCategory = async (values: any) => {
    categoryMutate.mutate(values);
    setNewCategoryUploadSuccess(true);
    formik.initialValues;
  };

  const formik = useFormik({
    initialValues: {
      id: category?.id || "",
      title: category?.title || "",
      description: category?.description || ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleCreateCategory
  });
  useEffect(() => {
    setTimeout(() => {
      setNewCategoryUploadSuccess(false);
    }, 4000);
  }, [newCategoryUploadSuccess]);

  return (
    <PrivateComponent requiredPermission={user}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
        <Typography variant="h4">Create a new product category</Typography>
        <Box>
          <Styles.CustomForm onSubmit={formik.handleSubmit}>
            <label>Category ID</label>
            <Styles.CustomTextField
              value={formik.values.id}
              type="text"
              name="id"
              onChange={formik.handleChange}
              helperText={formik.errors.id}
            />
            <label>Category title</label>
            <Styles.CustomTextField
              value={formik.values.title}
              type="text"
              name="title"
              onChange={formik.handleChange}
              helperText={formik.errors.title}
            />
            <label>Category description</label>
            <Styles.CustomTextField
              value={formik.values.description}
              type="text"
              name="description"
              onChange={formik.handleChange}
              helperText={formik.errors.description}
            />
            <Styles.CustomButton
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting
                ? "Creating new category..."
                : "Create new category"}
            </Styles.CustomButton>
            {handleNewCategoryError ? (
              <CustomAlert severity="error" message={handleNewCategoryError} />
            ) : null}
            {newCategoryUploadSuccess ? (
              <CustomAlert
                message="You have created a new product category successfully"
                severity="success"
              />
            ) : null}
          </Styles.CustomForm>
        </Box>
      </Box>
    </PrivateComponent>
  );
};

export default CreateCategory;
