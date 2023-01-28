import React from 'react'
import Order1 from "../../../assets/yourcart/order1.png"
import Order2 from "../../../assets/yourcart/order2.png"

import './OrderlistCard.css'

function OrderlistCard() {
  return (
    <div className="col sticky-1 mt-5">
        <h3 className="s-3-payment" style={{ paddingBottom: '20px' }}>Order Summary</h3>
        <div className="row mt-5">
            <div className="col">
                <img src={Order1} alt="" />
            </div>
            <div className="col s-4-payment">
                <p style={{ textAlign: 'start', marginLeft: '-40px' }}>
                    Hazelnut Latte <br />x 1 <br />Regular
                </p>
            </div>
            <div className="col s-4-payment">
                <p style={{ marginTop: '28px' }}>IDR 24.0</p>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                <img src={Order2} alt="" />
            </div>
            <div className="col s-4-payment">
                <p style={{ textAlign: 'start', marginLeft: '-40px' }}>
                    Chicken Fire Wings<br />x 2
                </p>
            </div>
            <div className="col s-4-payment">
                <p style={{ marginTop: '28px' }}>IDR 30.0</p>
            </div>
        </div>
        <hr style={{ opacity: '0.2', border: '0.5px solid #000000', marginTop: '35px' }} />
        {/* Total tagihan start */}
        <div className="row mt-5">
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start' }}>SUBTOTAL</p>
            </div>
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR 120.000</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start' }}>TAX &amp; FEES</p>
            </div>
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR 20.000</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start' }}>SHIPPING</p>
            </div>
            <div className="col">
                <p className="s-5-payment" style={{ textAlign: 'start', marginLeft: '63px' }}>IDR 10.000</p>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                <h3 className="s-6-payment" style={{ textAlign: 'start' }}>TOTAL</h3>
            </div>
            <div className="col">
                <h3 className="s-6-payment" style={{ textAlign: 'start' }}>IDR 150.000</h3>
            </div>
        </div>
        {/* Total tagihan end */}
    </div>
  )
}

export default OrderlistCard