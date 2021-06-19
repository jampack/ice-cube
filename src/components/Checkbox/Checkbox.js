import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox, StyledLabel, StyledInput, StyledCheckmark } from './styles';

function Checkbox(props) {
  const { children, value, onChange } = props;

  return (
    <StyledCheckbox onClick={() => onChange(!value)}>
      <StyledLabel>{children}</StyledLabel>
      <StyledInput type='checkbox' checked={value} />
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
