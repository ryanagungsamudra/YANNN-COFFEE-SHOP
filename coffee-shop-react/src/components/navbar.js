import React from 'react'
import { Link } from "react-router-dom";
import CoffeeLogo from "../assets/coffeeLogo.svg"
import Search from "../assets/product/search.svg"
import Chat from "../assets/product/chat.svg"
import Profile from "../assets/product/profilepic.svg"
import './navbar.css'

function Navbar() {
    return (
        <header className="border-bottom border-2">
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
                                    <Link to="/" className="nav-link mx-2" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link active mx-2">Product</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link mx-2" href="yourcart.html">Your Cart</a> */}
                                    <Link to="/payment" className="nav-link mx-2">Your Cart</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link mx-2" href="history.html">History</a> */}
                                    <Link to="/history" className="nav-link mx-2">History</Link>
                                </li>
                            </ul>
                            <div className="d-flex d-block d-lg-none justify-content-center align-items-center" style={{ marginLeft: '-1.2rem', marginTop: '0.6rem' }}>
                                <div className="searchBox">
                                    <input type="text" placeholder="Search Anything You Want..." />
                                    <img src={Search} alt="searchBox" />
                                </div>
                                <a className="mx-4" href="chat.html">
                                    <img src={Chat} alt="chat" />
                                </a>
                                <a href="profile.html">
                                    <img src={Profile} alt="profile" />
                                </a>
                            </div>
                        </div>
                        <div className="d-lg-flex d-lg-block d-none">
                            <div className="searchBox" style={{ marginRight: '-0.5rem' }}>
                                <input type="text" placeholder="Search Anything You Want..." />
                                <img src={Search} alt="searchBox" />
                            </div>
                            <a className="mx-4" href="chat.html" style={{ marginTop: '0.7rem' }}>
                                <img src={Chat} alt="chat" />
                                <span className="position-absolute top-0-notif start-100 translate-middle badge-notif bg-danger-notif d-none d-lg-block">
                                    1
                                    <span className="visually-hidden">unread messages</span>
                                </span></a>
                            <a href="profile.html" style={{ marginTop: '0.65rem' }}>
                                <img src={Profile} alt="profile" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar