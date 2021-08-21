import theme from 'styled-theming';
import styled from 'styled-components';
import {
  calcFontColor,
  calcPlaceholderColor,
  calcFloatingLabelBackgroundColor,
  calcLabelTransform,
  calcLabelFontColor,
  calcBorderColor,
  calcBorderUnderColor,
} from '../../lib/CommonStyles';

const calcFocusedBorderColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.focusedBorderColor.dark,
  light: ({ theme: { textField } }) => textField.focusedBorderColor.light,
});

export const StyledInput = styled.input`
  box-sizing: border-box;
`;

export const StyledBorderUnder = styled.span`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
`;

export const StyledLabelUnder = styled.span`
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${(p) => calcLabelFontColor('textField', p)};
`;

export const StyledLabel = styled.label`
  display: block;
  padding-left: ${({ theme: { textField } }) => textField.defaultLabelPaddingLeft};
  margin-bottom: 5px;
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${(p) => calcLabelFontColor('textField', p)};
`;

export const StyledTextField = styled.div`
  position: relative;
  width: ${({ block }) => (block ? '100%' : 'max-content')};

  ${StyledInput} {
    height: ${({ theme: { textField } }) => textField.height};
    width: ${({ theme: { textField }, ...p }) => (p.block ? '100%' : textField.width)};
    padding: ${({ theme: { textField } }) => `${textField.paddingY} ${textField.paddingX}`};
    font-size: ${({ theme: { textField } }) => textField.fontSize};
    font-family: ${({ theme: { textField } }) => textField.fontFamily};
    font-weight: ${({ theme: { textField } }) => textField.fontWeight};
    color: ${(p) => (p.disabled ? p.theme.textField.disabledColor : calcFontColor('textField', p))};
    background-color: ${({ theme: { textField }, ...p }) => (p.filled ? '#f0f0f0' : textField.backgroundColor)};

    border: ${(p) =>
      p.underlined || p.filled
        ? 'none'
        : `${p.theme.textField.borderWidth} solid ${
            p.disabled ? p.theme.textField.disabledColor : calcBorderColor('textField', p)
          }`};

    border-bottom: ${(p) =>
      p.underlined || p.filled ? `${p.theme.textField.borderWidth} solid ${calcBorderColor('textField', p)}` : ''};

    border-radius: ${({ theme: { textField }, ...p }) => (p.underlined || p.filled ? '0' : textField.borderRadius)};

    outline: none;

    ::placeholder {
      color: ${(p) => (p.outlined || p.underlined || p.filled ? 'transparent' : calcPlaceholderColor('textField', p))};
      opacity: 1; /* Firefox */
    }
  }

  ${StyledLabelUnder} {
    display: flex;
    position: absolute;
    margin: ${({ theme: { textField } }) => `${textField.floatingLabelMarginTop} 0`};
    padding: ${({ theme: { textField } }) => `0 ${textField.floatingLabelPaddingX}`};
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.2s;
    transform-origin: 0 0;
    background: none;
    pointer-events: none;
  }

  ${/* sc-sel */ StyledInput}.valid + ${/* sc-sel */ StyledLabelUnder},
    ${/* sc-sel */ StyledInput}:focus + ${/* sc-sel */ StyledLabelUnder} {
    transform: ${(p) => calcLabelTransform('textField', p)};
    background: ${(p) => calcFloatingLabelBackgroundColor('textField', p)};
    left: ${({ theme: { textField } }) => textField.floatingLabelMarginLeft};
    padding: 0 3px;
  }

  ${/* sc-sel */ StyledInput}:focus {
    &::placeholder {
      color: ${(p) => calcPlaceholderColor('textField', p)};
    }

    ~ ${StyledBorderUnder} {
      width: 100%;
      transition: 0.3s width ease-in-out;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid ${calcBorderUnderColor('textField', p)}` : 'none')};
    }
  }

  ${/* sc-sel */ StyledInput}:focus {
    color: #284b63;
    border-color: ${calcFocusedBorderColor};
  }

  ${/* sc-sel */ StyledInput}:focus + ${/* sc-sel */ StyledLabelUnder} {
    color: #284b63;
  }
`;
