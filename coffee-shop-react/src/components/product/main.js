import React from 'react'
import './main.css'

import Promo_1 from "../../assets/product/promo-1.svg"
import Promo_2 from "../../assets/product/promo-2.svg"
import Promo_3 from "../../assets/product/promo-3.svg"
import Promo_4 from "../../assets/product/promo-4.svg"
import P1 from "../../assets/product/p1.png"
import P2 from "../../assets/product/p2.png"
import P3 from "../../assets/product/p3.png"
import P4 from "../../assets/product/p4.png"
import P5 from "../../assets/product/p5.png"
import P6 from "../../assets/product/p6.png"
import P7 from "../../assets/product/p7.png"
import P8 from "../../assets/product/p8.png"
import P9 from "../../assets/product/p9.png"
import P10 from "../../assets/product/p10.png"
import P11 from "../../assets/product/p11.png"
import P12 from "../../assets/product/p12.png"

function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-4 border-end border-2 text-center">
                        <h4 className="s-1-product" style={{ marginTop: '60px' }}>Promo Today</h4>
                        <p className="s-2-product pt-3" style={{ marginBottom: '60px' }}>Coupons will be updated every weeks. <br />Check them out!</p>
                        {/* Promo Card Start */}
                        <div>
                            <div className="box-card-1-product popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_1} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>HAPPY MOTHER’S DAY!</b><br />Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-2-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_2} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-1-product popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-2" src={Promo_3} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-3">
                                            <p><b>HAPPY MOTHER’S DAY!</b><br />Get one of our favorite menu for free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-card-3-product my-4 popup-scale">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="pt-1" src={Promo_4} alt="promo" />
                                        </div>
                                        <div className="col text-start pt-2">
                                            <p><b>HAPPY HALLOWEEN!</b>
                                                <br />Do you like chicken wings? <br />Get 1 free only if you buy pinky promise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Promo Card End */}
                        <a href="product-detail.html">
                            <button className="btn btn-warning product" style={{ margin: '50px 20px 90px 0px' }}>Apply Coupon</button>
                        </a>
                        <p className="text-start s-3-product">
                            <b>Terms and Condition</b><br />
                            1. You can only apply 1 coupon per day<br />
                            2. It only for dine in<br />
                            3. Buy 1 get 1 only for new user<br />
                            4. Should make member card to apply coupon<br />
                        </p>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="col">
                        {/* Navs & Tabs Start*/}
                        <ul className="nav justify-content-center mt-5">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ fontSize: '20px', fontWeight: 700 }} aria-current="page" href="/">Favorite &amp; Promo</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" style={{ fontSize: '20px', fontWeight: 400, color: '#9F9F9F' }} href="/">Coffee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '20px', fontWeight: 400, color: '#9F9F9F' }} href="/">Non Coffee</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" style={{ fontSize: '20px', fontWeight: 400, color: '#9F9F9F' }} href="/">Foods</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '20px', fontWeight: 400, color: '#9F9F9F' }} href="/">Add-on</a>
                            </li>
                        </ul>
                        {/* Navs & Tabs End */}
                        {/* Card-Product Start */}
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                                <div className="col text-start my-5 popup popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P1} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Veggie tomato <br />mix</h5>
                                            <p className="s-4-product" style={{ marginTop: '-10px' }}>IDR 34.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            10%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P2} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Hazelnut Latte</h5>
                                            <p className="s-4-product" style={{ marginTop: '25px' }}>IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P3} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Summer fried rice</h5>
                                            <p className="s-4-product" style={{ marginTop: '25px' }}>IDR 32.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            13%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P4} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Creamy Ice Latte</h5>
                                            <p className="s-4-product" style={{ marginTop: '24px' }}>IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P5} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Drum Sticks</h5>
                                            <p className="s-4-product" style={{ marginTop: '26px' }}>IDR 30.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            20%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P6} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Salty Rice</h5>
                                            <p className="s-4-product" style={{ marginTop: '50px' }}>IDR 20.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P7} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Summer fried rice</h5>
                                            <p className="s-4-product" style={{ marginTop: '25px' }}>IDR 32.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            15%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P8} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Creamy Ice Latte</h5>
                                            <p className="s-4-product" style={{ marginTop: '24px' }}>IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P9} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Veggie tomato <br />mix</h5>
                                            <p className="s-4-product" style={{ marginTop: '-10px' }}>IDR 34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P10} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Hazelnut Latte</h5>
                                            <p className="s-4-product" style={{ marginTop: '25px' }}>IDR 25.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            22%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P11} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Summer fried rice</h5>
                                            <p className="s-4-product" style={{ marginTop: '25px' }}>IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-start my-5 popup">
                                    <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                        <img src={P12} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title-product" style={{ marginTop: '-100px' }}>Creamy Ice Latte</h5>
                                            <p className="s-4-product" style={{ marginTop: '24px' }}>IDR 27.000</p>
                                        </div>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                            10%
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="s-5-product ms-3">*the price has been cutted by discount appears</p>
                        {/* Card-Product End */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main