import React from 'react'
import '../../payment/main.css'
import Order1 from "../../../assets/yourcart/order1.png"
import Order2 from "../../../assets/yourcart/order2.png"
import Card from "../../../assets/yourcart/card.svg"
import Bank from "../../../assets/yourcart/bank.svg"
import Delivery from "../../../assets/yourcart/delivery.svg"
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import OrderlistCard from './OrderlistCard'

function ManageOrderMain() {
  return (
    <main style={{ marginTop: '6rem' }}>
          <div className="p-5 bg-primary text-white hero-payment">
              <div className="container ">
                  <div className="row">
                      <div className="col">
                          <div className="row text-center text-lg-start">
              <h3 style={{ fontSize: '40px', fontWeight: 700, fontStyle: 'normal' }}>Finish your <br /> customer order now.</h3>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {/* LEFT SIDE START */}
                          <div className="col text-center">
                              <div className="row ">
                                  <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                  >
                                    <SwiperSlide>{<OrderlistCard/>}</SwiperSlide>
                                    <SwiperSlide>{<OrderlistCard/>}</SwiperSlide>
                                    <SwiperSlide>{<OrderlistCard/>}</SwiperSlide>
                                    <SwiperSlide>{<OrderlistCard/>}</SwiperSlide>
                                    <SwiperSlide>{<OrderlistCard/>}</SwiperSlide>
                                  </Swiper>
                                  <div className='btn btn-warning swipe-admin'>Slide to see upcoming orders</div>
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
                                <button className="btn btn-primary payment mt-3">Mark as done</button>
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
                                <button className="btn btn-primary mobile mt-3" style={{ marginLeft: '-2.8rem', maxHeight: '4rem' }}>Mark as done</button>
                              </Link>
                          </div>
                      {/* RIGHT SIDE END */}
                  </div>
              </div>
          </div>
    </main>
  )
}

export default ManageOrderMain