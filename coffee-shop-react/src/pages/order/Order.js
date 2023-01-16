import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/home/footer-home'
import Main from '../../components/order/main'
import InfoPanelOrder from '../../components/order/info-panel-order'

function Order() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
            <InfoPanelOrder />
        </>
    )
}

export default Order