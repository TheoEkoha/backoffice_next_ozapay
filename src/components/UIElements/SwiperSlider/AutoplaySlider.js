"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function AutoplaySlider() {
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
            mb: "10px",
          }}
        >
          Autoplay
        </Typography>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/images/slider-img3.jpg"
              alt="Image"
              width={800}
              height={650}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/slider-img4.jpg"
              alt="Image"
              width={800}
              height={650}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/slider-img5.jpg"
              alt="Image"
              width={800}
              height={650}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/slider-img2.jpg"
              alt="Image"
              width={800}
              height={650}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/slider-img1.jpg"
              alt="Image"
              width={800}
              height={650}
            />
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
}
