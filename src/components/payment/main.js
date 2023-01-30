import React from 'react'
import './main.css'
// import Order1 from "../../assets/yourcart/order1.png"
// import Order2 from "../../assets/yourcart/order2.png"
import Card from "../../assets/yourcart/card.svg"
import Bank from "../../assets/yourcart/bank.svg"
import Delivery from "../../assets/yourcart/delivery.svg"
import { Link } from 'react-router-dom'

function Main() {

    const img = localStorage.getItem('productImage')
    const title = (JSON.parse(localStorage.getItem('productOrder'))).title
    const price = parseInt(localStorage.getItem('productPrice'))
    const size = localStorage.getItem('size')
    const quantity = localStorage.getItem('quantity')

    const taxvalue = (price * 0.1)
    const totalprice = (price + taxvalue)
    localStorage.setItem('totalPrice', totalprice.toFixed(3))

    // const handleOrder = async () => {
    //     // const body = new FormData();
    //     const body = new URLSearchParams()
    //     body.append('title', title);
    //     body.append('quantity', quantity);
    //     body.append('price', totalprice);

    //     try {
    //         await axios.post(`${url}/api/order`, body, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/x-www-form-urlencoded',
    //             } 
    //         })
    //     } catch (error) {
    //         console.log(error.response.data.message);
    //     }
    // }

    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="p-5 bg-primary text-white hero-payment">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="row text-center text-lg-start">
                                <h3 style={{ fontSize: '40px', fontWeight: 700, fontStyle: 'normal' }}>Checkout your <br />item now!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* LEFT SIDE START */}
                            {/* Desktop */}
                            <div className="col text-center d-none d-lg-block">
                                <div className="row ">
                                    <div className="col sticky-1 mt-5">
                                        <h3 className="s-3-payment" style={{ paddingBottom: '20px' }}>Order Summary</h3>
                                        <div className="row mt-5">
                                            <div className="col">
                                                <img src={img} alt="" style={{width: '75%'}}/>
                                            </div>
                                            <div className="col s-4-payment">
                                                <p style={{ textAlign: 'start', marginLeft: '-40px' }}>
                                                    {title} <br />x {quantity} <br />{size}
                                                </p>
                                            </div>
                                            <div className="col s-4-payment">
                                                <p style={{ marginTop: '28px' }}>IDR {price.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row mt-4">
                                            <div className="col">
                                                <img src={Order2} alt="" />
                                            </div>
                                            <div className="col s-4-payment">
                                                <p style={{ textAlign: 'start', marginLeft: '-40px' }}>
                                                    Chicken Fire Wings<br />x 2
                                                </p>
                                            </div>
                                            <div className="col s-4-payment">
                                                <p style={{ marginTop: '28px' }}>IDR 30.0</p>
                                            </div>
                                        </div> */}
                                        <hr style={{ opacity: '0.2', border: '0.5px solid #000000', marginTop: '35px' }} />
                                        {/* Total tagihan start */}
                                        <div className="row mt-5">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>SUBTOTAL</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR {price.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>TAX &amp; FEES</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR {taxvalue.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>SHIPPING</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR 10.000</p>
                                            </div>
                                        </div> */}
                                        <div className="row mt-4">
                                            <div className="col">
                                                <h3 className="s-6-payment" style={{ textAlign: 'start' }}>TOTAL</h3>
                                            </div>
                                            <div className="col">
                                                <h3 className="s-6-payment" style={{ textAlign: 'start' }}>IDR {totalprice.toFixed(3)}</h3>
                                            </div>
                                        </div>
                                        {/* Total tagihan end */}
                                    </div>
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className="col text-center d-block d-lg-none">
                                <div className="row ">
                                    <div className="col sticky-1-mobile mt-5">
                                        <h3 className="s-3-payment" style={{ marginTop: '-2.5rem' }}>Order Summary</h3>
                                        <div className="row mt-5">
                                            <div className="col">
                                            <img src={img} alt="" style={{width: '100%'}}/>
                                            </div>
                                            <div className="col s-4-payment" style={{ marginLeft: '-1.5rem' }}>
                                                <p style={{ textAlign: 'start' }}>
                                                    {title} <br />x {quantity} <br />{size}
                                                </p>
                                            </div>
                                            <div className="col s-4-payment" style={{ marginLeft: '-2rem' }}>
                                                <p style={{ marginTop: '28px' }}>IDR {price.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row mt-4">
                                            <div className="col">
                                                <img src={Order2} alt="" />
                                            </div>
                                            <div className="col s-4-payment" style={{ marginLeft: '-1.5rem' }}>
                                                <p style={{ textAlign: 'start' }}>
                                                    Chicken Fire Wings<br />x 2
                                                </p>
                                            </div>
                                            <div className="col s-4-payment" style={{ marginLeft: '-2rem' }}>
                                                <p style={{ marginTop: '28px' }}>IDR 30.000</p>
                                            </div>
                                        </div> */}
                                        <hr style={{ opacity: '0.2', border: '0.5px solid #000000', marginTop: '0rem' }} />
                                        {/* Total tagihan start */}
                                        <div className="row">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '-2rem' }}>SUBTOTAL</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>IDR {price.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '-2rem' }}>TAX &amp; FEES</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>IDR {taxvalue.toFixed(3)}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '-2rem' }}>SHIPPING</p>
                                            </div>
                                            <div className="col">
                                                <p className="s-5-payment" style={{ textAlign: 'start' }}>IDR 10.000</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="s-6-payment" style={{ textAlign: 'start', marginLeft: '-2rem' }}>TOTAL</h3>
                                            </div>
                                            <div className="col">
                                                <h3 className="s-6-payment" style={{ textAlign: 'start', marginLeft: '-4rem' }}>IDR {totalprice.toFixed(3)}</h3>
                                            </div>
                                        </div>
                                        {/* Total tagihan end */}
                                    </div>
                                </div>
                            </div>
                        {/* LEFT SIDE END */}
                        {/* RIGHT SIDE START */}
                            {/* Desktop */}
                            <div className="col d-none d-lg-block">
                                <div className="row justify-content-evenly">
                                    <div className="col-10">
                                        <h3 className="s-1-payment" style={{ margin: '55px 0 0 85px' }}>Address details</h3>
                                    </div>
                                    <div className="col">
                                        <Link to="#" className="s-2-payment"><p style={{ margin: '60px 0 0 0' }}>edit</p></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="sticky-2 my-3">
                                        <p className="s-5-payment" style={{ fontSize: '20px', fontWeight: 400, marginTop: '30px', paddingTop: '-5px' }}><b>Delivery</b> to Iskandar Street</p>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-12px' }} />
                                        <p className="s-5-payment" style={{ fontSize: '20px', fontWeight: 400, marginTop: '-10px' }}>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-10px' }} />
                                        <p className="s-5-payment mb-5" style={{ fontSize: '20px', fontWeight: 400, marginTop: '-7px' }}>+62 81348287878</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <h3 className="s-1-payment" style={{ margin: '55px 0 0 85px' }}>Payment method</h3>
                                    <div className="sticky-3 my-3">
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-5px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Card} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '30px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '40px', marginLeft: '1rem' }}>Card</p>
                                            </div>
                                        </div>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-5px' }} />
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-25px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Bank} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '35px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '45px', marginLeft: '1rem' }}>Bank account</p>
                                            </div>
                                        </div>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '10px' }} />
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-43px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Delivery} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '35px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '45px', marginLeft: '1rem' }}>Cash on delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/history">
                                    <button className="btn btn-primary payment mt-3">Confirm and Pay</button>
                                </Link>
                            </div>
                            {/* Mobile */}
                            <div className="col d-block d-lg-none mt-4">
                                <div className="row">
                                    <div className="col-10">
                                        <h3 className="s-1-payment" style={{ marginLeft: '-1rem' }}>Address details</h3>
                                    </div>
                                    <div className="col-2">
                                        <Link to="#" className="s-2-payment">
                                            <p>edit</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="sticky-2-mobile my-3">
                                        <p className="s-5-payment" style={{ fontSize: '20px', fontWeight: 400, marginTop: '30px', paddingTop: '-5px' }}>
                                            <b>Delivery</b> to Iskandar Street</p>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-12px' }} />
                                        <p className="s-5-payment" style={{ fontSize: '20px', fontWeight: 400, marginTop: '-10px' }}>Km 5 refinery
                                            road oppsite republic road, effurun, Jakarta</p>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-10px' }} />
                                        <p className="s-5-payment mb-5" style={{ fontSize: '20px', fontWeight: 400, marginTop: '-7px' }}>+62
                                            81348287878</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <h3 className="s-1-payment" style={{ marginLeft: '-1rem' }}>Payment method</h3>
                                    <div className="sticky-3-mobile my-3">
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-5px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Card} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '30px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '40px', marginLeft: '1rem' }}>Card</p>
                                            </div>
                                        </div>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '-5px' }} />
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-25px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Bank} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '35px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '45px', marginLeft: '1rem' }}>Bank account</p>
                                            </div>
                                        </div>
                                        <hr style={{ opacity: '0.1', border: '0.5px solid #000000', marginTop: '10px' }} />
                                        <div className="row">
                                            <div className="col d-flex" style={{ marginTop: '-43px' }}>
                                                <div className="form-check" style={{ padding: '45px 0px 0px 60px' }}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1" />
                                                </div>
                                                <img src={Delivery} alt="logo" style={{ width: '55px', height: '50px', marginLeft: '1rem', marginTop: '35px' }} />
                                                <p className="s-4-payment" style={{ marginTop: '45px', marginLeft: '1rem' }}>Cash on delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/history">
                                    <button className="btn btn-primary mobile mt-3" style={{ marginLeft: '-2.8rem', maxHeight: '4rem' }}>Confirm and Pay</button>
                                </Link>
                            </div>
                        {/* RIGHT SIDE END */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main