"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export default function IconPosition() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Icon Position
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab icon={<PhoneIcon />} label="top" />
          <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
          <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
          <Tab icon={<PersonPinIcon />} iconPosition="bottom" label="bottom" />
        </Tabs>
      </Card>
    </>
  );
}
