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
import InvalidRoute from './pages/InvalidRoute';
import ScrollToTop from './components/utility/ScrollToTop';

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
                {/* <Route element={<AdminOnly />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='product/add' element={<Addproduct />} />
                    <Route path='product/edit/:id' element={<Editproduct />} />
                    <Route path='order' element={<ManageOrder />} />
                    <Route path='addpromo' element={<Addpromo />} />
                    <Route path='editpromo/:id' element={<Editpromo />} />
                </Route>
                <Route path='dashboard' element={<Dashboard />} /> */}
                {/* <Route element={<UserOnly />}> */}
                    <Route path='payment' element={<Payment />}></Route>
                {/* </Route> */}
                {/* <Route path='profile' element={<Profile />} /> */}
                {/* <Route path='chat' element={<Chat />} /> */}
                {/* <Route path='room-chat' element={<RoomChat />} /> */}
                <Route path='history' element={<History />}></Route>
            {/* </Route> */}
            
            <Route path='404' element={<InvalidRoute />} />
            <Route path='*' exact element={<Navigate to='404' />} />
            <Route path='/' element={<Home/>}></Route>
            <Route path='products' element={<Products/>}>
                {/* <Route path="favourite" element={<ProductFavourite />} />
                <Route path="coffee" element={<ProductCoffee />} />
                <Route path="noncoffee" element={<ProductNonCoffee />} />
                <Route path="foods" element={<ProductFoods />} />
                <Route path="addon" element={<ProductAddOn />} /> */}
            </Route>
            <Route path='products/detail/:id' element={<Order/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App