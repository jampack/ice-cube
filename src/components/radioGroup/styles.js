import styled from 'styled-components';
import { Radio } from '../radio/styles';

const RadioGroup = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  flex-wrap: ${(p) => (p.horizontal ? 'wrap' : '')};

  ${/* sc-sel */ Radio}:nth-child(n + 1) {
    margin-right: ${(p) => (p.horizontal ? '20px' : '0')};
  }
`;

export default RadioGroup;
