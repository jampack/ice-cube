import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox, StyledLabel, StyledInput, StyledCheckmark } from './styles';

function Checkbox(props) {
  const handleChange = () => {
    const { onChange, value } = props;

    onChange(!value);
  };

  const { children, value, label } = props;

  return (
    <StyledCheckbox className='ic-checkbox' onClick={handleChange}>
      <StyledLabel>
        {label}
        {children}
      </StyledLabel>
      <StyledInput type='checkbox' checked={value} onChange={handleChange} />
      <StyledCheckmark />
    </StyledCheckbox>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

Checkbox.defaultProps = {
  children: '',
  label: '',
  onChange: () => {},
  value: false,
};

export default Checkbox;
