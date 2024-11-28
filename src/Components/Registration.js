import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
export default function Registration() {
  const [open, setOpen] = React.useState(false);
  const [btn,setBtn]=useState(false);
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate("/login")
  };
  const {
    register,
    handleSubmit,
    
    formState: { errors },
   
  } = useForm();
  const navigate = useNavigate();
  const signUp = (data,e) => {
    console.log(data)
    const url = "http://localhost:3100/user"
   if(data.dob && data.name && data.password && data.email){
    axios.post(url, data).then((res)=>{
      
      handleClickToOpen();
      e.target.reset();
          })
  }
      else{
    alert("fill all field")
  }
  };
  const onchange = (e) =>{
    setBtn(e.target.value);
    console.log(btn)
  }
  return (
    <div className="w-4/12 m-auto py-4 px-8 border-1 border-black rounded my-2 bg-blue-100 shadow-2xl  shadow-green-200">

           <form onSubmit={handleSubmit(signUp)}>
     
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
        Registration Form
      </h1>
      <div>
        <label className="block text-sm ">Name<span className="text-red-600">*</span> </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Name"  name="name"  {...register('name',{required:true})}
        />
         {errors.name &&  <span className='text-red-600 text-sm'>Enter your Name</span>}
      </div>
      <div className="mt-4">
        <label className="block text-sm">Email<span className="text-red-600">*</span> </label>
        <input
          type="email"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Email Address"  name="email"   {...register('email',{required:true})}
        />
         {errors.email  &&  <span className='text-red-600 text-sm'>Enter your Email Id</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Password<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Password"
          type="password"  name="password"   {...register('password',{required:true})}
        />
         {errors.password &&  <span className='text-red-600 text-sm'>Enter your Password</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Confirm Password<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Confirm Password"
          type="password"  name="cpassword"  {...register('cpassword',{required:true})}
        />
         {errors.cpassword &&  <span className='text-red-600 text-sm'>Confirm your Password</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Mobile<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Mobile"
          type="text"  name="mobile"  {...register('mobile',{required:true})}
        />
         {errors.mobile &&  <span className='text-red-600 text-sm'>Enter Mobile Number</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm ">Date of Birth<span className="text-red-600">*</span></label>
        <input type='date' className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" name="city"  {...register("dob", { required: true })} />
        {errors.dob && (
              <span className="text-red-600 text-sm">DoB is Required</span>
            )}
      </div>
      <button
       class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 mb-3 w-full"
       type="submit" 
      >
        Sign up
      </button>
      <div className="text-center">
        <p>
          If already Registered ?
          <Link to="/login" className="text-blue-600 ">
            Login.
          </Link>
        </p>
      </div>
    
      </form>
    
      <div className="flex-col content-center">
        <Dialog open={open} onClose={handleToClose}>
          <DialogContent>Registration Successfull</DialogContent>
          <DialogActions>
            <Button onClick={handleToClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
