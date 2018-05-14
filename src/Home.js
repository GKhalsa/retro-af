import React, { Component } from 'react'
import './Home.css'
import EntranceForm from "./EntranceForm";

const Home = () => (
    <div>

        <video playsInline autoPlay lay muted loop>
            <source src="https://my.mixtape.moe/cfzpyp.webm" type="video/webm"></source>

        </video>
        <EntranceForm/>
    </div>
);

export default Home;
