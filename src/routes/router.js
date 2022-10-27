import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/Courses";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Contact from "../Pages/Contact/Contact";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import CoursesByCategories from "../Pages/CoursesByCategories/CoursesByCategories";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Congratulation from "../Pages/Others/Congratulation";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          {
            path: "/courses",
            loader: () => fetch("http://localhost:5000/courses"),
            element: <AllCourses />,
          },
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
            element: <CoursesByCategories />,
          },
        ],
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <CourseDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/congratulation",
        element: <Congratulation />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
