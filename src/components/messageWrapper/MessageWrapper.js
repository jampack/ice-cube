import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ErrorText, HelpText } from './styles';

const MessageWrapper = ({ children, errorText, helpText, inGroup }) => {
  return (
    <Wrapper>
      {children}
      {errorText && <ErrorText inGroup={inGroup}>{errorText || ''}</ErrorText>}
      {!errorText && <HelpText inGroup={inGroup}>{helpText || ''}</HelpText>}
    </Wrapper>
  );
};

MessageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  errorText: PropTypes.string,
  helpText: PropTypes.string,
  inGroup: PropTypes.bool,
};

MessageWrapper.defaultProps = {
  errorText: null,
  helpText: null,
  inGroup: false,
};

export default MessageWrapper;
