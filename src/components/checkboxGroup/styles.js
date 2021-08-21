import styled from 'styled-components';
import { Checkbox } from '../checkbox/styles';

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  flex-wrap: ${(p) => (p.horizontal ? 'wrap' : '')};

  ${/* sc-sel */ Checkbox}:nth-child(n + 1) {
    margin-right: ${(p) => (p.horizontal ? '20px' : '0')};
  }
`;

export default CheckboxGroup;
