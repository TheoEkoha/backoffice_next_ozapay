"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export default function InteractiveIntegration() {

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
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
          Interactive Integration
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ m: 1, position: 'relative' }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon className="whiteColor" /> : <SaveIcon className="whiteColor" />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>

          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              variant="contained"
              sx={buttonSx}
              disabled={loading}
              onClick={handleButtonClick}
              className="whiteColor"
            >
              Accept terms
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
}
