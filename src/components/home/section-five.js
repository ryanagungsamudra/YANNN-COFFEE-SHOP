import React from 'react'
import Testi1 from "../../assets/homepage/testi1.svg"
import Testi2 from "../../assets/homepage/testi2.svg"
import Testi3 from "../../assets/homepage/testi3.svg"
import Netflix from "../../assets/homepage/sponsored-netflix.png"
import Reddit from "../../assets/homepage/sponsored-reddit.png"
import Amazon from "../../assets/homepage/sponsored-amazon.png"
import Discord from "../../assets/homepage/sponsored-discord.png"
import Spotify from "../../assets/homepage/sponsored-spotify.png"

function SectionFive() {
    return (
        <section className="section-5 mobile">
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h4 className="typo-primary">Our Partner</h4>
                        <div className="width-based mobile">
                            <div className="row width-based-product mobile">
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Netflix}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Reddit}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Amazon}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Discord}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                                <div className="col-4 col-lg width-based-product mobile">
                                    <img
                                        src={Spotify}
                                        className="img-partener-thumbnail mobile"
                                        alt="partner img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sponsored mobile" /> */}
            </div>
            <div className="row text-center">
                <div className="col">
                    <h4 className="typo-primary mobile">Loved by Thousands of <br />Happy Customer</h4>
                    <p className="typo-secondary py-3">These are the stories of our customers who have visited us with great <br />pleasure.</p>
                </div>
            </div>
            {/* Testimonial : Sliding Carousel Start */}
            <div className="testimonials">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="single-item">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi1} alt="" />
                                            </div>
                                            <div className="bio">
                                                <h2>Viezh Robert</h2>
                                                <h4>Warsaw, Poland</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="content">
                                            <p><span><i className="fa fa-quote-left" /></span>Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                                            <p className="socials">
                                                <i className="fa fa-twitter" />
                                                <i className="fa fa-behance" />
                                                <i className="fa fa-pinterest" />
                                                <i className="fa fa-dribbble" />
                                                <i className="fa fa-vimeo" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="single-item">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi2} alt="" />
                                            </div>
                                            <div className="bio">
                                                <h2>Yessica Christy</h2>
                                                <h4>Shanxi, China</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="content">
                                            <p><span><i className="fa fa-quote-left" /></span>I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
                                            <p className="socials">
                                                <i className="fa fa-twitter" />
                                                <i className="fa fa-behance" />
                                                <i className="fa fa-pinterest" />
                                                <i className="fa fa-dribbble" />
                                                <i className="fa fa-vimeo" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="single-item">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="profile">
                                            <div className="img-area">
                                                <img src={Testi3} alt="" />
                                            </div>
                                            <div className="bio">
                                                <h2>Kim Young Jou</h2>
                                                <h4>Seoul, South Korea</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="content">
                                            <p><span><i className="fa fa-quote-left" /></span>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
                                            <p className="socials">
                                                <i className="fa fa-twitter" />
                                                <i className="fa fa-behance" />
                                                <i className="fa fa-pinterest" />
                                                <i className="fa fa-dribbble" />
                                                <i className="fa fa-vimeo" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Testimonial : Sliding Carousel End */}
        </section>
    )
}

export default SectionFive