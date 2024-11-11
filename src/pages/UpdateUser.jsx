import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../app/futers/userSlice";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const existingUser = user.find((f) => f.id == id);
  const { name: userName, email: userEmail } = existingUser;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: parseInt(id),
        name,
        email,
      })
    );

    navigate("/redux-crud-app");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="mb-4 text-3xl font-bold ">UPDATE USER</h1>
      <form
        onSubmit={handleUpdate}
        className="w-full p-3 bg-black md:w-1/2 xl:w-2/4"
      >
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          required
          placeholder={userName}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          placeholder={userEmail}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <div className="flex justify-between mt-5 ">
          <button
            onClick={() => navigate("/redux-crud-app")}
            className="px-4 py-2 text-black transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Back
          </button>
          <button className="relative px-6 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20"></span>
            <span className="relative">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
