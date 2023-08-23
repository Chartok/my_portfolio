import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Projects.scss';

export default function Project({ title, description, image, link }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">View Project</a>
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
