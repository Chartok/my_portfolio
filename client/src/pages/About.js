import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/About.scss"
import selfie from '../images/selfie.png'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={selfie} alt="asad bhimjee" />
            </div>

            <div className="about-content">
                <h1 className="heading">About <span>Me</span></h1>
                <p>My ability to observe critically and think adaptively is not just a skill, it's a mission. Driven by a relentless pursuit of excellence and motivated by conscientious attention to detail, I approach each project as an opportunity to learn and grow, embracing challenges that not only bring out the best in technology and creativity but also fuel my lifelong pursuit of innovation and excellence. Intrigued? Let's explore what we can achieve together!
                </p>
                <h3>Explore my <Link href='/projects'><span>portfolio</span></Link></h3>
            </div>
        </section>
    );
}
