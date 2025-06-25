"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
    return (
        <>
           
               







        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://daffodilvarsity.edu.bd/images/slider/d15aa2fb4a4074ae22a7bc7cdb5e7875.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>

















        </>





    );
};

export default Homepage;