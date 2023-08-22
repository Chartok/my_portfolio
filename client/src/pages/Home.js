import React from "react";
import "../styles/Home.scss"
import selfie from '../images/selfie.png'

export default function Home() {
    return (
        <>
            <section id="home" className="home">
                <div className="container">
                    <div className="home-content">
                        <h3>Hello, my name is</h3>
                        <h1><span>Asad Bhimjee</span></h1>
                        <p>As a <span><strong>versatile</strong></span> and <span><strong>dedicated</strong></span> developer, I blend expertise in common tech-stacks with a keen eye for design to build apps and websites that resonate.</p>
                    </div>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/mohammed-bhimjee/"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://www.github.com/Chartok"><i className="bx bxl-github"></i></a>
                    <a href="https://dev.to/yaysa"><i className="bx bxl-dev-to"></i></a>
                </div>
                <div className="resume-link">
                <a href="https://drive.google.com/file/d/1vEiPs6Q05aiTqZq4xjDWfwXKViDHBu4U/view?usp=drivesdk"
                    className="btn">My Resume</a>
                    </div>
                <div className="home-img">
                    <img src={selfie} alt="mohammed bhimjee" />
                </div>
            </section >
        </>
    );
}