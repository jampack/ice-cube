import React from 'react';
import PropTypes from 'prop-types';

import ErrorWrapper from '../errorWrapper';

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

  const { children, value, label, disabled, error, inGroup } = props;

  return (
    <ErrorWrapper message={error} inGroup={inGroup}>
      <StyledCheckbox className={classNames()} onClick={handleChange} disabled={disabled}>
        <Label disabled={disabled}>
          {label}
          {children}
        </Label>
        <Input type='checkbox' checked={value} onChange={handleChange} />
        <Checkmark disabled={disabled} />
      </StyledCheckbox>
    </ErrorWrapper>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  /* For internal user only. Hides the margin of Error message when checkbox is displayed in group to maintain styles */
  inGroup: PropTypes.bool,

  label: PropTypes.string,

  onChange: PropTypes.func,

  value: PropTypes.bool,
};

Checkbox.defaultProps = {
  children: '',
  disabled: false,
  error: false,
  inGroup: false,
  label: '',
  onChange: () => {},
  value: false,
};

export default Checkbox;
