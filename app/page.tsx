import React from "react";
import Header from "@/app/components/Header";
import Books from "@/app/components/Books";
import NewsletterSection from "@/app/components/NewsletterSection";
import TestimonialWall from "@/app/components/TestimonialWall";
import Footer from "@/app/components/Footer";
import FAQSection from "./components/FAQSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Books />
      <NewsletterSection />
      <TestimonialWall />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
