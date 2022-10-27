import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CourseCard.css";
const CourseCard = ({ course }) => {
  const { img, categoryName, instructor, price, name, _id } = course;
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <div className=" h-56 w-full course-img">
        <img alt="" src={img} className="object-cover" />
      </div>
      <div className="bg-white p-3">
        <small className="bg-gray-100 p-1">{categoryName}</small>
        <h4 className="mt-2 text-md text-gray-700 font-bold">{name}</h4>
        <div className="my-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src={instructor.img} width="45px" alt="" />
            <div>
              <span className="ml-2 text-gray-700">{instructor.name}</span>
              <div className="flex ml-2">
                <BsFillStarFill className="text-yellow-400" size={10} />
                <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
                <BsFillStarFill className="ml-1 text-yellow-400" size={10} />
              </div>
            </div>
          </div>
          <p className="font-extrabold text-gray-700">${price}</p>
        </div>

        <Link to={`/details/${_id}`}>
          <button className="bg-btnHover text-gray-700 w-full px-10 py-2 mt-4 rounded-full font-bold hover:bg-step hover:text-white transition-all delay-75">
            Get Premium
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
