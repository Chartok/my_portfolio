import React from "react";
import { useQuery } from '@apollo/client';
import Project from '../components/Project'
import "../styles/Projects.scss";
import { GET_PROJECTS } from "../utils/queries";

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if(loading) return <p>Loading portfolio...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return (
        <section id="projects" className="projects">
            <h1 className='heading'>My <span>Projects</span></h1>
            <div className="row ">
                {data.projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}
