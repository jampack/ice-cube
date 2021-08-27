import React from 'react';
import PropTypes from 'prop-types';

import MessageWrapper from '../messageWrapper';

import { TextField as StyledTextField, Input, Label, LabelUnder, BorderUnder } from './styles';

const TextField = (props) => {
  const classNames = () => {
    const classes = 'ic-text-field';

    return classes;
  };

  const { value, onChange, type, outlined, underlined, filled, label, block, placeholder, disabled, error, helpText } =
    props;

  return (
    <MessageWrapper errorText={error} helpText={helpText}>
      <StyledTextField
        className={classNames()}
        outlined={outlined}
        underlined={underlined}
        filled={filled}
        block={block}
        disabled={disabled}>
        {!outlined && !underlined && !filled && <Label>{label}</Label>}
        <Input
          className={`${value.length ? 'valid' : ''}`}
          type={type}
          value={value}
          onChange={(r) => onChange(r.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
        {(outlined || underlined || filled) && <LabelUnder>{label}</LabelUnder>}
        {(underlined || filled) && <BorderUnder />}
      </StyledTextField>
    </MessageWrapper>
  );
};

TextField.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  filled: PropTypes.bool,
  helpText: PropTypes.string,
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
  disabled: false,
  error: false,
  filled: false,
  helpText: null,
  label: '',
  onChange: () => {},
  outlined: false,
  placeholder: '',
  type: 'text',
  underlined: false,
  value: '',
};

export default TextField;
