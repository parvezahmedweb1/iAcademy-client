import { createBrowserRouter } from "react-router-dom";
import Courses from "../layout/Courses";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blogs from "../Pages/Blogs/Blogs";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import CoursesByCategories from "../Pages/CoursesByCategories/CoursesByCategories";
import Error from "../Pages/Error/Error";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
            loader: () => fetch("https://iacademy-server.vercel.app/courses"),
            element: <AllCourses />,
          },
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(
                `https://iacademy-server.vercel.app/categories/${params.id}`
              ),
            element: <CoursesByCategories />,
          },
        ],
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://iacademy-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://iacademy-server.vercel.app/checkout/${params.id}`),
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
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
