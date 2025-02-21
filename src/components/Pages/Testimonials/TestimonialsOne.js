"use client";

import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "@/components/Pages/Testimonials/TestimonialsOne.module.css";
import Image from "next/image";

const Feedbacks = [
  {
    id: 1,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user1.png",
    name: "Roberto",
    designation: "React Developer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
  {
    id: 2,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user2.png",
    name: "Ramon",
    designation: "UI/UX Designer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
  {
    id: 3,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user3.png",
    name: "Nathaniel",
    designation: "Angular Developer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
  {
    id: 4,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user4.png",
    name: "Milton",
    designation: "React Developer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
  {
    id: 5,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user5.png",
    name: "Antonio",
    designation: "React Developer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
  {
    id: 6,
    feedbackText:
      "We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.",
    image: "/images/user6.png",
    name: "Julian",
    designation: "React Developer",
    ratings: [
      {
        id: 1,
        icon: "ri-star-fill",
      },
      {
        id: 2,
        icon: "ri-star-fill",
      },
      {
        id: 3,
        icon: "ri-star-fill",
      },
      {
        id: 4,
        icon: "ri-star-fill",
      },
      {
        id: 5,
        icon: "ri-star-fill",
      },
    ],
  },
];

const TestimonialsOne = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "30px",
          mb: "30px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 600,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "5px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          Testimonials One
        </Typography>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="testimonialStyle1"
        >
          {Feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className={styles.feedbackContent}>
                <div className={styles.feedbackText}>
                  <q>{feedback.feedbackText}</q>
                </div>

                <div className={styles.feedbackImg}>
                  <div>
                    <Image
                      src={feedback.image}
                      alt="Client"
                      width={45}
                      height={45}
                    />
                  </div>

                  <div>
                    <h4>{feedback.name}</h4>
                    <p>{feedback.designation}</p>
                    <ul>
                      {feedback.ratings.map((rating) => (
                        <li key={rating.id}>
                          <i className={rating.icon}></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </>
  );
};

export default TestimonialsOne;
