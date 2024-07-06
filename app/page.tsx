import React from "react";
import Header from "@/app/components/Header";
import Books from "@/app/components/Books";
import TestimonialWall from "@/app/components/TestimonialWall";
import Footer from "@/app/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Books />
      <TestimonialWall />
      <Footer />
    </div>
  );
};

export default Home;
