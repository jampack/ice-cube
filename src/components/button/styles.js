import theme from 'styled-theming';
import styled from 'styled-components';
import { darken } from 'polished';
import { fontColor } from '../../lib/CommonStyles';

const _btnBackgroundColor = theme.variants('mode', 'variant', {
  default: {
    dark: (p) => p.theme.button.backgroundColor.default.dark,
    light: (p) => p.theme.button.backgroundColor.default.light,
  },
  error: {
    dark: (p) => p.theme.button.backgroundColor.error.dark,
    light: (p) => p.theme.button.backgroundColor.error.light,
  },
  info: {
    dark: (p) => p.theme.button.backgroundColor.info.dark,
    light: (p) => p.theme.button.backgroundColor.info.light,
  },
  primary: {
    dark: (p) => p.theme.button.backgroundColor.primary.dark,
    light: (p) => p.theme.button.backgroundColor.primary.light,
  },
  secondary: {
    dark: (p) => p.theme.button.backgroundColor.secondary.dark,
    light: (p) => p.theme.button.backgroundColor.secondary.light,
  },
  success: {
    dark: (p) => p.theme.button.backgroundColor.success.dark,
    light: (p) => p.theme.button.backgroundColor.success.light,
  },
  warning: {
    dark: (p) => p.theme.button.backgroundColor.warning.dark,
    light: (p) => p.theme.button.backgroundColor.warning.light,
  },
});

const height = ({ size, ...p }) => {
  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.height.xs;
    case 'sm':
    case 'small':
      return p.theme.button.height.sm;
    case 'lg':
    case 'large':
      return p.theme.button.height.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.height.xl;
    default:
      return p.theme.button.height.default;
  }
};

const minWidth = ({ size, fab, ...p }) => {
  if (fab) {
    return height({ size, ...p });
  }

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.minWidth.xs;
    case 'sm':
    case 'small':
      return p.theme.button.minWidth.sm;
    case 'lg':
    case 'large':
      return p.theme.button.minWidth.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.minWidth.xl;
    default:
      return p.theme.button.minWidth.default;
  }
};

const backgroundColor = ({ color, icon, disabled, ...p }) => {
  if (disabled) return p.theme.button.disabledColor;
  if (color) return color;
  if (icon) return '#f5f5f5';

  const bc = _btnBackgroundColor(p);

  return bc || '#f5f5f5';
};

const paddingX = ({ icon, size, ...p }) => {
  if (icon) return '0';

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return p.theme.button.paddingX.xs;
    case 'sm':
    case 'small':
      return p.theme.button.paddingX.sm;
    case 'lg':
    case 'large':
      return p.theme.button.paddingX.lg;
    case 'xl':
    case 'extraLarge':
      return p.theme.button.paddingX.xl;
    default:
      return p.theme.button.paddingX.default;
  }
};

const fontSize = ({ size, ...p }) => {
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

const fontWeight = ({ size, ...p }) => {
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

const shadow = ({ flat, bordered, ...p }) => {
  if (flat || bordered) return 'none';

  return p.theme.button.shadow;
};

export const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${() => height};
  min-width: ${() => minWidth};
  max-width: ${(p) => (p.fab ? height(p) : 'fit-content')};
  background-color: ${({ bordered }) => (bordered ? 'transparent' : backgroundColor)};

  border: ${({ bordered, ...p }) => (bordered ? `1.5px solid ${darken(0.1, backgroundColor(p))}` : 'none')};

  border-radius: ${({ fab, ...p }) => (fab ? '50%' : p.theme.button.borderRadius)};
  box-shadow: ${() => shadow};

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  &:hover {
    background: ${(p) => (!p.disabled ? darken(0.05, backgroundColor(p)) : '')};
  }

  &:active {
    background-color: ${({ raised, disabled, ...p }) => (!raised && !disabled ? darken(0.1, backgroundColor(p)) : '')};
    box-shadow: ${({ raised }) => (raised ? '0 0 #fff' : '')};
    transform: translateY(${({ raised }) => (raised ? '1.5px' : '')});
  }
`;

export const Body = styled.span`
  padding: ${(p) => `0 ${paddingX(p)}`};
  color: ${(p) => fontColor('button', p)};
  font-size: ${() => fontSize};
  font-weight: ${() => fontWeight};
  font-family: ${({ theme: { button } }) => button.fontFamily};
  user-select: none;
`;

export const PrependIcon = styled.i`
  padding-left: ${() => paddingX};
`;

export const AppendIcon = styled.i`
  padding-right: ${(p) => paddingX(p)};
`;
