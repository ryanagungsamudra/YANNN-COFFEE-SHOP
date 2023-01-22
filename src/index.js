import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/payment/Payment';
import History from './pages/history/History';
import ErrorPage from './pages/error-page';

import ScrollToTop from './components/utility/ScrollToTop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DropdownProfile from './components/auth/conditional-rendering/DropdownProfile';

const router = createBrowserRouter([
  {
    path: "test",
    element:
      <>
        <DropdownProfile />
      </>
  },
  {
    path: "/",
    element: 
      <>
        <Home />,
        <ScrollToTop />,
      </>,
    errorElement: <ErrorPage />,
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
    path: "products",
    element: 
    <>
        <Product />,
        <ScrollToTop/>,
      </>,
  },
  {
    path: "products/:id",
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