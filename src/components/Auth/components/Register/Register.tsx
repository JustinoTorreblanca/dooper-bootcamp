import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { useAuth } from "@src/contexts/AuthContext";
import { supabase } from "@src/utils/supabaseClient";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.string()
    .min(10, "Phonenumber must have 10 characters")
    .max(11, "Too many characters, make sure you type 10 characters")
    .required("Email is required"),
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
const redirectToProfile = "/profile";
export default function Register() {
  const [error, setError] = useState("");
  const [userRegistered, setUserRegistered] = useState({});
  const { authUser, session } = useAuth();

  //console.log(authUser, session);

  const handleRegister = async (value: any) => {
    setError("");
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: formik.values.email,
        password: formik.values.password
      },
      {
        data: {
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          phone: formik.values.phoneNumber
        }
        //redirectTo: (window.location.href = redirectToProfile)
      }
    );
    error ? setError(error.message) : null;
    user ? setUserRegistered(userRegistered) : null;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleRegister
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
          name="firstName"
          label="First name"
          type="firstname"
          onChange={formik.handleChange}
          helperText={formik.errors.firstName}
        />

        <Styles.CustomTextField
          variant="standard"
          required
          fullWidth
          name="lastName"
          label="Last name"
          type="text"
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
    </Styles.RegisterWrapper>
  );
}
