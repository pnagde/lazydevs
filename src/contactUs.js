import React from 'react'
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'

const contactUs = () => {
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
            <Header active="contact"/>
            <div className="container-fluid" style={about}>
                <h4 style={center}>This is Contact us</h4>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default contactUs
