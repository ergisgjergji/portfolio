import React from 'react';

import './index.css';

import avatar from '../../assets/icons/avatar.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faStackOverflow, faSkype } from '@fortawesome/free-brands-svg-icons';

import configuration from '../../configuration.json';
import resume from '../../assets/resume.pdf';

const Sidebar = () => {

    const handleSendMail = () => {
        window.open('mailto:ergisgjergji@gmail.com')
    }

    return (
        <div className='app__sidebar shadow h-100 overflow-auto rounded p-2 text-center'>
            
            <img src={avatar} alt='avatar' className='sidebar__avatar' />
            
            <div className='sidebar__name fs-4 my-2'>
                <span className='my-text-primary'>Ergis</span> Gjergji
            </div>

            <div className='sidebar__title fs-5 my-4 bg-light rounded-pill border'>
                Software Developer
            </div>

            <a 
                href={resume} 
                target='_blank'
                download='CV-Ergis Gjergji.pdf' 
                className='btn btn-md my-bg-gradient hoverEffect' title='Click to download CV'
            >
                <FontAwesomeIcon icon={faFileArrowDown} size='lg' /> Download CV
            </a>

            <div className='sidebar__socials mt-3 d-flex flex-row flex-wrap align-items-center justify-content-center'>
                <a target='_blank' href={configuration.LinkedIn} className='mx-2' title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' className='my-text-primary hoverEffect' />
                </a>
                <a target='_blank' href={configuration.Github} className='mx-2' title='Github'>
                    <FontAwesomeIcon icon={faGithub} size='2x' className='my-text-primary hoverEffect' />
                </a>
                <a target='_blank' href={configuration.StackOverflow} className='mx-2' title='StackOverflow'>
                    <FontAwesomeIcon icon={faStackOverflow} size='2x' className='my-text-primary hoverEffect' />
                </a>
            </div>

            <div className='sidebar__contact mt-4 bg-light border'>
                <div className='sidebar__item sidebar__location'>
                    <FontAwesomeIcon icon={faLocationDot} className='sidebar__icon' /> {configuration.Location}
                </div>
                <div className='sidebar__item'>
                    <FontAwesomeIcon icon={faEnvelope} className='sidebar__icon' /> {configuration.Email}
                </div>
                <div className='sidebar__item'>
                    <FontAwesomeIcon icon={faPhone} className='sidebar__icon' /> {configuration.PhoneNumber}
                </div>
                <div className='sidebar__item'>
                    <FontAwesomeIcon icon={faSkype} className='sidebar__icon' /> {configuration.SkypeID}
                </div>
            </div>

            <div className='sidebar__item'>
                <button 
                    className='btn btn-lg btn__email shadow border-0 text-white hoverEffect'
                    onClick={handleSendMail}
                >
                    <FontAwesomeIcon icon={faEnvelope} className='sidebar__icon' /> Email me
                </button>
            </div>

        </div>
    )
}

export default Sidebar;
