import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ResumeCard = ({ title, timeline, location, description, className }) => {
    return (
        <div className={`resume-card d-flex flex-column align-items-start justify-content-center px-2 py-3 ${className}`}>

            <div className='resume-card__title fs-6 my-text-primary fw-bold'>
                {title}
            </div>

            {
                timeline &&
                <div className='resume-card__timeline fw-bold small'>
                    {timeline}
                </div>
            }

            {
                location &&
                <div className='resume-card__location mt-2'>
                    {location}
                </div>
            }

            {
                description &&
                <div className='resume-card__description'>
                    {description}
                </div>
            }
            
        </div>
    )
};

ResumeCard.propTypes = {
    title: PropTypes.string.isRequired,
    timeline: PropTypes.string,
    location: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

export default ResumeCard;
