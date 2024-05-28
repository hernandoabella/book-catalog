"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Definición de la interfaz Testimonial
interface Testimonial {
  title: string;
  description: string;
  name: string;
  role: string;
  image: string;
}

// Definición de la constante testimonials
const testimonials: Testimonial[] = [
  {
    title: "Very helpful for interview prep",
    description:
      "This book was very helpful preparing for JavaScript interviews...",
    name: "David Chouinard",
    role: "Reader",
    image: "/testimonial-1.jpg",
  },
  {
    title: "Wonderful for reviews",
    description:
      "I’m finding this book to be an excellent resource for preparing for my interview.",
    name: "Michael Johnson",
    role: "Software Engineer",
    image: "/testimonial-2.jpg",
  },
  {
    title: "Informative!",
    description:
      "50 Python Concepts Every Developer Should Know is a fantastic guide that includes fifty concepts that readers should know about Python coding.",
    name: "-KLC",
    role: "Reader",
    image: "/testimonial-3.jpg",
  },
  {
    title: "Great find!",
    description:
      "The way this book breaks down complex design patterns into digestible, applicable knowledge is mind-blowing.",
    name: "Randall McMurphy",
    role: "Reader",
    image: "/testimonial-4.jpg",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 flex flex-col gap-y-10 justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref}
    >
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl text-white flex items-center gap-2">
          <FaQuoteLeft className="text-yellow-400" />
          {testimonial.title}
          <FaQuoteRight className="text-yellow-400" />
        </p>
        <p className="font-medium text-white">{testimonial.description}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="text-sm font-medium text-slate-100/70">
              {testimonial.role}
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialWall: React.FC = () => {
  return (
    <div className="bg-neutral-950 py-10">
      <section className="max-w-5xl mx-auto w-full px-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
            Here&apos;s what our
            <span className="text-[#45B3BA]"> customers </span> have to say
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Explore the benefits of our books
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <div className="col-span-2 flex flex-col gap-y-10">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="col-span-3 flex flex-col gap-y-10">
            {testimonials.slice(2).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialWall;
