import styled from 'styled-components';
import { StyledRadio } from '../radio/styles';

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  flex-wrap: ${(p) => (p.horizontal ? 'wrap' : '')};

  ${/* sc-sel */ StyledRadio}:nth-child(n + 1) {
    margin-right: ${(p) => (p.horizontal ? '20px' : '0')};
  }
`;

export default StyledRadioGroup;
