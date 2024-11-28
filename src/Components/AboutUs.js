import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const [btn, setBtn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleClickToOpen = () => setOpen(true);
  const handleToClose = () => setOpen(false);

  const subcribeEmail = (data, e) => {
    const url = "http://localhost:3001/subscription";
    if (data.subscribe) {
      axios.post(url, data).then(() => {
        e.target.reset();
        setOpen(true);
      });
    } else {
      alert("Enter email Id");
    }
  };

  const onchange = (e) => setBtn(e.target.value);

  return (
    <>
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          About the Website
        </h2>
        <p className="text-gray-700 text-lg leading-7 mb-4">
          The layout and structure of your webpages are ideal for customer engagement. Searching hotels in Agra has been made easy. A user can get details such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>A sample image of the hotel</li>
          <li>Name of various hotels</li>
          <li>Ratings</li>
          <li>A short description</li>
          <li>Fees charged per day</li>
        </ul>
        <p className="text-gray-700 text-lg leading-7 mb-4">
          Once customers are informed about the hotel, they can visit its official website for details. Registered users can:
        </p>
        <ul className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
          <li>Make a booking</li>
          <li>Fill in an enquiry form</li>
          <li>Download a brochure</li>
          <li>Purchase a voucher</li>
        </ul>
        <p className="text-gray-700 text-lg leading-7 mb-4">
          Register on our website to update hotel lists and details. Subscribe to our newsletter for updates on new hotel openings, rating changes, and more.
        </p>
      </div>

      <form onSubmit={handleSubmit(subcribeEmail)} className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="md:w-2/3">
            <p className="text-gray-800 font-medium mb-2">Sign up for our newsletter:</p>
            <input
              type="text"
              name="subscribe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              {...register("subscribe", { required: true })}
              placeholder="Enter your email"
              onChange={onchange}
            />
            {errors.subscribe && (
              <span className="text-red-600 text-sm">Enter a valid email ID</span>
            )}
          </div>
          <div className="md:w-1/3">
            <button
              type="submit"
              className={`w-full mt-8 px-6 py-2.5 text-white font-medium text-sm uppercase rounded-md shadow-lg transition  ${
                btn
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleClickToOpen}
              disabled={!btn}
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>

      <Dialog open={open} onClose={handleToClose}>
        <DialogContent>
          <p className="text-lg font-medium text-gray-800">
            Subscribed Successfully!
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleToClose}
            className="text-blue-600 hover:text-blue-800 font-medium"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AboutUs;
