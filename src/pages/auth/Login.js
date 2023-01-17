import React from 'react'
import MainLogin from '../../components/auth/login/main'
import Footer from '../../components/home/footer-home'
import InfoPanel from '../../components/auth/infopanel'

function Login() {
    return (
        <main>
            <MainLogin />
            <Footer />
            <InfoPanel />
        </main>
    )
}

export default Login