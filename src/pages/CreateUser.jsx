import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../app/futers/userSlice";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const uniquId = () => {
    let id = 1;
    if (user[0]) {
      return (id = user[user.length - 1].id + 1);
    }
    return id;
  };
  const id = uniquId();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id,
        name,
        email,
      })
    );

    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="mb-4 text-3xl font-bold ">CREATE USER</h1>
      <form
        onSubmit={handleSubmit}
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
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <div className="flex justify-end mt-5 ">
          <button className="relative px-6 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20"></span>
            <span className="relative">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
