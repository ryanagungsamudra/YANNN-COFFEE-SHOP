import React from 'react'
import Product from "../../assets/history/product.svg"

function CardHistory() {
    return (
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => {
            return (
                <div className="col-lg-4 col-6">
                    <div className="card card-style-history">
                        <div className="row">
                            <div className="col-4">
                                <img src={Product} className="img-product-history" alt="..." />
                            </div>
                            <div className="col">
                                <div className="row" style={{ paddingTop: '20px' }}>
                                    <div className="col">
                                        <h4 className="s-1-history">Veggie tomato mix</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p className="s-2-history">IDR 34.000</p>
                                            <p className="s-3-history">Delivered</p>
                                        </div>
                                        {/* Checkbox start */}
                                        <div className="col-2 form-check-position">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault" />
                                            </div>
                                        </div>
                                        {/* Checkbox end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CardHistory