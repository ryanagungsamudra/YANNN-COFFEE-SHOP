import React, { useState } from "react";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CoffeeLogo from "../../assets/coffeeLogo.svg"

const Navbar = ({status}) => {
  // State untuk hamburger button
  const [isOpen, setIsOpen] = useState(false);

  // Conditional rendering navbar (admin or user)
  const isAdmin = () => {
    const role = localStorage.getItem('@userRole')
    if (role === 'admin') {
      return (
        <>
          <Link to="/" className={status.Home}>Home</Link>
          <Link to="/products" className={status.Product}>Product</Link>
          <Link to="/orderlist" className={status.Payment}>Order</Link>
          <Link to="/dashboard" className={status.History}>Dashboard</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/" className={status.Home}>Home</Link>
          <Link to="/products" className={status.Product}>Product</Link>
          <Link to="/payment" className={status.Payment}>Your Cart</Link>
          <Link to="/history" className={status.History}>History</Link>
        </>
      )
    }
  }

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
          {isAdmin()}
          {localStorage.getItem('@userLogin') ? ('') : (
            <div className="auth-nav-items-mobile mx-auto">
              <Link to="/login" className="d-block d-sm-none d-md-none d-lg-none btn btn-light login-mobile mb-2 py-2 ">Login</Link>
              <Link to="/signup" className="d-block d-sm-none d-md-none d-lg-none btn btn-warning signup-mobile py-2 ">Sign Up</Link>
            </div>
          )}
        </div>

        {/* Auth Render*/}
        {localStorage.getItem('@userLogin') ? (<Authenticated />) : (<Unauthenticated />)}

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
