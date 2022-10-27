import React, { useContext } from "react";
import { Link } from "react-router-dom";
import man from "../../assets/man.png";
import { AuthContext } from "../../context/UserContext";
import NavMobile from "../../Pages/Others/NavMobile";
import "./Header.css";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
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
          </nav>
          {/* info */}
          <div className="md:flex hidden">
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
              <button
                onClick={logout}
                className="bg-white text-black px-10 py-2 rounded-full font-bold hover:bg-btnHover transition-all delay-75"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-white text-black px-10 py-2 rounded-full font-bold hover:bg-btnHover transition-all delay-75">
                  Sign In
                </button>
              </Link>
            )}
          </div>
          {/* Nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
