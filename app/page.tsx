import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Books from "@/app/components/Books";
import NewsletterSection from "@/app/components/NewsletterSection";
import TestimonialWall from "@/app/components/TestimonialWall";
import Footer from "@/app/components/Footer";
import FAQSection from "./components/FAQSection";
import Quotes from "./components/Quotes";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Books />
      <NewsletterSection />
      <TestimonialWall />
      <Quotes />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
