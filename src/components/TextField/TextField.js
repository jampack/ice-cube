import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextField, StyledInput, StyledLabel, StyledLabelUnder, StyledBorderUnder } from './styles';

function TextField(props) {
  const makeClasses = () => {
    const str = 'ic-text-field';

    return str;
  };

  const { value, onChange, type, outlined, underlined, filled, label, block, placeholder } = props;

  return (
    <StyledTextField
      className={makeClasses()}
      outlined={outlined}
      underlined={underlined}
      filled={filled}
      block={block}>
      {!outlined && !underlined && !filled && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        className={`${value.length ? 'valid' : ''}`}
        type={type}
        value={value}
        onChange={(r) => onChange(r.target.value)}
        placeholder={placeholder}
      />
      {(outlined || underlined || filled) && <StyledLabelUnder>{label}</StyledLabelUnder>}
      {(underlined || filled) && <StyledBorderUnder />}
    </StyledTextField>
  );
}

TextField.propTypes = {
  block: PropTypes.bool,
  filled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  outlined: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  underlined: PropTypes.bool,
  value: PropTypes.string,
};

TextField.defaultProps = {
  block: false,
  filled: false,
  label: '',
  onChange: () => {},
  outlined: false,
  placeholder: '',
  type: 'text',
  underlined: false,
  value: '',
};

export default TextField;
