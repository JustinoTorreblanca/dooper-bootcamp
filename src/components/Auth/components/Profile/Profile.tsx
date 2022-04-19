import * as React from "react";
import { Box, Typography } from "@mui/material";
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
  const userProfile: UserProfileProps = {
    name: "Jane",
    lastname: "Doe",
    city: "CDMX",
    state: "CDMX",
    country: "Mex",
    email: "jane.doe@doe.com",
    phone_number: "3216549877",
    photo_url: ""
  };

  return (
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
      <Box>
        <ul>
          <li>Name: {userProfile.name}</li>
          <li>Last Name: {userProfile.lastname}</li>
          <li>City: {userProfile.city}</li>
          <li>Country: {userProfile.country}</li>
          <li>Email: {userProfile.email}</li>
          <li>Phone number: {userProfile.phone_number}</li>
          <li>Photo url {userProfile.photo_url}</li>
        </ul>
      </Box>
    </Styles.Element>
  );
}
