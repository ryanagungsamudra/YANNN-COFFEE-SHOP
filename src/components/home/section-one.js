import React from 'react'
import { Link } from 'react-router-dom'

function SectionOne() {
    return (
        <section className="section-1" style={{marginTop: '6rem'}}>
            <div className="mt-4 p-5 bg-primary text-white hero-1"> {/*Jumbotron*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <h1 className="pt-5 typo-1-s1">Start Your Day with <br />Coffee and Good Meals</h1>
                            <p className="py-2 typo-2-s1 mobile">We provide high quality beans, good taste, and healthy <br />meals made by love just for you. Start your day with us <br />for a bigger smile!</p>
                            <Link to="/login"><button className="btn btn-warning typo-3-s1 get-started">Get Started</button></Link>
                        </div>
                        <div className="col-lg-5" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne