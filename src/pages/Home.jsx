import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firstLetCap } from "../assets/data";
import { deleteUser } from "../app/futers/userSlice";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="w-full p-5 ">
      <h1 className="mb-5 text-3xl font-bold ">
        REACT CRUD APP WITH <span className=" text-reduxtext"> REDUX</span>
      </h1>
      <div className="flex justify-start mb-3">
        <Link to={"create_user"}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            CREATE +
          </button>
        </Link>
      </div>
      <div></div>

      <table className="border-collapse w-full border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Id</th>
            <th className="border border-slate-600 ...">Name</th>
            <th className="border border-slate-600 ...">Email</th>
            <th className="border border-slate-600 ...">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-700 ...">{item.id}</td>
              <td className="border border-slate-700 ...">
                {firstLetCap(item.name)}{" "}
              </td>
              <td className="border border-slate-700 ...">{item.email} </td>
              <td className="border border-slate-700 ...">
                {" "}
                <div className="flex justify-center gap-3">
                  <Link to={`update_user/${item.id}`}>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
