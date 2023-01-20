import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer'
import Main from '../../components/history/main'

function History() {
    const status = {
        History: "active-nav"
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