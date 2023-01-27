import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CoffeeLogo from "../../../assets/coffeeLogo.svg"
import GoogleLogo from  "../../../assets/login/googleLogo.svg"

function MainLogin() {
    const url = process.env.REACT_APP_HOST
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [validate, setValidate] = useState({ error: false, message: '' })
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        return await axios({
            url: `${url}/api/auth/login`,
            method: 'POST',
            data: loginForm
        }).then((res) => {
            // console.log(res.data.data.user.email)
            localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
            localStorage.setItem('@userRole', (res.data.data.user.role))
            navigate('/products')
        }).catch((err) => {
            // console.log(err.response.data.message);
            setValidate({ error: true, message: err.response.data.message })
        })
    }

    return (
        <div className="row">
                {/* LEFT SIDE */}
                <div className="col d-none d-lg-block">
                    <div className="bg-primary text-white hero-auth" />
                </div>
                {/* RIGHT SIDE */}
                <div className="col">
                    <div className="row">
                        <div className="col">
                            {/* navbar start */}
                            {/* desktop version */}
                            <div className="container mt-5 d-none d-lg-block">
                                <nav className="navbar navbar-expand-lg my-4">
                                    <div className="container-fluid">
                                        <Link to="/" className="navbar-brand">
                                            <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                            <p className="d-inline ps-2 s-lg-auth">YANNN COFFEE</p>
                                        </Link>
                                        <Link to="/signup">
                                            <div className="btn btn-warning signup-nav rounded-pill px-4 py-2 s-md-auth" style={{ fontSize: '16px' }}><p style={{ marginTop: '2px' }}>Sign Up</p></div>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                            {/* mobile version */}
                            <div className="container d-lg-none">
                                <nav className="navbar navbar-expand-lg my-4">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-7">
                                                <Link to="/" className="navbar-brand">
                                                    <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                                    <p className="d-inline ps-2 s-lg-auth">YANNN COFFEE</p>
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <Link to="/signup">
                                                    <div className="btn btn-warning signup-nav rounded-pill py-2 s-md-auth" style={{ fontSize: '16px' }}>
                                                        <p style={{ marginTop: '2px' }}>Sign Up</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            {/* navbar end */}
                        </div>
                    </div>
                    <div className="container w-75">
                        <div className="row">
                            <div className="col text-center form-title-auth pt-5">
                                <h3>Login</h3>
                            </div>
                        </div>
                        {/* FORM START */}
                        <form onSubmit={handleLogin} name="loginForm">
                            {validate.error && (
                                <div className="alert alert-danger" role="alert" style={{borderRadius: '15px', marginTop: '-2rem'}}>
                                    {validate.message}
                                </div>
                            )}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label s-md-auth">Email Address :</label>
                                <input name="email" type="email" className="form-control py-3" aria-describedby="emailHelp" placeholder="Enter your email adress" 
                                onChange={(e) => setLoginForm({
                                    ...loginForm,
                                    email: e.target.value
                                })}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label s-md-auth">Password :</label>
                                <input name="password" type="password" className="form-control py-3" placeholder="Enter your password" 
                                onChange={(e) => setLoginForm({
                                    ...loginForm,
                                    password: e.target.value
                                })}/>
                            </div>
                            <div className="mb-3 form-check">
                            </div>
                            <div className="row">
                                <div className="col">
                                <Link to="/forgotpassword" className="s-lg-auth"><p style={{ marginTop: '-45px' }}><u>Forgot password?</u></p></Link>
                                </div>
                            </div>
                            {/* desktop version */}
                            <input type="submit" value="Login" className="btn btn-warning auth rounded-4 s-lg-auth py-4 input-login d-lg-block d-none" style={{ fontSize: '20px' }} />
                            {/* mobile version */}
                            <input type="submit" value="Login" className="btn btn-warning auth rounded-4 s-lg-auth py-3 d-lg-none" style={{ fontSize: '20px', width: '70vw' }} />
                            {/* desktop version */}
                            <div className="row d-lg-block d-none">
                                <div className="col mt-4">
                                    <Link to="#">
                                        <div className="btn btn-light d-flex rounded-4">
                                            <img src={GoogleLogo} alt="google" style={{ marginLeft: '120px' }} />
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Login with Google</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* mobile version */}
                            <div className="row d-lg-none mb-5">
                                <div className="col mt-4">
                                    <Link to="#">
                                        <div className="btn btn-light d-flex rounded-4">
                                            <img src={GoogleLogo} alt="google" style={{ marginLeft: '20px' }} />
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Login with Google</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        {/* FORM END */}
                    </div>
                </div>
            </div>
    )
}

export default MainLogin