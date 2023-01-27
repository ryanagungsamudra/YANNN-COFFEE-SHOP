import React from 'react'
import './style.css'
import ava1 from "../../../../assets/chat&roomchat/jason.png"
import ava2 from "../../../../assets/chat&roomchat/cheryn.png"
import ava3 from "../../../../assets/chat&roomchat/lou.png"

function MainChat() {
  return (
    <main style={{marginTop: '6rem'}}>
        <div className="p-5 bg-primary text-white hero-chat">
            <div className="container mt-4 container-1-chat">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            {/* LEFT SIDE */}
                            <div className="col-4 container-2-chat px-4" style={{ paddingTop: '1.2rem' }}>
                                <div className="input-group">
                                    <input type="search" className="form-control chat mt-4" placeholder="Search Chat" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <p className="s-1-chat">Choose a staff you want to talk with</p>
                                {/* Kolom chat start */}
                                <a href="roomchat.html">
                                    <div className="chat-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="avatar-1-chat" src={ava1} alt="icon" />
                                                </div>
                                                <div className="col text-start pt-3">
                                                    <h5 className="s-2-chat">Jason</h5>
                                                    <p className="s-3-chat">Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <hr className="line-break-side-chat" />
                                <a href="#">
                                    <div className="chat-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="avatar-2-chat" src={ava2} alt="icon" />
                                                </div>
                                                <div className="col text-start pt-3" style={{ marginTop: '-1rem' }}>
                                                    <h5 className="s-2-chat">Cheryn</h5>
                                                    <p className="s-3-chat">Hey, I’m Cheryn, can I help you? Just chat me if you have some trouble in ordering, happy shopping!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <hr className="line-break-side" />
                                <a href="#">
                                    <div className="chat-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="avatar-3-chat" src={ava3} alt="icon" />
                                                </div>
                                                <div className="col text-start pt-3" style={{ marginTop: '-1rem' }}>
                                                    <h5 className="s-2-chat">Lou</h5>
                                                    <p className="s-3-chat">Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <hr className="line-break-side" />
                            </div>
                            {/* RIGHT SIDE */}
                            <div className="col-8 container-3-chat text-center">
                                <div className="container p-4">
                                    <div className="row">
                                        <div className="col" style={{ marginLeft: '-15.5rem', marginTop: '1rem' }}>
                                            <h2 className="s-4-chat">Room Chat</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{ marginTop: '19rem' }}>
                                            <p style={{ color: '#9F9F9F' }}>You have no conversation, start chat other staff! <br />Have a good day!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default MainChat