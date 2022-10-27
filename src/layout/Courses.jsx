import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";

const Courses = () => {
  return (
    <section className="mb-20 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-bold mb-10">
          What Do You Want To Learn
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Categories />
          <div className="md:col-span-1 lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
