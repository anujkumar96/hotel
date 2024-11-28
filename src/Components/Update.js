import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

export default function Update() {
  const [open, setOpen] = React.useState(false);
  const [hotelData, setHotelData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/hotel/${id}`).then((res) => {
      setHotelData(res.data);
    });
  }, [id]);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate('/user');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm();

  useEffect(() => {
    if (hotelData) {
      reset(hotelData); 
    }
  }, [hotelData, reset]);

  const updateHotel = (data) => {
    const url = 'http://localhost:3001/hotel';
    if (data.name && data.city && data.stars && data.price && data.country && data.description && data.images) {
      axios.put(`${url}/${id}`, data).then((res) => {
        handleClickToOpen();
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Hotel</h1>
        {hotelData ? (
          <form onSubmit={handleSubmit(updateHotel)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hotel Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Hotel Name"
                name="name"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">Hotel Name is required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="City"
                name="city"
                {...register('city', { required: true })}
              />
              {errors.city && <p className="text-sm text-red-600 mt-1">City is required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ratings <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ratings"
                name="stars"
                {...register('stars', { required: true })}
              />
              {errors.stars && <p className="text-sm text-red-600 mt-1">Ratings are required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Price"
                name="price"
                {...register('price', { required: true })}
              />
              {errors.price && <p className="text-sm text-red-600 mt-1">Price is required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Country"
                name="country"
                {...register('country', { required: true })}
              />
              {errors.country && <p className="text-sm text-red-600 mt-1">Country is required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description"
                name="description"
                {...register('description', { required: true })}
              />
              {errors.description && <p className="text-sm text-red-600 mt-1">Description is required*</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="Image URL"
                name="images"
                {...register('images', { required: true })}
              />
              {errors.images && <p className="text-sm text-red-600 mt-1">Image URL is required*</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Hotel
            </button>
          </form>
        ) : (
          <p>Loading...</p> 
        )}

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
