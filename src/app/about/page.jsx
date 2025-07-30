'use client';

import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section className="bg-white py-16 my-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/7426901.jpg"
            alt="About us"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Institution
          </h2>
          <p className="text-gray-600 mb-6">
            We are committed to delivering world-class education through innovative methods
            and highly qualified educators. Our programs are designed to nurture talent,
            creativity, and global thinking.
          </p>

          {/* Features */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-full text-xl">🎓</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Expert Faculty</h4>
                <p className="text-gray-500">
                  Our teachers are experienced professionals passionate about mentoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white p-3 rounded-full text-xl">💡</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Innovative Learning</h4>
                <p className="text-gray-500">
                  We combine technology with traditional learning to create an impactful experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white p-3 rounded-full text-xl">🌐</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Global Recognition</h4>
                <p className="text-gray-500">
                  Our graduates make an impact globally in various industries and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
