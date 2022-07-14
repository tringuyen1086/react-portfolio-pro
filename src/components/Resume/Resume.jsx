import React from 'react';
import "./resume.scss"


function Resume() {

    return (
        <div className="resume" id="resume">
            <h2>Tri Nguyen Resume</h2>
            <p>Please check out <a href="https://drive.google.com/file/d/1Av95ptVgnmbibcUXxbhn0D39SjTHfVyU/view?usp=sharing" target="_blank" rel="noreferrer">downloadable resume here</a></p>
            <h3>Full Stack Development Experience</h3>
            <p>Graduated from the UC Berkeley Extension Full Stack Development Coding Bootcamp, I have developed proficiency with these technologies:</p>
            <ul>
                <i>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
                </i>
            </ul>
        </div>
    );
}

export default Resume;