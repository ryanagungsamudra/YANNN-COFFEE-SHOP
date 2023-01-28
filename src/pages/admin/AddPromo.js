import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import AddPromoMain from '../../components/authorize/admin/AddPromoMain.js';

function AddPromo() {
    // status navbar
    const status = {
        Product: "active-nav",
    }
    return (
        <>
            <Navbar status={status} />
            <AddPromoMain />
            <Footer />
        </>
    )
}

export default AddPromo