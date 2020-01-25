import React from 'react';
import PropTypes from 'prop-types';

const Blank = props => {
  const { children } = props;

  return (
    <div>
        {children}
    </div>
  );
};

Blank.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Blank;