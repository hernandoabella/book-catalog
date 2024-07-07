"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="bg-neutral-950 text-white py-20">
      <div className="container mx-auto flex flex-col items-center my-12 md:my-24 px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            We Are Working On New Books
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Stay tuned for our upcoming releases. Get notified when they are out!
          </p>
          <a
            href="#"
            className="bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Get Notified
          </a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src="/programs-for-beginners-java.png"
              alt="Book Image 1"
              className="w-40 md:w-56 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src="/programs-for-beginners-go.png"
              alt="Book Image 2"
              className="w-40 md:w-56 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <img
              src="/programs-for-beginners-rust.png"
              alt="Book Image 3"
              className="w-40 md:w-56 rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
