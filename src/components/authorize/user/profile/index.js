import React from 'react'
import AvaProfile from  "../../../../assets/profile/ava.png"
import EditProfile from "../../../../assets/profile/edit.png"
import './style.css'

function MainProfile() {
  return (
    <main style={{marginTop: '6rem'}}>
        <div className="p-5 bg-primary text-white hero-profile">
            <div className="container container-1-profile">
                <div className="row">
                    <div className="col">
                        <h2 className="user-profile" style={{ marginTop: '-4.5rem' }}>User Profile</h2>
                    </div>
                </div>
                <div className="row">
                    {/* LEFT SIDE START */}
                    <div className="col-4 text-center">
                        <img id="avatar" src={AvaProfile} alt="avatar" style={{ width: '11rem', marginTop: '3rem' }} />
                        <h5 id="fullNameLeft" className="pt-4 title-profile" style={{ fontSize: '20px', fontWeight: 700 }}>Ryan Agung Samudra</h5>
                        <p id="emailLeft" className='title-profile' style={{ fontSize: '15px', fontWeight: 400 }}>ryansamudra67@gmail.com</p>
                        <button className="btn btn-warning profile mt-2">
                            Choose photo
                        </button>
                        <button className="btn btn-primary profile" style={{ marginTop: '-1.2rem' }}>
                            Remove photo
                        </button>
                        <button className="btn btn-light profile pt-2">
                            Edit Password
                        </button>
                        <h5 className="s-1-profile my-2">Do you want to save <br />the change?</h5>
                        <button className="btn btn-primary profile mt-2">
                            Save Change
                        </button>
                        <button className="btn btn-warning profile" style={{marginTop: '-1.2rem'}}>
                            Cancel
                        </button>
                        <button className="btn btn-light profile">
                            Log out
                        </button>
                    </div>
                    {/* LEFT SIDE END */}
                    {/* RIGHT SIDE START */}
                    <div className="col">
                        <div className="container container-2-profile">
                            <div className="row" style={{ padding: '1.7rem' }}>
                                {/* form kiri */}
                                <div className="col-7 text-start">
                                    <h3 className="s-lg-profile">Contact</h3>
                                    <a href="#"><img src={EditProfile} alt="edit" className="edit-profile" /></a>
                                </div>
                                <div className="col-7 text-start" style={{ marginTop: '-0.6rem' }}>
                                    <h5 className="s-md-profile">Email address :</h5>
                                    <p id="emailRight" className="s-sm-profile">ryansamudra67@gmail.com</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                    <h5 className="s-md-profile">Delivery address :</h5>
                                    <p id="Address" className="s-sm-profile">Sobodukuh, Tegalrejo, Magelang</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                    <h3 className="s-lg-profile mt-5">Details</h3>
                                    <h5 className="s-md-profile mt-4">Display name :</h5>
                                    <p id="fullNameRight" className="s-sm-profile">Ryan Agung Samudra</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                    <h5 className="s-md-profile">First name :</h5>
                                    <p id="firstName" className="s-sm-profile">Ryan</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                    <h5 className="s-md-profile">Last name :</h5>
                                    <p id="lastName" className="s-sm-profile">Agung Samudra</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                </div>
                                {/* form kanan */}
                                <div className="col text-start" style={{ marginTop: '-0.7rem' }}>
                                    <h5 className="s-md-profile">Mobile number :</h5>
                                    <p id="mobileNumber" className="s-sm-profile">(+62)82284798890</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                    <h5 className="s-md-profile">DD/MM/YY</h5>
                                    <p id="birthDate" className="s-sm-profile">28/07/99</p>
                                    <hr className="underline" style={{ border: '1px solid #000000' }} />
                                </div>
                            </div>
                            {/* Gender Check */}
                            <div className="row">
                                <div className="col text-center">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input profile" type="radio" name="gender" id="maleRadio" defaultValue="male" />
                                        <label className="form-check-label" htmlFor="inlineRadio1"><p className="gender-profile">Male</p></label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input profile" type="radio" name="gender" id="femaleRadio" defaultValue="female" />
                                        <label className="form-check-label" htmlFor="inlineRadio2"><p className="gender-profile">Female</p></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="line-bottom-profile" />
                    </div>
                    {/* RIGHT SIDE END */}
                </div>
            </div>
        </div>
    </main>
  )
}

export default MainProfile
