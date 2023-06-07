import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../Pages/Dashboard/AddClass";
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "instructors",
        element: <PrivateRoute><Instructors></Instructors></PrivateRoute>,
      },
      {
        path: "addclass",
        element: <PrivateRoute><AddClass></AddClass></PrivateRoute>,
      },
    ],
  },
]);
