import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import signupImg from "../../assets/login-signup/signup.json";
import { AuthContext } from "../../context/UserContext";
const SignUp = () => {
  const { registerEmailAndPassword, updateUserProfile, emailVerification } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    password: "",
    firebaseErr: "",
  });
  // ? handleUserName
  const handleUserName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  // ? handleUserEmail
  const handleUserEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  // ? handleUserPassword
  const handleUserPassword = (e) => {
    if (e.target.value.length < 6) {
      setErr({ ...err, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setErr({ ...err, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
  // ? handleRegisterSubmit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // ? create new user
    registerEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        toast.success("Successfully Created user");
        // ? update user profile
        updateUserProfile(userInfo.name)
          .then(() => {
            // ? email verification
            emailVerification().then(() => {
              toast.info("Please checked you email verification.");
            });
          })
          .catch((err) => {});
      })
      .catch((err) => setErr({ ...err, firebaseErr: err.message }));
  };
  return (
    <section className="h-screen">
      <div className="container mx-auto h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
          <Lottie
            className="hidden md:block h-[90vh]"
            animationData={signupImg}
            loop={true}
          ></Lottie>
          {/* form */}
          <div className="">
            <div className="w-full max-w-sm p-6 m-auto mx-auto form-section text-white rounded-md shadow-md dark:bg-gray-800">
              <h1 className="text-3xl font-semibold text-center text-white dark:text-white">
                Register
              </h1>
              <form onSubmit={handleRegisterSubmit} className="mt-6">
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm text-white-800 dark:text-gray-200"
                  >
                    Username <sup className="text-yellow-400">*</sup>
                  </label>
                  <input
                    onBlur={handleUserName}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-white-800 dark:text-gray-200"
                  >
                    Email <sup className="text-yellow-400">*</sup>
                  </label>
                  <input
                    onBlur={handleUserEmail}
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm text-white dark:text-gray-200"
                    >
                      Password <sup className="text-yellow-400">*</sup>
                    </label>
                    <span className="text-xs text-white dark:text-gray-400">
                      Forget Password?
                    </span>
                  </div>

                  <input
                    onChange={handleUserPassword}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                  {err.password && (
                    <small className="text-xs flex items-center mt-2 text-yellow-400 dark:text-gray-400 ">
                      <BiErrorCircle className="mr-1" />
                      {err.password}
                    </small>
                  )}
                  {err.firebaseErr && (
                    <span className="text-xs mt-2 flex items-center text-red-900 dark:text-gray-400">
                      <BiErrorCircle className="mr-1" />
                      {err.firebaseErr}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide bg-btnHover transition-colors duration-300 transform text-black font-bold rounded-full hover:bg-white "
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <span className="text-xs text-center text-white uppercase dark:text-gray-400 hover:underline">
                  or sign Up with Social Media
                </span>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>

              <div className="flex items-center mt-6 -mx-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-bold text-black transition-colors duration-300 transform bg-btnHover  hover:bg-white rounded-full focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 mx-2 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg>

                  <span className="hidden mx-2 sm:inline">
                    Sign in with Google
                  </span>
                </button>

                <a
                  href="#/"
                  className="p-2 mx-2 text-sm font-medium bg-btnHover transition-colors duration-300 transform  rounded-md hover:bg-white text-black"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
              </div>

              <p className="mt-8 text-xs font-light text-center text-white">
                {" "}
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
