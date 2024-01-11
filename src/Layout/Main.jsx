import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-xl m-auto bg-gradient-to-b from-[#2c3e50] to-[#34495e] min-h-screen p-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
