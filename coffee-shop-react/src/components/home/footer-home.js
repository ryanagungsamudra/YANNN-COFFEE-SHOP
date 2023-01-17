import React from 'react'
import CoffeeLogo from "../../assets/coffeeLogo.svg"
import Facebook from "../../assets/Facebook.svg"
import Twitter from "../../assets/Twitter.svg"
import Instagram from "../../assets/Instagram.svg"
import { Link } from 'react-router-dom'
import Scroll from '../../assets/up.svg'

function FooterHome() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer>
            <img onClick={scrollTop} id="scrollTop" src={Scroll} alt="up" />
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-9 pt-footer">
                            <Link to="/">
                                <img src={CoffeeLogo} alt="logo" className="pb-2" />
                                <p className="d-inline ps-2 footer-name-tag">YANNN
                                    COFFEE</p>
                            </Link>
                            <p className="mt-3 footer-p">
                                Coffee Shop is a store that sells some good <br />meals, and especially coffee. We provide
                                <br />high quality beans
                            </p>
                            <div className="d-lg-flex">
                                <a href="https://www.facebook.com/ryanagungsamudra/" target="_blank" rel="noreferrer" style={{ marginLeft: '-20px' }}>
                                    <img src={Facebook} alt="Facbook" />
                                </a>
                                <a href="https://mobile.twitter.com/ryansamudra67" target="_blank" rel="noreferrer" style={{ marginLeft: '-15px' }}>
                                    <img src={Twitter} alt="Twitter" />
                                </a>
                                <a href="https://instagram.com/ryanagungsamudra/" target="_blank" rel="noreferrer" style={{ marginLeft: '-15px' }}>
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </div>
                            <p style={{ color: '#AFB5C0', fontSize: '16px', fontWeight: 400 }}>©2022CoffeeStore</p>
                        </div>
                        <div className="col-lg-2 col-3 pt-footer">
                            <h5 className="mb-4 footer-h5">Product</h5>
                            <a href="/">
                                <p>Download</p>
                            </a>
                            <a href="/">
                                <p>Pricing</p>
                            </a>
                            <a href="/">
                                <p>Locations</p>
                            </a>
                            <a href="/">
                                <p>Countries</p>
                            </a>
                            <a href="/">
                                <p>Blog</p>
                            </a>
                        </div>
                        <div className="col-lg-2 pt-footer d-lg-block d-none">
                            <h5 className="mb-4 footer-h5">Engage</h5>
                            <a href="/">
                                <p>Coffe Shop ?</p>
                            </a>
                            <a href="/">
                                <p>FAQ</p>
                            </a>
                            <a href="/">
                                <p>About Us</p>
                            </a>
                            <a href="/">
                                <p>Privacy Policy</p>
                            </a>
                            <a href="/">
                                <p>Terms of Service</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterHome