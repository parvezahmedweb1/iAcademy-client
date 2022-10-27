import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="categories text-center py-5 px-4 rounded-md h-[350px] flex items-center justify-center">
      <ul className="space-y-3">
        {categories.map((category) => {
          return (
            <Link
              to={`/courses/${category.categoryId}`}
              className="bg-white font-semibold hover:bg-btnHover duration-300 text-gray-700 rounded-lg p-2 block"
            >
              {category.categoryName}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
