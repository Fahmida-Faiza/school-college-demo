"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Homepage = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><Image src="/slide-04.jpg" height="1000" width="4000" alt="" /></SwiperSlide>
                <SwiperSlide><Image src="/slide-03.jpg" height="1000" width="4000" alt="" /></SwiperSlide>
                <SwiperSlide><Image src="/slide-04.jpg" height="1000" width="4000" alt="" /></SwiperSlide>
                <SwiperSlide><Image src="/slide-03.jpg" height="1000" width="4000" alt="" /></SwiperSlide>
                <SwiperSlide><Image src="/slide-04.jpg" height="1000" width="4000" alt="" /></SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Homepage;