import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../home/footer-home'
import './main.css'
import extraLarge from "../../assets/product-detail/XL.png"
import small from "../../assets/product-detail/R.png"
import large from "../../assets/product-detail/L.png"
import minus from "../../assets/product-detail/minus.png"
import plus from "../../assets/product-detail/plus.png"
import axios from 'axios'

function Order() {

    // GET DATA ORDER BY ID START
    const url = process.env.REACT_APP_HOST
    const urlImage = process.env.REACT_APP_IMG

    const [dataProduct, setDataProduct] = useState([])
    let { id } = useParams()

    useEffect(() => {
        axios.get(`${url}/api/products`)
            .then(res => setDataProduct(res.data.data))
            .catch((err) => err)
    }, [])

    // Cart Amount Toggle
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < 15 ? setAmount(amount + 1) : setAmount(15) // angka 15 diganti jumlah stock barang nantinya
    }

    return (
        dataProduct.map((item) => {
            if (id === item.id) {
                const img = `${urlImage}/${item.images[0].filename}`
                localStorage.setItem('productOrder', JSON.stringify(item))
                localStorage.setItem('productImage', img)
                localStorage.setItem('productPrice', (item.price * amount).toFixed(3))
                localStorage.setItem('quantity', amount)
                return (
                    <>
                        <main style={{ marginTop: '6rem' }}>
                            <div className="container-fluid order">
                                <div className="container">
                                    <div className="row">
                                        {/* LEFT CONTENT */}
                                        <div key={item.id} className="col text-center ms-4 ms-lg-0 leftcontent-order mobile">
                                            <nav className="nav">
                                                <Link to="/products" className="tab-link" aria-current="page">Favorite &amp; Promo</Link>
                                                <Link to={`/products/detail/${id}`} className="tab-link active">&gt; {item.title}</Link>
                                            </nav>
                                            {/* Desktop */}
                                            <img src={img} className="hero-order-desktop d-none d-lg-block" alt='productImage'></img>
                                            {/* Mobile */}
                                            <img src={img} className="hero-order-mobile d-block d-lg-none" alt='productImage'></img>

                                            <h1 id='title' className="s-1-order" style={{ marginRight: '40px' }}>{item.title}</h1>
                                            <h5 className="s-2-order" style={{ marginRight: '30px' }}>{`IDR ${(item.price * amount).toFixed(3)}`}</h5>
                                            <button className="btn btn-primary order mt-4" style={{ marginRight: '33px', padding: '15px 95px' }}>
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
                                                <p className="s-4-order">{item.title} is a method of <br />brewing that combines ground <br />coffee and cool water and uses <br />time instead of heat to extract the <br />flavor. It is brewed in small batches <br />and steeped for as long as 48 <br />hours.</p>
                                                <p className="s-5-order">Choose a size</p>
                                                <div className="row">
                                                    <div className="col" style={{ marginLeft: '120px', marginTop: '6px' }}>
                                                        <img src={small}
                                                            style={{ width: '55px', height: '55px', cursor: 'pointer' }} alt=""
                                                            onClick={(e) => localStorage.setItem('size', e.target.name)}
                                                            name='Regular' />
                                                    </div>
                                                    <div className="col">
                                                        <img src={large}
                                                            style={{ width: '55px', height: '55px', marginTop: '6px', cursor: 'pointer' }} alt=""
                                                            onClick={(e) => localStorage.setItem('size', e.target.name)}
                                                            name='Large' />
                                                    </div>
                                                    <div className="col" style={{ marginRight: '120px' }}>
                                                        <img src={extraLarge}
                                                            style={{ width: '55px', height: '55px', marginTop: '6px', cursor: 'pointer' }} alt=""
                                                            onClick={(e) => localStorage.setItem('size', e.target.name)}
                                                            name='Extra Large' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Mobile */}
                                            <div className="container rounded-4 container-order d-block d-lg-none" style={{ marginTop: '-6rem' }}>
                                                <p className="s-3-order" style={{ padding: '2rem' }}>Delivery only on <b>Monday to friday</b> at <b>1-7 pm</b></p>
                                                <p className="s-4-order" style={{ padding: '2rem' }}>{item.title} is a method of brewing that combines ground coffee and cool water and uses
                                                    time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as
                                                    48 hours.</p>
                                                <p className="s-5-order" style={{ paddingLeft: '6rem', marginTop: '-3rem' }}>Choose a size</p>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img
                                                            src={small} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }}
                                                            onClick={(e) => localStorage.setItem('size', e.target.name)}
                                                            name='Regular'
                                                        />
                                                    </div>
                                                    <div className="col-2 mx-1">
                                                        <img
                                                            src={large} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }}
                                                            onClick={(e) => localStorage.setItem('size', e.target.name)}
                                                            name='Large'
                                                        />
                                                    </div>
                                                    <div className="col-2" style={{ marginRight: '120px' }}>
                                                        <img
                                                            src={extraLarge} alt='size' style={{ width: '50px', height: '50px', marginLeft: '5rem' }}
                                                            name='Extra Large'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container text-center mt-5">
                                                <h5 className="s-6-order">Choose Delivery Methods</h5>
                                                <div onClick={(e) => console.log(e.target.value)}>
                                                    <button className="btn btn-secondary order mt-3" value='Dine in'>Dine in</button>
                                                    <button className="btn btn-light mx-3 mt-3" value='Door Delivery'>Door Delivery</button>
                                                    <button className="btn btn-light mt-3" value='Pick up'>Pick up</button>
                                                </div>
                                                <div className="set-time">
                                                    <div className="mb-3 mt-4">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the time you’ll arrived</label>
                                                        <input
                                                            type='time'
                                                            name='deliveryStart'
                                                            className='start-hour-btn px-3'
                                                            defaultValue={'12:00'}
                                                            placeholder='Select start hour'
                                                            onChange={(e) => console.log(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <Footer />

                        <div>
                            {/* Desktop */}
                            <div className="container d-lg-block d-none">
                                <div className="row info-panel-footer order">
                                    <div className="col">
                                        <div className="container-fluid">
                                            <div key={item.id} className="row">
                                                <div className="col">
                                                    <img src={img} alt="orderImage" style={{ marginLeft: '-45px' }} />
                                                </div>
                                                <div className="col" style={{ marginLeft: '-250px', paddingTop: '13px' }}>
                                                    <h3 className="s-7-order">{item.title}</h3>
                                                    <h5 className="s-8-order">L (Large)</h5>
                                                    <h5 className="s-8-order">XL (Extra Large)</h5>
                                                </div>
                                                <div className="col d-flex" style={{ marginRight: '-190px', marginTop: '50px' }}>
                                                    <Link to='#'><img src={minus} onClick={() => setDecrease()} style={{ width: '40px', height: '40px' }} alt="minus" /></Link>
                                                    <p className="s-7-order mx-4">{amount}</p>
                                                    <Link to='#'><img src={plus} onClick={() => setIncrease()} style={{ width: '40px', height: '40px' }} alt="plus" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-lg-block d-none">
                                <div className="row info-panel-button order">
                                    <div className="col">
                                        <Link to={`/payment`}><button className="btn btn-warning footer order" type='submit'>CHECKOUT</button></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className="container d-block d-lg-none">
                                <div className="row">
                                    <div className="col-8 info-panel-mobile">
                                        <div className="col">
                                            <h3 className="s-7-order mobile">{item.title}</h3>
                                            <h5 className="s-8-order mobile">L (Large)</h5>
                                            <h5 className="s-8-order mobile">XL (Extra Large)</h5>
                                        </div>
                                        <div className="col d-flex">
                                            <Link to='#'><img src={minus} onClick={() => setDecrease()} style={{ width: '40px', height: '40px' }} alt="minus" /></Link>
                                            <p className="s-7-order mx-4">{amount}</p>
                                            <Link to='#'><img src={plus} onClick={() => setIncrease()} style={{ width: '40px', height: '40px' }} alt="plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <Link to={`/payment`}><button className="btn btn-warning info-button-mobile" type='submit'>CHECKOUT</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        })
    )
}

export default Order