import styled from 'styled-components';
import { StyledCheckbox } from '../Checkbox/styles';

// eslint-disable-next-line import/prefer-default-export
export const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};

  ${/* sc-sel */ StyledCheckbox}:nth-child(n + 2) {
    margin-top: ${(p) => (p.horizontal ? '0' : '5px')};
    margin-left: ${(p) => (p.horizontal ? '10px' : '0')};
  }
`;
