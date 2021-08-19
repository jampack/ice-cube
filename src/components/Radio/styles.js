import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';

const calcFontColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.fontColor.dark,
  light: ({ theme: { radio } }) => radio.fontColor.light,
});

const calcUnCheckedBorderColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.uncheckedBorderColor.dark,
  light: ({ theme: { radio } }) => radio.uncheckedBorderColor.light,
});

const calcCircleHoverColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.circleHoverColor.dark,
  light: ({ theme: { radio } }) => radio.circleHoverColor.light,
});

const calcCheckedBackgroundColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedBackgroundColor.dark,
  light: ({ theme: { radio } }) => radio.checkedBackgroundColor.light,
});

const calcCheckedBorderColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedBorderColor.dark,
  light: ({ theme: { radio } }) => radio.checkedBorderColor.light,
});

const calcCheckedDotColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedDotColor.dark,
  light: ({ theme: { radio } }) => radio.checkedDotColor.light,
});

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme: { radio } }) => radio.fontSize};
  font-weight: ${({ theme: { radio } }) => radio.fontWeight};
  font-family: ${({ theme: { radio } }) => radio.fontFamily};
  color: ${() => calcFontColor};
  user-select: none;
  cursor: pointer;
`;

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ theme: { radio } }) => radio.circleHeight};
  width: ${({ theme: { radio } }) => radio.circleWidth};
  border: ${(p) => `2px solid ${calcUnCheckedBorderColor(p)}`};
  border-radius: ${({ theme: { radio } }) => radio.borderRadius};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ theme: { radio } }) => radio.height};
  position: relative;
  padding-left: ${({ theme: { radio } }) => radio.labelPaddingLeft};
  margin: ${({ theme: { radio } }) => `${radio.marginY} 0`};
  width: fit-content;
  cursor: pointer;
  user-select: none;

  &:hover ${/* sc-sel */ StyledInput} ~ ${/* sc-sel */ StyledCheckmark} {
    border: ${(p) => `2px solid ${darken(0.1, calcCircleHoverColor(p))}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark} {
    background-color: ${() => calcCheckedBackgroundColor};
    border: ${(p) => `1.5px solid ${darken(0.1, calcCheckedBorderColor(p))}`};
  }

  ${/* sc-sel */ StyledInput}:checked ~ ${/* sc-sel */ StyledCheckmark}:after {
    display: block;
  }

  ${/* sc-sel */ StyledCheckmark}:after {
    left: ${({ theme: { radio } }) => radio.checkmarkMarginLeft};
    top: ${({ theme: { radio } }) => radio.checkmarkMarginTop};
    width: ${({ theme: { radio } }) => radio.checkmarkWidth};
    height: ${({ theme: { radio } }) => radio.checkmarkHeight};
    border-radius: 50%;
    background: ${() => calcCheckedDotColor};
  }
`;
