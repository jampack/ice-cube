import styled from 'styled-components';
import theme from 'styled-theming';

const calcBorderColor = theme('mode', {
  light: (p) => p.theme.select.borderColor.light,
  dark: (p) => p.theme.select.borderColor.dark,
});

export const StyledSelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${(p) => `${p.theme.select.borderWidth} solid ${calcBorderColor(p)}`};
  border-radius: ${({ theme: { select } }) => select.borderRadius};
  height: ${({ theme: { select } }) => select.height};
  width: ${({ theme: { select } }) => select.width};
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
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { select } }) => `${select.paddingY} ${select.paddingX}`};
  font-size: ${({ theme: { select } }) => select.fontSize};
  font-family: ${({ theme: { select } }) => select.fontFamily};
  font-weight: ${({ theme: { select } }) => select.fontWeight};
  cursor: pointer;
`;

export const StyledSelectOptions = styled.div`
  position: absolute;
  display: block;
  top: 100%;
  height: ${({ theme: { select } }) => select.optionsDropdownHeight};
  width: ${({ theme: { select } }) => select.width};
  overflow-y: auto;
  left: 0;
  right: 0;
  border: ${(p) => `${p.theme.select.borderWidth} solid ${calcBorderColor(p)}`};
  border-radius: 3px;
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
  width: 100%;

  ${StyledSelectContainer}.open ${StyledSelectOptions} {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;

export const StyledSelectOption = styled.div`
  position: relative;
  display: block;
  padding: ${({ theme: { select } }) => `${select.paddingY} ${select.paddingX}`};
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
