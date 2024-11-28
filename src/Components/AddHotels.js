import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';

const AddHotels = () => {
  const [open, setOpen] = React.useState(false);
  const [btn, setBtn] = useState(false);
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate('/user');
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const AddHotel = (data, e) => {
    console.log(data);
    const url = 'http://localhost:3001/hotel';

    if (data.name && data.city && data.stars && data.price && data.country && data.description && data.images) {
      axios.post(url, data).then((res) => {
        handleClickToOpen();
        e.target.reset();
      });
    } else {
      alert('Fill all fields');
    }
  };

  const onchange = (e) => {
    setBtn(e.target.value);
    console.log(btn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between h-full">
        <form onSubmit={handleSubmit(AddHotel)} className="flex flex-col flex-grow">
          <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Add Details of Hotel</h1>
          <div>
            <label className="block text-sm">Hotel Name<span className="text-red-600">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Name" name="name" {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-600 text-sm">Enter Hotel Name</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">City<span className="text-red-600">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="City" name="city" {...register('city', { required: true })}
            />
            {errors.city && <span className="text-red-600 text-sm">Enter City</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Ratings<span className="text-red-600">*</span></label>
            <input
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Ratings"
              type="text" name="stars" {...register('stars', { required: true })}
            />
            {errors.stars && <span className="text-red-600 text-sm">Enter ratings</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Price<span className="text-red-600">*</span></label>
            <input
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Price"
              type="text" name="price" {...register('price', { required: true })}
            />
            {errors.price && <span className="text-red-600 text-sm">Enter price/day</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Country<span className="text-red-600">*</span></label>
            <input
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Country"
              type="text" name="country" {...register('country', { required: true })}
            />
            {errors.country && <span className="text-red-600 text-sm">Enter Country</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Description<span className="text-red-600">*</span></label>
            <input
              type="text" className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="description" {...register('description', { required: true })}
            />
            {errors.description && <span className="text-red-600 text-sm">Description</span>}
          </div>
          <div className="mt-4">
            <label className="block text-sm">Image Url<span className="text-red-600">*</span></label>
            <input
              type="text" className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="images" {...register('images', { required: true })}
            />
            {errors.images && <span className="text-red-600 text-sm">Image Url</span>}
          </div>
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 mb-2 w-full"
            type="submit"
          >
            Add
          </button>
        </form>
        <div className="flex-col content-center">
          <Dialog open={open} onClose={handleToClose}>
            <DialogContent>Hotel Added Successfully</DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AddHotels;
