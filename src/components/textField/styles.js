import theme from 'styled-theming';
import styled from 'styled-components';

const calcLabelTransform = ({ outlined, underlined, filled, theme: { textField } }) => {
  if (outlined) {
    return `scale(0.8) translateY(${textField.labelOutlinedTransformY})`;
  }
  if (underlined) {
    return `scale(0.8) translateY(${textField.labelUnderLinedTransformY})`;
  }
  if (filled) {
    return `scale(0.8) translateY(${textField.labelFilledTransformY})`;
  }

  return 'none';
};

const calcTextFieldFontColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.fontColor.dark,
  light: ({ theme: { textField } }) => textField.fontColor.light,
});

const calcLabelFontColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.labelFontColor.dark,
  light: ({ theme: { textField } }) => textField.labelFontColor.light,
});

const calcPlaceholderColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.placeholderColor.dark,
  light: ({ theme: { textField } }) => textField.placeholderColor.light,
});

const calcFloatingLabelBackgroundColor = ({ outlined, underlined, filled, ...p }) => {
  if (outlined || underlined) {
    return p.theme.textField.floatingLabelBackgroundColor;
  }
  if (filled) {
    return 'transparent';
  }

  return 'none';
};

const calcBorderColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.borderColor.dark,
  light: ({ theme: { textField } }) => textField.borderColor.light,
});

const calcBorderUnderColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.borderUnderActiveColor.dark,
  light: ({ theme: { textField } }) => textField.borderUnderActiveColor.light,
});

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
  color: ${calcLabelFontColor};
`;

export const StyledLabel = styled.label`
  display: block;
  padding-left: ${({ theme: { textField } }) => textField.defaultLabelPaddingLeft};
  margin-bottom: 5px;
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${calcLabelFontColor};
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
    color: ${(p) => (p.disabled ? p.theme.textField.disabledColor : calcTextFieldFontColor)};
    background-color: ${({ theme: { textField }, ...p }) => (p.filled ? '#f0f0f0' : textField.backgroundColor)};

    border: ${(p) =>
      p.underlined || p.filled
        ? 'none'
        : `${p.theme.textField.borderWidth} solid ${
            p.disabled ? p.theme.textField.disabledColor : calcBorderColor(p)
          }`};

    border-bottom: ${(p) =>
      p.underlined || p.filled ? `${p.theme.textField.borderWidth} solid ${calcBorderColor(p)}` : ''};

    border-radius: ${({ theme: { textField }, ...p }) => (p.underlined || p.filled ? '0' : textField.borderRadius)};

    outline: none;

    ::placeholder {
      color: ${(p) => (p.outlined || p.underlined || p.filled ? 'transparent' : calcPlaceholderColor)};
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
    transform: ${calcLabelTransform};
    background: ${calcFloatingLabelBackgroundColor};
    left: ${({ theme: { textField } }) => textField.floatingLabelMarginLeft};
    padding: 0 3px;
  }

  ${/* sc-sel */ StyledInput}:focus {
    &::placeholder {
      color: ${calcPlaceholderColor};
    }

    ~ ${StyledBorderUnder} {
      width: 100%;
      transition: 0.3s width ease-in-out;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid ${calcBorderUnderColor(p)}` : 'none')};
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
