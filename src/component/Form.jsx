import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-purple-500 ">
      <form className="bg-gray-50 p-40 w-[40%] h-[90%] rounded-lg" action="post">
        <h1 className="text-4xl text-center">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile No:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="mobile"
            name="mobile"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            File:
          </label>
          <input
            className="w-full px-3 py-2 border  bg-blue-500 rounded-lg focus:outline-none focus:border-blue-500 "
            type="file"
            id="file"
            name="file"
            required
          />
        </div>
        <div className="mb-4 flex justify-center">
          <button
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
