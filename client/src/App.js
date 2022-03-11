// Loads landing page - update to add Login Status Check
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import SideNav from "./components/SideNav.js";
import Signup from "./components/Modals/Signup";
import Login from "./components/Modals/Login";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <SideNav></SideNav>
      <Routes>
        <Route path='/' exact element={<Welcome/>} />
        <Route path='/Signup' exact element={<Signup/>} />
        <Route path='/Login' exact element={<Login/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;