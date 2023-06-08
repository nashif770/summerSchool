import { useContext } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Classes = () => {
  const [aClass] = useClasses();

  const { user } = useContext(AuthContext);

  const handleAddClass = (cl) => {
    cl.email = user.email;

    if (user) {
      axios.post("http://localhost:5000/myselectedclasses", cl).then((res) => {
        console.log(res.data);
      });
    }
  };

  //  TODO: -----
  const checkSeats = () => {
    axios
      .get("http://localhost:5000/topinstructors")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 m-auto p-6">
        {aClass.map((cl) => (
          <div key={cl._id} className="hero w-11/12 bg-base-200 m-3 rounded-lg">
            <div className="hero-content flex-col ">
              <img
                src="https://i.ibb.co/CJ2vs6L/40-K-20180520124148.jpg"
                className="max-w-sm rounded-lg shadow-2xl w-1/2"
              />
              <div className="w-full">
                <h1 className="text-3xl font-bold">{cl.className}</h1>
                <p className="py-6 font-bold">
                  Instructor:{" "}
                  <span className=" font-normal ">{cl.instructorName}</span>
                </p>
                <div className="flex justify-between">
                  <p className="font-bold">
                    Available Seats:
                    <span className=" font-normal "> {cl.availableSeats}</span>
                  </p>
                  <p className="font-bold">
                    Price: <span className="font-normal"> ${cl.price}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleAddClass(cl)}
                className="btn btn-primary text-white"
                disabled={cl.availableSeats == 0 && "disable"}
              >
                Add to My Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
