import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// material module/libraries for card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import DeleteIcon from "@material-ui/icons/DeleteForever";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";


export default function User() {
  const [open, setOpen] = React.useState(false);
  const [btn,setBtn]=useState(false);
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    navigate("/user")
  };
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await fetch("http://localhost:3000/hotel")
      .then((users) => users.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((e) => console.log(e));
  };
  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/hotel/${id}`).then((res) => {
      handleClickToOpen();
      console.log(res);
      getData();
    });
  };
  const updateData = (updateId) => {
    navigate(`/update/${updateId}`);
  };

  useEffect(() => {
    getData();
  }, []);
  const onchange = (e) =>{
    setBtn(e.target.value);
    console.log(btn)
  }
  return (
    <>
      <div>
        <div className="text-right mr-12 mt-4">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Link to="/addhotels">
              <span className="mr-1"> Add Hotels</span>
              <Fab color="primary" size="medium" aria-label="add">
                <AddIcon />
              </Fab>
            </Link>
          </Box>
        </div>
        <div className="p-10 ml-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {users.map((item) => {
            return (
                         <Card className="hover:shadow-2xl  hover:scale-105 pb-0">
                <CardMedia
                  className="object-contain h-52"
                  component="img"
                  image={item.images}
                  alt="hotel_images"
                />
                <CardContent className="bg-blue-100 hover:bg-green-100">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="content-center"
                  >
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
                    <p className="text-center ">&#8377;{item.price}</p>
                  </Typography>
                <CardActions
                  variant="contained"
                  aria-label="outlined primary "
                  className=" flex justify-around "
                  >
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    type="submit"
                    onClick={() => updateData(item.id)}
                    >
                    UPDATE
                  </Button>
                    <Button
                      class="px-7 py-2.5 focus:outline-none text-white bg-red-700 hover:bg-red-800 rounded-md"
                      type="submit"
                      onClick={() => deleteData(item.id)}
                       onSubmit={handleClickToOpen} 
                      >
                      DELETE
                    </Button>
                     </CardActions>
                      </CardContent>  
              </Card>
            );
          })}
        </div>
        <div className="flex-col content-center">
      <Dialog open={open} onClose={handleToClose}>
        <DialogContent>Deleted Successfully</DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
    </>
  );
}
