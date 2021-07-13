import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useOnClickOutside } from '../../lib/Helpers';
import {
  StyledSelect,
  StyledSelectContainer,
  StyledSelectTrigger,
  StyledSelectOptions,
  StyledSelectOption,
  StyledSelectArrow,
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

  const { data, value, dataText, dataValue } = props;

  useOnClickOutside(
    ref,
    useCallback(() => setSelect(false), [isOpen])
  );

  return (
    <StyledSelect>
      <StyledSelectContainer ref={ref} className={isOpen && 'open'} onClick={() => setSelect(true)}>
        <StyledSelectTrigger>
          <span>{renderSelectedText()}</span>
          <StyledSelectArrow />
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
};

Select.defaultProps = {
  value: null,
  onChange: () => {},
  data: [],
  dataText: 'label',
  dataValue: 'value',
};

export default Select;
