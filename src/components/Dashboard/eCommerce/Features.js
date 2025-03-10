"use client";

import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Image from "next/image";

const Features = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://backoffice.ozapay.me/api/users");
      if (!response.ok) throw new Error("Error fetching users");
      const data = await response.json();
      setTotalCount(data['hydra:totalItems']);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const FeaturesData = [
    {
      id: "1",
      title: "$25,890",
      subTitle: "Total Sales",
      image: "/images/graph-icon.png",
      icon: <TrendingUpIcon/>,
      growthText: "1.3% Up from past week",
      color: "successColor",
    },
    {
      id: "2",
      title: "$25,890",
      subTitle: "Total Orders",
      image: "/images/work-icon.png",
      icon: <TrendingUpIcon/>,
      growthText: "1.5% Up from past week",
      color: "successColor",
    },
    {
      id: "3",
      title: totalCount,
      subTitle: "Comptes utilisateurs",
      image: "/images/users-icon.png",
      icon: <TrendingUpIcon/>,
      growthText: "+22% d'augmentation cette semaine",
      color: "successColor",
    },
  ];

  return (
    <>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {FeaturesData.map((feature) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={feature.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                p: "25px 20px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "15px",
                }}
              >
                <Box>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: 25, fontWeight: 700, mb: "5px" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="p" fontSize={14}>
                    {feature.subTitle}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "62px",
                    height: "62px",
                    lineHeight: "85px",
                    background: "rgba(85, 112, 241, 0.12)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={feature.image}
                    alt="Graph"
                    width={36}
                    height={36}
                  />
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className={`mr-5px ${feature.color}`}>
                    {feature.icon}
                  </span>
                  {feature.growthText}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Features;
