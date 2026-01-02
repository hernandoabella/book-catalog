"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  title: string;
  description: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Very helpful for interview prep",
    description: "This book was very helpful preparing for JavaScript interviews. It covers the core concepts clearly.",
    name: "David Chouinard",
    role: "Reader",
    image: "/testimonial-1.jpg",
  },
  {
    title: "Wonderful for reviews",
    description: "I’m finding this book to be an excellent resource for preparing for my interview. Highly recommended.",
    name: "Michael Johnson",
    role: "Software Engineer",
    image: "/testimonial-2.jpg",
  },
  {
    title: "Informative!",
    description: "50 Python Concepts is a fantastic guide. It includes fifty concepts that every dev should know.",
    name: "KLC",
    role: "Reader",
    image: "/testimonial-3.jpg",
  },
  {
    title: "Great find!",
    description: "The way this book breaks down complex design patterns into digestible knowledge is mind-blowing.",
    name: "Randall McMurphy",
    role: "Reader",
    image: "/testimonial-4.jpg",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    
    // Entrance Animation
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const onMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -5,
      borderColor: "rgba(34, 197, 94, 0.4)", // Subtle green glow
      backgroundColor: "rgba(38, 38, 38, 0.8)",
      duration: 0.3
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      borderColor: "rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgba(23, 23, 23, 0.5)",
      duration: 0.3
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative p-8 rounded-[2rem] bg-neutral-900/50 backdrop-blur-sm border border-white/5 flex flex-col justify-between gap-8 h-full transition-colors"
    >
      <div className="space-y-4">
        <FaQuoteLeft className="text-green-500 text-2xl opacity-50" />
        <h3 className="text-xl font-bold text-white leading-tight">
          {testimonial.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed font-medium">
          {testimonial.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=22c55e&color=fff`;
              }}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-white">{testimonial.name}</p>
            <p className="text-xs font-medium text-zinc-500">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-green-500 text-xs" />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialWall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#050505] py-24 overflow-hidden">
      <section ref={containerRef} className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Trusted by <span className="text-zinc-500">Thousands.</span>
          </h2>
          <p className="text-zinc-500 max-w-lg font-medium">
            Developers from around the world use our guides to master new languages and crush technical interviews.
          </p>
        </div>

        {/* Responsive Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[0]} />
            <TestimonialCard testimonial={testimonials[1]} />
          </div>
          
          {/* Column 2 (Taller middle column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[2]} />
            <div className="p-8 rounded-[2rem] bg-green-500 flex flex-col justify-center items-center text-center gap-4 text-black">
               <h4 className="text-2xl font-black italic">Join the 1%</h4>
               <p className="font-bold text-sm">Level up your coding career with our premium collection.</p>
               <button className="mt-2 bg-black text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Shop Now</button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[3]} />
            <div className="border border-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-center">
                <p className="text-4xl font-black text-white">4.9/5</p>
                <p className="text-zinc-500 font-bold text-xs uppercase mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialWall;