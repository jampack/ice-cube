import React from 'react';
import PropTypes from 'prop-types';

import { StyledRadio, StyledLabel, StyledInput, StyledCheckmark } from './styles';

const Radio = (props) => {
  const classNames = () => {
    const classes = 'ic-radio';

    return classes;
  };

  const handleChange = () => {
    const { onChange, value } = props;

    onChange(!value);
  };

  const { children, value, label } = props;

  return (
    <StyledRadio className={classNames()} onClick={handleChange}>
      <StyledLabel>
        {label}
        {children}
      </StyledLabel>
      <StyledInput type='checkbox' checked={value} onChange={handleChange} />
      <StyledCheckmark />
    </StyledRadio>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Radio.defaultProps = {
  children: '',
  label: '',
  onChange: () => {},
  value: true,
};

export default Radio;
