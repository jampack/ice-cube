import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';

const btnBackgroundColor = theme.variants('mode', 'variant', {
  default: {
    light: (p) => p.theme.button.backgroundColor.default.light,
    dark: (p) => p.theme.button.backgroundColor.default.dark,
  },
  primary: {
    light: (p) => p.theme.button.backgroundColor.primary.light,
    dark: (p) => p.theme.button.backgroundColor.primary.dark,
  },
  secondary: {
    light: (p) => p.theme.button.backgroundColor.secondary.light,
    dark: (p) => p.theme.button.backgroundColor.secondary.dark,
  },
  success: {
    light: (p) => p.theme.button.backgroundColor.success.light,
    dark: (p) => p.theme.button.backgroundColor.success.dark,
  },
  error: {
    light: (p) => p.theme.button.backgroundColor.error.light,
    dark: (p) => p.theme.button.backgroundColor.error.dark,
  },
  warning: {
    light: (p) => p.theme.button.backgroundColor.warning.light,
    dark: (p) => p.theme.button.backgroundColor.warning.dark,
  },
  info: {
    light: (p) => p.theme.button.backgroundColor.info.light,
    dark: (p) => p.theme.button.backgroundColor.info.dark,
  },
});

const btnTextColor = theme('mode', {
  light: (p) => p.theme.button.textColor.light,
  dark: (p) => p.theme.button.textColor.dark,
});

const btnHeight = ({ size, ...props }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return props.theme.button.btnHeight.xs;
    case 'sm':
    case 'small':
      return props.theme.button.btnHeight.sm;
    case 'lg':
    case 'large':
      return props.theme.button.btnHeight.lg;
    case 'xl':
    case 'extraLarge':
      return props.theme.button.btnHeight.xl;
    default:
      return props.theme.button.btnHeight.default;
  }
};

const calcBtnBackgroundColor = (props) => {
  if (props.color) return props.color;
  if (props.icon) return '#f5f5f5';

  const backgroundColor = btnBackgroundColor(props);
  return backgroundColor || '#f5f5f5';
};

export const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  width: fit-content;
  height: ${(props) => btnHeight(props)};
  cursor: pointer;
  background-color: ${() => calcBtnBackgroundColor};
  border: ${({ bordered, ...props }) =>
    bordered ? `1.5px solid ${darken(0.1, calcBtnBackgroundColor(props))}` : 'none'};
  border-radius: ${({ fab, ...props }) => (fab ? '50%' : props.theme.button.borderRadius)};

  box-shadow: ${(p) => p.theme.button.shadow};

  &:hover {
    background: ${(props) => darken(0.05, calcBtnBackgroundColor(props))};
  }

  &:active {
    background-color: ${({ raised, ...props }) => (!raised ? darken(0.1, calcBtnBackgroundColor(props)) : '')};
    box-shadow: ${({ raised }) => (raised ? '0 0 #fff' : '')};
    transform: translateY(${({ raised }) => (raised ? '1.5px' : '')});
  }
`;

export const ButtonBody = styled.span`
  padding: ${({ icon, ...props }) => (icon ? '0' : `0 ${props.theme.button.paddingX}`)};
  color: ${btnTextColor};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  user-select: none;
`;
