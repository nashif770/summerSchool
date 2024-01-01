import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";

const Reviews = () => {
  const [axiosSecure] = useAxiosSecure();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => setReviews(res.data));
  }, [reviews]);

  return (
    <>
      <Headings heading={"Reviews"}></Headings>
      <Swiper className="mySwiper m-3 bg-white h-screen p-6">
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="p-5">
              <p className="p-6 h-32">{review.review}</p>
              <div className="p-6">
                <div className="divider"></div>
                <h2 className="">{review.reviewerName}</h2>
                <p>{review.reviewerEmail}</p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
