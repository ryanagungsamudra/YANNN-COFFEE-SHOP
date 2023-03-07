import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingProduct from './errorHandling'

function CardProduct() {
    const url = process.env.REACT_APP_HOST
    const urlImage = process.env.REACT_APP_IMG

    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {
        axios.get(`${url}/api/products`)
            .then(res => setDataProduct(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                {dataProduct.length === 0 ? (<LoadingProduct />) : dataProduct.map((item) => {
                    // console.log(item.images[0].filename);
                    const img = `${urlImage}/${item.images[0].filename}`
                    return (
                        <div key={item.id} className="col-lg-3 col-6 text-start my-5 popup">
                            <div className="card card-product" style={{ height: '212px', width: '156px' }}>
                                <img src={img} className="card-img-product" alt="card" style={{ margin: '-40px 0 0 -35px' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title-product" style={{ marginTop: '-100px' }}>{item.title}</h5>
                                    <p className="s-4-product" style={{ marginTop: '-10px' }}>{item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardProduct