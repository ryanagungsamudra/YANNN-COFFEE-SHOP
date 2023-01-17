import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Main from '../../components/payment/main'

function Payment() {
    const status = {
        Home : "nav-link mx-2",
        Product : "nav-link mx-2",
        Payment : "nav-link mx-2 active",
        History : "nav-link mx-2"
    }
    return (
        <>
            <Navbar status={status} />
            <Main />
            <Footer />
        </>
    )
}

export default Payment