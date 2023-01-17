import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Main from '../../components/history/main'

function History() {
    const status = {
        Home: "nav-link mx-2",
        Product: "nav-link mx-2",
        Payment: "nav-link mx-2",
        History: "nav-link mx-2 active"
    }
    return (
        <>
            <Navbar status={status} />
            <Main />
            <Footer />
        </>
    )
}

export default History