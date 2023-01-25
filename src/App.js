import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import './global.css'

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Products from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/payment/Payment';
import History from './pages/history/History';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct';

import InvalidRoute from './pages/InvalidRoute';
import ScrollToTop from './components/utility/ScrollToTop';
import EditProduct from './pages/admin/EditProduct';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            {/* Public Route */}
            {/* <Route element={<PublicRoute />}> */}
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='forgotpassword' element={<ForgotPassword />} />
            {/* </Route> */}

            {/* Private Route */}
            {/* <Route element={<PrivateRoute />}> */}
            {/* <Route element={<AdminOnly />}> */}
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='addproducts' element={<AddProduct />} />
                <Route path='editproducts' element={<EditProduct />} />
                {/* <Route path='order' element={<ManageOrder />} /> */}
                {/* <Route path='addpromo' element={<Addpromo />} /> */}
                {/* <Route path='editpromo/:id' element={<Editpromo />} /> */}
            {/* </Route> */}

            {/* <Route element={<UserOnly />}> */}
                <Route path='payment' element={<Payment />} />
                {/* <Route path='profile' element={<Profile />} /> */}
                {/* <Route path='chat' element={<Chat />} /> */}
                {/* <Route path='room-chat' element={<RoomChat />} /> */}
                <Route path='history' element={<History />} />
            {/* </Route> */}
            
            <Route path='404' element={<InvalidRoute />} />
            <Route path='*' exact element={<Navigate to='404' />} />
            <Route path='/' element={<Home/>}></Route>
            <Route path='products' element={<Products/>} />
            <Route path='products/detail/:id' element={<Order/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App