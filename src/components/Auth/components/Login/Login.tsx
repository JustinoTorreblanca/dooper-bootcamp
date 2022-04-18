import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must have min 5 characters")
    .max(10, "Username allows max 10 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must have min 6 characters")
    .max(10, "Password allows max 10 characters")
    .required("Password is required")
    .matches(new RegExp(/(?=.*[a-z])/), "Must contain lowercase a-z characters")
    .matches(
      new RegExp(/(?=.*[A-Z])/),
      "Must contain one or more uppercase characters"
    )
    .matches(new RegExp(/(?=.*[0-9])/), "Must contain at least one number")
    .matches(
      new RegExp(/(?=.*[!@#$%^&*])/),
      "Must contain at least one !@#$%^&* special character"
    )
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
    }
  });

  return (
    <Styles.LoginWrapper>
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
      <Styles.CustomForm onSubmit={formik.handleSubmit}>
        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="username"
          label="Username"
          onChange={formik.handleChange}
          helperText={formik.errors.username}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="password"
          type={"password"}
          label={"Password"}
          onChange={formik.handleChange}
          helperText={formik.errors.password}
        />

        <Styles.CustomButton
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Enviando..." : "Enviar"}
        </Styles.CustomButton>
      </Styles.CustomForm>
    </Styles.LoginWrapper>
  );
}
