import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import StyledRadioGroup from './styles';

import Radio from '../radio';
import MessageWrapper from '../messageWrapper';

const RadioGroup = (props) => {
  useEffect(() => {
    const { value, onChange, data, dataValue } = props;

    if (!value) onChange(data[0][dataValue]);
  });

  const classNames = () => {
    const classes = 'ic-radio-group';

    return classes;
  };

  const handleChange = (val) => {
    const { onChange } = props;

    onChange(val);
  };

  const { value, data, dataText, dataValue, horizontal, disabled, error, helpText } = props;

  return (
    <MessageWrapper errorText={error} helpText={helpText}>
      <StyledRadioGroup className={classNames()} horizontal={horizontal}>
        {data.map((d) => (
          <Radio
            key={d[dataValue]}
            value={value === d[dataValue]}
            onChange={() => handleChange(d[dataValue])}
            disabled={disabled}>
            {d[dataText]}
          </Radio>
        ))}
      </StyledRadioGroup>
    </MessageWrapper>
  );
};

RadioGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RadioGroup.defaultProps = {
  data: [],
  dataText: 'label',
  dataValue: 'value',
  disabled: false,
  error: false,
  helpText: null,
  horizontal: false,
  onChange: () => {},
  value: null,
};

export default RadioGroup;
