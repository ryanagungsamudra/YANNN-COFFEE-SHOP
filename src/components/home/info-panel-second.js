import React from 'react'
import { Link } from 'react-router-dom'

function InfoPanelSecond() {
    return (
        <>
            <div className="container">
                <div className="row info-panel-footer">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg">
                                        <h4 className="typo1-secondpanel mobile">Check our promo <br />today!</h4>
                                        <p className="typo2-secondpanel mobile">Let's see the deals and pick yours!</p>
                                    </div>
                                    <div className="col col-lg see-promo-btn">
                                        <Link to="/products"><button className="btn btn-warning home px-5 py-3">See Promo</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPanelSecond