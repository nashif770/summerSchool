import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/StudentDashboard/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/StudentDashboard/MyEnrolledClass";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import AddAClass from "../Pages/Dashboard/InstructorsDashboard/AddAClass";
import FeedBack from "../Pages/Dashboard/InstructorsDashboard/FeedBack";
import TopEnrolledClasses from "../Pages/Dashboard/InstructorsDashboard/TopEnrolledClasses";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import InstructorsDetail from "../Pages/Instructors/InstructorsDetail";
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
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "instructorsDetails/:id",
        element: <InstructorsDetail></InstructorsDetail>,
        loader: ({params}) =>fetch(`http://localhost:5000/instructors/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // User section
      {
        path: "userprofile",
        element: <UserDashboard></UserDashboard>,
      },
      // student section
      {
        path: "selectedclass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enroll",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "pay",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // instuctor section
      {
        path: "addclass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "topenrolled",
        element: <TopEnrolledClasses></TopEnrolledClasses>,
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>,
      },
      // admin section
      {
        path: "manageclass",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageuser",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
