import theme from 'styled-theming';
import styled from 'styled-components';
import {
  fontColor,
  placeholderColor,
  floatingLabelBackgroundColor,
  labelTransform,
  labelFontColor,
  borderColor,
  calcBorderUnderColor,
} from '../../lib/CommonStyles';

const focusedBorderColor = theme('mode', {
  dark: ({ theme: { textField } }) => textField.focusedBorderColor.dark,
  light: ({ theme: { textField } }) => textField.focusedBorderColor.light,
});

export const Input = styled.input`
  box-sizing: border-box;
`;

export const BorderUnder = styled.span`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
`;

export const LabelUnder = styled.span`
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${(p) => labelFontColor('textField', p)};
`;

export const Label = styled.label`
  display: block;
  padding-left: ${({ theme: { textField } }) => textField.defaultLabelPaddingLeft};
  margin-bottom: 5px;
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${(p) => labelFontColor('textField', p)};
`;

export const TextField = styled.div`
  position: relative;
  width: ${({ block }) => (block ? '100%' : 'max-content')};

  ${Input} {
    height: ${({ theme: { textField } }) => textField.height};
    width: ${({ theme: { textField }, ...p }) => (p.block ? '100%' : textField.width)};
    padding: ${({ theme: { textField } }) => `${textField.paddingY} ${textField.paddingX}`};
    font-size: ${({ theme: { textField } }) => textField.fontSize};
    font-family: ${({ theme: { textField } }) => textField.fontFamily};
    font-weight: ${({ theme: { textField } }) => textField.fontWeight};
    color: ${(p) => (p.disabled ? p.theme.textField.disabledColor : fontColor('textField', p))};
    background-color: ${({ theme: { textField }, ...p }) => (p.filled ? '#f0f0f0' : textField.backgroundColor)};

    border: ${(p) =>
      p.underlined || p.filled
        ? 'none'
        : `${p.theme.textField.borderWidth} solid ${
            p.disabled ? p.theme.textField.disabledColor : borderColor('textField', p)
          }`};

    border-bottom: ${(p) =>
      p.underlined || p.filled ? `${p.theme.textField.borderWidth} solid ${borderColor('textField', p)}` : ''};

    border-radius: ${({ theme: { textField }, ...p }) => (p.underlined || p.filled ? '0' : textField.borderRadius)};

    outline: none;

    ::placeholder {
      color: ${(p) => (p.outlined || p.underlined || p.filled ? 'transparent' : placeholderColor('textField', p))};
      opacity: 1; /* Firefox */
    }
  }

  ${LabelUnder} {
    display: flex;
    position: absolute;
    margin: ${({ theme: { textField } }) => `${textField.floatingLabelMarginTop} 0`};
    padding: ${({ theme: { textField } }) => `0 ${textField.floatingLabelPaddingX}`};
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s;
    transform-origin: 0 0;
    background: none;
    pointer-events: none;
  }

  ${/* sc-sel */ Input}.valid + ${/* sc-sel */ LabelUnder},
    ${/* sc-sel */ Input}:focus + ${/* sc-sel */ LabelUnder} {
    transform: ${(p) => labelTransform('textField', p)};
    background: ${(p) => floatingLabelBackgroundColor('textField', p)};
    left: ${({ theme: { textField } }) => textField.floatingLabelMarginLeft};
    padding: 0 3px;
  }

  ${/* sc-sel */ Input}:focus {
    &::placeholder {
      color: ${(p) => placeholderColor('textField', p)};
    }

    ~ ${BorderUnder} {
      width: 100%;
      transition: 0.3s width linear;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid ${calcBorderUnderColor('textField', p)}` : 'none')};
    }
  }

  ${/* sc-sel */ Input}:focus {
    color: #284b63;
    border-color: ${(p) => (!p.underlined && !p.filled ? focusedBorderColor : '')};
  }

  ${/* sc-sel */ Input}:focus + ${/* sc-sel */ LabelUnder} {
    color: #284b63;
  }
`;
