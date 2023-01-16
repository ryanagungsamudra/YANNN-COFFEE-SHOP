import React from 'react'
import Scroll from "../../assets/up.svg"

function InfoPanelSecond() {
    return (
        <>
            <div className="container d-lg-block d-none">
                <div className="row info-panel-footer">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <h4 className="typo-primary">Check our promo <br />today!</h4>
                                        <p className="typo-secondary">Let's see the deals and pick yours!</p>
                                    </div>
                                    <div className="col">
                                        <a href="product.html"><button className="btn btn-warning px-5 py-3">See Promo</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img id="scrollTop" src={Scroll} alt="up" />
        </>
    )
}

export default InfoPanelSecond