import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://iacademy-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="categories text-center py-5 px-4 rounded-md h-[350px] flex items-center justify-center">
      <ul className="space-y-3">
        {categories.map((category) => (
          <Category key={category.categoryId} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
