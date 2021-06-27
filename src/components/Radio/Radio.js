import React from 'react';
import PropTypes from 'prop-types';

import { StyledRadio, StyledLabel, StyledInput, StyledCheckmark } from './styles';

function Radio(props) {
  const handleChange = () => {
    const { onChange, value } = props;

    onChange(!value);
  };

  const { children, value, label } = props;
  return (
    <StyledRadio className='ic-radio' onClick={handleChange}>
      <StyledLabel>
        {label}
        {children}
      </StyledLabel>
      <StyledInput type='checkbox' checked={value} onChange={handleChange} />
      <StyledCheckmark />
    </StyledRadio>
  );
}

Radio.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Radio.defaultProps = {
  children: '',
  value: true,
  onChange: () => {},
  label: '',
};

export default Radio;
