import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "../styles/hero-slider.css";

const HeroSlider = () => {
  const swiperRef = useRef(null); // Reference to control Swiper

  return (
    <div className="relative">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        className="w-full h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-[#120F1C]">
            <div className="absolute inset-y-0 left-[8rem] flex flex-col justify-center z-10">
              <h1
                className="text-5xl font-extrabold text-white max-w-xl mb-6 leading-snug 
                animate-fadeInUp transition-all duration-1000 ease-in-out opacity-0"
              >
                Protect your organisation's <br /> reputation with our digital
                forensics expertise
              </h1>
              <button
                className="px-4 py-2 w-[10rem] rounded bg-purple-600 text-white 
                transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_25px_#9B59B6]
                transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                Learn More
              </button>
            </div>
            <img
              src="./Asset/home-page-about-us.jpg"
              alt="Forensics Background"
              className="absolute top-0 right-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-[#120F1C]">
            <div className="absolute inset-y-0 left-[8rem] flex flex-col justify-center z-10">
              <h1
                className="text-5xl font-extrabold text-white max-w-xl mb-6 leading-snug
                animate-fadeInUp transition-all duration-1000 ease-in-out opacity-0"
              >
                No. 1 Platform for Learning <br /> Cyber Forensics <br /> Meet
                Our ForensicHQ
              </h1>
              <button
                className="px-4 py-2 w-[10rem] rounded bg-blue-600 text-white 
                transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_25px_#1E90FF]
                transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                Learn More
              </button>
            </div>
            <img
              src="./Asset/home-page-banner-image.jpg"
              alt="Forensics Slide 2"
              className="absolute top-0 right-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-[#120F1C]">
            <div className="absolute inset-y-0 left-[8rem] flex flex-col justify-center z-10">
              <h1
                className="text-5xl font-extrabold text-white max-w-xl mb-6 leading-snug
                animate-fadeInUp transition-all duration-1000 ease-in-out opacity-0"
              >
                Expert Digital Forensics <br /> Services at Your Fingertips
              </h1>
              <button
                className="px-4 py-2 w-[10rem] rounded bg-emerald-600 text-white 
                transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_0_25px_#2ECC71]
                transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                Learn More
              </button>
            </div>
            <img
              src="./Asset/home-page-banner3.jpg"
              alt="Forensics Slide 3"
              className="absolute top-0 right-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-[#120F1C]">
            {/* Content Section */}
            <div className="absolute inset-y-0 left-[8rem] flex flex-col justify-center z-10">
              <h1
                className="text-5xl font-extrabold text-white max-w-xl mb-6 leading-snug opacity-0 animate-fadeInUp 
        transition-all duration-1000 ease-out"
              >
                Unlock hidden <br /> digital evidence <br /> with our cutting-
                <br /> edge solutions
              </h1>
              <button
                className="px-4 py-2 w-[10rem] rounded bg-red-600 text-white 
          transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_25px_#FF6F61]
          transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                Learn More
              </button>
            </div>

            {/* Background Image */}
            <img
              src="./Asset/home-page-banner2.jpg"
              alt="Forensics Slide 4"
              className="absolute top-0 right-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-button-prev absolute top-1/2 -left-8 z-10 text-white text-4xl hover:scale-125 transition-transform duration-200"
        aria-label="Previous Slide"
      ></button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-button-next absolute top-1/2 -right-8 z-10 text-white text-4xl hover:scale-125 transition-transform duration-200"
        aria-label="Next Slide"
      ></button>
    </div>
  );
};

export default HeroSlider;
