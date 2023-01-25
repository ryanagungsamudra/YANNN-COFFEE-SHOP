import React, { useEffect } from 'react'
import MainLogin from '../../components/auth/login/main'
import Footer from '../../components/home/footer-home'
import InfoPanel from '../../components/auth/infopanel'
import { useNavigate } from 'react-router-dom'

function Login() {
    // Ini digunakan untuk private route, ketika user sudah login maka tidak bisa lagi ke login page
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('@userLogin')) {
            navigate('/products')
        }
    }, [navigate])
    return (
        <main>
            <MainLogin />
            <Footer />
            <InfoPanel />
        </main>
    )
}

export default Login