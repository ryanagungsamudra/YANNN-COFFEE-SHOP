import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

function MainForgot() {
    return (
        <main>
            <div className="p-5 bg-primary text-white hero-forgot">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '44px', marginTop: '-10px' }}>Forgot your password?</h3>
                        <p style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px' }}>Don’t worry, we got your back!</p>
                    </div>
                </div>
                {/* desktop version */}
                <div className="row d-none d-lg-flex" style={{ marginTop: '4.3rem' }}>
                    <div className="col-1" />
                    <div className="col-7">
                        <input type="email" className="form-control-forgot py-3" id="emailForgot" aria-describedby="emailHelp" placeholder="Enter your email adress to get link" />
                    </div>
                    <div className="col-3" style={{ marginLeft: '3rem' }}>
                        <Link to="/forgotpassword"><button className="btn btn-warning forgot send" onclick="getData()">Send</button></Link>
                    </div>
                    <div className="col-1" />
                </div>
                {/* mobile version */}
                <div className="row d-lg-none" style={{ marginTop: '4.7rem' }}>
                    <div className="col-7" style={{ marginLeft: '-4rem' }}>
                        <input type="email" className="form-control-forgot py-3" id="emailForgotMobile" aria-describedby="emailHelp" placeholder="Enter your email adress to get link" />
                    </div>
                    <div className="col-3" style={{ marginLeft: '4rem' }}>
                        <Link to="/forgotpassword"><button className="btn btn-warning forgot send" onclick="getDataMobile()" style={{ width: '7rem' }}>Send</button></Link>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '75px' }}>
                    <div className="col text-center">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px', lineHeight: '45px' }}>Click here if you didn’t receive any link in <br />2 minutes</h3>
                    </div>
                </div>
                {/* desktop version */}
                <div className="row d-none d-lg-block" style={{ marginTop: '10px' }}>
                    <div className="col text-center">
                        <div className="btn btn-primary forgot resend">
                            <p style={{ marginTop: '20px' }}>Resend Link</p>
                        </div>
                    </div>
                </div>
                {/* mobile version */}
                <div className="row d-lg-none" style={{ marginTop: '10px' }}>
                    <div className="col text-center">
                        <div className="btn btn-primary forgot forgot">
                            <p style={{ marginTop: '20px' }}>Resend Link</p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col text-center">
                        <h3 style={{ fontWeight: 700, fontStyle: 'normal', fontSize: '18px' }}>01:54</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainForgot