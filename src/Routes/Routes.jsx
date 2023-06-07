import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <PrivateRoute><Classes></Classes></PrivateRoute>,
      },
      {
        path: "instructors",
        element: <PrivateRoute><Instructors></Instructors></PrivateRoute>,
      },
    ],
  },
]);
