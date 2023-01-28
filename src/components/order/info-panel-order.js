import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './info-panel-footer.css'
// import heroSmall from "../../assets/product-detail/hero-small.png"
import minus from "../../assets/product-detail/minus.png"
import plus from "../../assets/product-detail/plus.png"

function InfoPanelOrder() {

    // GET DATA ORDER BY ID START
    const url = process.env.REACT_APP_HOST
    const [dataProduct, setDataProduct] = useState([])
    let { id } = useParams()

    useEffect(() => {
        axios.get(`${url}/api/products`)
            .then(res => setDataProduct(res.data.data))
            .catch((err) => err)
    }, [])
    // GET DATA ORDER BY ID END

    // Cart Amount Toggle
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < 15 ? setAmount(amount + 1) : setAmount(15) // angka 15 diganti jumlah stock barang nantinya
    }

    return (
        dataProduct.map((item) => {
            if (id === item.id) {
                const img = `${url}/uploads/images/${item.images[0].filename}`
                return (
                    <div>
                        {/* Desktop */}
                        <div className="container d-lg-block d-none">
                            <div className="row info-panel-footer order">
                                <div className="col">
                                    <div className="container-fluid">
                                        <div key={item.id} className="row">
                                            <div className="col">
                                                <img src={img} alt="orderImage" style={{ marginLeft: '-45px' }} />
                                            </div>
                                            <div className="col" style={{ marginLeft: '-250px', paddingTop: '13px' }}>
                                                <h3 className="s-7-order">{item.title}</h3>
                                                <h5 className="s-8-order">L (Large)</h5>
                                                <h5 className="s-8-order">XL (Extra Large)</h5>
                                            </div>
                                            <div className="col d-flex" style={{ marginRight: '-190px', marginTop: '50px' }}>
                                                <Link to='#'><img src={minus} onClick={() => setDecrease()} style={{ width: '40px', height: '40px' }} alt="minus" /></Link>
                                                <p className="s-7-order mx-4">{amount}</p>
                                                <Link to='#'><img src={plus} onClick={() => setIncrease()} style={{ width: '40px', height: '40px' }} alt="plus" /></Link>
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
                                        <h3 className="s-7-order mobile">{item.title}</h3>
                                        <h5 className="s-8-order mobile">L (Large)</h5>
                                        <h5 className="s-8-order mobile">XL (Extra Large)</h5>
                                    </div>
                                    <div className="col d-flex">
                                        <Link to='#'><img src={minus} onClick={() => setDecrease()} style={{ width: '40px', height: '40px' }} alt="minus" /></Link>
                                        <p className="s-7-order mx-4">{amount}</p>
                                        <Link to='#'><img src={plus} onClick={() => setIncrease()} style={{ width: '40px', height: '40px' }} alt="plus" /></Link>
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
        })
    )
}

export default InfoPanelOrder