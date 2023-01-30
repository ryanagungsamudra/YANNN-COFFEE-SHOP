import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './global.css'

import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Products from './pages/product/Product';
import Order from './pages/order/Order';
import Payment from './pages/userOnly/Payment';
import History from './pages/userOnly/History';
import Profile from './pages/userOnly/Profile';
import Chat from './pages/userOnly/Chat';

import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import ManageOrder from './pages/admin/ManageOrder.js'
import AddPromo from './pages/admin/AddPromo.js'
import EditPromo from './pages/admin/EditPromo.js'
import ProductList from './pages/admin/ProductList.js'

import InvalidRoute from './pages/InvalidRoute';
import ScrollToTop from './components/utility/ScrollToTop';

import { Provider } from "react-redux"
import configureStore from "./redux/store"

function App() {
    const { store } = configureStore()
    return (
        <Provider store={store}>
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
                    <Route path='productlist' element={<ProductList />} />
                    <Route path='addproducts' element={<AddProduct />} />
                    <Route path='editproducts/:id' element={<EditProduct />} />
                    <Route path='addpromo' element={<AddPromo />} />
                    <Route path='editpromo' element={<EditPromo />} />
                    <Route path='orderlist' element={<ManageOrder />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    {/* </Route> */}

                    {/* <Route element={<UserOnly />}> */}
                    <Route path='payment' element={<Payment />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='chat' element={<Chat />} />
                    <Route path='history' element={<History />} />
                    {/* </Route> */}

                    <Route path='404' element={<InvalidRoute />} />
                    <Route path='*' exact element={<Navigate to='404' />} />
                    <Route path='/' element={<Home />}></Route>
                    <Route path='products' element={<Products />} />
                    <Route path='products/detail/:id' element={<Order />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App