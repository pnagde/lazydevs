import React from 'react'
import Header from "./MyComponents/Header";
import Main from "./MyComponents/Main";
import Footer from "./MyComponents/Footer";

const Home = props => {
    return (
        <div className="container-fluid" style={{padding:"0"}}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

Home.propTypes = {

}

export default Home
