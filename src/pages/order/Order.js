import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/home/footer-home'
import Main from '../../components/order/main'
// import InfoPanelOrder from '../../components/order/info-panel-order'

function Order() {
    const status = {
        Product: "active-nav",
    }
    return (
        <>
            <Navbar status={status} />
            <Main />
            {/* <Footer /> */}
            {/* <InfoPanelOrder /> */}
        </>
    )
}

export default Order