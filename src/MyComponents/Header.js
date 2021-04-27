import React from 'react'
import logo from '../assest/NAVY_WHITE_LABEL.png';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
    let about = "nav-link";
    let service = "nav-link";
    let team = "nav-link";
    let contact = "nav-link";
    let defaultNonActive = "nav-link";
        if(props.active=="about"){
            about +=" active";
        }
        else
        if(props.active=="service"){
            service +=" active";
        }
        else
        if(props.active=="team"){
            team +=" active";
        }
        else
        if(props.active=="contact"){
            contact +=" active";
        }
        else{
            defaultNonActive +=" active";
        }
    return (
        <header className="container-fluid " >
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="150px" height="50px" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navcolor" >
                            <Link to="/" className={defaultNonActive} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={about} to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={service} to="/service" >service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={contact} to="/contactUs">contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={team} to="/team">Team</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {

}

export default Header
