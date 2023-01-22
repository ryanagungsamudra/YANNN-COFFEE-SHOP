import { Link } from "react-router-dom";
import DarkMode from "../utility/DarkMode";

const Unauthenticated = () => {
    return (
        <>
            {/* Desktop */}
            <div className="auth-nav-items-desktop">
                <div className="me-4 d-none d-sm-block d-md-block d-lg-block">
                    <Link to="/login"><p className="nav-login">Login</p></Link>
                </div>
                <Link to="/signup" className="d-none d-sm-block d-md-block d-lg-block" style={{ color: '#6A4029', marginTop: '0.3rem' }}><div className="btn btn-warning sign-up"><p style={{ marginTop: '4px' }}>Sign Up</p></div></Link>
                <div style={{ paddingLeft: '0.7rem', marginTop: '0.25rem' }}>
                    <DarkMode />
                </div>
            </div>
        </>
    );
};

export default Unauthenticated