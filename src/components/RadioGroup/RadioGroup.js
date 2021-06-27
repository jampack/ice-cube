import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledRadioGroup } from './styles';
import Radio from '../Radio';

function RadioGroup(props) {
  useEffect(() => {
    const { value, onChange, data, dataValue } = props;

    if (!value) onChange(data[0][dataValue]);
  });
  const handleChange = (val) => {
    const { onChange } = props;

    onChange(val);
  };

  const { value, data, dataText, dataValue, horizontal } = props;

  return (
    <StyledRadioGroup className='ic-radio-group' horizontal={horizontal}>
      {data.map((d) => (
        <Radio key={d[dataValue]} value={value === d[dataValue]} onChange={() => handleChange(d[dataValue])}>
          {d[dataText]}
        </Radio>
      ))}
    </StyledRadioGroup>
  );
}

RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  horizontal: PropTypes.bool,
};

RadioGroup.defaultProps = {
  value: null,
  onChange: () => {},
  data: [],
  dataValue: 'value',
  dataText: 'label',
  horizontal: false,
};

export default RadioGroup;
