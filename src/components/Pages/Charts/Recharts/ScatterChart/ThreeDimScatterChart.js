"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const ThreeDimScatterChart = () => {
  const originalConsoleError = console.error;
  console.error = (message, ...args) => {
    if (
      typeof message === "string" &&
      message.includes("defaultProps will be removed")
    ) {
      return;
    }
    originalConsoleError.apply(console, [message, ...args]);
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
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",
            mb: "15px",
          }}
          className="for-dark-bottom-border"
        >
          Three Dim Scatter Chart
        </Typography>

        <ResponsiveContainer width="100%" aspect={2.0 / 0.9}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="A school" data={data01} fill="#8884d8" shape="star" />
            <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
          </ScatterChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default ThreeDimScatterChart;
