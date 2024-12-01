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
        <>
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


            </Swiper>







            {/* 2nd */}

            <div className="hero text-black border  my-14">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src="/card.png"
                        className="rounded-lg shadow-2xl w-[50%]" alt="" height="1000" width="4000" />
                    <div>
                        <h1 className="text-5xl font-bold">Message Of Principal</h1>
                        <p className="py-6">

                            বাংলাদেশ বিমান বাহিনী কর্তৃক পরিচালিত দেশের ঐতিহ্যবাহী এবং স্বনামধ্য শিক্ষা প্রতিষ্ঠান বিএএফ শাহীন কলেজ কুর্মিটোলা ঢাকা সেনানিবাসের এক মনোরম এবং সুনির্মল পরিবেশে অবস্থিত। একটি আদর্শ শিক্ষাঙ্গন হিসাবে ইতোমধ্যে এই কলেজটি দেশব্যাপী ব্যাপক পরিচিতি লাভ করেছে। নগর জীবনের কোলাহল এবং যানজট মুক্ত, অরাজনৈতিক  সম্পূর্ন নিরাপদ এক অনন্য শিক্ষা প্রতিষ্ঠানের নাম বিএএফ শাহীন কলেজ কুর্মিটোলা। ১৯৭২ সালে  “এয়ারফোর্স স্কুল” নামে এই প্রতিষ্ঠানটির পথচলা শুরু হয় এবং কালের পরিক্রমায় এটি সাফল্যের শীর্ষ সীমায় পৌছে যায়। সীমিত পরিসরে এর যাত্রা শুরু হলেও ধীরে ধীরে কলেবর বৃদ্ধি পেয়ে এটি এখন এক অনন্য উচ্চতার পূর্ণাঙ্গ শিক্ষা প্রতিষ্ঠান।  ১৯৮০ সালে এটির নামকরন করা হয় “বিএএফ শাহীন স্কুল”। ১৯৮২ সালে এটিকে দ্বাদশ শ্রেণি পর্যন্ত উন্নীত করা হয় এবং পুনরায় নামকরন করা হয় “বিএএফ শাহীন কলেজ কুর্মিটোলা”। শিশু থেকে দ্বাদশ শ্রেণি পর্যন্ত বাংলা ও ইংরেজি ভার্সনে পাঠদান করা হয় এই শিক্ষা প্রতিষ্ঠানে।

                        </p>

                    </div>
                </div>
            </div>


            {/* 3rd */}

            <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto my-10">
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
                    </div>
                </div>

            </div>




            {/* 4th */}
            <div className='grid grid-cols-4 gap-4 w-[90%] mx-auto'>
                <div className="card w-80 text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-80 text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-80 text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>



















        </>





    );
};

export default Homepage;