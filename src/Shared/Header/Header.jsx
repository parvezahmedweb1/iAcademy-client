import React from "react";
import { Link } from "react-router-dom";
import NavMobile from "../../Pages/Others/NavMobile";
import "./Header.css";
const Header = () => {
  return (
    <header id="header" className="h-16 flex items-center">
      <div className="container mx-auto text-white">
        <div className="flex justify-between items-center z-20">
          <Link to="/">
            <span className="text-xl font-bold">iAcademy</span>
          </Link>
          {/* nav */}
          <nav>
            <ul className="hidden md:flex space-x-7">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/faq">Faq</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* info */}
          <div className="md:block hidden">
            <Link to="/login">
              <button className="bg-white text-black px-10 py-2 rounded-full font-bold hover:bg-btnHover transition-all delay-75">
                Sign In
              </button>
            </Link>
          </div>
          {/* Nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
