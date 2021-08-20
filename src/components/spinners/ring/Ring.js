import React from 'react';
import PropTypes from 'prop-types';

import StyledRing from './styles';

const Ring = ({ size }) => {
  const classNames = () => {
    const classes = 'ic-ring-spinner';

    return classes;
  };

  return (
    <StyledRing className={classNames()} size={size}>
      <div />
      <div />
      <div />
      <div />
    </StyledRing>
  );
};

Ring.propTypes = {
  size: PropTypes.oneOf(['xs', 'extraSmall', 'sm', 'small', 'lg', 'large', 'xl', 'extraLarge']),
};

Ring.defaultProps = {
  size: null,
};

export default Ring;
