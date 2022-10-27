import {
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const CourseDetails = () => {
  const courseDetail = useLoaderData();
  const {
    name,
    Description,
    instructor,
    hours,
    certification,
    courseType,
    requirements,
    price,
    _id,
  } = courseDetail;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onafterprint: () => alert("Print Success"),
  });
  return (
    <section className="mb-20 mt-8">
      <div ref={componentRef} className="container mx-auto">
        <div className="flex  flex-col md:flex-row  justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-700 font-bold ">
            {name}
          </h2>
          <button
            onClick={handlePrint}
            className="block font-bold py-3 px-6 mt-4 md:mt-0 rounded-full bg-nav text-white hover:bg-btnHover hover:text-gray-700 duration-300"
          >
            PDF
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-5">
          <div className="md:col-span-1 lg:col-span-3">
            <p className="text-gray-500">{Description}</p>
            <p className="text-gray-700 my-4 text-xl">Instructed By</p>
            <div className="flex items-center">
              <img src={instructor.img} width="65px" alt="" />
              <div>
                <span className="ml-2 text-gray-700">{instructor.name}</span>
                <div className="flex ml-2">
                  <BsFillStarFill className="text-yellow-400" size={10} />
                  <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                  <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                  <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                  <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                </div>
                <small className="ml-2">{instructor.title}</small>
              </div>
            </div>
            <p className="text-gray-700 my-6 text-xl">This course includes</p>
            <div className="bg-gray-100 rounded-xl flex flex-col md:flex-row justify-around items-center py-8">
              <div className="flex flex-col justify-center items-center">
                <ClockIcon className="h-20 w-20 text-nav" />
                <p className="text-gray-500 text-lg">Duration</p>
                <p className="text-gray-500">{hours} hours</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <AcademicCapIcon className="h-20 w-20 text-nav" />
                <p className="text-gray-500 text-lg">Certification</p>
                <p className="text-gray-500">{certification}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <UserGroupIcon className="h-20 w-20 text-nav" />
                <p className="text-gray-500 text-lg">Enrolled</p>
                <p className="text-gray-500">199+</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <VideoCameraIcon className="h-20 w-20 text-nav" />
                <p className="text-gray-500 text-lg">Course Type</p>
                <p className="text-gray-500">{courseType}</p>
              </div>
            </div>
            <p className="text-gray-700 my-6 text-xl">Requirements</p>
            <ul className="pr-20 px-8">
              {requirements.map((requirement) => (
                <li className="text-gray-500" style={{ listStyle: "circle" }}>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="relative block rounded-xl  p-8 shadow-xl">
              <span className="absolute right-4 top-4 text-xl rounded-full bg-btnHover px-5 py-2  font-extrabold text-nav">
                {price}
              </span>
              <div className="mt-4 text-gray-500 sm:pr-8">
                <h3 className="mt-5 text-xl font-bold text-gray-900">{name}</h3>
              </div>
              <button className="block font-bold my-5 py-3 w-full rounded-full bg-btnHover text-gray-700 ">
                Registration
              </button>
              <Link to={`/checkout/${_id}`}>
                <button className="block font-bold py-3 w-full rounded-full bg-nav text-white ">
                  Get Premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
