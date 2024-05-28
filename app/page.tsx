import React from 'react';
import Books from '@/components/Books';
import TestimonialWall from '@/components/TestimonialWall';

const Home = () => {
  return (
    <div>
      <div className="relative flex h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-1/2 left-10 max-w-full md:left-20">
          <div className="bg-white text-7xl font-bold text-black mix-blend-screen px-10 py-5">
            Book Library
          </div>
        </div>
      </div>
      <Books />
      <TestimonialWall />
    </div>
  );
};

export default Home;
