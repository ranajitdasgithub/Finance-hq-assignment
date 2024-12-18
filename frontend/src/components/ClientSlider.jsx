import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image paths stored in an array
const clientLogos = [
  "/Asset/BANDHAN-BANK.png",
  "/Asset/CENTURY-PLY.png",
  "/Asset/NEO.png",
  "/Asset/GENIUS.png",
  "/Asset/CELEX.png",
  "/Asset/CESC.png",
  "/Asset/TATA.png",
  "/Asset/VEDANTA.png",
  "/AsseT/POWERGRID.png",
  "/Asset/MINISTRY.png",
  "/Asset/GAMUT.png",
];

const ClientSlider = () => {
  return (
    <div
      className="relative py-12"
      style={{
        background: "linear-gradient(270deg, #A31A52, #8B1E8B, #4B1D7A)",
      }}
    >
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        Our Client
      </h2>

      {/* Add a custom class */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-6xl mx-auto relative client-swiper"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-32 h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scoped CSS */}
      <style>
        {`
          .client-swiper .swiper-pagination {
            bottom: -6px !important; /* Move pagination lower */
            z-index: 10; /* Ensure pagination is above other elements */
            position: relative;
          }
          .client-swiper .swiper-pagination-bullet {
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 0.6;
          }
          .client-swiper .swiper-pagination-bullet-active {
            background-color: #ff8c00; /* Active bullet color */
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default ClientSlider;
