import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckboxGroup } from './styles';
import Checkbox from '../Checkbox/index';

function CheckboxGroup(props) {
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
    <StyledCheckboxGroup horizontal={horizontal}>
      {data.map((d) => {
        console.log(value, d[dataValue], value.includes(d[dataValue]));
        return (
          <Checkbox
            key={d[dataValue]}
            value={value.includes(d[dataValue])}
            onChange={(r) => handleChange(d[dataValue], r)}>
            {d[dataText]}
          </Checkbox>
        );
      })}
    </StyledCheckboxGroup>
  );
}

CheckboxGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.string, PropTypes.number])),
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  dataText: PropTypes.string,
  dataValue: PropTypes.string,
  horizontal: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  value: [],
  onChange: () => [],
  data: [],
  dataValue: 'id',
  dataText: 'name',
  horizontal: false,
};

export default CheckboxGroup;
