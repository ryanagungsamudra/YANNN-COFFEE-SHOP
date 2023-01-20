import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer'
import Main from '../../components/payment/main'

function Payment() {
    const status = {
        Payment: "active-nav",
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