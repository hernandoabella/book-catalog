"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why choose our programming book?",
    answer:
      "Our book offers practical examples, clear explanations, and exercises that help you master programming concepts.",
  },
  {
    question: "What programming languages are covered?",
    answer:
      "Our book covers popular languages such as Python, JavaScript, and Java, providing a comprehensive learning experience.",
  },
  {
    question: "Are updates included?",
    answer:
      "Yes, all purchasers receive free updates to keep their knowledge current with the latest programming trends.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="bg-neutral-950 py-10">
      <section className="max-w-5xl mx-auto w-full px-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
            Frequently Asked
            <span className="text-[#45B3BA]"> Questions </span>
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Find the answers to your questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 ${
                activeIndex === index ? "bg-neutral-800" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl text-white cursor-pointer">
                  {faq.question}
                </p>
                {activeIndex === index && (
                  <p className="font-medium text-white">{faq.answer}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
