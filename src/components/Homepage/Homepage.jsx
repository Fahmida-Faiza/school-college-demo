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

const alumni = [
  {
    img: '/7426901.jpg',
    title: 'Dr. Ahsan Habib',
    description: 'Researcher at MIT, published 20+ AI papers, and contributes to national education reform.',
  },
  {
    img: '/back.png.png',
    title: 'Prof. Farzana Islam',
    description: 'Working with UNESCO and leading global teacher training initiatives.',
  },
  {
    img: '/book-with-green-board-background.jpg',
    title: 'Engr. Rahim Uddin',
    description: 'Now a top-level engineer at Google, promoting open-source education tools.',
  },
  {
    img: '/7426901.jpg',
    title: 'Dr. Jahanara Begum',
    description: 'Dean of Education at a top university, mentoring thousands of future teachers.',
  },
  {
    img: '/back.png.png',
    title: 'Mohammad Karim',
    description: 'Runs a successful ed-tech startup empowering rural schools.',
  },
  {
    img: '/7426901.jpg',
    title: 'Fatima Nahar',
    description: 'Conducts cross-cultural education research and works at UNICEF.',
  },
  {
    img: '/book-with-green-board-background.jpg',
    title: 'Samiul Islam',
    description: 'Key figure in national textbook policy, advisor to Ministry of Education.',
  },
  {
    img: '/7426901.jpg',
    title: 'Taslima Nasrin',
    description: 'Professor in Canada, blending Bengali culture in international curriculums.',
  },
];




  return (
    <>



   <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT: QUOTE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug">
            “Never help a child with a task at which he feels he can succeed.”
          </h2>
          <p className="mt-4 text-sm font-semibold text-slate-600">— Maria Montessori</p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Sed viverra arcu quis neque gravida, sit amet rhoncus mi euismod. Sed vel viverra dui.
            Nam luctus, velit eget sollicitudin faucibus, quam sapien porta est, sed commodo justo purus feugiat leo.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="btn btn-primary">About Montessori</button>
            <button className="btn btn-warning text-white">Our Story</button>
          </div>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/on1.png"
            alt="Children learning illustration"
            className="max-w-md w-full"
          />
        </div>
      </section>





{/*new  */}

   <div className="bg-white text-gray-800 font-sans mt-20">

      {/* HERO SECTION */}
      <section className="bg-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 items-center gap-8">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
              HoDhyvesck Hatartony..
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Empowering young minds to grow, learn, and succeed in a joyful environment.
            </p>
            
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/5rk4_6fl4_220311.jpg"
              alt="Happy kids"
              className="rounded-xl max-w-full w-[90%] shadow-lg "
            />
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-12 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "School Moulding",
                desc: "Creative and structured environment for kids.",
                image: "/back.png.png",
              },
              {
                title: "Fun Learning",
                desc: "Play-based lessons to build early skills.",
                image: "/7426901.jpg",
              },
              {
                title: "Friendly Mentors",
                desc: "Caring staff to guide and support children.",
                image: "/back.png.png",
              },
            ].map((card, i) => (
              <div key={i} className="bg-orange-50 rounded-lg shadow p-4">
                <img src={card.image} alt="Feature" className="rounded-md mb-4 h-48 w-full object-cover" />
                <h3 className="text-xl font-semibold text-orange-500">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO & ICON SECTION */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 mb-8">
            We nurture every child’s passion for learning through joyful activities and individual attention.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {[
              { icon: "🌟", title: "5-Star Rated" },
              { icon: "🎓", title: "Expert Teachers" },
              { icon: "📘", title: "Modern Curriculum" },
              { icon: "🎨", title: "Creative Programs" },
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg hover:bg-orange-50 transition">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-orange-600">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>

{/*  */}


      {/* 2nd */}


{/*  */}
 <div className="lg:max-w-7xl mx-auto mt-32">
        <div className="mb-10 ">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-4">What We Offer</h1>
          <p className="text-base text-gray-600">
            At Daffodil International University, students get the opportunity to think, learn and grow.
          </p>
        </div>

        {/* TWO-COLUMN GRID ON MD+, SINGLE ON MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Accommodation",
            "Library",
            "Blended Learning Platform",
            "Transportation",
            "One student one laptop",
            "Sports Club & Gymnasium",
          ].map((title, i) => (
            <div key={i} className="flex gap-4 p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FcLibrary className="text-3xl mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-orange-600">{title}</h2>
                <p className="text-sm text-gray-700 mt-1">
                  We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home.
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
{/*  */}
      {/* 3rd events */}

    





{/*  */}


<section className="py-16 bg-white mt-20">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-4">Recent Events</h2>
      <p className="text-base text-gray-600">
        Life at Daffodil is very much eventful. Through a lot of meaningful and impactful events,
        students get the opportunity to develop their skills and portfolio beyond the curriculum.
      </p>
    </div>

    {/* Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Startup Expo 2025",
          desc: "Students showcased innovative startups with mentors and investors.",
          image: "/7426901.jpg",
        },
        {
          title: "Cultural Fest",
          desc: "A colorful display of music, dance, and food celebrating our diverse campus.",
          image: "/back.png.png",
        },
        {
          title: "Tech Hackathon",
          desc: "24-hour coding marathon solving real-world problems with AI.",
          image: "/7426901.jpg",
        },
      ].map((card, i) => (
        <div key={i} className="bg-orange-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <img
            src={card.image}
            alt={card.title}
            className="rounded-md mb-4 h-48 w-full object-cover"
          />
          <h3 className="text-xl font-semibold text-orange-600">{card.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>









      {/* 4th alumni teachers */}


 <section className="py-16 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">Teachers Alumni</h2>
          <p className="text-base text-gray-600">
            Our Alumni are our pride as they are engaged in building the world through national and international contributions.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 5000 ,disableOnInteraction: false}}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {alumni.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-orange-50 rounded-xl shadow-md p-6 hover:shadow-lg transition h-[420px] flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden rounded-md mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-600">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{item.description}</p>
                </div>
                <div className="mt-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>




 


      <Testimonial />




<Classes/>





    </>





  );
};

export default Homepage;