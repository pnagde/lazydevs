import React from 'react'
import './Footer.css'
import logo from '../assest/NAVY_WHITE_LABEL.png'

const Footer = props => {
    return (
        <footer className="page-footer font-small blue pt-4 ">
            <hr/>
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <div className="col-md-6 mt-md-0 mt-3">
                        <img src={logo} alt="" id="logo"/>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                     <a href="https://lazydevs.tech/"> lazyDevs.tech</a>
            </div>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer
