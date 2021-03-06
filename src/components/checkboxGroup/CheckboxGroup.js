import React from 'react';
import PropTypes from 'prop-types';

import StyledCheckboxGroup from './styles';
import Checkbox from '../checkbox';
import MessageWrapper from '../messageWrapper';

const CheckboxGroup = (props) => {
  const classNames = () => {
    const classes = 'ic-checkbox-group';

    return classes;
  };

  const handleChange = (item, val) => {
    const { value, onChange } = props;
    let newArr = value;

    if (val) {
      newArr.push(item);
    } else {
      newArr = value.filter((v) => v !== item);
    }

    onChange(newArr);
  };

  const { value, data, dataText, dataValue, horizontal, disabled, error, helpText } = props;

  return (
    <MessageWrapper errorText={error} helpText={helpText}>
      <StyledCheckboxGroup className={classNames()} horizontal={horizontal}>
        {data &&
          data.map((d) => (
            <Checkbox
              key={d[dataValue]}
              value={value.includes(d[dataValue])}
              onChange={(r) => handleChange(d[dataValue], r)}
              disabled={disabled}
              inGroup>
              {d[dataText]}
            </Checkbox>
          ))}
      </StyledCheckboxGroup>
    </MessageWrapper>
  );
};

CheckboxGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  helpText: PropTypes.string,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

CheckboxGroup.defaultProps = {
  data: [],
  dataText: 'label',
  dataValue: 'value',
  disabled: false,
  error: false,
  helpText: null,
  horizontal: false,
  onChange: () => [],
  value: [],
};

export default CheckboxGroup;
