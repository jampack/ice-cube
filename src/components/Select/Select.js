import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useOnClickOutside } from '../../lib/Helpers';
import {
  StyledSelect,
  StyledSelectContainer,
  StyledSelectedItem,
  StyledPlaceholder,
  StyledLabel,
  StyledSelectTrigger,
  StyledLabelUnder,
  StyledSelectOptions,
  StyledSelectOption,
  StyledSelectArrow,
  StyledBorderUnder,
} from './styles';

function Select(props) {
  const ref = useRef();
  const [isOpen, setSelect] = useState(false);

  const handleOptionClick = (e, val) => {
    e.stopPropagation();
    const { onChange } = props;

    setSelect(false);

    onChange(val);
  };

  const renderSelectedText = () => {
    const { data, value, dataText, dataValue } = props;

    const item = data.find((f) => f[dataValue] === value);

    if (item) {
      return item[dataText];
    }

    return '';
  };

  const { data, value, dataText, dataValue, outlined, underlined, block, filled, placeholder, label } = props;

  useOnClickOutside(
    ref,
    useCallback(() => setSelect(false), [isOpen])
  );

  return (
    <StyledSelect className='ic-select'>
      {!outlined && !underlined && !filled && <StyledLabel>{label}</StyledLabel>}
      <StyledSelectContainer
        ref={ref}
        className={`${isOpen ? 'open' : ''} ${value ? 'valid' : ''}`}
        onClick={() => setSelect(true)}
        outlined={outlined}
        underlined={underlined}
        filled={filled}
        block={block}>
        <StyledSelectTrigger filled={filled}>
          {(outlined || underlined || filled) && isOpen && (
            <StyledPlaceholder>{renderSelectedText().length > 0 ? '' : placeholder}</StyledPlaceholder>
          )}
          <StyledSelectedItem>{renderSelectedText()}</StyledSelectedItem>
          <StyledSelectArrow className={`${isOpen ? 'open' : ''}`} />
        </StyledSelectTrigger>
        <StyledSelectOptions>
          {data &&
            data.map((d) => (
              <StyledSelectOption
                className={value === d[dataValue] && 'selected'}
                onClick={(e) => handleOptionClick(e, d[dataValue])}>
                {d[dataText]}
              </StyledSelectOption>
            ))}
        </StyledSelectOptions>
        {(outlined || underlined || filled) && <StyledLabelUnder>{label}</StyledLabelUnder>}
        {(underlined || filled) && <StyledBorderUnder />}
      </StyledSelectContainer>
    </StyledSelect>
  );
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  outlined: PropTypes.bool,
  underlined: PropTypes.bool,
  block: PropTypes.bool,
  filled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  value: null,
  onChange: () => {},
  data: [],
  dataText: 'label',
  dataValue: 'value',
  outlined: false,
  underlined: false,
  block: false,
  label: '',
  filled: false,
  placeholder: '',
};

export default Select;
