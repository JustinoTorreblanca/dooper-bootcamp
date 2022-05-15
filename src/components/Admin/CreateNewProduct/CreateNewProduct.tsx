import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Alert, AlertTitle, Stack, Typography } from "@mui/material";
import useCRUDProduct from "@src/hooks/useCRUDProduct";
import * as Styles from "./styles";

const CreateNewProduct = () => {
  const ValidateFormSchema = Yup.object().shape({
    id: Yup.number().required("Product id is required"),
    title: Yup.string().required("Product title is required"),
    price: Yup.number().required("Product price is required"),
    description: Yup.string().required("Product description is required"),
    image: Yup.string()
      .required("Product image is required, valid formats:jpg, jpeg, png")
      .matches(
        new RegExp(/(\.(jpg|jpeg|png))/i),
        "Pleas enter a valid image format"
      )
  });

  const [handleNewProductError, setHandleNewProductError] = useState<object>();
  const [newProductUploadSuccess, setNewProductUploadSuccess] = useState(false);
  const { productMutate } = useCRUDProduct();

  const handleCreateProduct = async (values: any) => {
    productMutate.mutate(values);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      description: "",
      price: "",
      image: ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleCreateProduct
  });

  useEffect(() => {
    setTimeout(() => setNewProductUploadSuccess(false), 4000);
  }, [newProductUploadSuccess]);

  return (
    <Styles.RegisterWrapper>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        fontWeight="bold"
        color="thertiary"
        marginBottom={"15px"}
      >
        Create new product
      </Typography>
      <Styles.CustomForm onSubmit={formik.handleSubmit}>
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="id"
          label="Product id"
          type="id"
          onChange={formik.handleChange}
          helperText={formik.errors.id}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="title"
          label="Product title"
          type="text"
          onChange={formik.handleChange}
          helperText={formik.errors.title}
        />

        <Styles.CustomTextArea
          required
          maxLength={350}
          minRows={8}
          name="description"
          placeholder="Product description, max 350 characters"
          onChange={formik.handleChange}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="price"
          label="Product price"
          onChange={formik.handleChange}
          helperText={formik.errors.price}
        />
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="image"
          type="file"
          label="Product image"
          onChange={formik.handleChange}
          helperText={formik.errors.image}
        />

        <Styles.CustomButton
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting
            ? "Creating new product..."
            : "Create new product"}
        </Styles.CustomButton>
        {formik.isSubmitting ? (
          <Stack>
            <Alert severity="success">
              <AlertTitle>Loading...</AlertTitle>
            </Alert>
          </Stack>
        ) : null}
        {handleNewProductError ? (
          <Stack>
            <Alert severity="error">
              <AlertTitle>{handleNewProductError}</AlertTitle>
            </Alert>
          </Stack>
        ) : null}
        {newProductUploadSuccess ? (
          <Stack>
            <Alert severity="success">
              <AlertTitle>You have created a product successfully</AlertTitle>
            </Alert>
          </Stack>
        ) : null}
      </Styles.CustomForm>
    </Styles.RegisterWrapper>
  );
};

export default CreateNewProduct;
