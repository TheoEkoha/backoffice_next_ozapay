"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function CollapseTransitions() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
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
          Collapse
        </Typography>

        <Box sx={{ height: 300 }}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <Box
            sx={{
              '& > :not(style)': {
                display: 'flex',
                justifyContent: 'space-around',
                height: 120,
                width: 250,
              },
            }}
          >
            <div>
              <Collapse in={checked}>{icon}</Collapse>
              <Collapse in={checked} collapsedSize={40}>
                {icon}
              </Collapse>
            </div>
            <div>
              <Box sx={{ width: '50%' }}>
                <Collapse orientation="horizontal" in={checked}>
                  {icon}
                </Collapse>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                  {icon}
                </Collapse>
              </Box>
            </div>
          </Box>
        </Box>
      </Card>
    </>
  );
}
