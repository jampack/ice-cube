import styled from 'styled-components';
import theme from 'styled-theming';

const calcBorderColor = theme('mode', {
  light: (p) => p.theme.select.borderColor.light,
  dark: (p) => p.theme.select.borderColor.dark,
});

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0 10px 0 10px;
  border-style: solid;
  border-color: ${() => calcBorderColor};
  border-radius: 3px;
`;

export const StyledSelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  font-size: 20px;
  font-weight: 300;
  color: #3b3b3b;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  cursor: pointer;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #394a6d;
`;

export const StyledSelectOptions = styled.div`
  position: absolute;
  display: block;
  top: 100%;
  height: 300px;
  overflow-y: auto;
  left: 0;
  right: 0;
  border: 2px solid #394a6d;
  border-top: 0;
  background: #fff;
  transition: all 0.5s;
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
  padding: 0 22px 0 22px;
  font-size: 22px;
  font-weight: 300;
  color: #3b3b3b;
  line-height: 60px;
  cursor: pointer;
  transition: all 0.5s;

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
  height: 15px;
  width: 15px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }

  ::before {
    left: -5px;
    transform: rotate(45deg);
    background-color: #394a6d;
  }

  ::after {
    left: 5px;
    transform: rotate(-45deg);
    background-color: #394a6d;
  }

  &.open ::before {
    left: -5px;
    transform: rotate(-45deg);
  }

  &.open ::after {
    left: 5px;
    transform: rotate(45deg);
  }
`;
