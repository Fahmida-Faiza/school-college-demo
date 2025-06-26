"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FcLibrary } from "react-icons/fc";


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



      {/* https://daffodilvarsity.edu.bd/template/images/about.jpg */}

      {/* 2nd */}

      <div className='text-black flex gap-10'>

        <div className='mt-10'>
          <div className='text-xl font-bold'>
            <h1>What We Offer</h1>
            <p>At Daffodil International University, students get the opportunity to think, learn and grow.</p>
          </div>

          {/* main image part */}
          <div className='grid grid-cols-2 gap-2 mt-10'>
            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            
            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            
            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            
            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>This is title</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src=" https://daffodilvarsity.edu.bd/template/images/about.jpg " alt="" />
        </div>

      </div>









    </>





  );
};

export default Homepage;