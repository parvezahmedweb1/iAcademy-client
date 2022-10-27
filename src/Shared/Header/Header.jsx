import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import man from "../../assets/man.png";
import { AuthContext } from "../../context/UserContext";
import NavMobile from "../../Pages/Others/NavMobile";
import "./Header.css";
const Header = () => {
  const [mood, setMood] = useState(false);
  const { user, logout } = useContext(AuthContext);
  return (
    <header id="header" className="h-16 flex items-center">
      <div className="container mx-auto text-white">
        <div className="flex justify-between items-center z-20">
          <Link to="/">
            <img src={logo} alt="" width="140" />
          </Link>
          {/* nav */}
          <nav>
            <ul className="hidden md:flex space-x-7">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* info */}
          <div className="md:flex items-center hidden">
            {user?.uid && (
              <Link to="/profile">
                <img
                  title={user.displayName}
                  className="mr-5 rounded-full cursor-pointer"
                  src={user?.photoURL ? user.photoURL : man}
                  width="40"
                  alt=""
                />
              </Link>
            )}
            {user?.uid ? (
              <Link to="/">
                <button
                  onClick={logout}
                  className="bg-white text-black px-10 py-2 rounded-full font-bold hover:bg-btnHover transition-all delay-75"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-white text-black px-10 py-2 rounded-full font-bold hover:bg-btnHover transition-all delay-75">
                  Sign In
                </button>
              </Link>
            )}
            <div className="ml-4">
              {mood ? (
                <MoonIcon
                  onClick={() => setMood(!mood)}
                  className="w-7 h-7 cursor-pointer"
                />
              ) : (
                <SunIcon
                  onClick={() => setMood(!mood)}
                  className="w-7 h-7 cursor-pointer"
                />
              )}
            </div>
          </div>
          {/* Nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
