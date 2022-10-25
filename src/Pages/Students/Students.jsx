import React from "react";
import logo1 from "../../assets/hero_logo-01.svg";
import logo2 from "../../assets/hero_logo-02.svg";
import logo3 from "../../assets/hero_logo-03.svg";
import logo4 from "../../assets/hero_logo-04.svg";
import "./Students.css";
const Students = () => {
  return (
    <section className="students my-20">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-center">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img src={logo1} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img src={logo2} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img src={logo3} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img src={logo4} alt="" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4">
          <div className="grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6 logo p-4">
              <p className="text-4xl font-bold leading-none lg:text-6xl text-gray-700">
                500
              </p>
              <p className="text-sm sm:text-base text-gray-500">Students</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6 logo p-4">
              <p className="text-4xl font-bold leading-none lg:text-6xl text-gray-700">
                10
              </p>
              <p className="text-sm sm:text-base text-gray-500">Courses</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6 logo p-4">
              <p className="text-4xl font-bold leading-none lg:text-6xl text-gray-700">
                6290
              </p>
              <p className="text-sm sm:text-base text-gray-500">Hours video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
