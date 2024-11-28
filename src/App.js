import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import AboutUs from './Components/AboutUs';
import Registration from './Components/Registration';
import Login from './Components/Login';
import User from './Components/user';
import { useState, useEffect } from "react";
import Update from './Components/Update';
import AddHotels from './Components/AddHotels';
function App() {
  const [items, setItems] = useState(false);
useEffect(() => {
  const items =  localStorage.getItem('userInfo');
  if (items) {
   setItems(true);
  }
 
}, []);
 return (
    <>
  <BrowserRouter>
  <Header  data={items} />
  <Routes>

  <Route exact path='/' element={<Home/>} />
  <Route exact path='/update/:id' element={<Update/>} />
  <Route exact path='/aboutus' element={<AboutUs/>} />
  <Route exact path='/login' element={<Login/>} />
  <Route exact path='/registration' element={<Registration  />} />
  <Route exact path='/user' element={<User  />} />
  <Route exact path='/addhotels' element={<AddHotels  />} />

  </Routes>
  <Footer/>
  </BrowserRouter>

    </>
  );
}

export default App;
