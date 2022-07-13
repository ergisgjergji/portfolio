import React from 'react';
import './index.css';

import { backend, frontend, databases, tools } from '../../../data/skills';

import AnimatedPage from '../../AnimatedPage/AnimatedPage';
import ResumeCard from '../../ResumeCard/ResumeCard';
import ProgressBar from '../../ProgressBar/ProgressBar';
import Highlight from '../../Highlight/Highlight';

const Resume = () => {
  return (
    <AnimatedPage>
      <div className='resume'>

        {/* Row 1 */}
        <div className='row row-cols-1 row-cols-md-2 m-0 p-0 border'>
          
          {/* Education */}
          <div className='col bg-light'>

            <div className='fs-6 fw-bold mt-3'>
              Education & Training
            </div>

            <div className='d-flex flex-column align-items-start gap-2 justify-content-center'>
              <ResumeCard
                key={1}
                timeline="2018-2019"
                title=".NET Developer Academy"
                location="iKubINFO"
              />
              <ResumeCard
                key={2}
                title="Electronics Engineering"
                timeline="2015-2018"
                location="Polytechnic University of Tirana (UPT)"
              />
            </div>

          </div>

          {/* Experience */}
          <div className='col bg-light mt-3 mt-md-0'>

            <div className='fs-6 fw-bold mt-3'>
              Work experience
            </div>

            <div className='d-flex flex-column align-items-start justify-content-center'>
              <ResumeCard
                key={1}
                timeline="2020-2022"
                title="Full-Stack Developer (.NET / ReactJS)"
                location="ItalWeb Consulting"
              />
              <ResumeCard
                key={2}
                timeline="2019-2020"
                title="Software Developer"
                location="Kreatx"
              />
            </div>

          </div>
        </div>

        {/* Row 2 */}
        <div className='row row-cols-1 row-cols-md-2 m-0 p-0 mb-4'>

          {/* Backend */}
          <div className='col'>

            <div className='fs-6 fw-bold mt-3'>
              Backend
            </div>

            <div className='d-flex flex-column align-items-start gap-2 justify-content-center'>
            {
              backend.map((skill, index) => (
                // <ProgressBar
                //   key={index}
                //   name={skill.name}
                //   level={skill.level}
                // />
                <div>
                  <Highlight key={index} text={skill.name} />
                </div>
              ))
            }
            </div>

          </div>

          {/* Databases */}
          <div className='col'>

            <div className='fs-6 fw-bold mt-3'>
              Databases
            </div>

            <div className='d-flex flex-column align-items-start gap-2 justify-content-center'>
            {
              databases.map((skill, index) => (
                // <ProgressBar
                //   key={index}
                //   name={skill.name}
                //   level={skill.level}
                // />
                <div>
                  <Highlight key={index} text={skill.name} />
                </div>
              ))
            }
            </div>

          </div>

          {/* Frontend */}
          <div className='col'>

            <div className='fs-6 fw-bold mt-3'>
              Frontend
            </div>

            <div className='d-flex flex-column align-items-start gap-2 justify-content-center'>
            {
              frontend.map((skill, index) => (
                // <ProgressBar
                //   key={index}
                //   name={skill.name}
                //   level={skill.level}
                // />
                <div>
                  <Highlight key={index} text={skill.name} />
                </div>
              ))
            }
            </div>

          </div>

          {/* Tools */}
          <div className='col'>

            <div className='fs-6 fw-bold mt-3'>
              Tools
            </div>

            <div className='d-flex flex-column align-items-start gap-2 justify-content-center'>
            {
              tools.map((skill, index) => (
                // <ProgressBar
                //   key={index}
                //   name={skill.name}
                //   level={skill.level}
                // />
                <div>
                  <Highlight key={index} text={skill.name} />
                </div>
              ))
            }
            </div>

          </div>

        </div>

      </div>
    </AnimatedPage>
  )
};

export default Resume;
