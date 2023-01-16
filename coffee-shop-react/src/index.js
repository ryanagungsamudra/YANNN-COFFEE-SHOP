import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Forgot from './pages/auth/ForgotPassword';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/payment/Payment';
import History from './pages/history/History';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgotpassword",
    element: <Forgot />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "history",
    element: <History />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);