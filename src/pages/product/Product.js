import React from 'react'
import { Navbar, MainProduct, Footer } from '../../components/product/index'

function Product() {
    // status navbar
    const status = {
        Home: "nav-link mx-2",
        Product: "nav-link mx-2 active",
        Payment: "nav-link mx-2",
        History: "nav-link mx-2"
    }

    return (
        <>
            <Navbar status={status} />
            <MainProduct />
            <Footer />
        </>
    )
}

export default Product