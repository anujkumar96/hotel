import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch("http://localhost:3001/hotel")
      .then((users) => users.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
    <div className="text-center ">
      <img src={"https://st2.depositphotos.com/1720162/10591/v/600/depositphotos_105916654-stock-illustration-modern-thin-line-design-concept.jpg"}
      className='h-3/12 w-9/12 m-auto pt-4'/>
    </div>
      <div className="p-10 ml-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {users.map((item) => {
          return (
                <Card className="hover:shadow-2xl  overflow-scroll hover:scale-105 mr-10 mb-5 ">
                <CardMedia 
                className="object-contain h-52 "
                  component="img"
                  image={item.images}
                  alt="hotel_images"
                />
                <CardContent className="bg-blue-100 hover:bg-green-100">
                  <Typography gutterBottom variant="h5" component="div" className="content-center">
                  <h2 className="text-center text-red-600 font-serif">{item.name}</h2>
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Description:- {item.description}
                  </Typography>
                  <Typography variant="h6" color="text.success">
                    <div className="flex justify-between">
                      <p>{item.city}</p>
                      <Rating name="customized-10" defaultValue={item.stars} precision={0.5}  max={7} readOnly />
                    </div>
                    <p className="text-center  shadow-none shadow-cyan-200">&#8377;{item.price}</p>
                  </Typography>
                </CardContent>
               </Card>
          );
        })}
      </div>
    </>
  );
}
