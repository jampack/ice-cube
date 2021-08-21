import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useOnClickOutside } from '../../lib/Helpers';
import {
  Select as StyledSelect,
  SelectContainer,
  SelectedItem,
  Placeholder,
  Label,
  Trigger,
  LabelUnder,
  Options,
  Option,
  Arrow,
  BorderUnder,
} from './styles';

const Select = (props) => {
  const ref = useRef();
  const [isOpen, setSelect] = useState(false);

  const classNames = () => {
    const classes = 'ic-select';

    return classes;
  };

  const handleOptionClick = (e, val) => {
    e.stopPropagation();
    const { onChange } = props;

    setSelect(false);

    onChange(val);
  };

  const handleSelectClick = () => {
    const { disabled } = props;

    if (disabled) return;

    setSelect(true);
  };

  const renderSelectedText = () => {
    const { data, value, dataText, dataValue } = props;

    const item = data.find((f) => f[dataValue] === value);

    if (item) {
      return item[dataText];
    }

    return '';
  };

  useOnClickOutside(
    ref,
    useCallback(() => setSelect(false), [isOpen])
  );

  const canShowPlaceholder = () => {
    const { outlined, underlined, filled, value } = props;
    if (outlined || underlined || filled) {
      return isOpen && !value;
    }

    return !value && true;
  };

  const { data, value, dataText, dataValue, outlined, underlined, block, filled, placeholder, label, disabled } = props;

  return (
    <StyledSelect className={classNames()} block={block}>
      {!outlined && !underlined && !filled && <Label>{label}</Label>}
      <SelectContainer
        ref={ref}
        className={`${isOpen ? 'open' : ''} ${value ? 'valid' : ''}`}
        onClick={handleSelectClick}
        outlined={outlined}
        underlined={underlined}
        filled={filled}
        disabled={disabled}>
        <Trigger filled={filled}>
          {canShowPlaceholder() && <Placeholder>{renderSelectedText().length > 0 ? '' : placeholder}</Placeholder>}
          <SelectedItem disabled={disabled}>{renderSelectedText()}</SelectedItem>
          <Arrow className={`${isOpen ? 'open' : ''}`} disabled={disabled} />
        </Trigger>
        <Options block={block}>
          {data &&
            data.map((d) => (
              <Option
                className={value === d[dataValue] && 'selected'}
                key={d[dataValue]}
                onClick={(e) => handleOptionClick(e, d[dataValue])}>
                {d[dataText]}
              </Option>
            ))}
        </Options>
        {(outlined || underlined || filled) && <LabelUnder>{label}</LabelUnder>}
        {(underlined || filled) && <BorderUnder />}
      </SelectContainer>
    </StyledSelect>
  );
};

Select.propTypes = {
  block: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  disabled: PropTypes.bool,
  filled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  outlined: PropTypes.bool,
  placeholder: PropTypes.string,
  underlined: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  block: false,
  data: [],
  dataText: 'label',
  dataValue: 'value',
  disabled: false,
  filled: false,
  label: '',
  onChange: () => {},
  outlined: false,
  placeholder: '',
  underlined: false,
  value: null,
};

export default Select;
