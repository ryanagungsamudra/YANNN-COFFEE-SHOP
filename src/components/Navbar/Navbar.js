import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CoffeeLogo from "../../assets/coffeeLogo.svg"
import DarkMode from "../utility/DarkMode";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top">
      <div className="container Navbar">

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={CoffeeLogo} alt="logo" className="pb-2" />
          <span className="d-inline ps-2">YANNN COFFEE</span>
        </Link>

        {/* List */}
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/" className={props.status.Home}>Home</Link>
          <Link to="/product" className={props.status.Product}>Product</Link>
          <Link to="/payment" className={props.status.Payment}>Your Cart</Link>
          <Link to="/history" className={props.status.History}>History</Link>
          {/* Auth button on mobile */}
          <div className="auth-nav-items-mobile mx-auto">
            <Link to="/login" className="d-block d-sm-none d-md-none d-lg-none btn btn-light login-mobile mb-2 py-2 ">Login</Link>
            <Link to="/signup" className="d-block d-sm-none d-md-none d-lg-none btn btn-warning signup-mobile py-2 ">Sign Up</Link>
          </div>
        </div>
        {/* Auth Button on desktop*/}
        <div className="auth-nav-items-desktop">
          <div className="me-4 d-none d-sm-block d-md-block d-lg-block">
            <Link to="/login"><p className="nav-login">Login</p></Link>
          </div>
          <Link to="/signup" className="d-none d-sm-block d-md-block d-lg-block" style={{ color: '#6A4029', marginTop: '0.3rem' }}><div className="btn btn-warning sign-up"><p style={{ marginTop: '4px' }}>Sign Up</p></div></Link>
          <div style={{paddingLeft:'0.7rem', marginTop: '0.25rem'}}>
            <DarkMode />
          </div>
        </div>

        {/* Hamburger button */}
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
