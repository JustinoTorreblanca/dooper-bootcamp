import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Alert, AlertTitle, Stack, Typography } from "@mui/material";
import { supabase } from "@src/utils/supabaseClient";
import * as Styles from "./styles";

const ValidateFormSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Username must have min 5 characters")
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
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleUserLogin = async (value: any) => {
    const { user, session, error } = await supabase.auth.signIn({
      email: formik.values.email,
      password: formik.values.password
    });
    if (error) {
      setError(error.message);
      setOpen(!open);
      return;
    }

    if (user) {
      router.push("/profile");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleUserLogin
  });

  return (
    <>
      <Styles.LoginWrapper>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          fontWeight="bold"
          color="tertiary"
          marginBottom={"15px"}
        >
          Login
        </Typography>
        <Styles.CustomForm onSubmit={formik.handleSubmit}>
          <Styles.CustomTextField
            variant="standard"
            required
            fullWidth
            name="email"
            label="Email"
            onChange={formik.handleChange}
            helperText={formik.errors.email}
          />
          {formik.isSubmitting ? (
            <Stack>
              <Alert severity="success">Loading...</Alert>
            </Stack>
          ) : (
            ""
          )}
          {open ? (
            <Stack>
              <Alert severity="warning">
                <AlertTitle>Warning!</AlertTitle>
                Incorrect email or password, please try again or{" "}
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </Alert>
            </Stack>
          ) : null}
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
    </>
  );
}
