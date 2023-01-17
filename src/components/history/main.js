import React from 'react'
import './main.css'
import Product from "../../assets/history/product.svg"
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main>
            <div className="p-5 bg-primary text-white hero-history">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h3 className="s-4-history">Let’s see what you have bought!</h3>
                        <p className="s-5-history">Select item to delete</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end mt-3 select-all-history">
                        <Link to="#">
                            <p>Select All</p>
                        </Link>
                    </div>
                </div>
                {/* CARD START!! */}
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {/* card-1-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-1-end */}
                                {/* card-2-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-2-end */}
                                {/* card-3-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-3-end */}
                                {/* card-4-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-4-end */}
                                {/* card-5-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-5-end */}
                                {/* card-6-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-6-end */}
                                {/* card-7-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-7-end */}
                                {/* card-8-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-8-end */}
                                {/* card-9-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-9-end */}
                                {/* card-10-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-10-end */}
                                {/* card-11-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-11-end */}
                                {/* card-12-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-12-end */}
                                {/* card-13-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-13-end */}
                                {/* card-14-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-14-end */}
                                {/* card-15-start */}
                                <div className="col-lg-4 col-6">
                                    <div className="card card-style-history">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Product} className="img-product-history" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div className="col">
                                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p className="s-2-history">IDR 34.000</p>
                                                            <p className="s-3-history">Delivered</p>
                                                        </div>
                                                        {/* Checkbox start */}
                                                        <div className="col-2 form-check-position">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                                            </div>
                                                        </div>
                                                        {/* Checkbox end */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card-15-end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD END!! */}
            </div>
        </main>
    )
}

export default Main