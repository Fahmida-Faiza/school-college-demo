"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FcLibrary } from "react-icons/fc";
import Testimonial from '../Homepage/Testimonial'
import Classes from '../Homepage/Classes'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {


  const alumni = new Array(8).fill({
    img: 'https://daffodilvarsity.edu.bd/images/faculty/a7ac450870ee09fec3b970ae8f9966c9.webp',
    title: 'Card Title',
    description:
      'A card component has a figure, a body part, and inside body there are title and actions parts',
  });




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

      <div className='text-black lg:flex gap-10 lg:p-10 w-80 md:w-3/4 lg:w-full mx-auto'>

        <div className='mt-10'>
          <div className='text-xl'>
            <h1 className='text-3xl'>What We Offer</h1>
            <p>At Daffodil International University, students get the opportunity to think, learn and grow.</p>
          </div>

          {/* main image part */}
          <div className='grid lg:grid-cols-2 gap-2 mt-10'>
            <div className='flex gap-5'>
              <FcLibrary className='text-3xl ' />
              <div>
                <h2 className='text-xl font-bold'>Accommodation</h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home....</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>Library</h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home....</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>Blended Learning Platform</h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home....</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>Transportation</h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home.....</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>One student one laptop</h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home....</p>
              </div>
            </div>

            <div className='flex gap-5'>
              <FcLibrary className='text-3xl' />
              <div>
                <h2 className='text-xl font-bold'>Sports Club & Gymnasium
                </h2>
                <p className='text-lg'>We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home....</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src=" https://daffodilvarsity.edu.bd/template/images/about.jpg " alt="" className='rounded-2xl' />
        </div>

      </div>


      {/* 3rd events */}

      <div className=' w-80 md:w-3/4 lg:w-full mx-auto'>
        <div className='text-center text-black font-bold'>
          <h1 className='text-4xl mt-10'>Recent Events</h1>
          <p>Life at Daffodil is very much eventful. Through a lot of meaningful and impactful events students get the <br /> opportunity to develop their skills and portfolio beyond the curriculam

          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 max-w-7xl mx-auto'>

          <div className="card   md:w-72 lg:w-96 shadow-sm">
            <figure>
              <img src="pic.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Card Title</h2>
              <p className='text-black'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions ">
                <button className="btn  text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card  md:w-72 lg:w-96 shadow-sm">
            <figure>
              <img src="pic.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Card Title</h2>
              <p className='text-black'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions ">
                <button className="btn  text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card  md:w-72 lg:w-96 shadow-sm">
            <figure>
              <img src="pic.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Card Title</h2>
              <p className='text-black'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions">
                <button className="btn  text-white btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4th alumni teachers */}



      <div className='mt-10'>
        <div className='text-center text-black font-bold'>
          <h1 className='text-4xl mt-10'>Teachers Alumni</h1>
          <p className='text-black'>
            Our Alumni are our pride as they are engaged in building the world
            through national and International contributions
          </p>
        </div>

        <div className='max-w-7xl mx-auto mt-10 px-4  '>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
          >
            {alumni.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='  card md:w-72 lg:w-80 shadow-sm p-2 '>
                  <figure>
                    <img src={item.img} alt={item.title} />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title text-black'>{item.title}</h2>
                    <p className='text-black'>{item.description}</p>
                    <div className='card-actions'>
                      <button className='btn btn-primary text-white'>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <Testimonial />




<Classes/>





    </>





  );
};

export default Homepage;