import React, { useEffect, useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Promo_1 from "../../assets/product/promo-1.svg"
import Promo_2 from "../../assets/product/promo-2.svg"
import Promo_3 from "../../assets/product/promo-3.svg"
import Promo_4 from "../../assets/product/promo-4.svg"
// import CardProduct from './cardProduct'
import Search from "../../assets/product/search.svg"
import LoadingProduct from './loadingProduct'

function Main() {
    const [data, setData] = useState([]);
    // const [refetch, setRefetch] = useState(false);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/products?search=${keyword}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [keyword])

    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}

                    <div className="col-lg-4 border-end border-2 text-center ms-3 ms-lg-0">
                        <h4 className="s-1-product me-4 me-lg-0" style={{ marginTop: '60px' }}>Promo Today</h4>
                        <p className="s-2-product pt-3 me-4 me-lg-0" style={{ marginBottom: '60px' }}>Coupons will be updated every weeks. <br />Check them out!</p>
                        
                        <div className="searchBox" style={{ marginLeft: '1.4rem', marginTop: '-2rem' }}>
                            <input type="text" placeholder="Search Anything You Want..." onChange={(e) => setKeyword(e.target.value)} />
                            <img src={Search} alt="searchBox" />
                        </div>

                        {/* Promo Card Start */}
                        <div style={{marginTop: '7rem'}}>
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
                        <Link to="/products/:id">
                            <button className="btn btn-warning product" style={{ margin: '50px 20px 90px 0px' }}>Apply Coupon</button>
                        </Link>
                        <p className="text-start s-3-product">
                            <b>Terms and Condition</b><br />
                            1. You can only apply 1 coupon per day<br />
                            2. It only for dine in<br />
                            3. Buy 1 get 1 only for new user<br />
                            4. Should make member card to apply coupon<br />
                        </p>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="col-lg-8">
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
                                {data.length === 0 ? (<LoadingProduct />) : data.map((item) => {
                                    const img = `http://localhost:5000/uploads/images/${item.images[0].filename}`
                                    return (
                                        <div key={item.id} className="col-lg-3 col-6 text-start my-5 popup">
                                            <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                                <img src={img} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title-product" style={{ marginTop: '-100px' }}>{item.title}</h5>
                                                    <p className="s-4-product" style={{ marginTop: '-10px' }}>{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <CardProduct /> */}
                        <p className="s-5-product ms-3">*the price has been cutted by discount appears</p>
                        {/* Card-Product End */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main