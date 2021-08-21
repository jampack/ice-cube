import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as StyledCheckbox, Label, Input, Checkmark } from './styles';

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
      <Label disabled={disabled}>
        {label}
        {children}
      </Label>
      <Input type='checkbox' checked={value} onChange={handleChange} />
      <Checkmark disabled={disabled} />
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
