import React from 'react';
import PropTypes from 'prop-types';

import { Radio as StyledRadio, Label, Input, Checkmark } from './styles';

const Radio = (props) => {
  const classNames = () => {
    const classes = 'ic-radio';

    return classes;
  };

  const handleChange = () => {
    const { onChange, value, disabled } = props;

    if (disabled) return;

    onChange(!value);
  };

  const { children, value, label, disabled } = props;

  return (
    <StyledRadio className={classNames()} onClick={handleChange} disabled={disabled}>
      <Label disabled={disabled}>
        {label}
        {children}
      </Label>
      <Input type='checkbox' checked={value} onChange={handleChange} />
      <Checkmark disabled={disabled} />
    </StyledRadio>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Radio.defaultProps = {
  children: '',
  disabled: false,
  label: '',
  onChange: () => {},
  value: true,
};

export default Radio;
