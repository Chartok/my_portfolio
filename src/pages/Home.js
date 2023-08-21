import React from "react";
import "../styles/Home.scss"
import selfie from '../images/selfie.png'

export default function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, my name is</h3>
                    <h1>Mohammed Bhimjee</h1>
                    <h3>And I'm a <span>Web Developer</span></h3>
                    <p>My unique perspective allows me to unlock your full potential.</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/mohammed-bhimjee/"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://www.github.com/Chartok"><i className="bx bxl-github"></i></a>
                        <a href="https://dev.to/yaysa"><i className="bx bxl-dev-to"></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1vEiPs6Q05aiTqZq4xjDWfwXKViDHBu4U/view?usp=drivesdk"
                        className="btn">CV</a>
                </div>
                <div className="home-img">
                    <img src={selfie} alt="mohammed bhimjee" />
                </div>
            </section>
        </>
    );
}