"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const OutlineRoundedButtons = () => {
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
          Outline Rounded Buttons
        </Typography>
        
        <Stack
          sx={{
            display: 'inline-block'
          }}
        >
          <Button 
            variant="outlined"
            color="primary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px primary"
          >
            Primary
          </Button>

          <Button 
            variant="outlined"
            color="secondary"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px',
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px secondary"
          >
            Secondary
          </Button>

          <Button 
            variant="outlined"
            color="success"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px success"
          >
            Success
          </Button>

          <Button 
            variant="outlined"
            color="info"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px', 
              fontSize: '14px'
            }}
            className="mr-10px info"
          >
            Info
          </Button>

          <Button 
            variant="outlined"
            color="warning"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px warning"
          >
            Warning
          </Button>

          <Button 
            variant="outlined"
            color="error"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px danger"
          >
            Danger
          </Button>

          <Button 
            variant="outlined"
            color="dark"
            sx={{
              textTransform: 'capitalize',
              borderRadius: '30px',
              mt: '10px', 
              p: '10px 30px',
              fontSize: '14px'
            }}
            className="mr-10px"
          >
            Dark
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default OutlineRoundedButtons;
