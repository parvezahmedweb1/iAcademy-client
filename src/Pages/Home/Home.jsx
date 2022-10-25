import React from "react";
import CoursesStrategy from "../CoursesStrategy/CoursesStrategy";
import Hero from "../Hero/Hero";
import Students from "../Students/Students";

const Home = () => {
  return (
    <>
      <Hero />
      <CoursesStrategy />
      <Students />
    </>
  );
};

export default Home;
