import styled from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { fontColor } from '../../lib/CommonStyles';

const unCheckedBorderColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.unCheckedBorderColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.unCheckedBorderColor.light,
});

const hoverColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.boxHoverColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.boxHoverColor.light,
});

const checkedBackgroundColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.checkedBackgroundColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.checkedBackgroundColor.light,
});

const checkedBorderColor = theme('mode', {
  dark: ({ theme: { checkbox } }) => checkbox.checkedBorderColor.dark,
  light: ({ theme: { checkbox } }) => checkbox.checkedBorderColor.light,
});

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Label = styled.label`
  font-size: ${({ theme: { checkbox } }) => checkbox.fontSize};
  font-weight: ${({ theme: { checkbox } }) => checkbox.fontWeight};
  font-family: ${({ theme: { checkbox } }) => checkbox.fontFamily};
  color: ${(p) => (p.disabled ? p.theme.checkbox.disabledColor : fontColor('checkbox', p))};
  user-select: none;
  cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ theme: { checkbox } }) => checkbox.boxHeight};
  width: ${({ theme: { checkbox } }) => checkbox.boxWidth};
  border: ${(p) => `1.5px solid ${p.disabled ? p.theme.checkbox.disabledColor : unCheckedBorderColor(p)}`};
  border-radius: ${({ theme: { checkbox } }) => checkbox.borderRadius};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ theme: { checkbox } }) => checkbox.height};
  position: relative;
  padding-left: ${({ theme: { checkbox } }) => checkbox.labelPaddingLeft};
  margin: ${({ theme: { checkbox } }) => `${checkbox.verticalMargin} 0`};
  width: fit-content;
  cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
  user-select: none;

  &:hover ${/* sc-sel */ Input} ~ ${/* sc-sel */ Checkmark} {
    border: ${(p) => `${p.disabled ? 'unset' : '1.5px'} solid ${p.disabled ? '' : darken(0.1, hoverColor(p))}`};
  }

  ${/* sc-sel */ Input}:checked ~ ${/* sc-sel */ Checkmark} {
    background-color: ${(p) => (p.disabled ? p.theme.checkbox.disabledColor : checkedBackgroundColor)};
    border: ${(p) => `1.5px solid ${p.disabled ? p.theme.checkbox.disabledColor : darken(0.1, checkedBorderColor(p))}`};
  }

  ${/* sc-sel */ Input}:checked ~ ${/* sc-sel */ Checkmark}:after {
    display: block;
  }

  ${/* sc-sel */ Checkmark}:after {
    left: ${({ theme: { checkbox } }) => checkbox.checkmarkMarginLeft};
    top: ${({ theme: { checkbox } }) => checkbox.checkmarkMarginTop};
    width: ${({ theme: { checkbox } }) => checkbox.checkmarkWidth};
    height: ${({ theme: { checkbox } }) => checkbox.checkmarkHeight};
    border: ${({ theme: { checkbox } }) => `solid ${checkbox.checkmarkColor}`};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
