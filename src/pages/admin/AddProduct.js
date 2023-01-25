import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import AddProducts from '../../components/authorize/admin/AddProductsMain';

function AddProduct() {
    // status navbar
    const status = {
        Product: "active-nav",
    }
    return (
        <>
            <Navbar status={status} />
            <AddProducts />
            <Footer />
        </>
    )
}

export default AddProduct
