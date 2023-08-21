import React from 'react';
import "../styles/About.scss"
import selfie from '../images/selfie.png'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={selfie} alt="mohammed bhimjee" />
            </div>

            <div className="about-content">
                <h2 className="heading">About<span>Me</span></h2>
                <h3>Web Developer</h3>
                <p>With a foundation of a variety of experiences, the possibilities of what we can achieve is endless...
                </p>
            </div>
        </section>
    );
}
