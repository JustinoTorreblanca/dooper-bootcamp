import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "@src/contexts/AuthContext";
import PrivateComponent from "@src/utils/PrivateComponent";
import { supabase } from "@src/utils/supabaseClient";
import * as Styles from "./styles";

type UserProfileProps = {
  name: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone_number: string;
  photo_url: string;
};

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [photo_url, setPhoto_url] = useState("");
  const { logout, user } = useAuth();

  type UserProfileProps = {
    name: string;
    lastname: string;
    city: string;
    state: string;
    country: string;
    email: string;
    phone_number: string;
    photo_url: string;
  };

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
          marginBottom={"15px"}
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
                defaultValue={user?.user_metadata.firstName}
                type="firstname"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </li>
            <li>
              Last Name:
              <TextField
                defaultValue={user?.user_metadata.lastName}
                type="lastname"
                onChange={(event) => setLastName(event.target.value)}
              />
            </li>
            <li>
              City:
              <TextField
                type="text"
                defaultValue={user?.user_metadata.city}
                onChange={(event) => setCity(event.target.value)}
              />
            </li>
            <li>
              Country:
              <TextField
                type="text"
                defaultValue={user?.user_metadata.country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </li>
            <li>
              Email:
              <TextField
                type="text"
                defaultValue={user?.email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </li>
            <li>
              Phone number:
              <TextField
                defaultValue={user?.user_metadata.phone}
                type="text"
                onChange={(event) => setPhone_number(event.target.value)}
              />
            </li>
            <li>
              Photo url
              <TextField
                type={"text"}
                defaultValue="photo_url"
                onChange={(event) => setPhoto_url(event.target.value)}
              />
            </li>
          </ul>
          <Button onClick={updateProfile}>Update my profile</Button>
        </Box>
      </Styles.Element>
    </PrivateComponent>
  );
}
