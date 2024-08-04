// src/components/HomePage.js

import React from 'react';
import Introduction from './Intoduction';
import Carouse from './Carouse';

import Quicklinks from './Quicklinks';
import Navbar from './Navbar';
import "./assets/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Carouse/>
      <Quicklinks/>
      <div ><p>Made by Mayuri</p></div>
    </div>
  );
}

export default Home;
