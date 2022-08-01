import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#e3f2fd", margin: "15px 30px 0 30px", borderRadius: "30px 0 30px 0" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{marginLeft:"20px", padding:"10px 0px"}}><img src={logo} alt="logo" ></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "10px" }}>

                            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                            <li className="nav-item a-hover">
                                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login/Register</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Expert</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar