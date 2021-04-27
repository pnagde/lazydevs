import React from 'react'
import PropTypes from 'prop-types'
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'
const Service = props => {
    let about={
        height:"100vh",
        minHeigth:"100vh",
        padding:"0",
        color:"white"
    }
    let center={
        textAlign:"center"
    }
    return (
        <div>
            <div className="container-fluid" style={{padding:"0"}}>
            <Header active="service"/>
            <div className="container-fluid" style={about}>
                <h4 style={center}>This is Service</h4>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

Service.propTypes = {

}

export default Service

