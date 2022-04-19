import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.string()
    .min(10, "Phonenumber must have 10 characters")
    .max(11, "Too many characters, make sure you type 10 characters")
    .required("Email is required")
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
    }
  });

  return (
    <Styles.RegisterWrapper>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        fontWeight="bold"
        color="thertiary"
        marginBottom={"15px"}
      >
        Register
      </Typography>
      <Styles.CustomForm onSubmit={formik.handleSubmit}>
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="name"
          label="Name"
          type="name"
          onChange={formik.handleChange}
          helperText={formik.errors.name}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="lastName"
          label="Last name"
          onChange={formik.handleChange}
          helperText={formik.errors.lastName}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          onChange={formik.handleChange}
          helperText={formik.errors.email}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="phoneNumber"
          label={"Phone number"}
          onChange={formik.handleChange}
          helperText={formik.errors.phoneNumber}
        />

        <Styles.CustomButton
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Enviando..." : "Enviar"}
        </Styles.CustomButton>
      </Styles.CustomForm>
    </Styles.RegisterWrapper>
  );
}
