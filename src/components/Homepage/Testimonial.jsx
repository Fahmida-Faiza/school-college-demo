import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Cdr Prof. Bhushan Dewan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    quote:
      "Unique diversified working with vast range of activities including IT-enabled education, management, entrepreneurship...",
  },
  {
    name: "Anisul Haq",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    quote: "ড্যাফোডিল বিশ্ববিদ্যালয়: অসাধারণ আমার মনে হয়েছে।",
  },
  {
    name: "Dr. James Lee",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    quote:
      "Incredible learning environment with dedicated faculty and student-centered approach.",
  },
  {
    name: "Dr. Kalif",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    quote:
      "Incredible learning environment with dedicated faculty and student-centered approach.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
      {/* Title */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl text-black font-bold mb-4">Visitors Says About Us</h1>
        <p className="text-gray-600 mb-12">
          National and International scholars, Business leaders, Entrepreneurs,
          Dignitaries visited us to share experiences, explore opportunities,
          collaborate and give guidance to the students.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col md:flex-row items-center gap-6 px-4 pb-10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full shadow-lg"
                />
                <div className="text-center md:text-left max-w-2xl">
                  <p className="text-[70px] leading-none text-purple-100 -mt-10 mb-4">“</p>
                  <p className="text-lg text-gray-800 mb-4">{t.quote}</p>
                  <p className="text-md font-semibold">{t.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <button className="btn btn-primary mt-8 px-6 text-white">View Details</button>
    </div>
  );
}
