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
  dark: ({ theme: { textarea } }) => textarea.focusedBorderColor.dark,
  light: ({ theme: { textarea } }) => textarea.focusedBorderColor.light,
});

export const Input = styled.textarea`
  box-sizing: border-box;
  line-height: 1.5;
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
  font-size: ${({ theme: { textarea } }) => textarea.labelFontSize};
  font-family: ${({ theme: { textarea } }) => textarea.labelFontFamily};
  font-weight: ${({ theme: { textarea } }) => textarea.labelFontWeight};
  color: ${(p) => labelFontColor('textarea', p)};
`;

export const Label = styled.label`
  display: block;
  padding-left: ${({ theme: { textarea } }) => textarea.defaultLabelPaddingLeft};
  margin-bottom: 5px;
  font-size: ${({ theme: { textarea } }) => textarea.labelFontSize};
  font-family: ${({ theme: { textarea } }) => textarea.labelFontFamily};
  font-weight: ${({ theme: { textarea } }) => textarea.labelFontWeight};
  color: ${(p) => labelFontColor('textarea', p)};
`;

export const Textarea = styled.div`
  position: relative;
  width: ${({ block }) => (block ? '100%' : 'max-content')};

  ${Input} {
    width: ${({ theme: { textarea }, ...p }) => (p.block ? '100%' : textarea.width)};
    padding: ${({ theme: { textarea } }) => `${textarea.paddingY} ${textarea.paddingX}`};
    font-size: ${({ theme: { textarea } }) => textarea.fontSize};
    font-family: ${({ theme: { textarea } }) => textarea.fontFamily};
    font-weight: ${({ theme: { textarea } }) => textarea.fontWeight};
    color: ${(p) => (p.disabled ? p.theme.textarea.disabledColor : fontColor('textarea', p))};
    background-color: ${({ theme: { textarea }, ...p }) => (p.filled ? '#f0f0f0' : textarea.backgroundColor)};

    border: ${(p) =>
      p.underlined || p.filled
        ? 'none'
        : `${p.theme.textarea.borderWidth} solid ${
            p.disabled ? p.theme.textarea.disabledColor : borderColor('textarea', p)
          }`};

    border-bottom: ${(p) =>
      p.underlined || p.filled ? `${p.theme.textarea.borderWidth} solid ${borderColor('textarea', p)}` : ''};

    border-radius: ${({ theme: { textarea }, ...p }) => (p.underlined || p.filled ? '0' : textarea.borderRadius)};

    outline: none;

    ::placeholder {
      color: ${(p) => (p.outlined || p.underlined || p.filled ? 'transparent' : placeholderColor('textarea', p))};
      opacity: 1; /* Firefox */
    }
  }

  ${LabelUnder} {
    display: flex;
    position: absolute;
    margin: ${({ theme: { textarea } }) => `${textarea.floatingLabelMarginTop} 0`};
    padding: ${({ theme: { textarea } }) => `0 ${textarea.floatingLabelPaddingX}`};
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
    transform: ${(p) => labelTransform('textarea', p)};
    background: ${(p) => floatingLabelBackgroundColor('textarea', p)};
    left: ${({ theme: { textarea } }) => textarea.floatingLabelMarginLeft};
    padding: 0 3px;
  }

  ${/* sc-sel */ Input}:focus {
    &::placeholder {
      color: ${(p) => placeholderColor('textarea', p)};
    }

    ~ ${BorderUnder} {
      bottom: 2px;
      width: 100%;
      transition: 0.3s width linear;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid ${calcBorderUnderColor('textarea', p)}` : 'none')};
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
