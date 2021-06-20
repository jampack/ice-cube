import global from './Global';

const button = {
  fontColor: {
    light: global.fontColor.light,
    dark: global.fontColor.dark,
  },
  backgroundColor: {
    default: {
      light: '#f5f5f5',
      dark: 'pink',
    },
    primary: {
      light: global.colors.light.primary,
      dark: global.colors.dark.primary,
    },
    secondary: {
      light: global.colors.light.secondary,
      dark: global.colors.dark.secondary,
    },
    success: {
      light: '#99ced3',
      dark: 'pink',
    },
    error: {
      light: '#e85a4f',
      dark: 'pink',
    },
    warning: {
      light: '#f79e02',
      dark: 'pink',
    },
    info: {
      light: '#a1c3d1',
      dark: 'pink',
    },
  },
  btnHeight: {
    default: global.inputHeight,
    xs: '25px',
    sm: '30px',
    lg: '40px',
    xl: '45px',
  },
  btnMinWidth: {
    default: '80px',
    xs: '50px',
    sm: '65px',
    lg: '95px',
    xl: '110px',
  },
  btnPaddingX: {
    default: '15px',
    xs: '0',
    sm: '10px',
    lg: '20px',
    xl: '35px',
  },
  fontSize: {
    default: global.fontSize,
    xs: global.fontSize,
    sm: global.fontSize,
    lg: global.fontSize,
    xl: global.fontSize,
  },
  fontWeight: {
    default: global.fontWeight,
    xs: global.fontWeight,
    sm: global.fontWeight,
    lg: global.fontWeight,
    xl: global.fontWeight,
  },
  fontFamily: global.fontFamily,
  borderRadius: global.borderRadius,
  shadow: global.shadow,
};

export default button;
