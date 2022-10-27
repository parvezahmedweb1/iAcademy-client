import React from "react";
import { Typewriter } from "react-simple-typewriter";
import hero from "../../assets/hero_illustr.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="md:h-[90vh] h-[50vh]">
      <div className="container mx-auto h-full flex justify-center md:justify-between items-center">
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            iAcademy Premium <br />
            <Typewriter
              words={[
                "Web Development",
                "App Development",
                "Machine Learning",
                "Software Engineering",
                "UI/UX Design",
                "Graphic Design",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <br />
            Tutorials
          </h1>
          <p className="my-3">
            With over 1200 courses in 18 subjects, you're guaranteed <br />
            to find something that's right for you.
          </p>
          <button className="bg-btnHover text-black px-10 py-3 rounded-full font-bold hover:bg-white transition-all delay-75">
            View Our Courses
          </button>
        </div>
        <div className="mt-5 hidden md:block">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
