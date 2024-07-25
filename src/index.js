import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';

import Student from './components/Student';
import Contact from './components/Contact';


const router =createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Aboutus",
    element: <Aboutus/>
  },
  {
    path: "/Academics",
    element: <Academics/>
  },
  {
    path: "/Admissions",
    element: <Admissions/>
  },
  {
    path: "/Faculty",
    element: <Faculty/>
  },
  {
    path: "/Student",
    element: <Student/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </React.StrictMode>
  <RouterProvider router={router}/>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
