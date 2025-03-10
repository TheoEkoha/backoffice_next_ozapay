"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Color() {
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
          Color
        </Typography>

        <div>
          <Checkbox {...label} defaultChecked />
          
          <Checkbox {...label} defaultChecked color="secondary" />

          <Checkbox {...label} defaultChecked color="success" />

          <Checkbox {...label} defaultChecked color="default" />

          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[500],
              },
            }}
          />
        </div>
      </Card>
    </>
  );
}
