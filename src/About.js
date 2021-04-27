import React from 'react'
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'

const About = props => {
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
        <div className="container-fluid" style={{padding:"0"}}>
            <Header active="about"/>
            <div className="container-fluid" style={about}>
                <h4 style={center}>This is About</h4>
            </div>
            <Footer/>
        </div>
    )
}

About.propTypes = {

}

export default About
