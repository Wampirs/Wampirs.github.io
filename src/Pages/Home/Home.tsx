import React from 'react';
import './Home.css';
import loopImg from './Resources/Loop.png';

function Home() {
    return (
        <div className="HomeDiv">
            <div className="FirstScreen">
                <div className="IntroText">
                    <h2>Hello</h2>
                    <h1>I`m Vladyslav <br />
                        Moiseienko</h1>
                    <p>I've done a lot of different shit<br />
                        and I'm still doing it</p>
                </div>
                <div>
                    <img className="LoopImg" src={loopImg} />
                </div>
            </div>
       </div>
  );
}

export default Home;