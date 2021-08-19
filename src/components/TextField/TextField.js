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
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  outlined: PropTypes.bool,
  underlined: PropTypes.bool,
  filled: PropTypes.bool,
  label: PropTypes.string,
  block: PropTypes.bool,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  outlined: false,
  underlined: false,
  filled: false,
  label: '',
  block: false,
  placeholder: '',
};

export default TextField;
