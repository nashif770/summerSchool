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
        axiosSecure
        .get("/reviews")
        .then((res) => setReviews(res.data));
    }, [reviews]);

  return (
    <>
    <Headings heading={'Reviews'} subHeading={"slide to see more"}></Headings>
      <Swiper className="mySwiper m-3 bg-slate-200 rounded-lg">
        {reviews?.map((review) => (
          <SwiperSlide key={review.email} className="border p-5">
            <div className="card w-96 glass m-auto p-1">
              <figure className="p-3">
                {review.review}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{review.reviewerName}</h2>
                <p>{review.reviewerEmail}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;

<div className="flex flex-col w-3/4 m-auto">
  <div className="m-3 w-1/3 rounded-lg shadow-2xl h-80 mt-3 p-6">
    <h2 className="text-2xl">
      <span className="font-bold"> Name: </span>
    </h2>
  </div>
</div>;
