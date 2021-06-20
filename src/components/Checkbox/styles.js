import styled from 'styled-components';
import { darken } from 'polished';
import global from '../../themes/default/Global';

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
  height: ${({ theme: { checkbox } }) => checkbox.boxHeight};
  width: ${({ theme: { checkbox } }) => checkbox.boxWidth};
  border: ${({ theme: { checkbox } }) => `1.5px solid ${checkbox.unCheckedBorderColor}`};
  border-radius: ${({ theme: { checkbox } }) => checkbox.borderRadius};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme: { checkbox } }) => checkbox.fontSize};
  font-weight: ${({ theme: { checkbox } }) => checkbox.fontWeight};
  font-family: ${({ theme: { checkbox } }) => checkbox.fontFamily};
  color: ${({ theme: { checkbox } }) => checkbox.fontColor.light};
  user-select: none;
  cursor: pointer;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  height: ${({ theme: { checkbox } }) => checkbox.height};
  position: relative;
  padding-left: ${({ theme: { checkbox } }) => checkbox.labelPaddingLeft};
  margin: ${({ theme: { checkbox } }) => `${checkbox.verticalMargin} 0`};
  width: fit-content;
  cursor: pointer;
  user-select: none;

  &:hover ${/* sc-sel */ StyledInput} ~ ${/* sc-sel */ StyledCheckmark} {
    border: ${/* sc-value */ `1.5px solid ${darken(0.1, global.colors.light.primary)}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark} {
    background-color: ${global.colors.light.primary};
    border: ${() => `1.5px solid ${darken(0.2, global.colors.light.primary)}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark}:after {
    display: block;
  }

  ${/* sc-sel */ StyledCheckmark}:after {
    left: ${({ theme: { checkbox } }) => checkbox.checkMarkMarginLeft};
    top: ${({ theme: { checkbox } }) => checkbox.checkMarkMarginTop};
    width: ${({ theme: { checkbox } }) => checkbox.checkMarkWidth};
    height: ${({ theme: { checkbox } }) => checkbox.checkMarkHeight};
    border: ${({ theme: { checkbox } }) => `solid ${checkbox.checkMarkColor}`};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
