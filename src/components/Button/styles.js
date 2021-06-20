import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';

const _btnBackgroundColor = theme.variants('mode', 'variant', {
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

const calcBtnTextColor = theme('mode', {
  light: (p) => p.theme.button.textColor.light,
  dark: (p) => p.theme.button.textColor.dark,
});

const calcBtnHeight = ({ size, ...p }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.btnHeight.xs;
    case 'sm':
    case 'small':
      return p.theme.button.btnHeight.sm;
    case 'lg':
    case 'large':
      return p.theme.button.btnHeight.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.btnHeight.xl;
    default:
      return p.theme.button.btnHeight.default;
  }
};

const calcMinWidth = ({ size, ...p }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.btnMinWidth.xs;
    case 'sm':
    case 'small':
      return p.theme.button.btnMinWidth.sm;
    case 'lg':
    case 'large':
      return p.theme.button.btnMinWidth.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.btnMinWidth.xl;
    default:
      return p.theme.button.btnMinWidth.default;
  }
};

const calcBtnBackgroundColor = ({ color, icon, ...p }) => {
  if (color) return color;
  if (icon) return '#f5f5f5';

  const backgroundColor = _btnBackgroundColor(p);
  return backgroundColor || '#f5f5f5';
};

const calcHorizontalPadding = ({ icon, size, ...p }) => {
  if (icon) return '0';

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return `0 ${p.theme.button.btnPaddingX.xs}`;
    case 'sm':
    case 'small':
      return `0 ${p.theme.button.btnPaddingX.sm}`;
    case 'lg':
    case 'large':
      return `0 ${p.theme.button.btnPaddingX.lg}`;
    case 'xl':
    case 'extraLarge':
      return `0 ${p.theme.button.btnPaddingX.xl}`;
    default:
      return `0 ${p.theme.button.btnPaddingX.default}`;
  }
};

export const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${(p) => calcMinWidth(p)};
  max-width: fit-content;
  height: ${(p) => calcBtnHeight(p)};
  background-color: ${() => calcBtnBackgroundColor};
  border: ${({ bordered, ...p }) => (bordered ? `1.5px solid ${darken(0.1, calcBtnBackgroundColor(p))}` : 'none')};
  border-radius: ${({ fab, ...p }) => (fab ? '50%' : p.theme.button.borderRadius)};
  box-shadow: ${(p) => p.theme.button.shadow};

  cursor: pointer;

  &:hover {
    background: ${(p) => darken(0.05, calcBtnBackgroundColor(p))};
  }

  &:active {
    background-color: ${({ raised, ...p }) => (!raised ? darken(0.1, calcBtnBackgroundColor(p)) : '')};
    box-shadow: ${({ raised }) => (raised ? '0 0 #fff' : '')};
    transform: translateY(${({ raised }) => (raised ? '1.5px' : '')});
  }
`;

export const ButtonBody = styled.span`
  padding: ${(p) => calcHorizontalPadding(p)};
  color: ${calcBtnTextColor};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  user-select: none;
`;
