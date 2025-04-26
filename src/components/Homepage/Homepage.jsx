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

const Homepage = () => {
    return (
        <>
     <div className='grid grid-cols-2 w-[90%] mx-auto'>
    <div className='menu text-black bg-blue-50 rounded-box w-56'>
        <ul class="">
       <li> <a className="link link-hover">Student</a></li>
      <li>  <a className="link link-hover">Teacher</a></li>
       <li> <a className="link link-hover">Routine</a></li>
       <li> <a className="link link-hover">Payment</a></li>
        </ul>
    </div>

    <div className='bg-blue-100'>
   
    </div>
</div>








            {/* 2nd */}

           


            {/* 3rd */}

            <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto my-20">
                <div className="">
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title bg-blue-600 text-2xl font-medium rounded-xl p-2">Today's Wisdom Words</h2>
                            <ol className='list-decimal text-black ml-5'>
                                <li>Never judge someone based on the opinion of others.</li>
                                <li>Dreams don't works unless you do.</li>
                                <li>"A teacher is one who helps others and influences lives forever."</li>
                                <li>"All teachers teach history to those who will make history."</li>
                                <li>"A good teacher is a good student first. By repeating his lessons, he acquires excellence."</li>
                                <li>"The amount of good values that students learn in school depends on how good of a role model their teachers are."</li>
                                <li>"God designed the family as the place where children learn and grow. That means that imperfect parents are the teachers."</li>
                            </ol>

                        </div>
                    </div>
                </div>


                <div className=" w-[70%] mx-auto">
                    {/* <ol>
                <li><a className="link link-info">I'm a simple link</a></li>
                <li><a className="link link-info">I'm a simple link</a></li>
                <li><a className="link link-info">I'm a simple link</a></li>
                <li><a className="link link-info">I'm a simple link</a></li>
                <li><a className="link link-info">I'm a simple link</a></li>
               </ol> */}
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title bg-blue-600 text-2xl font-medium rounded-xl p-2">Notice</h2>
                            <ol className='list-decimal text-black ml-5'>
                                <li><a className="link link-info">I&apos;m a simple link</a></li>
                                <li><a className="link link-info">I&apos;m a simple link</a></li>
                                <li><a className="link link-info">I&apos;m a simple link</a></li>
                                <li><a className="link link-info">I&apos;m a simple link</a></li>
                                <li><a className="link link-info">I&apos;m a simple link</a></li>
                            </ol>

                        </div>
                        <button className='text-blue-500 text-end px-5 btn-link'>All Notice</button>
                    </div>
                </div>

            </div>




            {/* 4th */}

            <div >
                <h1 className='text-center my-5 font-semibold text-3xl text-black'>Teachers Details</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[80%] mx-auto   mt-30"
            >
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl ">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-80 md:w-[22rem] text-black shadow-xl">
                        <figure className="px-10 pt-10">
                        <Image src="/9187604.png" height="1000" width="4000" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
          


















        </>





    );
};

export default Homepage;