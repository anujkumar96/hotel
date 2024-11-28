import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
const AboutUs = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [btn,setBtn]=useState(false);
  const subcribeEmail = (data, e) => {
    console.log(data);
    // console.log(e)
    const url = "http://localhost:3000/subscription";

    if (data.subscribe) {
      axios.post(url, data).then((res) => {
        e.target.reset();
        //  navigate("/");
      });
    } else {
      alert("Enter email Id");
    }
  };

  const onchange = (e) =>{
    setBtn(e.target.value);
    console.log(btn)
  }
  return (
    <>
      <div>
        <h2 className="text-2xl bold m-4 mt-6 pt-4">About the Website</h2>
        <p className="text-normal m-4 text-justify">
          The layout and structure of your webpages is such that it is ideal for
          customer engagement. Searching hotels in Agra have been made easy. A
          user can get details like :-.
        </p>
        <ul className="m-4">
          <li>1. A sample image of that hotel </li>
          <li>2. Name of various hotels</li>
          <li>3. Ratings</li>
          <li>4. A short description</li>
          <li>5. Fees it charges per day</li>
        </ul>
        <br></br>
        <p className="m-4">
          Once customers are appropriately informed about the hotel, they can
          begin to get details on its official website ifthey like, as the
          official link to their website are also available to the registered
          user. From there they can do the following things :-
        </p>
        <ul className="ml-4 m-2">
          <li>1. Making a booking</li>
          <li>2. Filling in an enquiry form</li>
          <li>3. Downloading a brochure</li>
          <li>4. Purchasing a voucher</li>
        </ul>
        <br></br>
        <p className="m-4">
          You can also register to our website and then you can update the list
          of hotel and their details.
        </p>
        <p className="m-4">
          You can also subscribe to our website to get updates about news hotel
          openings and rating change etc like information in your email.
        </p>
      </div>
      <form onSubmit={handleSubmit(subcribeEmail)} >
        <div class="  gap-4 bg-blue-100 flex  pt-6 ">
          <div class="md:ml-auto ">
            <p class="text-gray-800 pt-1">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="md:mb-6">
            <input
              type="text"
              class="
              px-3
              py-1.5
              text-base
              border border-solid border-gray-300
              rounded
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              name="subscribe"
              {...register("subscribe", { required: true })}
              placeholder=" subscribe" onChange={onchange}
            />
            {errors.subscribe && (
              <span className="text-red-600 text-sm">Enter a email Id</span>
            )}
          </div>

          <div class="md:mr-auto mb-6">
            <button
              type="submit"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleClickToOpen} disabled={!btn}
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      <div className="flex-col content-center">
        <Dialog open={open} onClose={handleToClose}>
          <DialogContent>Subscribed Successfully</DialogContent>
          <DialogActions>
            <Button onClick={handleToClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AboutUs;
