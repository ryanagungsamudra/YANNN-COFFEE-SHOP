import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/payment/Payment';
import History from './pages/history/History';
import CardProduct from './components/product/cardProduct';
import OrderProduct from './components/order/orderProduct';

import ScrollToTop from './components/ScrollToTop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "test",
    element:
      <>
        <OrderProduct />
        <CardProduct />,
        <ScrollToTop />,
      </>
  },
  {
    path: "/",
    element: 
      <>
        <Home />,
        <ScrollToTop />,
      </>
  },
  {
    path: "login",
    element: 
      <>
        <Login />,
        <ScrollToTop />,
      </>
  },
  {
    path: "signup",
    element: 
      <>
        <Signup />,
        <ScrollToTop />,
      </>
  },
  {
    path: "forgotpassword",
    element: 
      <>
        <ForgotPassword />,
        <ScrollToTop />,
      </>
  },
  {
    path: "product",
    element: 
    <>
        <Product />,
        <ScrollToTop/>,
      </>,
  },
  {
    path: "order",
    element: 
      <>
        <Order />,
        <ScrollToTop />,
      </>
  },
  {
    path: "payment",
    element: 
      <>
        <Payment />,
        <ScrollToTop />,
      </>
  },
  {
    path: "history",
    element: 
      <>
        <History />,
        <ScrollToTop />,
      </>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);