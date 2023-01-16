import React from 'react'
import './main.css'
import small from "../../assets/product-detail/R.jpg"
import large from "../../assets/product-detail/L.jpg"
import extraLarge from "../../assets/product-detail/XL.jpg"
import { Link } from 'react-router-dom'

function Order() {
    return (
        <main>
            <div className="container-fluid" style={{ backgroundColor: '#EFEEEE', paddingBottom: '60px' }}>
                <div className="container">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col text-center ms-4 ms-lg-0">
                            <nav className="nav">
                                <Link to="/product" className="tab-link" aria-current="page">Favorite &amp; Promo</Link>
                                <Link to="/order" className="tab-link active">&gt; Cold Brew</Link>
                            </nav>
                            {/* Desktop */}
                            <div className="hero-order-desktop d-none d-lg-block" />
                            {/* Mobile */}
                            <div className="hero-order-mobile d-block d-lg-none" />
                            <h1 className="s-1-order" style={{ marginRight: '40px' }}>COLD BREW</h1>
                            <h5 className="s-2-order" style={{ marginRight: '30px' }}>IDR 30.000</h5>
                            <button className="btn btn-primary order mt-4" style={{ marginRight: '33px', padding: '15px 100px' }}>
                                Add to Cart
                            </button>
                            <button className="btn btn-warning order mt-4" style={{ marginRight: '33px', padding: '15px 105px', marginBottom: '150px' }}>
                                Ask a Staff
                            </button>
                        </div>
                        {/* RIGHT CONTENT */}
                        <div className="col">
                            {/* Desktop */}
                            <div className="container rounded-4 container-order d-none d-lg-block">
                                <p className="s-3-order">Delivery only on <b>Monday to <br />friday</b> at <b>1-7 pm</b></p>
                                <p className="s-4-order">Cold brewing is a method of <br />brewing that combines ground <br />coffee and cool water and uses <br />time instead of heat to extract the <br />flavor. It is brewed in small batches <br />and steeped for as long as 48 <br />hours.</p>
                                <p className="s-5-order">Choose a size</p>
                                <div className="row">
                                    <div className="col" style={{ marginLeft: '120px', marginTop: '6px' }}>
                                        <a href="/order"><img src={small} style={{ width: '55px', height: '55px' }} alt="" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="/order"><img src={large} style={{ width: '55px', height: '55px', marginTop: '6px' }} alt="" /></a>
                                    </div>
                                    <div className="col" style={{ marginRight: '120px' }}>
                                        <a href="/order"><img src={extraLarge} style={{ width: '55px', height: '55px', marginTop: '6px' }} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className="container rounded-4 container-order d-block d-lg-none" style={{ marginTop: '-6rem' }}>
                                <p className="s-3-order" style={{ padding: '2rem' }}>Delivery only on <b>Monday to friday</b> at <b>1-7 pm</b></p>
                                <p className="s-4-order" style={{ padding: '2rem' }}>Cold brewing is a method of brewing that combines ground coffee and cool water and uses
                                    time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as
                                    48 hours.</p>
                                <p className="s-5-order" style={{ paddingLeft: '6rem', marginTop: '-3rem' }}>Choose a size</p>
                                <div className="row">
                                    <div className="col-2">
                                        <a href="/order"><img src={small} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }} /></a>
                                    </div>
                                    <div className="col-2">
                                        <a href="/order"><img src={large} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }} /></a>
                                    </div>
                                    <div className="col-2" style={{ marginRight: '120px' }}>
                                        <a href="/order"><img src={extraLarge} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container text-center mt-5">
                                <h5 className="s-6-order">Choose Delivery Methods</h5>
                                <button className="btn btn-secondary order mt-3">Dine in</button>
                                <button className="btn btn-light mx-3 mt-3">Door Delivery</button>
                                <button className="btn btn-light mt-3">Pick up</button>
                                <div className="set-time">
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Set time :</label>
                                        {/* Desktop */}
                                        <input type="Set time" className="form-control w-s d-lg-block d-none" style={{ marginLeft: '100px' }} id="set-time" placeholder="Enter the time you’ll arrived" />
                                        {/* Mobile */}
                                        <input type="Set time" className="form-control w-s d-lg-none d-block" placeholder="Enter the time you’ll arrived" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Order