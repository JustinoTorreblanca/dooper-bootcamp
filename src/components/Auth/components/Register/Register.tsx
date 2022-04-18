import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "*Pocos caracteres")
    .max(20, "*Muchos caracteres")
    .required("*Name is required"),
  lastName: Yup.string()
    .min(6, "*Pocos caracteres")
    .max(20, "*Muchos caracteres")
    .required("*Last name is required"),
  email: Yup.string().email(),
  phoneNumber: Yup.string()
    .min(10, "*Asegurate de tener por lo menos 10 caracteres")
    .max(15, "Demasiados caracteres")
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      createdOn: new Date()
    },
    validationSchema: ValidateFormSchema,
    onSubmit: (value) => {
      console.log({ value });
    }
  });
  console.log(formik);
  return (
    <Styles.Element>
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
      <form onSubmit={formik.handleSubmit}>
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="name"
          label="Name"
          onChange={formik.handleChange}
          /* helperText={formik.errors.user}
          error */
        />
        {formik.errors && formik.errors.name && <p>{formik.errors.name}</p>}
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="lastName"
          label="Last name"
          onChange={formik.handleChange}
          /* helperText={formik.errors.user}
          error */
        />
        {formik.errors && formik.errors.lastName && (
          <p>{formik.errors.lastName}</p>
        )}
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="email"
          label={"Email"}
          onChange={formik.handleChange}
          /* helperText={formik.errors.email}
          error */
        />
        {formik.errors && formik.errors.email && <p>{formik.errors.email}</p>}
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="phoneNumber"
          label={"Phone number"}
          onChange={formik.handleChange}
          /* helperText={formik.errors.phoneNumber}
          error */
        />
        {formik.errors && formik.errors.phoneNumber && (
          <p>{formik.errors.phoneNumber}</p>
        )}
        <Button
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Styles.Element>
  );
}
