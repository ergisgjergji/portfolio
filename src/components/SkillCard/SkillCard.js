import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const SkillCard = ({ icon, title, description, className }) => {
    return (
        <div className={`skill-card d-flex align-items-center justify-content-start bg-white shadow-sm rounded px-2 py-4 ${className}`}>
                
            {icon && <img src={icon} alt="icon" className="skill-card__icon mx-2" />}
            
            <div className='skill-card__body d-flex flex-column align-items-start justify-content-center'>
                <div className='skill-card__title fs-6 my-text-primary fw-bold'>
                    {title}
                </div>              

                <div className='skill-card__content small fw-light'>
                    {description}
                </div>
            </div>

        </div>
    )
};

SkillCard.propTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
}

export default SkillCard;
