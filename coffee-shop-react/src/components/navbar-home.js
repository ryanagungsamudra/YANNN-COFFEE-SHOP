import React from 'react'

function Navbar() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg my-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/coffeeLogo.svg" alt="logo" className="pb-2" />
                            <p className="d-inline ps-2">YANNN COFFEE</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item">
                                    <a className="nav-link active mx-2" aria-current="page" href="index.html"><span className="nav-home">Home</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2" href="product.html">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2" href="yourcart.html">Your Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2" href="history.html">History</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2 d-lg-none" href="login.html">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2 d-lg-none" href="signup.html">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <button id="switchModeMobile" className="btn btn-dark d-lg-none px-3" onclick="switchModeMobile()"><span>Dark Mode</span></button>
                                </li>
                            </ul>
                        </div>
                        <div className="me-4 d-none d-lg-block">
                            <a href="login.html"><p className="nav-login">Login</p></a>
                        </div>
                        <a href="signup.html" className="d-none d-lg-block" style={{ color: '#6A4029' }}><div className="btn btn-warning sign-up"><p style={{ marginTop: '4px' }}>Sign Up</p></div></a>
                        <img className="d-lg-block d-none" src="img/moon.png" id="switchMode" alt="moon" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar