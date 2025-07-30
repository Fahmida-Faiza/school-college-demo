'use client';

import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left Side - Text */}
        <div className="space-y-4">
          <h1 className="text-5xl font-light text-blue-900">BACK TO <span className="font-bold">SCHOOL</span></h1>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspen.
          </p>

          {/* Socials (optional) */}
          <div className="flex gap-4 mt-6 text-blue-700 text-2xl">
            <a href="#"><i className="lab la-facebook"></i></a>
            <a href="#"><i className="lab la-whatsapp"></i></a>
            <a href="#"><i className="lab la-twitter"></i></a>
            <a href="#"><i className="lab la-instagram"></i></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-3xl shadow-lg w-full max-w-md text-white overflow-hidden">
          {/* Brush Image (optional) */}
          <div className="absolute right-0 bottom-0 z-0 opacity-80">
            <Image src="/7426901.jpg" alt="Brush" width={120} height={120} />
          </div>

          <h2 className="text-2xl font-semibold mb-3 z-10 relative">Contact us</h2>
          <p className="text-sm text-white/80 mb-6 z-10 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="space-y-4 z-10 relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md text-black bg-white placeholder-gray-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md text-black bg-white placeholder-gray-500 focus:outline-none"
              required
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full p-3 rounded-md text-black bg-white placeholder-gray-500 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-md transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
