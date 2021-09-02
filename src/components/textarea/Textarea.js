import React from 'react';
import PropTypes from 'prop-types';

import MessageWrapper from '../messageWrapper';

import { Textarea as StyledTextarea, Input, Label, LabelUnder, BorderUnder } from './styles';

const Textarea = (props) => {
  const classNames = () => {
    const classes = 'ic-textarea';

    return classes;
  };

  const {
    value,
    onChange,
    type,
    outlined,
    underlined,
    filled,
    label,
    block,
    placeholder,
    disabled,
    error,
    helpText,
    rows,
  } = props;

  return (
    <MessageWrapper errorText={error} helpText={helpText}>
      <StyledTextarea
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
          rows={rows}
        />
        {(outlined || underlined || filled) && <LabelUnder>{label}</LabelUnder>}
        {(underlined || filled) && <BorderUnder />}
      </StyledTextarea>
    </MessageWrapper>
  );
};

Textarea.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  filled: PropTypes.bool,
  helpText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  outlined: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  underlined: PropTypes.bool,
  value: PropTypes.string,
};

Textarea.defaultProps = {
  block: false,
  disabled: false,
  error: false,
  filled: false,
  helpText: null,
  label: '',
  onChange: () => {},
  outlined: false,
  placeholder: '',
  rows: '3',
  type: 'text',
  underlined: false,
  value: '',
};

export default Textarea;
