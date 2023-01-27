import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer'
import MainProfile from '../../components/authorize/user/profile'

function Profile() {
  // status navbar
  const status = ''
  return (
    <>
      <Navbar status={status} />
      <MainProfile />
      <Footer />
    </>
  )
}

export default Profile