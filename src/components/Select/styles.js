import styled from 'styled-components';
import theme from 'styled-theming';

const calcBorderColor = theme('mode', {
  light: (p) => p.theme.select.borderColor.light,
  dark: (p) => p.theme.select.borderColor.dark,
});

const calcPlaceholderColor = theme('mode', {
  light: ({ theme: { select } }) => select.placeholderColor.light,
  dark: ({ theme: { select } }) => select.placeholderColor.dark,
});

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

const calcFloatingLabelBackgroundColor = ({ outlined, underlined, filled, ...p }) => {
  if (outlined || underlined) {
    return p.theme.textField.floatingLabelBackgroundColor;
  }
  if (filled) {
    return 'transparent';
  }

  return 'none';
};

const calcLabelFontColor = theme('mode', {
  light: ({ theme: { textField } }) => textField.labelFontColor.light,
  dark: ({ theme: { textField } }) => textField.labelFontColor.dark,
});

export const StyledBorderUnder = styled.span`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
`;

export const StyledPlaceholder = styled.span`
  position: absolute;
  color: ${calcPlaceholderColor};
`;

export const StyledLabel = styled.label`
  display: block;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${calcLabelFontColor};
`;

export const StyledLabelUnder = styled.span`
  font-size: ${({ theme: { textField } }) => textField.labelFontSize};
  font-family: ${({ theme: { textField } }) => textField.labelFontFamily};
  font-weight: ${({ theme: { textField } }) => textField.labelFontWeight};
  color: ${calcLabelFontColor};
`;

export const StyledSelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  border: ${(p) => (p.underlined || p.filled ? 'none' : `${p.theme.select.borderWidth} solid ${calcBorderColor(p)}`)};

  border-bottom: ${(p) =>
    p.underlined || p.filled ? `${p.theme.select.borderWidth} solid ${calcBorderColor(p)}` : ''};

  border-radius: ${({ theme: { select }, ...p }) => (p.underlined || p.filled ? '0' : select.borderRadius)};
  height: ${({ theme: { select } }) => select.height};

  &.open {
    ${StyledBorderUnder} {
      width: 100%;
      transition: 0.3s width ease-in-out;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid red` : 'none')};
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

  &.open,
  &.valid {
    ${StyledLabelUnder} {
      transform: ${calcLabelTransform};
      background: ${calcFloatingLabelBackgroundColor};
      left: ${({ theme: { textField } }) => textField.floatingLabelMarginLeft};
      padding: 0 3px;
    }
  }
`;

export const StyledSelectedItem = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
`;

export const StyledSelectTrigger = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { select } }) => `${select.paddingY} ${select.paddingX}`};
  font-size: ${({ theme: { select } }) => select.fontSize};
  font-family: ${({ theme: { select } }) => select.fontFamily};
  font-weight: ${({ theme: { select } }) => select.fontWeight};
  cursor: pointer;
  background-color: ${(p) => (p.filled ? '#f0f0f0' : 'transparent')};
`;

export const StyledSelectOptions = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: block;
  top: 100%;
  height: ${({ theme: { select } }) => select.optionsDropdownHeight};
  width: ${({ theme: { select } }) => select.width};
  overflow-y: auto;
  left: 0;
  right: 0;
  border: ${(p) => `${p.theme.select.borderWidth} solid ${calcBorderColor(p)}`};
  background-color: #ffffff;
  border-radius: ${({ theme: { select } }) => `0 0 ${select.borderRadius} ${select.borderRadius}`};
  border-top: 0;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
`;

export const StyledSelect = styled.div`
  position: relative;
  user-select: none;
  width: ${({ theme: { select } }) => select.width};

  ${StyledSelectContainer}.open ${StyledSelectOptions} {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;

export const StyledSelectOption = styled.div`
  position: relative;
  display: block;
  padding: ${({ theme: { select } }) => `${select.optionsPaddingY} ${select.optionsPaddingX}`};
  font-size: ${({ theme: { select } }) => select.optionsFontSize};
  font-family: ${({ theme: { select } }) => select.optionsFontFamily};
  font-weight: ${({ theme: { select } }) => select.optionsFontWeight};
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: #b2b2b2;
  }

  &.selected {
    color: #ffffff;
    background-color: #305c91;
  }
`;

export const StyledSelectArrow = styled.div`
  position: relative;
  height: 10px;
  width: 10px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 1.5px;
    height: 100%;
    transition: all 0.5s;
  }

  ::before {
    left: -3px;
    transform: rotate(-45deg);
    background-color: #394a6d;
  }

  ::after {
    left: 3px;
    transform: rotate(45deg);
    background-color: #394a6d;
  }

  &.open::before {
    left: -3px;
    transform: rotate(45deg);
  }

  &.open::after {
    left: 3px;
    transform: rotate(-45deg);
  }
`;
