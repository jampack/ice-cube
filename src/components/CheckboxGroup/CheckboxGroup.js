import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckboxGroup } from './styles';
import Checkbox from '../Checkbox';

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
    <StyledCheckboxGroup className='ic-checkbox-group' horizontal={horizontal}>
      {data.map((d) => (
        <Checkbox
          key={d[dataValue]}
          value={value.includes(d[dataValue])}
          onChange={(r) => handleChange(d[dataValue], r)}>
          {d[dataText]}
        </Checkbox>
      ))}
    </StyledCheckboxGroup>
  );
}

CheckboxGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
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
  dataValue: 'value',
  dataText: 'label',
  horizontal: false,
};

export default CheckboxGroup;
