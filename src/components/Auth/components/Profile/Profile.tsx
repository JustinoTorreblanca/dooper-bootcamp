import { useFormik } from "formik";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  Typography
} from "@mui/material";
import { useAuth } from "@src/contexts/AuthContext";
import PrivateComponent from "@src/utils/PrivateComponent";
import { supabase } from "@src/utils/supabaseClient";
import * as Styles from "./styles";

type UserProfileProps = {
  first_name: string;
  last_name: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  photo_url: string;
};

const ValidateFormSchema = Yup.object().shape({
  first_name: Yup.string().matches(
    new RegExp(/^[a-z ,.'-]+$/i),
    "First Name should only contain letters"
  ),
  last_name: Yup.string().matches(
    new RegExp(/^[a-z ,.'-]+$/i),
    "First Name should only contain letters"
  ),
  city: Yup.string().matches(
    new RegExp(/^[a-z ,.'-]+$/i),
    "City should only contain letters"
  ),
  country: Yup.string().matches(
    new RegExp(/^[a-z ,.'-]+$/i),
    "Country should only contain letters"
  ),
  phone: Yup.string().min(10, "Phone must be 10 digits length"),
  photo_url: Yup.string().matches(
    new RegExp(/(\.(jpg|jpeg|png|gif|pdf))/i),
    "Pleas enter a valid Photo URL"
  )
});

export default function Profile() {
  const { logout, user } = useAuth();
  const [profile, setProfile] = useState<UserProfileProps>();
  const [getProfileError, setGetProfileError] = useState();
  const [handleUpdateError, setHandleUpdateError] = useState<string>();
  const [successAlert, setSuccessAlert] = useState(false);

  const getProfile = async () => {
    const user = await supabase.auth.user();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id)
      .maybeSingle();

    if (error) {
      setGetProfileError(getProfileError);

      return;
    }

    return data;
  };

  useEffect(() => {
    const fetch = async () => {
      const profile = await getProfile();
      setProfile(profile);
    };

    fetch();
  }, []);

  const handleUpdate = async (values: any) => {
    const { data, error } = await supabase
      .from("profiles")
      .update(values)
      .eq("id", user?.id)
      .maybeSingle();

    if (error) {
      setHandleUpdateError(error.message);
      return;
    }
    setSuccessAlert(true);
    setProfile(data);
  };

  useEffect(() => {
    setTimeout(() => setSuccessAlert(false), 5000);
  }, [successAlert]);

  const formik = useFormik({
    initialValues: {
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      city: profile?.city || "",
      country: profile?.country || "",
      phone: profile?.phone || "",
      photo_url: profile?.photo_url || ""
    },
    validationSchema: ValidateFormSchema,
    onSubmit: handleUpdate,
    enableReinitialize: true
  });

  return (
    <PrivateComponent requiredPermission={user}>
      <Styles.Element>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          fontWeight="bold"
          color="tertiary"
          marginBottom="15px"
        >
          Profile
        </Typography>

        <Styles.ProfilePhoto />
        <Link href="/" passHref>
          <a>
            <Button onClick={logout}>Log out</Button>
          </a>
        </Link>
        <Box display="flex" flexDirection="column">
          <Styles.CustomForm onSubmit={formik.handleSubmit}>
            <label>First Name:</label>
            <Styles.CustomTextField
              value={formik.values.first_name}
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              helperText={formik.errors.first_name}
            />
            <label>Last Name:</label>
            <Styles.CustomTextField
              value={formik.values.last_name}
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              helperText={formik.errors.last_name}
            />
            City:
            <Styles.CustomTextField
              type="text"
              value={formik.values.city}
              name="city"
              onChange={formik.handleChange}
              helperText={formik.errors.city}
            />
            Country:
            <Styles.CustomTextField
              type="text"
              value={formik.values.country}
              name="country"
              onChange={formik.handleChange}
              helperText={formik.errors.country}
            />
            Phone number:
            <Styles.CustomTextField
              value={formik.values.phone}
              type="text"
              name="phone"
              onChange={formik.handleChange}
              helperText={formik.errors.phone}
            />
            Photo URL
            <Styles.CustomTextField
              type="text"
              value={formik.values.photo_url}
              name="photo_url"
              onChange={formik.handleChange}
              helperText={formik.errors.photo_url}
            />
          </Styles.CustomForm>

          {getProfileError ? (
            <Stack>
              <Alert severity="error">
                <AlertTitle>{getProfileError}</AlertTitle>
              </Alert>
            </Stack>
          ) : null}
          {handleUpdateError ? (
            <Stack>
              <Alert severity="error">
                <AlertTitle>{handleUpdateError}</AlertTitle>
              </Alert>
            </Stack>
          ) : null}
          <Button onClick={formik.submitForm}>Update my profile</Button>
          {successAlert ? (
            <Stack>
              <Alert severity="success">
                <AlertTitle>Your profile has been updated.</AlertTitle>
              </Alert>
            </Stack>
          ) : null}
        </Box>
      </Styles.Element>
    </PrivateComponent>
  );
}
