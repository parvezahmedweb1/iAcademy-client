import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Others/CourseCard/CourseCard";

const AllCourses = () => {
  const coursesData = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5">
      {coursesData.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default AllCourses;
