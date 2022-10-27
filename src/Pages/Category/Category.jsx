import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryName, categoryId } = category;
  return (
    <>
      <Link
        to={`/category/${categoryId}`}
        className="bg-white font-semibold hover:bg-btnHover duration-300 text-gray-700 rounded-lg p-2 block"
      >
        {categoryName}
      </Link>
    </>
  );
};

export default Category;
