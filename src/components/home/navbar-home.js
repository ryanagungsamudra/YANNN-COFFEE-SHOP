import React from 'react'
import { Link } from "react-router-dom";
import CoffeeLogo from "../../assets/coffeeLogo.svg"
import MoonLogo from "../../assets/moon.png"

function Navbar(props) {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg my-4">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={CoffeeLogo} alt="logo" className="pb-2" />
                            <p className="d-inline ps-2">YANNN COFFEE</p>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active mx-2" aria-current="page" ><span className="nav-home">Home</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link mx-2">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/payment" className="nav-link mx-2">Your Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/history" className="nav-link mx-2">History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link mx-2 d-lg-none">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link mx-2 d-lg-none">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="me-4 d-none d-lg-block">
                            <Link to="/login"><p className="nav-login">Login</p></Link>
                        </div>
                        <Link to="/signup" className="d-none d-lg-block" style={{ color: '#6A4029' }}><div className="btn btn-warning sign-up"><p style={{ marginTop: '4px' }}>Sign Up</p></div></Link>
                        <img className="d-lg-block d-none" src={MoonLogo} id="switchMode" alt="moon" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar