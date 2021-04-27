import React from 'react'
import Header from './Header';
import './Main.css';
import rockhand from '../assest/hand_rock.png'



const Main = props => {
    let myDivToFocus = React.createRef()
    function handleOnClick(event) {
        //.current is verification that your element has rendered
        if (myDivToFocus.current) {
            myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    return (
        <div>
            <section className="page-1" id="page-1">
                <div className="container">
                    <div className="head">
                        <h1 className="title display-1">
                            WE CREATE<br /> EVERYTHING<br /> HERE
                    </h1>
                    </div>
                    <div>
                        <h4 className="tags display-5">
                            <ul>
                                <li>WEBSITES</li>
                                <li>ANRDOID APPS</li>
                                <li>LOGO ,GRAPHICS AND TEMPLATES</li>
                                <li>UI/UX</li>
                            </ul>
                        </h4>
                    </div>
                    <div>
                        <button className="btn" id="b1" onClick={handleOnClick}>PRESS <br />FOR<br />MORE</button>
                        <button className="btn1" onClick={handleOnClick}><i className="material-icons">arrow_downward</i></button>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="page-2" id="page2" ref={myDivToFocus}>
                    <div className="raw">
                        <div className="col-xl-12 text-center">
                            <div className="display-1">
                                <h1>About Us</h1>
                            </div>
                        </div>
                        <div className="w-100"></div>
                    </div>
                    <div className="raw">
                        <div className="col-sm-6">
                            <h1>What we Do</h1>
                        </div>
                        <div className="col-sm-6">
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <div className="page-3" id="page3">
                    <div className="raw">
                        <div className="col-xl-12 text-center">
                            <div className="display-1">
                                <h1>Team</h1>
                            </div>
                        </div>
                        <div className="w-100"></div>
                    </div>
                    <div className="raw">
                        <div className="col-sm-6">
                            <h1>What we Do</h1>
                        </div>
                        <div className="col-sm-6">
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
Main.propTypes = {

}

export default Main
