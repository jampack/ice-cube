import React from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper as StyledErrorWrapper, ErrorMessage } from './styles';

const ErrorWrapper = ({ children, message }) => {
  return (
    <StyledErrorWrapper>
      {children}
      <ErrorMessage>{message || ''}</ErrorMessage>
    </StyledErrorWrapper>
  );
};

ErrorWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string,
};

ErrorWrapper.defaultProps = {
  message: '',
};

export default ErrorWrapper;
