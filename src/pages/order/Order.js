import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/home/footer-home'
import Main from '../../components/order/main'
import InfoPanelOrder from '../../components/order/info-panel-order'

function Order() {
    const status = {
        Home: "nav-link mx-2",
        Product: "nav-link mx-2 active",
        Payment: "nav-link mx-2",
        History: "nav-link mx-2"
    }
    return (
        <>
            <Navbar status={status} />
            <Main />
            <Footer />
            <InfoPanelOrder />
        </>
    )
}

export default Order