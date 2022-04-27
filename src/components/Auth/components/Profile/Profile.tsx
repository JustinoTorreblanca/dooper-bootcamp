import { useFormik } from "formik";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
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
  phone: Yup.string().min(10, "Phone must be 10 digits length")
});

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [photo_url, setPhoto_url] = useState("");
  const { logout, user } = useAuth();
  const [profile, setProfile] = useState<UserProfileProps>();

  const getProfile = async () => {
    const user = await supabase.auth.user();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id)
      .maybeSingle();

    if (error) {
      //mostrar algo al usuario
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
    console.log({ values });

    const { data, error } = await supabase
      .from("profiles")
      .update(values)
      .eq("id", user?.id)
      .maybeSingle();

    if (error) {
      //mostrar algo al usuario
      return;
    }

    // mostrar feedback al usuario
    setProfile(data);
  };

  const formik = useFormik({
    initialValues: {
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      city: profile?.city || "",
      country: profile?.country || "",
      phone: profile?.phone || "",
      photo_url: profile?.photo_url || ""
    },
    //validationSchema: ValidateFormSchema,
    onSubmit: handleUpdate,
    enableReinitialize: true
  });
  const updateProfile = async () => {
    return await supabase.auth.update({
      data: {
        firstName: firstName,
        lastName: lastName,
        city: city,
        country: country,
        email: email,
        phone_number: phone_number,
        photo_url: photo_url
      }
    });
  };

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

        <Box>
          <ul>
            <li>
              Name:
              <TextField
                value={formik.values.first_name}
                type="text"
                name="first_name"
                onChange={formik.handleChange}
              />
            </li>
            <li>
              Last Name:
              <TextField
                value={formik.values.last_name}
                type="text"
                name="last_name"
                onChange={formik.handleChange}
              />
            </li>
            <li>
              City:
              <TextField
                type="text"
                value={formik.values.city}
                name="city"
                onChange={formik.handleChange}
              />
            </li>
            <li>
              Country:
              <TextField
                type="text"
                value={formik.values.country}
                name="country"
                onChange={formik.handleChange}
              />
            </li>
            <li>
              Phone number:
              <TextField
                value={formik.values.phone}
                type="text"
                name="phone"
                onChange={formik.handleChange}
              />
            </li>
            <li>
              Photo url
              <TextField
                type="text"
                value={formik.values.photo_url}
                name="photo_url"
                onChange={formik.handleChange}
              />
            </li>
          </ul>
          <Button onClick={formik.submitForm}>Update my profile</Button>
        </Box>
      </Styles.Element>
    </PrivateComponent>
  );
}
