import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Full Stack Developer", "Web Dev", "Passionate Learner"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="https://user-images.githubusercontent.com/71200950/161160806-7bf741f9-fdea-42cb-82a7-4ed9164f9a4b.png" alt="tri pic"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome to My Website, I'm</h2>
                    <h1>Tri Nguyen</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                    <p> I am a web developer based in the bay area (San Jose, California). I
                        love to create web application that is simple yet beautiful to make
                        people life easier. I always looking for optimize solutions to enhance user
                        experience.

                        <br /> <br />
                        Being a passionate problem solver, I decided to switch my career from
                        Finance to the Tech world. Not only am I motivated by the challenges
                        of new projects, but also I love spending my time on resolving
                        problems on computers. Eventually, I am making my dream come true by
                        pursuing my career path in web development.

                        <br /> <br />
                        To be graduating the web developer boot camp at UC Berkeley Extension
                        by mid April 2022, I am proactively looking for an entry-level
                        position where I can find opportunities to expand my knowledge and
                        work on challenging projects.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;