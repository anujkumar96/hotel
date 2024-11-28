import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Registration() {
  const [open, setOpen] = useState(false);
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = (data, e) => {
    console.log(data);
    const url = "http://localhost:3001/user";
    if (data.dob && data.name && data.password && data.email) {
      axios.post(url, data).then((res) => {
        handleClickToOpen();
        e.target.reset();
      });
    } else {
      alert("Fill all fields");
    }
  };

  const onchange = (e) => {
    setBtn(e.target.value);
    console.log(btn);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-lg">
        <form onSubmit={handleSubmit(signUp)}>
          <h1 className="text-2xl font-bold text-center text-gray-700">
            Registration Form
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Enter your Name</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Enter your Email</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">Enter your Password</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Confirm Password"
                {...register("cpassword", { required: true })}
              />
              {errors.cpassword && (
                <span className="text-red-500 text-sm">
                  Confirm your Password
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Mobile"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm">Enter Mobile Number</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register("dob", { required: true })}
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">DoB is Required</span>
              )}
            </div>
          </div>
          <button
            className="w-full px-4 py-2 mt-6 text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-green-500 rounded-md focus:ring-4 focus:ring-green-300 shadow-lg"
            type="submit"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already Registered?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
        <Dialog open={open} onClose={handleToClose}>
          <DialogContent className="text-center text-green-700 font-medium">
            Registration Successful!
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleToClose}
              color="primary"
              className="capitalize"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
