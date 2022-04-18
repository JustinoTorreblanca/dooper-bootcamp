import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Pocos caracteres")
    .max(10, "Muchos caracteres")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Pocos caracteres")
    .max(10, "Muchos caracteres")
    .required("Password is required")
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
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
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="username"
          label="Username"
          onChange={formik.handleChange}
          /* helperText={formik.errors.user}
          error */
        />
        {formik.errors && formik.errors.username && (
          <p>{formik.errors.username}</p>
        )}
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="password"
          label={"Password"}
          onChange={formik.handleChange}
          /* helperText={formik.errors.password}
          error */
        />
        {formik.errors && formik.errors.password && (
          <p>{formik.errors.password}</p>
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
