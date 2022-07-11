import React from 'react';
import './index.css';

import { skills } from '../../../utils/skills';

import Highlight from '../../Highlight/Highlight';
import SkillCard from '../../SkillCard/SkillCard';

const About = () => {
  return (
    <div className='about'>
      
      <div className='about__intro small m-3'>
        Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in
        &nbsp;<Highlight text="Relational Databases" />
        &nbsp;<Highlight text="C#" />
        &nbsp;<Highlight text=".Net Core" />
        &nbsp;<Highlight text="React JS" />.
        &nbsp;Knowledgeable in microservices architecture, cloud computing: mainly <Highlight text="Azure" />. 
      </div>

      <div className='container bg-light border mt-3'>
        <div className='fs-5 fw-bold my-text-primary my-3'>
          What I offer
        </div>

        <div className='row row-cols-1 row-cols-md-2 mb-4'>
        {
          skills.map((skill, index) => (
            <div key={index} className='col mb-3'>
              <SkillCard
                className="hoverEffect"
                icon={skill.icon} 
                title={skill.title} 
                description={skill.description}
              />
            </div>
          ))
        }
        </div>

      </div>

    </div>
  )
};

export default About;
