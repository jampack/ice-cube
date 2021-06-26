import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox, StyledLabel, StyledInput, StyledCheckmark } from './styles';

function Checkbox(props) {
  const handleChange = () => {
    const { onChange, value } = props;

    onChange(!value);
  };

  const { children, value } = props;

  return (
    <StyledCheckbox className='ic-checkbox' onClick={handleChange}>
      <StyledLabel>{children}</StyledLabel>
      <StyledInput type='checkbox' checked={value} onChange={handleChange} />
      <StyledCheckmark />
    </StyledCheckbox>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  children: '',
  value: false,
  onChange: () => {},
};

export default Checkbox;
