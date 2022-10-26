import React from "react";
import CoursesStrategy from "../CoursesStrategy/CoursesStrategy";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Students from "../Students/Students";

const Home = () => {
  return (
    <>
      <Hero />
      <CoursesStrategy />
      <Students />
      <Faq />
    </>
  );
};

export default Home;
