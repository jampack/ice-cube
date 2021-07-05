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

const calcBtnFontColor = theme('mode', {
  light: (p) => p.theme.button.fontColor.light,
  dark: (p) => p.theme.button.fontColor.dark,
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

const calcMinWidth = ({ size, fab, ...p }) => {
  if (fab) {
    return calcBtnHeight({ size, ...p });
  }

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
      return p.theme.button.btnPaddingX.xs;
    case 'sm':
    case 'small':
      return p.theme.button.btnPaddingX.sm;
    case 'lg':
    case 'large':
      return p.theme.button.btnPaddingX.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.btnPaddingX.xl;
    default:
      return p.theme.button.btnPaddingX.default;
  }
};

const calcBtnFontSize = ({ size, ...p }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.fontSize.xs;
    case 'sm':
    case 'small':
      return p.theme.button.fontSize.sm;
    case 'lg':
    case 'large':
      return p.theme.button.fontSize.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.fontSize.xl;
    default:
      return p.theme.button.fontSize.default;
  }
};

const calcBtnFontWeight = ({ size, ...p }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.fontWeight.xs;
    case 'sm':
    case 'small':
      return p.theme.button.fontWeight.sm;
    case 'lg':
    case 'large':
      return p.theme.button.fontWeight.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.fontWeight.xl;
    default:
      return p.theme.button.fontWeight.default;
  }
};

const calcBtnShadow = ({ flat, bordered, ...p }) => {
  if (flat || bordered) return 'none';

  return p.theme.button.shadow;
};

export const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${() => calcBtnHeight};
  min-width: ${() => calcMinWidth};
  max-width: ${(p) => (p.fab ? calcBtnHeight(p) : 'fit-content')};
  background-color: ${({ bordered }) => (bordered ? 'transparent' : calcBtnBackgroundColor)};
  border: ${({ bordered, ...p }) => (bordered ? `1.5px solid ${darken(0.1, calcBtnBackgroundColor(p))}` : 'none')};
  border-radius: ${({ fab, ...p }) => (fab ? '50%' : p.theme.button.borderRadius)};
  box-shadow: ${() => calcBtnShadow};

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
  padding: ${(p) => `0 ${calcHorizontalPadding(p)}`};
  color: ${calcBtnFontColor};
  font-size: ${() => calcBtnFontSize};
  font-weight: ${() => calcBtnFontWeight};
  font-family: ${({ theme: { button } }) => button.fontFamily};
  user-select: none;
`;

export const PrependIcon = styled.i`
  padding-left: ${() => calcHorizontalPadding};
`;

export const AppendIcon = styled.i`
  padding-right: ${(p) => calcHorizontalPadding(p)};
`;
