import React from 'react';
import Image from 'next/image';
import Books from '@/components/Books';

const Home = () => {
  return (
    <div>
      <div className="relative flex h-screen">
        <Image
          src="/bg.avif"
          alt="image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute top-1/2 left-10 max-w-full md:left-20">
          <div className="bg-white text-7xl font-bold text-black mix-blend-screen px-10 py-5">
            Book Library
          </div>
        </div>
      </div>
      <Books />
    </div>
  );
};

export default Home;
