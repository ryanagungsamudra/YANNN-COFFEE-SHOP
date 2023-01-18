import React from 'react'
import Checkcard from "../../assets/homepage/checkcard.svg"
import Card1 from "../../assets/homepage/card1.png"
import Card2 from "../../assets/homepage/card2.png"
import Card3 from "../../assets/homepage/card3.png"

function SectionThree() {
    return (
        <section className="section-3">
            <div className="container">
                <div className="row text-center">
                    <div className="col text-mobile">
                        <h4 className="typo-primary">Here is People’s Favorite</h4>
                        <p className="typo-secondary">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                    </div>
                </div>
            </div>
            {/* 3 CARD START */}
            {/* desktop version */}
            <div className="container mt-card d-none d-lg-block">
                <div className="row row-cols-1 row-cols-md-3 g-4 ms-5">
                    <div className="col text-start ms-5 ms-lg-0 my-5 my-lg-0 card-transition-1">
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card1} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Hazelnut Latte</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">HazelnutSyrup</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Wanilla Whipped Cream</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Ice / Hot</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Sliced Banana on Top</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '105px' }}>IDR 25.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col text-start ms-5 ms-lg-0 my-5 my-lg-0 card-transition-2">
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card2} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Pinky Promise</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">1 Shot of Coffee</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Vanilla Whipped Cream</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Chocolate Biscuits</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Strawberry Syrup</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Sliced strawberry on Top</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '70px' }}>IDR 30.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col text-start ms-5 ms-lg-0 my-5 my-lg-0 card-transition-3">
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card3} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Chicken Wings</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Wings</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Drum Sticks</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Mayonaise and Lemon</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Hot Fried</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Secret Recipe</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Buy 1 Get 1 only for Dine in</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '30px' }}>IDR 40.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile version */}
            <div className="container mt-card d-lg-none">
                <div className="row row-cols-1 row-cols-md-3 g-4 card-mobile" style={{ marginLeft: '-1.3rem' }}>
                    <div className="col text-start ms-5 card-transition-1">
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card1} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Hazelnut Latte</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">HazelnutSyrup</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Wanilla Whipped Cream</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Ice / Hot</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Sliced Banana on Top</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '105px' }}>IDR 25.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col text-start ms-5 card-transition-2" style={{ marginTop: '8rem' }}>
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card2} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Pinky Promise</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">1 Shot of Coffee</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Vanilla Whipped Cream</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Chocolate Biscuits</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Strawberry Syrup</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Sliced strawberry on Top</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '70px' }}>IDR 30.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col text-start ms-5 card-transition-3" style={{ marginTop: '8rem' }}>
                        <div className="card" style={{ height: '580px', width: '300px' }}>
                            <img src={Card3} className="card-img-top" alt="card" style={{ marginTop: '-90px' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ marginTop: '-100px', marginLeft: '60px' }}>Chicken Wings</h5>
                                <div className="card-text pt-5" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Wings</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Drum Sticks</p>
                                </div>
                                <div className="card-text" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Mayonaise and Lemon</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Hot Fried</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Secret Recipe</p>
                                </div>
                                <div className="card-text my-3" style={{ marginLeft: '40px' }}>
                                    <img src={Checkcard} alt="" />
                                    <p className="d-inline ps-2 typo-3-s2">Buy 1 Get 1 only for Dine in</p>
                                </div>
                                <h4 className="price" style={{ marginLeft: '60px', marginTop: '30px' }}>IDR 40.000</h4>
                                <button className="btn btn-warning rounded-pill px-4" style={{ marginLeft: '60px', marginTop: '10px' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 CARD END */}
        </section>
    )
}

export default SectionThree