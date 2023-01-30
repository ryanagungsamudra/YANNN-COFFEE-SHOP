import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import CardHistory from './cardHistory.js'
import axios from 'axios'

function Main() {
    const url = process.env.REACT_APP_HOST

    const userId = (JSON.parse(localStorage.getItem('productOrder'))).id
    const title = (JSON.parse(localStorage.getItem('productOrder'))).title
    const price = parseInt(localStorage.getItem('productPrice'))
    const quantity = localStorage.getItem('quantity')
    const taxvalue = (price * 0.1)
    const totalprice = (price + taxvalue)

    useEffect(() => {
        handleOrder()
    }, [])
    
    const handleOrder = async () => {
        // const body = new FormData();
        const body = new URLSearchParams()
        body.append('id_user', userId)
        body.append('title', title);
        body.append('quantity', quantity);
        body.append('price', totalprice.toFixed(3));

        try {
            await axios.post(`${url}/api/order`, body, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            })
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="p-5 bg-primary text-white hero-history">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h3 className="s-4-history">Let’s see what you have bought!</h3>
                        <p className="s-5-history">Select item to delete</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end mt-3 select-all-history">
                        <Link to="#">
                            <p>Select All</p>
                        </Link>
                    </div>
                </div>
                {/* CARD START!! */}
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <CardHistory />
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD END!! */}
            </div>
        </main>
    )
}

export default Main