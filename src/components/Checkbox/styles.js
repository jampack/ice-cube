import styled from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';

const calcUnCheckedBorderColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.unCheckedBorderColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.unCheckedBorderColor.light,
});

const calcFontColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.fontColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.fontColor.light,
});

const calcBoxHoverColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.boxHoverColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.boxHoverColor.light,
});

const calcCheckedBackgroundColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.checkedBackgroundColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.checkedBackgroundColor.light,
});

const calcCheckedBorderColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.checkedBorderColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.checkedBorderColor.light,
});

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme: { checkbox } }) => checkbox.fontSize};
  font-weight: ${({ theme: { checkbox } }) => checkbox.fontWeight};
  font-family: ${({ theme: { checkbox } }) => checkbox.fontFamily};
  color: ${() => calcFontColor};
  user-select: none;
  cursor: pointer;
`;

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ theme: { checkbox } }) => checkbox.boxHeight};
  width: ${({ theme: { checkbox } }) => checkbox.boxWidth};
  border: ${(p) => `1.5px solid ${calcUnCheckedBorderColor(p)}`};
  border-radius: ${({ theme: { checkbox } }) => checkbox.borderRadius};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ theme: { checkbox } }) => checkbox.height};
  position: relative;
  padding-left: ${({ theme: { checkbox } }) => checkbox.labelPaddingLeft};
  margin: ${({ theme: { checkbox } }) => `${checkbox.verticalMargin} 0`};
  width: fit-content;
  cursor: pointer;
  user-select: none;

  &:hover ${/* sc-sel */ StyledInput} ~ ${/* sc-sel */ StyledCheckmark} {
    border: ${(p) => `1.5px solid ${darken(0.1, calcBoxHoverColor(p))}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark} {
    background-color: ${() => calcCheckedBackgroundColor};
    border: ${(p) => `1.5px solid ${darken(0.1, calcCheckedBorderColor(p))}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark}:after {
    display: block;
  }

  ${/* sc-sel */ StyledCheckmark}:after {
    left: ${({ theme: { checkbox } }) => checkbox.checkmarkMarginLeft};
    top: ${({ theme: { checkbox } }) => checkbox.checkmarkMarginTop};
    width: ${({ theme: { checkbox } }) => checkbox.checkmarkWidth};
    height: ${({ theme: { checkbox } }) => checkbox.checkmarkHeight};
    border: ${({ theme: { checkbox } }) => `solid ${checkbox.checkmarkColor}`};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
