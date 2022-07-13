import React from 'react';
import './index.css';

const ProgressBar = ({ name, level }) => {

  const percentage = (level < 0 || level > 100) ? 100 : level;
  
  return (
    <div className="progress-bar w-100 rounded-pill bg-light border shadow-sm">

      <div 
        className="progress-bar__wrapper text-white text-center ps-3" 
        style={{
        'width': `${percentage}%`
        }}
      >

        <span className="progress-bar__name small fw-">
          {name}
        </span>

      </div>

    </div>
  )
};

export default ProgressBar;
