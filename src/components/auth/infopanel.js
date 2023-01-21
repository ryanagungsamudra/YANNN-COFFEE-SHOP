import React from 'react'
import './infopanel.css'

function InfoPanel() {
    return (
        <div className="container d-none d-lg-block">
            <div className="row info-panel-auth">
                <div className="col">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h4 className="typo-primary s-md-auth" >Get your member <br />card now!</h4>
                                    <p className="typo-secondary s-sm-auth" >Let's join with our member and enjoy the deals.</p>
                                </div>
                                <div className="col">
                                    <a href="/"><button className="btn btn-warning auth rounded-4  px-5 py-3 s-lg-auth" style={{ fontSize: '16px' }}>Create Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanel