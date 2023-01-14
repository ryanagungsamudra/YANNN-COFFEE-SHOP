import React from 'react'

function SectionFive() {
    return (
        <section className="section-5">
            <div className="container d-lg-block d-none">
                <div className="row text-center">
                    <div className="col">
                        <h4 className="typo-primary">Our Partner</h4>
                    </div>
                </div>
                <div className="sponsored" />
            </div>
            <div className="row text-center">
                <div className="col">
                    <h4 className="typo-primary">Loved by Thousands of <br />Happy Customer</h4>
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
                                                <img src="img/homepage/testi1.svg" alt="" />
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
                                                <img src="img/homepage/testi2.svg" alt="" />
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
                                                <img src="img/homepage/testi3.svg" alt="" />
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