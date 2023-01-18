import React from 'react'
import '../login/main.css'
import { Link } from 'react-router-dom'
import CoffeeLogo from "../../../assets/coffeeLogo.svg"
import GoogleLogo from "../../../assets/login/googleLogo.svg"

function MainSignup() {
    return (
        <main>
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
                                            <p className="d-inline ps-2 s-lg-auth" style={{ fontSize: '20px', color: '#0B132A' }}>YANNN COFFEE</p>
                                        </Link>
                                        <Link to="/login">
                                            <div className="btn btn-warning signup-nav rounded-pill px-4 py-2 s-md-auth" style={{ fontSize: '16px' }}><p style={{ marginTop: '2px' }}>Login</p></div>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                            {/* mobile version */}
                            <div className="container mt-5 d-lg-none">
                                <nav className="navbar navbar-expand-lg my-4">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-7">
                                                <Link to="/" className="navbar-brand">
                                                    <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                                    <p className="d-inline ps-2 s-lg-auth" style={{ fontSize: '20px', color: '#0B132A' }}>YANNN COFFEE</p>
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <Link to="/login">
                                                    <div className="btn btn-warning signup-nav rounded-pill py-2 s-md-auth" style={{ fontSize: '16px' }}>
                                                        <p style={{ marginTop: '2px' }}>Login</p>
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
                            <div className="col text-center s-lg-auth pt-5" style={{ fontSize: '35px', color: '#6A4029', marginTop: '50px', marginBottom: '60px' }}>
                                <h3>Sign Up</h3>
                            </div>
                        </div>
                        {/* FORM START */}
                        <form name="signUpForm">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label s-md-auth" style={{ fontSize: '20px', color: '#4F5665' }}>Email Address :</label>
                                <input name="email" type="email" className="form-control py-3" id="emailSignUp" aria-describedby="emailHelp" placeholder="Enter your email adress" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label s-md-auth" style={{ fontSize: '20px', color: '#4F5665' }}>Password :</label>
                                <input name="password" type="password" className="form-control py-3" id="passwordSignUp" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label s-md-auth" style={{ fontSize: '20px', color: '#4F5665' }}>Phone Number :</label>
                                <input name="mobileNumber" type="number" className="form-control py-3" id="mobileNumberSignUp" placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3 form-check" />
                            {/* desktop version */}
                            <input type="submit" value="Sign Up" className="btn btn-warning auth rounded-4 s-lg-auth py-4 input-signup d-none d-lg-block" style={{ fontSize: '20px' }} />
                            {/* mobile version */}
                            <input type="submit" value="Sign Up" className="btn btn-warning auth rounded-4 s-lg-auth py-3 d-lg-none" style={{ fontSize: '20px', width: '70vw' }} />
                            {/* desktop version */}
                            <div className="row d-none d-lg-block">
                                <div className="col mt-4">
                                    <Link to="#">
                                        <div className="btn btn-light d-flex rounded-4">
                                            <img src={GoogleLogo} alt="google" style={{ marginLeft: '120px' }} />
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Sign up with Google</p>
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
                                            <p className="s-1-auth" style={{ marginTop: '19px', marginLeft: '10px' }}>Sign Up with Google</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        {/* FORM END */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainSignup