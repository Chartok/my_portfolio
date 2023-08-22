import React from "react";
import Project from '../components/Project'
import "../styles/Projects.scss";
import goodEats from '../images/goodEats.png';
import jott from '../images/jott-preview.jpg';
import planner from '../images/planet-sched.png';
import surveyImg from '../images/city_skyilne.jpg';
import gamerLi from '../images/prjct2.png';
import weatherly from '../images/weather-dashboard.jpg';

export default function Projects() {
    const projectsData = [
        {
            imgSrc: gamerLi,
            title: "GamerLi",
            description: "A simple library dashboard to manage games. This was a collaboration project I worked with a group to produce an MVP. In this project our group combined what we learned (Node.js/Express, MySQL, Sessions, Handlebars, Bootstrap, and JavaScript)",
            link: "https://gamerli.herokuapp.com/"
        },
        {
            imgSrc: surveyImg,
            title: "Survey",
            description: "One of my earliest projects prior to joining a coding bootcamp. Highlighting what I learned as a beginner about HTML and CSS.",
            link: "https://chartok.github.io/code-survey/"
        },
        {
            imgSrc: jott,
            title: "JottItNow",
            description: "A note taking app deployed on Heroku. This is the backend assignment for bootcamp I am proud of completing. Here my task was to simply write up the backend that enables the application to appropriately write, save, update, and delete notes for users. However, to achieve this I had to refactor most of the code base, strictly to maintain readability, efficiency, and maintainability.",
            link: "https://jottitnow.herokuapp.com/"
        },
        {
            title: "Social Network API",
            description: "An API for a social network application utilizing a NoSQL database (MongooDB) to handle large amounts of unstructured data",
            link: "https://github.com/Chartok/anxious-starfish"
        },
        {
            imgSrc: planner,
            title: "Plan-et",
            description: "a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            link: "https://chartok.github.io/plan-et/"
        },
        {
            imgSrc: weatherly,
            title: "Weatherly",
            description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. This app will use the OpenWeather API to retrieve weather data for cities. This app will also use localStorage to store any persistent data.",
            link: "https://chartok.github.io/weatherly/"
        },
        {
            imgSrc: goodEats,
            title: "Good Eats",
            description: "A simple recipe search engine that allows users to search for recipes by ingredients. This app was built with MERN architecture using GraphQL and Apollo for data handling and caching in conjunction with JWT for authentication.",
            link: "https://good-eats-b2abe2613d0c.herokuapp.com/"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container-fluid">
                <h2 className="heading">My Projects</h2>
                <div className="row">
                    {projectsData.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}