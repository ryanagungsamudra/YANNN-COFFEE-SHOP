import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer'
import MainChat from '../../components/authorize/user/chat'

function Chat() {
    const status = {
        Home: "",
    }
  return (
    <>
        <Navbar status={status}/>
        <MainChat />
        <Footer />
    </>
  )
}

export default Chat