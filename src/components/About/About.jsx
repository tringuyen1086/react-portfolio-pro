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
                    <h1>Welcome to My Website</h1>
                    <h3>Tri Nguyen</h3>
                    <h4>Web Developer <span ref={textRef}></span></h4>
                    <br/>
                    <p> Passionate about web development, I love to create web applications that are simple yet beautiful to make people's life easier. 
                        I am always looking for optimized solutions to enhance user experience.

                        <br /> <br />
                        Experienced Financial Advisor and Financial Planning Specialist with a demonstrated history of working in the financial services industry since 2014. 
                        Skilled in Portfolio Management, Microsoft Excel, Customer Service, Microsoft Word, and Financial Planning. 
                        Strong finance professional with a Bachelor of Science (BS) focused in Corporate Finance from San Jose State University and MBA focused in International Business from Assumption University.

                        <br /> <br />
                        Being a passionate problem solver, I decided to switch my career from Finance to the Tech world. 
                        Not only am I motivated by the challenges of new projects, but also I love spending my time on resolving problems on computers. 
                        Eventually, I am making my dream come true by pursuing my career path in web development.

                        <br /> <br />
                        Graduated the full stack web developer boot camp at UC Berkeley Extension, I am proactively looking for opening positions where I can find opportunities to expand my knowledge and work on challenging projects.

                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;