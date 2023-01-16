import React from 'react'
import './info-panel-footer.css'
import heroSmall from "../../assets/product-detail/hero-small.png"
import minus from "../../assets/product-detail/minus.jpg"
import plus from "../../assets/product-detail/plus.jpg"
import { Link } from 'react-router-dom'

function InfoPanelOrder() {
    return (
        <div>
            {/* Desktop */}
            <div className="container d-lg-block d-none">
                <div className="row info-panel-footer order">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src={heroSmall} alt="" style={{ paddingTop: '14px', marginLeft: '-45px' }} />
                                </div>
                                <div className="col" style={{ marginLeft: '-250px', paddingTop: '13px' }}>
                                    <h3 className="s-7-order">COLD BREW</h3>
                                    <h5 className="s-8-order">x1 (Large)</h5>
                                    <h5 className="s-8-order">x1 (Regular)</h5>
                                </div>
                                <div className="col d-flex" style={{ marginRight: '-190px', marginTop: '50px' }}>
                                    <a href="/order"><img src={minus} style={{ width: '40px', height: '40px' }} alt="" /></a>
                                    <p className="s-7-order mx-4">2</p>
                                    <a href="/order"><img src={plus} style={{ width: '40px', height: '40px' }} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-lg-block d-none">
                <div className="row info-panel-button order">
                    <div className="col">
                        <Link to="/payment"><button className="btn btn-warning footer order">CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="container d-block d-lg-none">
                <div className="row">
                    <div className="col-8 info-panel-mobile">
                        <div className="col">
                            <h3 className="s-7-order">COLD BREW</h3>
                            <h5 className="s-8-order">x1 (Large)</h5>
                            <h5 className="s-8-order">x1 (Regular)</h5>
                        </div>
                        <div className="col d-flex">
                            <a href="/order"><img src={minus} style={{ width: '40px', height: '40px' }} alt="" /></a>
                            <p className="s-7-order mx-4">2</p>
                            <a href="/order"><img src={plus} style={{ width: '40px', height: '40px' }} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <Link to="/payment"><button className="btn btn-warning info-button-mobile">CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanelOrder