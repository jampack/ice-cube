import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';

const calcFontColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.fontColor.light,
  dark: ({ theme: { radio } }) => radio.fontColor.dark,
});

const calcUnCheckedBorderColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.unCheckedBorderColor.light,
  dark: ({ theme: { radio } }) => radio.unCheckedBorderColor.dark,
});

const calcCircleHoverColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.circleHoverColor.light,
  dark: ({ theme: { radio } }) => radio.circleHoverColor.dark,
});

const calcCheckedBackgroundColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.checkedBackgroundColor.light,
  dark: ({ theme: { radio } }) => radio.checkedBackgroundColor.dark,
});

const calcCheckedBorderColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.checkedBorderColor.light,
  dark: ({ theme: { radio } }) => radio.checkedBorderColor.dark,
});

const calcCheckedDotColor = theme('mode', {
  light: ({ theme: { radio } }) => radio.checkedDotColor.light,
  dark: ({ theme: { radio } }) => radio.checkedDotColor.dark,
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
  margin: ${({ theme: { radio } }) => `${radio.verticalMargin} 0`};
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
    left: ${({ theme: { radio } }) => radio.checkMarkMarginLeft};
    top: ${({ theme: { radio } }) => radio.checkMarkMarginTop};
    width: ${({ theme: { radio } }) => radio.checkMarkWidth};
    height: ${({ theme: { radio } }) => radio.checkMarkHeight};
    border-radius: 50%;
    background: ${() => calcCheckedDotColor};
  }
`;
