import React from 'react'
import EditProductMain from '../../components/authorize/admin/EditProductMain'
import { Navbar } from '../../components/home'
import Footer from '../../components/footer'


function EditProduct() {
    // status navbar
    const status = {
        Product: "active-nav",
    }
    return (
        <>
            <Navbar status={status} />
            <EditProductMain />
            <Footer />
        </>
    )
}

export default EditProduct