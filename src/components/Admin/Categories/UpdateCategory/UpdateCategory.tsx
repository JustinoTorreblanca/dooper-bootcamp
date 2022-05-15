import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import CustomAlert from "@src/components/CustomAlert";
import { useAuth } from "@src/contexts/AuthContext";
import PrivateComponent from "@src/utils/PrivateComponent";
import { supabase } from "@src/utils/supabaseClient";
import * as Styles from "./styles";

type UpdateCategoryPrps = {
  id: string;
  title?: string;
  description?: string;
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

export default function UpdateCategory() {
  const { logout, user } = useAuth();
  const router = useRouter();
  const { category_id } = router.query;
  const [category, setCategory] = useState<UpdateCategoryPrps>();

  const [getCategoryError, setGetCategoryError] = useState<string>();
  const [handleUpdateError, setHandleUpdateError] = useState<string>();
  const [handleCategoryError, setHandleCategoryError] = useState<string>();
  const [successAlert, setSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    type: "success",
    message: ""
  });
  const [newCategoryUpdateSuccess, setNewCategoryUpdateSuccess] =
    useState(false);

  const numberId = Number(category_id);

  const getCategory = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("id", numberId)
      .maybeSingle();

    if (error) {
      setGetCategoryError(error.message);
      return;
    }

    return data;
  };

  useEffect(() => {
    const fetch = async () => {
      const category = await getCategory();
      setCategory(category);
    };

    fetch();
  }, []);

  const handleUpdate = async (values: any) => {
    const { data, error } = await supabase
      .from("categories")
      .update(values)
      .eq("id", numberId)
      .maybeSingle();

    if (error) {
      setHandleUpdateError(error.message);
      return;
    }
    setCategory(data);
    setSuccessAlert(true);

    router.reload();
  };

  useEffect(() => {
    if (getCategoryError) {
      setAlertMessage({ type: "error", message: getCategoryError });
      return;
    }
    if (handleUpdateError) {
      setAlertMessage({ type: "error", message: handleUpdateError });
      return;
    }
    if (successAlert && category) {
      setAlertMessage({
        type: "success",
        message: "The category has been updated."
      });
      return;
    }
  }, [
    getCategoryError,
    handleUpdateError,
    alertMessage.type,
    successAlert,
    category
  ]);

  useEffect(() => {
    setTimeout(() => setSuccessAlert(false), 5000);
  }, [successAlert]);

  const formik = useFormik({
    initialValues: {
      id: category?.id || "",
      title: category?.title || "",
      description: category?.description || ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleUpdate
  });

  return (
    <PrivateComponent requiredPermission={user}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
        <Typography variant="h4">Update a category</Typography>
        <Box>
          <Styles.CustomForm onSubmit={formik.handleSubmit}>
            <label>Category id</label>
            <Styles.CustomTextField
              value={formik.values.id}
              type="text"
              name="id"
              onChange={formik.handleChange}
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
              disabled={formik.isSubmitting}
              onClick={formik.submitForm}
            >
              {formik.isSubmitting
                ? "Updating  category..."
                : "Update category"}
            </Styles.CustomButton>
            {handleCategoryError ? (
              <CustomAlert severity="error" message={handleCategoryError} />
            ) : null}
            {newCategoryUpdateSuccess ? (
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
}
