import styled from 'styled-components';
import { darken } from 'polished';

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  border: ${() => `1.5px solid ${darken(0.2, '#f5f5f5')}`};
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  user-select: none;
  cursor: pointer;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  height: 23px;
  position: relative;
  padding-left: 30px;
  width: fit-content;
  cursor: pointer;
  user-select: none;

  &:hover ${/* sc-selector */ StyledInput} ~ ${/* sc-selector */ StyledCheckmark} {
    background-color: ${/* sc-value */ darken(0.1, '#f5f5f5')};
  }

  ${/* sc-selector */ StyledInput}:checked ~ ${/* sc-selector */ StyledCheckmark} {
    background-color: #2196f3;
    border: ${() => `1.5px solid ${darken(0.2, '#2196f3')}`};
  }

  ${/* sc-selector */ StyledInput}:checked ~ ${/* sc-selector */ StyledCheckmark}:after {
    display: block;
  }

  ${/* sc-selector */ StyledCheckmark}:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
