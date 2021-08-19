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

  const canShowPlaceholder = () => {
    if (outlined || underlined || filled) {
      return isOpen && !value;
    }

    return !value && true;
  };

  return (
    <StyledSelect className='ic-select' block={block}>
      {!outlined && !underlined && !filled && <StyledLabel>{label}</StyledLabel>}
      <StyledSelectContainer
        ref={ref}
        className={`${isOpen ? 'open' : ''} ${value ? 'valid' : ''}`}
        onClick={() => setSelect(true)}
        outlined={outlined}
        underlined={underlined}
        filled={filled}>
        <StyledSelectTrigger filled={filled}>
          {canShowPlaceholder() && (
            <StyledPlaceholder>{renderSelectedText().length > 0 ? '' : placeholder}</StyledPlaceholder>
          )}
          <StyledSelectedItem>{renderSelectedText()}</StyledSelectedItem>
          <StyledSelectArrow className={`${isOpen ? 'open' : ''}`} />
        </StyledSelectTrigger>
        <StyledSelectOptions block={block}>
          {data &&
            data.map((d) => (
              <StyledSelectOption
                className={value === d[dataValue] && 'selected'}
                key={d[dataValue]}
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
  block: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
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
  filled: false,
  label: '',
  onChange: () => {},
  outlined: false,
  placeholder: '',
  underlined: false,
  value: null,
};

export default Select;
