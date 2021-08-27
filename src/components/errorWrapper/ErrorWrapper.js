import React from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper as StyledErrorWrapper, ErrorMessage } from './styles';

const ErrorWrapper = ({ children, message, inGroup }) => {
  return (
    <StyledErrorWrapper>
      {children}
      <ErrorMessage inGroup={inGroup}>{message || ''}</ErrorMessage>
    </StyledErrorWrapper>
  );
};

ErrorWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  inGroup: PropTypes.bool,
  message: PropTypes.string,
};

ErrorWrapper.defaultProps = {
  inGroup: false,
  message: '',
};

export default ErrorWrapper;
