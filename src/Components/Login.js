import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const url = "http://localhost:3001/user";
    axios.get(url).then((response) => {
      const isLogin = response.data.find((userData) => {
        return data.email === userData.email && data.password === userData.password;
      });
      localStorage.setItem("userInfo", JSON.stringify(isLogin));
      if (isLogin) {
        navigate("/user", { replace: true });
        window.location.reload();
      } else {
        alert("Email/Password is incorrect");
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">Email is required*</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">Password is required*</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/registration" className="text-sm text-blue-600 hover:underline">
            Click here for Register?
          </Link>
        </div>
      </div>
    </div>
  );
}
