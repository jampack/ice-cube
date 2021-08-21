import React from 'react';
import PropTypes from 'prop-types';

import StyledCircle from './styles';

const Circle = ({ size }) => {
  const classNames = () => {
    const classes = 'ic-circle-spinner';

    return classes;
  };

  return (
    <StyledCircle className={classNames()} size={size}>
      <div />
    </StyledCircle>
  );
};

Circle.propTypes = {
  size: PropTypes.oneOf(['xs', 'extraSmall', 'sm', 'small', 'lg', 'large', 'xl', 'extraLarge']),
};

Circle.defaultProps = {
  size: null,
};

export default Circle;
