import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';
import { fontColor } from '../../lib/CommonStyles';

const unCheckedBorderColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.uncheckedBorderColor.dark,
  light: ({ theme: { radio } }) => radio.uncheckedBorderColor.light,
});

const hoverColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.circleHoverColor.dark,
  light: ({ theme: { radio } }) => radio.circleHoverColor.light,
});

const checkedBackgroundColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedBackgroundColor.dark,
  light: ({ theme: { radio } }) => radio.checkedBackgroundColor.light,
});

const checkedBorderColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedBorderColor.dark,
  light: ({ theme: { radio } }) => radio.checkedBorderColor.light,
});

const checkedDotColor = theme('mode', {
  dark: ({ theme: { radio } }) => radio.checkedDotColor.dark,
  light: ({ theme: { radio } }) => radio.checkedDotColor.light,
});

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Label = styled.label`
  font-size: ${({ theme: { radio } }) => radio.fontSize};
  font-weight: ${({ theme: { radio } }) => radio.fontWeight};
  font-family: ${({ theme: { radio } }) => radio.fontFamily};
  color: ${(p) => (p.disabled ? p.theme.radio.disabledColor : fontColor('radio', p))};
  user-select: none;
  cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ theme: { radio } }) => radio.circleHeight};
  width: ${({ theme: { radio } }) => radio.circleWidth};
  border: ${(p) => `2px solid ${p.disabled ? p.theme.radio.disabledColor : unCheckedBorderColor(p)}`};
  border-radius: ${({ theme: { radio } }) => radio.borderRadius};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Radio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ theme: { radio } }) => radio.height};
  position: relative;
  padding-left: ${({ theme: { radio } }) => radio.labelPaddingLeft};
  margin: ${({ theme: { radio } }) => `${radio.marginY} 0`};
  width: fit-content;
  cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
  user-select: none;

  &:hover ${/* sc-sel */ Input} ~ ${/* sc-sel */ Checkmark} {
    border: ${(p) => `${p.disabled ? 'unset' : '2px'} solid ${p.disabled ? '' : darken(0.1, hoverColor(p))}`};
  }

  ${/* sc-sel */ Input}:checked ~ ${/* sc-sel */ Checkmark} {
    background-color: ${() => checkedBackgroundColor};
    border: ${(p) => `1.5px solid ${p.disabled ? p.theme.radio.disabledColor : darken(0.1, checkedBorderColor(p))}`};
  }

  ${/* sc-sel */ Input}:checked ~ ${/* sc-sel */ Checkmark}:after {
    display: block;
  }

  ${/* sc-sel */ Checkmark}:after {
    left: ${({ theme: { radio } }) => radio.checkmarkMarginLeft};
    top: ${({ theme: { radio } }) => radio.checkmarkMarginTop};
    width: ${({ theme: { radio } }) => radio.checkmarkWidth};
    height: ${({ theme: { radio } }) => radio.checkmarkHeight};
    border-radius: 50%;
    background: ${(p) => (p.disabled ? p.theme.radio.disabledColor : checkedDotColor)};
  }
`;
