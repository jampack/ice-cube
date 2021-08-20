import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckboxGroup } from './styles';
import Checkbox from '../Checkbox';

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

  const { value, data, dataText, dataValue, horizontal } = props;

  return (
    <StyledCheckboxGroup className={classNames()} horizontal={horizontal}>
      {data &&
        data.map((d) => (
          <Checkbox
            key={d[dataValue]}
            value={value.includes(d[dataValue])}
            onChange={(r) => handleChange(d[dataValue], r)}>
            {d[dataText]}
          </Checkbox>
        ))}
    </StyledCheckboxGroup>
  );
};

CheckboxGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

CheckboxGroup.defaultProps = {
  data: [],
  dataText: 'label',
  dataValue: 'value',
  horizontal: false,
  onChange: () => [],
  value: [],
};

export default CheckboxGroup;
