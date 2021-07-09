import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {

    //refs
    const textRef = useRef(null);

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/myself.png" alt="" />
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi There, I'm</h2>
                   <h1>Nathan MacLaurin</h1>
                   <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div> 
        </div>
    );
};
