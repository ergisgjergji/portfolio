import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({ text, spaced }) => {
  return (
    <span className='my-bg-primary'>
      {
        spaced ?
         <>&nbsp;{text}&nbsp;</>
         :
         <>{text}</>
      }
    </span>
  )
};

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  spaced: PropTypes.bool.isRequired
};

Highlight.defaultProps = {
  text: "-insert text-",
  spaced: true
};

export default Highlight;
