import React, { Component } from 'react'
import BackgroundImage from './assets/simple-geometric-design.png'
import './Home.css'

const homeStyle = {
    // width: "100vw",
    // height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundSize: "cover" ,
    background: `url(${BackgroundImage})no-repeat center center fixed`,
    height: "100%",
    width: "100%",
    // overflow: "hidden",
    filter: "blur(2px) brightness(135%)",
    zIndex: "-1"
};


const fake = {
    position: "relative",

}
const Home = () => (
    <div className="home__container">
        <div style={homeStyle}>
        </div>
        {/*<div className="home__enter">*/}
            {/*<span>retro.in/</span> <span><input type="text" autofocus/></span>*/}
        {/*</div>*/}
    </div>
);

export default Home;