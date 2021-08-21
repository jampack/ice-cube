import styled from 'styled-components';
import theme from 'styled-theming';

import {
  calcPlaceholderColor,
  calcFloatingLabelBackgroundColor,
  calcLabelTransform,
  calcLabelFontColor,
  calcBorderColor,
  calcBorderUnderColor,
} from '../../lib/CommonStyles';

const calcSelectedOptionBackgroundColor = theme('mode', {
  dark: ({ theme: { select } }) => select.selectedOptionBackgroundColor.dark,
  light: ({ theme: { select } }) => select.selectedOptionBackgroundColor.light,
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
  color: ${(p) => calcPlaceholderColor('select', p)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLabel = styled.label`
  display: block;
  padding-left: 5px;
  margin-bottom: 5px;
  font-size: ${({ theme: { select } }) => select.labelFontSize};
  font-family: ${({ theme: { select } }) => select.labelFontFamily};
  font-weight: ${({ theme: { select } }) => select.labelFontWeight};
  color: ${(p) => calcLabelFontColor('select', p)};
`;

export const StyledLabelUnder = styled.span`
  font-size: ${({ theme: { select } }) => select.labelFontSize};
  font-family: ${({ theme: { select } }) => select.labelFontFamily};
  font-weight: ${({ theme: { select } }) => select.labelFontWeight};
  color: ${(p) => calcLabelFontColor('select', p)};
`;

export const StyledSelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { select } }) => select.backgroundColor};

  border: ${(p) =>
    p.underlined || p.filled
      ? 'none'
      : `${p.theme.select.borderWidth} solid ${
          p.disabled ? p.theme.select.disabledColor : calcBorderColor('select', p)
        }`};

  border-bottom: ${(p) =>
    p.underlined || p.filled ? `${p.theme.select.borderWidth} solid ${calcBorderColor('select', p)}` : ''};

  border-radius: ${({ theme: { select }, ...p }) => (p.underlined || p.filled ? '0' : select.borderRadius)};
  height: ${({ theme: { select } }) => select.height};

  &.open {
    ${StyledBorderUnder} {
      width: 100%;
      transition: 0.3s width ease-in-out;
      height: 0;
      border: ${(p) => (p.underlined || p.filled ? `1px solid ${calcBorderUnderColor('select', p)}` : 'none')};
    }
  }

  ${StyledLabelUnder} {
    display: flex;
    position: absolute;
    margin: ${({ theme: { select } }) => `${select.floatingLabelMarginTop} 0`};
    padding: ${({ theme: { select } }) => `0 ${select.floatingLabelPaddingX}`};
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
      transform: ${(p) => calcLabelTransform('select', p)};
      background: ${(p) => calcFloatingLabelBackgroundColor('select', p)};
      left: ${({ theme: { select } }) => select.floatingLabelMarginLeft};
      padding: 0 3px;
    }
  }
`;

export const StyledSelectedItem = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
  color: ${(p) => (p.disabled ? p.theme.select.disabledColor : '')};
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
  width: ${({ theme: { select }, ...p }) => (p.block ? '100%' : select.width)};
  overflow-y: auto;
  left: 0;
  right: 0;
  border: ${(p) => `${p.theme.select.borderWidth} solid ${calcBorderColor('select', p)}`};
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
  width: ${({ theme: { select }, ...p }) => (p.block ? '100%' : select.width)};
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
    background-color: ${calcSelectedOptionBackgroundColor};
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
    background-color: ${(p) => (p.disabled ? p.theme.select.disabledColor : '#394a6d')};
  }

  ::after {
    left: 3px;
    transform: rotate(45deg);
    background-color: ${(p) => (p.disabled ? p.theme.select.disabledColor : '#394a6d')};
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
