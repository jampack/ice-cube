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
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  children: '',
  value: false,
  onChange: () => {},
  label: '',
};

export default Checkbox;
