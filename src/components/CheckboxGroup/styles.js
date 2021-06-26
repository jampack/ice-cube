import styled from 'styled-components';
import { StyledCheckbox } from '../Checkbox/styles';

// eslint-disable-next-line import/prefer-default-export
export const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  flex-wrap: ${(p) => (p.horizontal ? 'wrap' : '')};

  ${/* sc-sel */ StyledCheckbox}:nth-child(n + 1) {
    margin-right: ${(p) => (p.horizontal ? '20px' : '0')};
  }
`;
