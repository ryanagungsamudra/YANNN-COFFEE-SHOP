import React from 'react'
import Checklist from "../../assets/homepage/checklist.svg"

function SectionTwo() {
    return (
        <section className="section-2">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-6 d-lg-block d-none">
                        <div className="hero-2" />
                    </div>
                    <div className="col-lg-6 col-sm-12 py-5 pe-5" style={{ paddingLeft: '5.8rem' }}>
                        <h4 className="typo-primary">We Provide Good Coffee <br />and Healthy Meals</h4>
                        <p className="typo-secondary py-3">You can explore the menu that we provide with fun and <br />have their own
                            taste and make your day better.</p>
                        <div>
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">High quality beans</p>
                        </div>
                        <div className="py-3">
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Healthy meals, you can request the ingredients</p>
                        </div>
                        <div>
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Chat with our staff to get better experience for ordering</p>
                        </div>
                        <div className="py-3">
                            <img src={Checklist} alt="" />
                            <p className="d-inline ps-2 typo-3-s2">Free member card with a minimum purchase of IDR 200.000.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo