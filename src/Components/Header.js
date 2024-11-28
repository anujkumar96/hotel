import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const clearStorage = () => {
    localStorage.clear();
    // navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex flex-row justify-between h-auto bg-gray-300">
      <div className="flex px-8 my-2 py-2">
        <img 
          src={
            "data:image/jpeg;base64,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"
          }
          className="font-bold text-2xl text-blue-700 mr-2 h-12 w-12"
          />
<div className="flex gap-8 py-3 ml-10 justify-start">
           <Link to="/">
      <span className="text-xl border-lime-600 text-left">Home</span>
          </Link>
          <Link to="/aboutus">
      <span  className="text-xl border-lime-600 text-left">About Us</span>
          </Link>
      </div>
      </div>

      <div className="pr-8 flex flex-row">
         <ul className="mt-6 px-5 font-bold">
         {props.data ? (
          <Link to="/">
<button
className="px-2 py-1 bg-gray-500 text-white rounded"
 onClick={clearStorage}
 >
 Logout
</button>
</Link>
) : (
<Link to="/login">
 <button className="px-2 py-1 bg-gray-500 text-white rounded">
 Login
 </button>
 </Link>
 )}
       </ul>
        <ul className="mt-6 px-5 font-bold">
          <Link to="/registration">
            <button className="px-2 py-1 bg-gray-500 text-white rounded">Register</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}