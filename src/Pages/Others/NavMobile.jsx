import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* hamburger menu */}
      <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden z-10">
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-white cursor-pointer hover:text-btnHover" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white cursor-pointer hover:text-btnHover" />
        )}
      </div>
      {/* nav */}
      <nav
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "absolute left-[0] top-0 w-full h-screen text-white container bg-nav py-4"
            : "absolute left-[-100%]"
        }
      >
        <a href="/">
          {/* <img src={logo} alt="" /> */}
          <span className="text-xl font-bold">iAcademy</span>
        </a>
        <ul className="block text-center space-y-4 mt-10">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
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
        {/* info */}
        <div>
          <button className="bg-white text-black px-10 py-2 rounded-full font-bold w-full mt-4 hover:bg-btnHover transition-all delay-75">
            Sign In
          </button>
        </div>
        {/* social media */}
        <div className="flex my-10 justify-around">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaGithub size={25} />
          <FaLinkedinIn size={25} />
        </div>
      </nav>
    </>
  );
};

export default NavMobile;
