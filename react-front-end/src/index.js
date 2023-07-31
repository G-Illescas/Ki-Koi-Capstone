import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import Product from './components/Product';
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import AdminRoutes from './components/AdminRoutes';

const router = createBrowserRouter([
  { path: "/",
  element:<><NavBar/><Main/><Footer/></>
  },
  {
    path: "/product",
    element:<><NavBar/><Product/><Footer/></>
  },
  {
    path: "/register",
    element:<><NavBar/><Register/><Footer/></>
  },
  {
    path: "/login",
    element:<><NavBar/><Login/><Footer/></>
  },
  {
    path: "/admin",
    element:<><NavBar/><Admin/><Footer/></>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
