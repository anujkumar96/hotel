import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const onSubmit = (data) => {
  
    const url = "http://localhost:3000/user";
    axios.get(url).then((response) => {
      const isLogin = response.data.find((userData) => {
        // console.log(userData)
        return (
          data.email === userData.email &&
          data.password === userData.password 
                );
        });
        localStorage.setItem('userInfo',JSON.stringify(isLogin))
        if(isLogin)
        {
          navigate("/user", { replace: true }); 
          window.location.reload();
        }
        else{
        
          alert('Email/Password is incorrect')
        }
      });


  };

  return (
         <div className=" w-2/6 m-auto mt-24 mb-24 h-9/12 border-2 rounded-xl shadow-2xl shadow-blue-200">
        <div className="">
          <div className=" text-center  mt-50"></div>
          <h1 className="font-bold text-gray-600 text-3xl m-4 text-center">
            Login
          </h1>
          <form
            className="block text-start w-3/4 m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block  mt-8" htmlFor="userName">
              Email <span className="text-red-600">*</span> 
            </label>

            <input
              type="text"
              className="w-full p-2   text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                     "
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700 text-sm">Email is Required*</span>
            )}
            <label className="block  mt-6" htmlFor="password">
              Password <span className="text-red-600">*</span> 
            </label>

            <input
              type="password"
              className="  w-full p-2   text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 bold focus:outline-none"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-700 text-sm">Password is Required*</span>
            )}
           <button
              type="submit"
             class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8 w-full"
            >
              Continue
            </button>
            <div className="text-center">
              <Link to="/registration">
                {" "}
                <p className=" text-blue-600  mb-4">
                  Click Here For Register?
                </p>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
      );
}
