import React, { Component } from 'react'
import './Home.css'

const Home = () => (
    <div>
        <video id="bgvid" playsInline autoPlay lay muted loop>
            <source src="https://my.mixtape.moe/cfzpyp.webm" type="video/webm"></source>

        </video>
    </div>
);

export default Home;


// const Home = () => (
//     <div>
//         <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay lay muted loop>
//             <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"></source>
//             <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"></source>
//
//         </video>
//     </div>
// );
//
// export default Home;