import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox, StyledLabel, StyledInput, StyledCheckmark } from './styles';

const Checkbox = (props) => {
  const classNames = () => {
    const classes = 'ic-checkbox';

    return classes;
  };

  const handleChange = () => {
    const { onChange, value, disabled } = props;

    if (disabled) return;

    onChange(!value);
  };

  const { children, value, label, disabled } = props;

  return (
    <StyledCheckbox className={classNames()} onClick={handleChange} disabled={disabled}>
      <StyledLabel disabled={disabled}>
        {label}
        {children}
      </StyledLabel>
      <StyledInput type='checkbox' checked={value} onChange={handleChange} />
      <StyledCheckmark disabled={disabled} />
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Checkbox.defaultProps = {
  children: '',
  disabled: false,
  label: '',
  onChange: () => {},
  value: false,
};

export default Checkbox;
