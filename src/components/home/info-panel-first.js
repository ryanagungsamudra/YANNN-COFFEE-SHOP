import React from 'react'
import Staff from "../../assets/homepage/user.svg"
import Stores from "../../assets/homepage/location.svg"
import Customers from "../../assets/homepage/Server.png"

function InfoPanelFirst() {
    return (
        <div className="container">
            <div className="row">
                <div className="col info-panel mobile">
                    <div className="row">
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Staff} alt="icon" className="float-lg-start" />
                            <h4>90+</h4>
                            <p>Staff</p>
                        </div>
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Stores} alt="icon" className="float-lg-start" />
                            <h4>30+</h4>
                            <p>Stores</p>
                            <div className="vertical-line d-none d-lg-block" />
                        </div>
                        <div className="col-3 col-lg panel-first-mobile">
                            <img src={Customers} alt="icon" className="float-lg-start" />
                            <h4>800+</h4>
                            <p>Customers</p>
                            <div className="vertical-line d-none d-lg-block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanelFirst