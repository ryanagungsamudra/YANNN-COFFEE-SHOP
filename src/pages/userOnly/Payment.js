import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer'
import Main from '../../components/payment/main'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const status = {
        Payment: "active-nav",
    }
    // Ini digunakan untuk private route, ketika user sudah login maka tidak bisa lagi ke login page
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('@userLogin')) {
            navigate('/login')
        } 
    }, [navigate])
    return (
        <>
            <Navbar status={status} />
            <Main />
            <Footer />
        </>
    )
}

export default Payment