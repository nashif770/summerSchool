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
      <Headings heading={"Reviews"} />

      <Swiper className="mySwiper m-3 h-[600px] p-6">
        {reviews?.map((review, index) => (
          <SwiperSlide
            key={index}
            className="p-5 bg-gradient-to-r from-yellow-300 to-red-500"
          >
            <div className="bg-white rounded-lg p-6 overflow-hidden shadow-lg">
              <p className="text-gray-800">{review.review}</p>
              <div className="divider"></div>
              <h2 className="text-xl font-bold text-yellow-400">
                {review.reviewerName}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
