import React, { useEffect,  useState } from 'react'
import {useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Update() {
  const [open, setOpen] = React.useState(false);
  const [btn,setBtn]=useState(false);
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate('/user')
   
  };
  const {
    register,
    handleSubmit,
    
    formState: { errors },
   
  } = useForm();
const {id}=useParams();
const navigate = useNavigate();    
    const updateHotel = (data, e) => {
      
      const url = "http://localhost:3000/hotel"
      if(data.name && data.city &&  data.stars && data.price  && data.country && data.description && data.images){
      axios.put(`${url}/${id}`, data).then((res) => {
        handleClickToOpen();
        
        
      });
    }
    }
    const onchange = (e) =>{
      setBtn(e.target.value);
      console.log(btn)
    }


  return (
    <div className="w-4/12 m-auto p-8 border-1 border-black rounded my-2 bg-blue-100 shadow-2xl  shadow-green-200">

<form onSubmit={handleSubmit(updateHotel)}>


     
      <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
        Update Details of Hotel
      </h1>
      <div>
        <label className="block text-sm">Hotel Name<span className="text-red-600">*</span> </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Name"  name="name"  {...register('name',{required:true})}
        />
         {errors.name &&  <span className='text-red-600 text-sm'>Updated Name</span>}
      </div>
      <div className="mt-4">
        <label className="block text-sm">City<span className="text-red-600">*</span> </label>
        <input
          type="text"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="City"  name="city"   {...register('city',{required:true})}
        />
         {errors.city  &&  <span className='text-red-600 text-sm'>Update City</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Ratings<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Ratings"
          type="text"  name="stars"   {...register('stars',{required:true})}
        />
         {errors.stars &&  <span className='text-red-600 text-sm'>Update ratings</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Price<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Price"
          type="text"  name="price"  {...register('price',{required:true})}
        />
         {errors.price &&  <span className='text-red-600 text-sm'>Update price/day</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm">Country<span className="text-red-600">*</span> </label>
        <input
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Country"
          type="text"  name="country"  {...register('country',{required:true})}
        />
         {errors.country &&  <span className='text-red-600 text-sm'>Update Country</span>}
      </div>
      <div>
        <label className="block mt-4 text-sm ">Description<span className="text-red-600">*</span></label>
        <input type='text' className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" name="description"  {...register("description", { required: true })} />
        {errors.description && (
              <span className="text-red-600 text-sm">Update Description</span>
            )}
      </div>
      <div>
        <label className="block mt-4 text-sm ">Image Url<span className="text-red-600">*</span></label>
        <input type='text' className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" name="images"  {...register("images", { required: true })} />
        {errors.images && (
              <span className="text-red-600 text-sm">Update Url</span>
            )}
      </div>
      <button
       className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 w-full"
       type="submit"  
      >
       Update
      </button>    
      </form>
      <div className="flex-col content-center">
      <Dialog open={open} onClose={handleToClose}>
        <DialogContent>Hotel Updated Successfully</DialogContent>
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

