import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import EditPromoMain from '../../components/authorize/admin/EditPromoMain.js';

function EditPromo() {
    // status navbar
    const status = {
        Product: "active-nav",
    }
    return (
        <>
            <Navbar status={status} />
            <EditPromoMain />
            <Footer />
        </>
    )
}

export default EditPromo