import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import CardHistory from './cardHistory.js'

function Main() {
    return (
        <main style={{ marginTop: '6rem' }}>
            <div className="p-5 bg-primary text-white hero-history">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h3 className="s-4-history">Let’s see what you have bought!</h3>
                        <p className="s-5-history">Select item to delete</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end mt-3 select-all-history">
                        <Link to="#">
                            <p>Select All</p>
                        </Link>
                    </div>
                </div>
                {/* CARD START!! */}
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <CardHistory />
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD END!! */}
            </div>
        </main>
    )
}

export default Main